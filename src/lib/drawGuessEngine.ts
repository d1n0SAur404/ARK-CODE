/**
 * 你画我猜引擎逻辑
 * - 房间内一人绘画其余人猜
 * - 随机安排画师顺序
 * - 画师从 4 个随机角色中选一个作画
 * - 可刷新 1 次换角色
 * - 绘画限时 5 分钟
 * - 首位猜对者 +2 分，画师 +1 分
 * - 所有人轮完画师后按得分排榜
 */

import type { DrawGuessPlayer, DrawGuessRoom } from '@/types/game'
import type { Operator } from '@/types/operator'
import { operators } from '@/data/operatorData'

/** 从全干员池随机取一个 */
function randomOperator(): Operator {
  return operators[Math.floor(Math.random() * operators.length)]
}

/** 创建玩家 */
export function createPlayer(id: string, name: string): DrawGuessPlayer {
  return { id, name, score: 0, hasDrawn: false }
}

/** 洗牌 */
function shuffle<T>(arr: T[]): T[] {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/** 创建房间（随机画师顺序） */
export function createRoom(players: DrawGuessPlayer[], totalRounds = 1): DrawGuessRoom {
  const drawOrder = shuffle(players.map((p) => p.id))
  return {
    players,
    currentDrawerId: null,
    currentOperator: null,
    phase: 'waiting',
    timeRemaining: 0,
    round: 0,
    totalRounds,
    guessedPlayers: [],
    hasRefreshed: false,
    drawOrder,
    selectionChoices: null,
    drawerIndex: -1,
  }
}

/** 进入下一位画师 — 设置 currentDrawerId 并进入 waiting */
export function advanceToNextDrawer(room: DrawGuessRoom): DrawGuessRoom {
  const nextIndex = room.drawerIndex + 1
  if (nextIndex >= room.drawOrder.length) {
    return { ...room, phase: 'finished', currentDrawerId: null, currentOperator: null }
  }
  const nextDrawerId = room.drawOrder[nextIndex]
  return {
    ...room,
    drawerIndex: nextIndex,
    currentDrawerId: nextDrawerId,
    phase: 'waiting',
  }
}

/** 开始选角 — 生成 4 个随机干员供画师选择 */
export function startSelection(room: DrawGuessRoom): DrawGuessRoom {
  if (!room.currentDrawerId) return room
  const choices: Operator[] = []
  const usedNames = new Set<string>()
  while (choices.length < 4) {
    const op = randomOperator()
    if (!usedNames.has(op.name)) {
      choices.push(op)
      usedNames.add(op.name)
    }
  }
  return {
    ...room,
    phase: 'selecting',
    selectionChoices: choices,
    currentOperator: null,
  }
}

/** 画师选定角色 — 进入绘画阶段 */
export function selectOperator(room: DrawGuessRoom, operator: Operator): DrawGuessRoom {
  return {
    ...room,
    currentOperator: operator,
    phase: 'drawing',
    timeRemaining: 300,
    guessedPlayers: [],
    hasRefreshed: false,
    selectionChoices: null,
  }
}

/** AI 画师自动开始 — 随机选一个角色直接进入绘画 */
export function aiStartDraw(room: DrawGuessRoom): DrawGuessRoom {
  const op = randomOperator()
  return {
    ...room,
    currentOperator: op,
    phase: 'drawing',
    timeRemaining: 300,
    guessedPlayers: [],
    hasRefreshed: false,
    selectionChoices: null,
  }
}

/** 刷新角色（仅允许一次）
 * - 选角阶段：重新生成 4 个候选干员
 * - 绘画阶段：随机换一个当前角色
 */
export function refreshOperator(room: DrawGuessRoom): DrawGuessRoom {
  if (room.hasRefreshed) return room

  if (room.phase === 'selecting') {
    // 选角阶段：刷新 4 个候选
    const choices: Operator[] = []
    const usedNames = new Set<string>()
    while (choices.length < 4) {
      const op = randomOperator()
      if (!usedNames.has(op.name)) {
        choices.push(op)
        usedNames.add(op.name)
      }
    }
    return {
      ...room,
      selectionChoices: choices,
      hasRefreshed: true,
    }
  }

  // 绘画阶段：换一个当前角色
  return {
    ...room,
    currentOperator: randomOperator(),
    hasRefreshed: true,
  }
}

/** 玩家猜测 */
export interface GuessOutcome {
  correct: boolean
  room: DrawGuessRoom
  message: string
}

export function makeGuess(
  room: DrawGuessRoom,
  playerId: string,
  operatorName: string,
): GuessOutcome {
  if (room.phase !== 'drawing' || !room.currentOperator) {
    return { correct: false, room, message: '当前不在绘画阶段' }
  }

  // 画师不能猜
  if (playerId === room.currentDrawerId) {
    return { correct: false, room, message: '画师不能参与猜测' }
  }

  // 已猜对的玩家不能重复猜
  if (room.guessedPlayers.includes(playerId)) {
    return { correct: false, room, message: '你已猜对，请等待下一轮' }
  }

  const correct = operatorName === room.currentOperator.name

  if (correct) {
    const newPlayers = room.players.map((p) => {
      if (p.id === playerId) return { ...p, score: p.score + 2 }
      if (p.id === room.currentDrawerId) return { ...p, score: p.score + 1 }
      return p
    })
    const newGuessed = [...room.guessedPlayers, playerId]

    // 如果所有非画师玩家都猜对了，结束本轮
    const nonDrawerCount = room.players.filter((p) => p.id !== room.currentDrawerId).length
    const allGuessed = newGuessed.length >= nonDrawerCount

    return {
      correct: true,
      room: {
        ...room,
        players: newPlayers,
        guessedPlayers: newGuessed,
        phase: allGuessed ? 'reveal' : room.phase,
      },
      message: '猜对了！+2 分',
    }
  }

  return { correct: false, room, message: '不对，再试试' }
}

/** 时间到，结束当前轮 */
export function endDrawRound(room: DrawGuessRoom): DrawGuessRoom {
  return { ...room, phase: 'reveal', timeRemaining: 0 }
}

/** 进入下一轮 */
export function nextRound(room: DrawGuessRoom): DrawGuessRoom {
  const players = room.players.map((p) =>
    p.id === room.currentDrawerId ? { ...p, hasDrawn: true } : p,
  )

  const nextIndex = room.drawerIndex + 1
  if (nextIndex >= room.drawOrder.length) {
    return { ...room, players, phase: 'finished', currentDrawerId: null, currentOperator: null }
  }

  const nextDrawerId = room.drawOrder[nextIndex]
  return {
    ...room,
    players,
    drawerIndex: nextIndex,
    round: room.round + 1,
    currentDrawerId: nextDrawerId,
    currentOperator: null,
    phase: 'waiting',
    guessedPlayers: [],
    hasRefreshed: false,
    selectionChoices: null,
  }
}

/** 获取排行榜（按分数降序） */
export function getLeaderboard(room: DrawGuessRoom): DrawGuessPlayer[] {
  return [...room.players].sort((a, b) => b.score - a.score)
}

/** 格式化时间 */
export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}
