/**
 * WebSocket 你画我猜 — 房间/选角/猜测
 */
import type { FastifyInstance } from 'fastify'
import { verifyToken } from '../lib/jwt.js'
import { prisma } from '../lib/prisma.js'

interface Session { userId: string; username: string; roomCode: string | null }
const sessions = new Map<any, Session>()

interface DrawPlayer { userId: string; username: string; avatar: string; ready: boolean; score: number }
interface DrawRoom {
  code: string; hostId: string; phase: 'lobby' | 'selecting' | 'drawing' | 'reveal' | 'finished'
  players: DrawPlayer[]; drawOrder: string[]; currentDrawerIdx: number; currentTarget: string | null
  selectionChoices: string[]; guesses: any[]; roundResults: any[]
}

const rooms = new Map<string, DrawRoom>()

function genCode(): string {
  const c = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let s = ''; for (let i = 0; i < 6; i++) s += c[Math.floor(Math.random() * c.length)]
  return rooms.has(s) ? genCode() : s
}

function send(socket: any, data: object) { socket.send(JSON.stringify(data)) }
function broadcast(code: string, data: object, exclude?: any) {
  for (const [socket, s] of sessions) {
    if (s.roomCode === code && socket !== exclude) socket.send(JSON.stringify(data))
  }
}
function formatRoom(r: DrawRoom, userId: string) {
  return { code: r.code, hostId: r.hostId, phase: r.phase, drawOrder: r.drawOrder,
    players: r.players.map(p => ({ ...p, isMe: p.userId === userId })),
    currentDrawerIdx: r.currentDrawerIdx, currentTarget: r.currentTarget }
}

export async function drawGuessWsRoutes(app: FastifyInstance) {
  app.get('/ws-draw', { websocket: true }, (socket, req) => {
    const url = new URL(req.url, 'http://localhost')
    const payload = verifyToken(url.searchParams.get('token') ?? '')
    if (!payload) { socket.send(JSON.stringify({ type: 'error', message: '未登录' })); socket.close(); return }
    const session: Session = { userId: payload.userId, username: payload.username, roomCode: null }
    sessions.set(socket, session)

    socket.on('message', async (raw) => {
      let msg: any; try { msg = JSON.parse(raw.toString()) } catch { return }
      try {
        switch (msg.type) {
          case 'dg:create': {
            const room: DrawRoom = { code: genCode(), hostId: session.userId, phase: 'lobby', players: [{ userId: session.userId, username: session.username, avatar: msg.avatar || '🎨', ready: true, score: 0 }], drawOrder: [], currentDrawerIdx: -1, currentTarget: null, selectionChoices: [], guesses: [], roundResults: [] }
            rooms.set(room.code, room)
            session.roomCode = room.code
            send(socket, { type: 'dg:created', room: formatRoom(room, session.userId) })
            break
          }
          case 'dg:join': {
            const room = rooms.get(msg.code)
            if (!room) { send(socket, { type: 'error', message: '房间不存在' }); break }
            room.players.push({ userId: session.userId, username: session.username, avatar: msg.avatar || '🎨', ready: true, score: 0 })
            session.roomCode = room.code
            send(socket, { type: 'dg:joined', room: formatRoom(room, session.userId) })
            broadcast(room.code, { type: 'dg:player_joined', player: { userId: session.userId, username: session.username } }, socket)
            break
          }
          case 'dg:leave': {
            const code = session.roomCode
            if (code) {
              const room = rooms.get(code)
              if (room) { room.players = room.players.filter(p => p.userId !== session.userId); if (room.players.length === 0) rooms.delete(code) }
              broadcast(code, { type: 'dg:player_left', userId: session.userId })
            }
            session.roomCode = null; break
          }
          case 'dg:start': {
            const room = rooms.get(session.roomCode || '')
            if (!room || room.hostId !== session.userId) { send(socket, { type: 'error', message: '仅房主可开始' }); break }
            room.drawOrder = room.players.map(p => p.userId).sort(() => Math.random() - 0.5)
            room.currentDrawerIdx = 0
            room.phase = 'selecting'
            // 生成 4 个随机候选
            const ops = await prisma.operator.findMany({ take: 100 }).then(list => list.sort(() => Math.random() - 0.5).slice(0, 4).map(o => o.name))
            room.selectionChoices = ops
            broadcast(room.code, { type: 'dg:game_started', drawOrder: room.drawOrder, drawerIdx: 0, drawerId: room.drawOrder[0], choices: ops })
            break
          }
          case 'dg:select': {
            const room = rooms.get(session.roomCode || '')
            if (!room || room.drawOrder[room.currentDrawerIdx] !== session.userId) break
            room.currentTarget = msg.operatorName
            room.phase = 'drawing'
            broadcast(room.code, { type: 'dg:drawing_started', drawerId: session.userId })
            break
          }
          case 'dg:guess': {
            const room = rooms.get(session.roomCode || '')
            if (!room || room.phase !== 'drawing' || session.userId === room.drawOrder[room.currentDrawerIdx]) break
            const correct = msg.operatorName === room.currentTarget
            const drawer = room.players.find(p => p.userId === room.drawOrder[room.currentDrawerIdx])
            if (correct) {
              if (drawer) drawer.score += 1
              const guesser = room.players.find(p => p.userId === session.userId)
              if (guesser) guesser.score += 2
              room.phase = 'reveal'
              room.roundResults.push({ guesserId: session.userId, correct: true, operator: room.currentTarget })
              broadcast(room.code, { type: 'dg:guess_result', correct: true, guesserId: session.userId, operator: room.currentTarget, score: guesser?.score || 0, drawerScore: drawer?.score || 0 })
              setTimeout(() => advanceDrawRound(room), 5000)
            } else {
              send(socket, { type: 'dg:guess_result', correct: false, operatorName: msg.operatorName })
              broadcast(room.code, { type: 'dg:player_guess', userId: session.userId, username: session.username, operatorName: msg.operatorName, correct: false }, socket)
            }
            break
          }
          case 'dg:stroke': {
            // 画师笔画转发给其他人
            const room = rooms.get(session.roomCode || '')
            if (!room || room.phase !== 'drawing' || session.userId !== room.drawOrder[room.currentDrawerIdx]) break
            broadcast(room.code, { type: 'dg:stroke', points: msg.points, color: msg.color, size: msg.size, clear: msg.clear }, socket)
            break
          }
          case 'dg:clear_canvas': {
            // 清空事件
            const room = rooms.get(session.roomCode || '')
            if (!room || room.phase !== 'drawing' || session.userId !== room.drawOrder[room.currentDrawerIdx]) break
            broadcast(room.code, { type: 'dg:stroke', clear: true }, socket)
            break
          }
          case 'dg:next': {
            advanceDrawRound(rooms.get(session.roomCode || ''))
            break
          }
        }
      } catch (e: any) {
        send(socket, { type: 'error', message: e?.message || '服务器错误' })
      }
    })

    send(socket, { type: 'connected', userId: session.userId })
  })
}

function advanceDrawRound(room: DrawRoom | undefined) {
  if (!room || room.phase === 'finished') return
  room.currentDrawerIdx++
  if (room.currentDrawerIdx >= room.drawOrder.length) {
    room.phase = 'finished'
    broadcast(room.code, { type: 'dg:finished', players: room.players.map(p => ({ userId: p.userId, username: p.username, score: p.score })) })
    return
  }
  room.phase = 'selecting'
  room.currentTarget = null
  room.selectionChoices = []
  const drawerId = room.drawOrder[room.currentDrawerIdx]
  // 生成候选，然后一起广播
  prisma.operator.findMany({ take: 100 }).then(list => {
    const choices = list.sort(() => Math.random() - 0.5).slice(0, 4).map(o => o.name)
    room.selectionChoices = choices
    broadcast(room.code, { type: 'dg:next_round', drawerIdx: room.currentDrawerIdx, drawerId, choices, allPlayers: room.players.map(p => ({ userId: p.userId, username: p.username, score: p.score })) })
  }).catch(() => {
    broadcast(room.code, { type: 'dg:next_round', drawerIdx: room.currentDrawerIdx, drawerId, choices: [], allPlayers: room.players.map(p => ({ userId: p.userId, username: p.username, score: p.score })) })
  })
}
