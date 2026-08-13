/**
 * WebSocket 多人联机插件
 */

import type { FastifyInstance } from 'fastify'
import { verifyToken } from '../lib/jwt.js'
import {
  createRoom, joinRoom, joinSpectator, leaveRoom, toggleReady,
  startGame, submitGuess, getRoom, type RoomPlayer, type Spectator, type GuessResult,
} from '../engine/room.js'

interface WsSession {
  userId: string
  username: string
  roomCode: string | null
  isSpectator: boolean
}

const sessions = new Map<any, WsSession>()

export async function wsRoutes(app: FastifyInstance) {
  app.get('/ws', { websocket: true }, (socket, req) => {
    const url = new URL(req.url, 'http://localhost')
    const token = url.searchParams.get('token') ?? ''
    const payload = verifyToken(token)
    if (!payload) {
      socket.send(JSON.stringify({ type: 'error', message: '未登录，请先注册/登录' }))
      socket.close()
      return
    }

    const session: WsSession = {
      userId: payload.userId,
      username: payload.username,
      roomCode: null,
      isSpectator: false,
    }
    sessions.set(socket, session)

    socket.on('message', async (raw) => {
      let msg: { type: string; [k: string]: any }
      try { msg = JSON.parse(raw.toString()) } catch { return }

      switch (msg.type) {
        case 'ping': {
          send(socket, { type: 'pong' })
          break
        }

        case 'room:create': {
          const room = createRoom(session.userId, session.username, msg.avatar || '')
          session.roomCode = room.code
          session.isSpectator = false
          send(socket, { type: 'room:created', room: formatRoom(room, session.userId, false) })
          break
        }

        case 'room:join': {
          const result = joinRoom(msg.code, session.userId, session.username, msg.avatar || '')
          if ('error' in result) { send(socket, { type: 'error', message: result.error }); return }
          session.roomCode = result.code
          session.isSpectator = false
          send(socket, { type: 'room:joined', room: formatRoom(result, session.userId, false) })
          broadcast(result, { type: 'room:player_joined', player: { userId: session.userId, username: session.username } }, socket)
          break
        }

        case 'room:spectate': {
          const result = joinSpectator(msg.code, session.userId, session.username, msg.avatar || '')
          if ('error' in result) { send(socket, { type: 'error', message: result.error }); return }
          session.roomCode = result.code
          session.isSpectator = true
          send(socket, { type: 'room:joined', room: formatRoom(result, session.userId, true) })
          broadcast(result, { type: 'room:spectator_joined', spectator: { userId: session.userId, username: session.username } }, socket)
          break
        }

        case 'room:leave': {
          if (session.roomCode) {
            const code = session.roomCode
            leaveRoom(code, session.userId)
            broadcast(code, { type: 'room:player_left', userId: session.userId, username: session.username })
            session.roomCode = null
          }
          send(socket, { type: 'room:left' })
          break
        }

        case 'room:ready': {
          if (!session.roomCode) return
          const result = toggleReady(session.roomCode, session.userId)
          if ('error' in result) { send(socket, { type: 'error', message: result.error }); return }
          broadcast(session.roomCode, {
            type: 'room:player_ready',
            userId: session.userId,
            ready: result.players.find(p => p.userId === session.userId)?.ready,
          })
          break
        }

        case 'room:start': {
          try {
            if (!session.roomCode) return
            const result = await startGame(session.roomCode, session.userId, msg.difficulty, msg.maxRounds || 3)
            if ('error' in result) { send(socket, { type: 'error', message: result.error }); return }
            const room = result
            const round = room.rounds[room.currentRound - 1]
            if (!round?.target) { send(socket, { type: 'error', message: '干员数据未加载，请先运行种子脚本' }); return }
            broadcast(room.code, {
              type: 'game:started',
              round: room.currentRound,
              maxRounds: room.maxRounds,
              difficulty: room.difficulty,
              timeLimit: room.timeLimit,
              target: { name: round.target.name, rarity: round.target.rarity, profession: round.target.profession },
            })
          } catch (e: any) {
            send(socket, { type: 'error', message: e?.message || '服务器内部错误，请重试' })
          }
          break
        }

        case 'game:guess': {
          if (!session.roomCode) return
          const result = await submitGuess(session.roomCode, session.userId, msg.operatorName)
          if ('error' in result) { send(socket, { type: 'error', message: result.error }); return }

          const { room } = result

          send(socket, { type: 'game:guess_result', result: result.result, isWin: result.isWin })

          const othersMsg = formatGuessForPlayer(result.result)
          broadcast(room.code, {
            type: 'game:player_guessed',
            userId: session.userId,
            guessCount: result.result.guessCount,
            grid: othersMsg.grid,
            isWin: result.isWin,
          }, socket)

          broadcastToSpectators(room.code, {
            type: 'game:spectator_guess',
            userId: session.userId,
            username: session.username,
            result: result.result,
            isWin: result.isWin,
          })

          if (result.isWin) {
            const round = room.rounds[room.currentRound - 1]
            broadcast(room.code, {
              type: 'game:round_end',
              round: room.currentRound,
              winner: session.userId,
              winnerName: session.username,
              target: {
                name: round.target.name,
                rarity: round.target.rarity,
                profession: round.target.profession,
                race: round.target.race,
                birthplace: round.target.birthplace,
                faction: round.target.faction,
              },
              results: round.guesses.map(g => ({
                userId: g.userId,
                username: g.username,
                guessCount: g.guessCount,
                isCorrect: g.isCorrect,
              })),
            })

            if (room.currentRound >= room.maxRounds) {
              room.phase = 'finished'
              broadcast(room.code, {
                type: 'game:finished',
                scores: room.players.map(p => ({ userId: p.userId, username: p.username, score: p.score })),
              })
            }
          }
          break
        }

        case 'game:skip': {
          if (!session.roomCode) break
          const room = getRoom(session.roomCode)
          if (!room || room.phase !== 'playing') break
          if (!room.skipPlayers) room.skipPlayers = []
          if (!room.skipPlayers.includes(session.userId)) room.skipPlayers.push(session.userId)
          broadcast(room.code, { type: 'game:skip_update', skipPlayers: [...room.skipPlayers] })
          if (room.skipPlayers.length >= room.players.length) {
            room.skipPlayers = []
            const round = room.rounds[room.currentRound - 1]
            broadcast(room.code, {
              type: 'game:all_skipped',
              round: room.currentRound,
              target: round ? { name: round.target.name, rarity: round.target.rarity, profession: round.target.profession } : null,
            })
          }
          break
        }
      }
    })

    socket.on('close', () => {
      if (session.roomCode) {
        leaveRoom(session.roomCode, session.userId)
        broadcast(session.roomCode, { type: 'player_disconnected', userId: session.userId })
      }
      sessions.delete(socket)
    })

    send(socket, { type: 'connected', userId: session.userId, username: session.username })
  })
}

function send(socket: any, data: object) { socket.send(JSON.stringify(data)) }

function broadcast(roomOrCode: any, data: object, exclude?: any) {
  const code = typeof roomOrCode === 'string' ? roomOrCode : roomOrCode.code
  const room = getRoom(code)
  if (!room) return
  const targetIds = new Set([...room.players.map(p => p.userId), ...room.spectators.map(s => s.userId)])
  for (const [socket, s] of sessions) {
    if (targetIds.has(s.userId) && s.roomCode === code && socket !== exclude) {
      socket.send(JSON.stringify(data))
    }
  }
}

function broadcastToSpectators(roomCode: string, data: object) {
  const room = getRoom(roomCode)
  if (!room) return
  const specIds = new Set(room.spectators.map(s => s.userId))
  for (const [socket, s] of sessions) {
    if (specIds.has(s.userId) && s.isSpectator) {
      socket.send(JSON.stringify(data))
    }
  }
}

function formatRoom(room: any, userId: string, isSpectator: boolean) {
  const round = room.rounds?.[room.currentRound - 1]
  return {
    code: room.code, hostId: room.hostId, phase: room.phase,
    players: room.players.map((p: RoomPlayer) => ({
      userId: p.userId, username: p.username, avatar: p.avatar, ready: p.ready, score: p.score, isMe: p.userId === userId,
    })),
    spectators: room.spectators.map((s: Spectator) => ({
      userId: s.userId, username: s.username, avatar: s.avatar, isMe: s.userId === userId,
    })),
    round: room.currentRound, maxRounds: room.maxRounds, timeLimit: room.timeLimit, isSpectator,
    target: round && isSpectator ? round.target : null,
  }
}

function formatGuessForPlayer(guess: GuessResult) {
  return {
    grid: Object.entries(guess.fields).map(([key, f]) => ({ key, label: f.label, status: f.status })),
  }
}
