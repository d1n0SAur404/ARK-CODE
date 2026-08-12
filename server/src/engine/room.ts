/**
 * 房间引擎 — 多人联机核心 (数据库版)
 *
 * 干员数据从 Prisma Operator 表读取，不再依赖前端文件
 */

import { prisma } from '../lib/prisma.js'

// ====== Types ======

export type RoomPhase = 'waiting' | 'playing' | 'finished'

export interface RoomPlayer {
  userId: string
  username: string
  avatar: string
  ready: boolean
  score: number
  isConnected: boolean
}

export interface Spectator {
  userId: string
  username: string
  avatar: string
  isConnected: boolean
}

export interface GuessResult {
  userId: string
  username: string
  operatorName: string
  fields: Record<string, { label: string; value: string; status: string }>
  isCorrect: boolean
  guessCount: number
}

export interface RoomRound {
  round: number
  target: { id: string; name: string; rarity: number; profession: string; race?: string | null; birthplace?: string | null; faction?: string | null; oripathy?: string | null }
  guesses: GuessResult[]
  winner: string | null
  startedAt: number
  endedAt: number | null
}

export interface Room {
  code: string
  hostId: string
  phase: RoomPhase
  players: RoomPlayer[]
  spectators: Spectator[]
  rounds: RoomRound[]
  currentRound: number
  maxRounds: number
  timeLimit: number
  difficulty: string
  createdAt: number
  skipPlayers: string[]
}

// ====== 比较逻辑（服务端版） ======

interface OpData {
  id: string
  name: string
  rarity: number
  profession: string
  subProfession?: string | null
  race?: string | null
  birthplace?: string | null
  faction?: string | null
  nation?: string | null
  oripathy?: string | null
}

type FieldStatus = 'correct' | 'partial' | 'wrong' | 'higher' | 'lower'

function compareField(target: string | number | null | undefined, guess: string | number | null | undefined): FieldStatus {
  if (target === guess) return 'correct'
  if (typeof target === 'number' && typeof guess === 'number') {
    return guess > target ? 'higher' : 'lower'
  }
  if (target == null || guess == null) return 'wrong'
  return 'wrong'
}

function compareRarity(target: number, guess: number): FieldStatus {
  if (target === guess) return 'correct'
  return guess > target ? 'higher' : 'lower'
}

function compareText(target: string | null | undefined, guess: string | null | undefined): FieldStatus {
  if (!target || !guess) return 'wrong'
  if (target === guess) return 'correct'
  // 部分匹配
  if (target.includes(guess) || guess.includes(target)) return 'partial'
  return 'wrong'
}

function compareOperators(target: OpData, guess: OpData) {
  return {
    name: target.name === guess.name ? 'correct' as const : 'wrong' as const,
    rarity: compareRarity(target.rarity, guess.rarity),
    profession: target.profession === guess.profession ? 'correct' as const : 'wrong' as const,
    race: compareText(target.race, guess.race),
    birthplace: compareText(target.birthplace, guess.birthplace),
    faction: compareText(target.faction, guess.faction),
    oripathy: compareText(target.oripathy, guess.oripathy),
  }
}

async function getRandomOperator(): Promise<OpData | null> {
  const count = await prisma.operator.count()
  if (count === 0) return null
  const skip = Math.floor(Math.random() * count)
  return prisma.operator.findFirst({ skip, take: 1 })
}

async function getOperatorByName(name: string): Promise<OpData | null> {
  return prisma.operator.findFirst({ where: { name } })
}

// ====== Engine ======

const rooms = new Map<string, Room>()

function genCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)]
  return rooms.has(code) ? genCode() : code
}

export function createRoom(hostId: string, username: string, avatar: string): Room {
  const code = genCode()
  const room: Room = {
    code, hostId, phase: 'waiting',
    players: [{ userId: hostId, username, avatar: avatar || '🎮', ready: false, score: 0, isConnected: true }],
    spectators: [], rounds: [], currentRound: 0, maxRounds: 5, timeLimit: 120, difficulty: 'medium', createdAt: Date.now(), skipPlayers: [],
  }
  rooms.set(code, room)
  return room
}

export function joinRoom(code: string, userId: string, username: string, avatar: string): Room | { error: string } {
  const room = rooms.get(code)
  if (!room) return { error: '房间不存在' }
  if (room.phase !== 'waiting') return { error: '游戏已开始' }
  const existing = room.players.find(p => p.userId === userId)
  if (existing) { existing.isConnected = true; return room }
  if (room.players.length >= 4) return { error: '房间已满' }
  room.players.push({ userId, username, avatar: avatar || '🎮', ready: false, score: 0, isConnected: true })
  return room
}

export function joinSpectator(code: string, userId: string, username: string, avatar: string): Room | { error: string } {
  const room = rooms.get(code)
  if (!room) return { error: '房间不存在' }
  const existing = [...room.players, ...room.spectators].find(p => p.userId === userId)
  if (existing) {
    if ('ready' in existing) existing.isConnected = true
    else (existing as Spectator).isConnected = true
    return room
  }
  room.spectators.push({ userId, username, avatar: avatar || '👀', isConnected: true })
  return room
}

export function leaveRoom(code: string, userId: string): void {
  const room = rooms.get(code)
  if (!room) return
  room.players = room.players.filter(p => p.userId !== userId)
  room.spectators = room.spectators.filter(s => s.userId !== userId)
  if (room.hostId === userId) rooms.delete(code)
}

export function toggleReady(code: string, userId: string): Room | { error: string } {
  const room = rooms.get(code)
  if (!room) return { error: '房间不存在' }
  const player = room.players.find(p => p.userId === userId)
  if (!player) return { error: '不是玩家' }
  player.ready = !player.ready
  return room
}

export async function startGame(code: string, userId: string, difficulty = 'medium', maxRounds = 3): Promise<Room | { error: string }> {
  const room = rooms.get(code)
  if (!room) return { error: '房间不存在' }
  if (room.hostId !== userId) return { error: '只有房主可以开始' }
  if (!room.players.every(p => p.ready)) return { error: '等待所有人准备' }
  if (room.players.length < 1) return { error: '至少需要 1 名玩家' }
  room.phase = 'playing'
  room.currentRound++  // 递增而非重置
  if (room.currentRound === 1) room.maxRounds = maxRounds  // 首轮设置
  room.difficulty = difficulty
  return startRound(room, difficulty)
}

async function startRound(room: Room, difficulty = 'medium'): Promise<Room> {
  const op = difficulty !== 'hard'
    ? await prisma.operator.findMany({ where: { rarity: difficulty === 'easy' ? { lte: 4 } : { lte: 5 } }, take: 100 }).then(list => list[Math.floor(Math.random() * list.length)] || null)
    : await getRandomOperator()
  if (!op) return room
  room.rounds.push({
    round: room.currentRound,
    target: { id: op.id, name: op.name, rarity: op.rarity, profession: op.profession, race: op.race, birthplace: op.birthplace, faction: op.faction, oripathy: op.oripathy },
    guesses: [],
    winner: null,
    startedAt: Date.now(),
    endedAt: null,
  })
  return room
}

export async function submitGuess(
  code: string, userId: string, operatorName: string,
): Promise<{ room: Room; result: GuessResult; isWin: boolean } | { error: string }> {
  const room = rooms.get(code)
  if (!room) return { error: '房间不存在' }
  if (room.phase !== 'playing') return { error: '游戏未开始' }
  const player = room.players.find(p => p.userId === userId)
  if (!player) return { error: '不是玩家' }
  const round = room.rounds[room.currentRound - 1]
  if (!round) return { error: '回合异常' }
  if (round.winner) return { error: '本回合已有胜者' }
  const prevGuesses = round.guesses.filter(g => g.userId === userId)
  if (prevGuesses.length >= 8) return { error: '猜测次数已用完' }

  const op = await getOperatorByName(operatorName)
  if (!op) return { error: '干员不存在' }

  const target = round.target as OpData
  const cmp = compareOperators(target, op)
  const fields = {
    name: { label: '代号', value: op.name, status: cmp.name },
    rarity: { label: '稀有度', value: '★'.repeat(op.rarity), status: cmp.rarity },
    profession: { label: '职业', value: op.profession, status: cmp.profession },
    race: { label: '种族', value: op.race || '未知', status: cmp.race },
    birthplace: { label: '出身地', value: op.birthplace || '未知', status: cmp.birthplace },
    faction: { label: '阵营', value: op.faction || '未知', status: cmp.faction },
    oripathy: { label: '感染', value: op.oripathy || '未知', status: cmp.oripathy },
  }

  const isCorrect = (Object.values(cmp) as FieldStatus[]).every(s => s === 'correct')

  const guessResult: GuessResult = {
    userId, username: player.username, operatorName: op.name, fields, isCorrect, guessCount: prevGuesses.length + 1,
  }

  round.guesses.push(guessResult)

  if (isCorrect) {
    round.winner = userId
    round.endedAt = Date.now()
    player.score += prevGuesses.length <= 2 ? 3 : 1
  }

  return { room, result: guessResult, isWin: isCorrect }
}

export function getRoom(code: string): Room | undefined {
  return rooms.get(code)
}
