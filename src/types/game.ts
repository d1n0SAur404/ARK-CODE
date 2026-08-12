/**
 * 游戏引擎类型定义
 */

import type { Operator } from './operator'

/** 游戏模式 */
export type GameMode = 'daily' | 'practice' | 'timed' | 'multiplayer' | 'drawGuess'

/** 难度等级 */
export type Difficulty = 'easy' | 'medium' | 'hard'

/** 游戏状态 */
export type GameStatus = 'idle' | 'playing' | 'won' | 'lost'

/** 字段匹配状态 */
export type FieldStatus = 'correct' | 'partial' | 'wrong'

/** 稀有度比较方向 */
export type RarityDirection = 'up' | 'down' | null

/** 单个字段比较结果 */
export interface FieldComparison {
  /** 字段 key */
  key: string
  /** 显示标签 */
  label: string
  /** 猜测值 */
  guessValue: string
  /** 目标值 */
  targetValue: string
  /** 匹配状态 */
  status: FieldStatus
  /** 稀有度方向提示（仅 rarity 字段） */
  rarityDirection?: RarityDirection
}

/** 一次完整猜测的结果 */
export interface GuessResult {
  /** 猜测的干员 */
  guessOperator: Operator
  /** 目标干员 */
  targetOperator: Operator
  /** 各字段比较结果 */
  fields: FieldComparison[]
  /** 是否猜中（名字完全匹配） */
  isWin: boolean
  /** 猜测序号（从 1 开始） */
  guessNumber: number
}

/** 游戏配置 */
export interface GameConfig {
  /** 游戏模式 */
  mode: GameMode
  /** 最大猜测次数 */
  maxGuesses: number
  /** 时间限制（秒），0 表示无限制 */
  timeLimit: number
  /** 多人模式：获胜所需答对题数 */
  winScore?: number
  /** 你画我猜：绘画时间（秒） */
  drawTime?: number
  /** 难度等级 */
  difficulty?: Difficulty
}

/** 游戏运行时状态 */
export interface GameState {
  /** 当前模式 */
  mode: GameMode
  /** 游戏状态 */
  status: GameStatus
  /** 目标干员 */
  target: Operator | null
  /** 已提交的猜测记录 */
  guesses: GuessResult[]
  /** 配置 */
  config: GameConfig
  /** 剩余时间（秒） */
  timeRemaining: number
  /** 多人模式：当前得分 */
  score: number
  /** 多人模式：答对题数 */
  questionsAnswered: number
  /** 你画我猜：当前画师索引 */
  drawerIndex: number
  /** 你画我猜：是否已刷新过角色 */
  hasRefreshed: boolean
}

// ============ 你画我猜类型 ============

/** 你画我猜玩家 */
export interface DrawGuessPlayer {
  id: string
  name: string
  score: number
  hasDrawn: boolean
}

/** 你画我猜房间状态 */
export type DrawGuessPhase = 'waiting' | 'selecting' | 'drawing' | 'reveal' | 'finished'

/** 你画我猜房间状态 */
export interface DrawGuessRoom {
  players: DrawGuessPlayer[]
  currentDrawerId: string | null
  currentOperator: Operator | null
  phase: DrawGuessPhase
  timeRemaining: number
  round: number
  totalRounds: number
  guessedPlayers: string[]
  hasRefreshed: boolean
  /** 随机画师顺序 */
  drawOrder: string[]
  /** 4 选 1 候选干员 */
  selectionChoices: Operator[] | null
  /** 当前画师在 drawOrder 中的索引 */
  drawerIndex: number
}

// ============ 多人联机模拟类型 ============

/** 多人模式中其他玩家的状态（仅显示正确/错误，不显示内容） */
export interface OtherPlayerState {
  name: string
  lastGuessCorrect: boolean | null
  correctCount: number
}
