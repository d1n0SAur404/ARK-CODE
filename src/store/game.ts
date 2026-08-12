/**
 * 游戏状态管理（Zustand）
 */

import { create } from 'zustand'
import type { Operator } from '@/types/operator'
import type { GameMode, GameStatus, GuessResult, GameConfig, OtherPlayerState, Difficulty } from '@/types/game'
import { MODE_CONFIGS, compareOperators, getDailySeed, pickBySeed } from '@/lib/gameEngine'
import { getRandomOperator, getOperatorByName, getRandomFromPool, getOperatorPool, operators } from '@/data/operatorData'

interface GameStore {
  // 状态
  mode: GameMode
  status: GameStatus
  target: Operator | null
  guesses: GuessResult[]
  config: GameConfig
  timeRemaining: number
  score: number
  questionsAnswered: number
  otherPlayers: OtherPlayerState[]
  /** 当前难度池 */
  pool: Operator[]

  // 操作
  startGame: (mode: GameMode, difficulty?: Difficulty) => void
  submitGuess: (operatorName: string) => boolean
  resetGame: () => void
  tickTimer: () => void
  getRemainingGuesses: () => number
  giveUp: () => void
}

function pickTarget(mode: GameMode, difficulty: Difficulty): Operator {
  const pool = getOperatorPool(difficulty)
  if (mode === 'daily') {
    return pickBySeed(pool, getDailySeed())
  }
  return getRandomFromPool(difficulty)
}

const DEFAULT_OTHER_PLAYERS: OtherPlayerState[] = [
  { name: '龙宫', lastGuessCorrect: null, correctCount: 0 },
  { name: '银狐', lastGuessCorrect: null, correctCount: 0 },
  { name: '雾岛', lastGuessCorrect: null, correctCount: 0 },
]

export const useGameStore = create<GameStore>((set, get) => ({
  mode: 'practice',
  status: 'idle',
  target: null,
  guesses: [],
  config: MODE_CONFIGS.practice,
  timeRemaining: 0,
  score: 0,
  questionsAnswered: 0,
  otherPlayers: [],
  pool: operators,

  startGame: (mode, difficulty?: Difficulty) => {
    const baseConfig = MODE_CONFIGS[mode]
    const diff = difficulty || get().config.difficulty || 'easy'
    const config = { ...baseConfig, difficulty: diff }
    const target = pickTarget(mode, diff)
    const pool = getOperatorPool(diff)
    set({
      mode,
      status: 'playing',
      target,
      guesses: [],
      config,
      timeRemaining: config.timeLimit,
      score: 0,
      questionsAnswered: 0,
      otherPlayers: mode === 'multiplayer' ? DEFAULT_OTHER_PLAYERS.map(p => ({ ...p, lastGuessCorrect: null, correctCount: 0 })) : [],
      pool,
    })
  },

  submitGuess: (operatorName) => {
    const state = get()
    if (state.status !== 'playing' || !state.target) return false

    const guess = getOperatorByName(operatorName)
    if (!guess) return false

    const result = compareOperators(guess, state.target)
    result.guessNumber = state.guesses.length + 1

    const newGuesses = [...state.guesses, result]
    const remaining = state.config.maxGuesses - newGuesses.length

    let newStatus: GameStatus = 'playing'
    let newScore = state.score
    let newAnswered = state.questionsAnswered

    if (result.isWin) {
      newStatus = 'won'
      newScore += 1
      newAnswered += 1
    } else if (remaining <= 0) {
      newStatus = 'lost'
    }

    // 多人模式：模拟其他玩家猜测（不显示内容，只显示正确/错误）
    let newOtherPlayers = state.otherPlayers
    if (state.mode === 'multiplayer' && newStatus === 'playing') {
      newOtherPlayers = state.otherPlayers.map((p) => {
        // 50% 概率该玩家本轮猜了
        if (Math.random() > 0.5) {
          // 30% 概率猜对
          const correct = Math.random() > 0.7
          return {
            ...p,
            lastGuessCorrect: correct,
            correctCount: correct ? p.correctCount + 1 : p.correctCount,
          }
        }
        return { ...p, lastGuessCorrect: null }
      })
    } else if (state.mode === 'multiplayer' && result.isWin) {
      // 玩家猜对了，其他玩家也结算
      newOtherPlayers = state.otherPlayers.map((p) => {
        if (Math.random() > 0.6) {
          return { ...p, lastGuessCorrect: true, correctCount: p.correctCount + 1 }
        }
        return { ...p, lastGuessCorrect: false }
      })
    }

    set({
      guesses: newGuesses,
      status: newStatus,
      score: newScore,
      questionsAnswered: newAnswered,
      otherPlayers: newOtherPlayers,
    })

    return true
  },

  resetGame: () => {
    set({
      status: 'idle',
      target: null, guesses: [], timeRemaining: 0, score: 0, questionsAnswered: 0, otherPlayers: [],
      pool: operators,
    })
  },

  giveUp: () => {
    set({ status: 'GIVE_UP' })
  },

  tickTimer: () => {
    const state = get()
    if (state.status !== 'playing' || state.config.timeLimit === 0) return

    const remaining = state.timeRemaining - 1
    if (remaining <= 0) {
      set({ timeRemaining: 0, status: 'lost' })
    } else {
      set({ timeRemaining: remaining })
    }
  },

  getRemainingGuesses: () => {
    const state = get()
    return state.config.maxGuesses - state.guesses.length
  },
}))
