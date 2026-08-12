/**
 * 你画我猜房间引擎 — WebSocket 多人版
 *
 * 房间流程：创建/加入 → 准备大厅 → 随机画师顺序 → 轮流选角 → 绘画 → 猜 → 排行榜
 */

import { prisma } from '../lib/prisma.js'

// =========== Types ===========

export interface DrawRoomPlayer {
  userId: string
  username: string
  avatar: string
  ready: boolean
  score: number
  isConnected: boolean
}

export interface DrawRound {
  round: number
  drawerId: string
  drawerName: string
  target: { name: string; rarity: number; profession: string }
  targetFull: any
  choices: { name: string; rarity: number; profession: string }[]
  guessers: { userId: string; username: string; guessedCorrectly: boolean; guessCount: number }[]
  startedAt: number
  endedAt: number | null
  drawData: any[]  // canvas strokes
}

export interface DrawRoom {
  code: string
  hostId: string
  phase: 'lobby' | 'selecting' | 'drawing' | 'guessing' | 'result' | 'finished'
  players: DrawRoomPlayer[]
  spectators: { userId: string; username: string; avatar: string }[]
  drawOrder: string[]  // userId 顺序
  rounds: DrawRound[]
  currentRound: number
  currentDrawerId: string | null
  timeLimit: number
  createdAt: number
}

// =========== Engine ===========

const rooms = new Map<string, DrawRoom>()

function genCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)]
  return rooms.has(code) ? genCode() : code
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** 创建房间 */
export function createRoom(hostId: string, username: string, avatar: string): DrawRoom {
  const code = genCode()
  const room: DrawRoom = {
    code, hostId, phase: 'lobby',
    players: [{ userId: hostId, username, avatar: avatar || '🎮', ready: false, score: 0, isConnected: true }],
    spectators: [], drawOrder: [], rounds: [], currentRound: 0,
    currentDrawerId: null, timeLimit: 300, createdAt: Date.now(),
  }
  rooms.set(code, room)
  return room
}

/** 加入房间 */
export function joinRoom(code: string, userId: string, username: string, avatar: string): DrawRoom | { error: string } {
  const room = rooms.get(code)
  if (!room) return { error: '房间不存在' }
  if (room.phase !== 'lobby') return { error: '游戏已开始' }
  if (room.players.length >= 6) return { error: '房间已满（最多 6 人）' }
  const existing = room.players.find(p => p.userId === userId)
  if (existing) { existing.isConnected = true; return room }
  room.players.push({ userId, username, avatar: avatar || '🎮', ready: false, score: 0, isConnected: true })
  return room
}

/** 观战 */
export function joinSpectator(code: string, userId: string, username: string, avatar: string): DrawRoom | { error: string } {
  const room = rooms.get(code)
  if (!room) return { error: '房间不存在' }
  room.spectators.push({ userId, username, avatar: avatar || '👀' })
  return room
}

/** 离开 */
export function leaveRoom(code: string, userId: string): void {
  const room = rooms.get(code)
  if (!room) return
  room.players = room.players.filter(p => p.userId !== userId)
  room.spectators = room.spectators.filter(s => s.userId !== userId)
  if (room.hostId === userId) rooms.delete(code)
}

/** 准备 */
export function toggleReady(code: string, userId: string): DrawRoom | { error: string } {
  const room = rooms.get(code)
  if (!room) return { error: '房间不存在' }
  const p = room.players.find(p => p.userId === userId)
  if (!p) return { error: '不是玩家' }
  p.ready = !p.ready
  return room
}

/** 开始游戏 */
export async function startGame(code: string, userId: string): Promise<DrawRoom | { error: string }> {
  const room = rooms.get(code)
  if (!room) return { error: '房间不存在' }
  if (room.hostId !== userId) return { error: '只有房主可以开始' }
  if (!room.players.every(p => p.ready)) return { error: '等待所有人准备' }
  if (room.players.length < 2) return { error: '至少 2 位玩家' }

  // 生成随机画师顺序
  room.drawOrder = shuffle(room.players.map(p => p.userId))
  room.currentRound = 0
  room.phase = 'selecting'
  return advanceRound(room)
}

/** 推进到下一轮 */
async function advanceRound(room: DrawRoom): Promise<DrawRoom> {
  if (room.currentRound >= room.drawOrder.length) {
    room.phase = 'finished'
    return room
  }
  room.currentRound++
  room.currentDrawerId = room.drawOrder[room.currentRound - 1]
  room.phase = 'selecting'

  const count = await prisma.operator.count()
  if (count === 0) return room

  // 生成 4 个随机候选干员（数据库）
  const choices: any[] = []
  const usedNames = new Set<string>()
  for (let i = 0; i < 4; i++) {
    const skip = Math.floor(Math.random() * count)
    const op = await prisma.operator.findFirst({ skip, take: 1,
      select: { id: true, name: true, rarity: true, profession: true },
    })
    if (op && !usedNames.has(op.name)) {
      usedNames.add(op.name)
      choices.push(op)
    }
  }

  const drawer = room.players.find(p => p.userId === room.currentDrawerId)!
  room.rounds.push({
    round: room.currentRound,
    drawerId: room.currentDrawerId!,
    drawerName: drawer.username,
    target: choices[0] ? { name: choices[0].name, rarity: choices[0].rarity, profession: choices[0].profession } : { name: '未知', rarity: 3, profession: '未知' },
    targetFull: choices[0],
    choices: choices.map(o => ({ name: o.name, rarity: o.rarity, profession: o.profession })),
    guessers: [],
    startedAt: Date.now(),
    endedAt: null,
    drawData: [],
  })

  return room
}

/** 画师选角 */
export async function selectOperator(code: string, userId: string, choiceIndex: number): Promise<DrawRoom | { error: string }> {
  const room = rooms.get(code)
  if (!room) return { error: '房间不存在' }
  if (room.currentDrawerId !== userId) return { error: '不是你的回合' }
  const round = room.rounds[room.currentRound - 1]
  if (!round) return { error: '回合异常' }
  const opName = round.choices[choiceIndex]?.name
  if (!opName) return { error: '选项无效' }
  round.target = round.choices[choiceIndex]

  // 从 DB 获取完整干员数据
  const fullOp = await prisma.operator.findFirst({ where: { name: opName } })
  if (fullOp) round.targetFull = fullOp

  room.phase = 'drawing'
  return room
}

/** 提交绘画数据 */
export function submitDrawData(code: string, userId: string, strokes: any[]): DrawRoom | { error: string } {
  const room = rooms.get(code)
  if (!room) return { error: '房间不存在' }
  if (room.currentDrawerId !== userId) return { error: '不是画师' }
  const round = room.rounds[room.currentRound - 1]
  if (!round) return { error: '回合异常' }
  round.drawData = strokes
  return room
}

/** 提交猜测 */
export async function makeGuess(code: string, userId: string, operatorName: string): Promise<DrawRoom | { error: string }> {
  const room = rooms.get(code)
  if (!room) return { error: '房间不存在' }
  if (room.phase !== 'drawing') return { error: '不在绘画阶段' }
  if (room.currentDrawerId === userId) return { error: '画师不能猜测' }

  const round = room.rounds[room.currentRound - 1]
  if (!round) return { error: '回合异常' }

  const existing = round.guessers.find(g => g.userId === userId)
  if (existing?.guessedCorrectly) return { error: '已猜对' }

  const isCorrect = operatorName === round.target.name
  const player = room.players.find(p => p.userId === userId)!

  if (existing) {
    existing.guessCount++
    if (isCorrect) existing.guessedCorrectly = true
  } else {
    round.guessers.push({ userId, username: player.username, guessedCorrectly: isCorrect, guessCount: 1 })
  }

  // 计分
  if (isCorrect) {
    const correctCount = round.guessers.filter(g => g.guessedCorrectly).length
    player.score += correctCount === 1 ? 2 : 1 // 首位 +2
    room.players.find(p => p.userId === room.currentDrawerId)!.score += 1 // 画师 +1

    // 所有人都猜对了？
    const allGuessed = room.players
      .filter(p => p.userId !== room.currentDrawerId)
      .every(p => round.guessers.find(g => g.userId === p.userId)?.guessedCorrectly)

    if (allGuessed) {
      round.endedAt = Date.now()
      room.phase = 'result'
    }
  }

  return room
}

/** 时间到 */
export function timeUp(code: string): DrawRoom | { error: string } {
  const room = rooms.get(code)
  if (!room) return { error: '房间不存在' }
  const round = room.rounds[room.currentRound - 1]
  if (round) round.endedAt = Date.now()
  room.phase = 'result'
  return room
}

/** 下一轮 */
export async function nextRound(code: string): Promise<DrawRoom | { error: string }> {
  const room = rooms.get(code)
  if (!room) return { error: '房间不存在' }
  room.phase = 'selecting'
  return advanceRound(room)
}

/** 获取房间 */
export function getRoom(code: string): DrawRoom | undefined {
  return rooms.get(code)
}

/** 获取排行榜 */
export function getLeaderboard(room: DrawRoom) {
  return [...room.players]
    .sort((a, b) => b.score - a.score)
    .map((p, i) => ({ rank: i + 1, ...p }))
}
