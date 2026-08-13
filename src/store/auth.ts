/**
 * 用户认证状态管理（Zustand） — 统一后端数据库，无 mock
 */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// ============ Types ============

export interface UserProfile {
  username: string
  email: string
  gender: string
  avatar: string
  bio: string
  points: number
}

export interface GameRecord {
  date: string
  mode: string
  difficulty: string
  result: 'WIN' | 'LOSS' | 'GIVE_UP'
  guessCount: number
}

export interface Achievement {
  key: string
  title: string
  description: string
  icon: string
  unlockedAt?: string
}

interface AuthState {
  isAuthed: boolean
  user: UserProfile | null
  token: string | null
  gameHistory: GameRecord[]
  achievements: Achievement[]
  login: (username: string, password: string) => Promise<boolean>
  register: (username: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  loadUser: () => Promise<void>
  updateProfile: (partial: Partial<UserProfile>) => Promise<void>
  addGameRecord: (record: Omit<GameRecord, 'date'>) => void
}

// ============ API 工具 ============

const API = import.meta.env.VITE_API_URL || ''

function getToken(): string | null {
  return localStorage.getItem('arkcode-token') || useAuthStore.getState().token
}

async function api<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const token = getToken()
  const res = await fetch(`${API}${path}`, {
    ...opts,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(opts.headers || {}),
    },
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: '请求失败' }))
    throw new Error(err.error || `HTTP ${res.status}`)
  }
  return res.json()
}

// ============ 成就定义 ============

const ACHIEVEMENT_DEFS: Omit<Achievement, 'unlockedAt'>[] = [
  { key: 'FIRST_WIN',     title: '初次胜利',    description: '赢得第一场游戏',         icon: '🏆' },
  { key: 'STREAK_3',      title: '三连胜',      description: '连续赢得 3 场游戏',      icon: '🔥' },
  { key: 'STREAK_5',      title: '五连胜',      description: '连续赢得 5 场游戏',      icon: '💎' },
  { key: 'STREAK_10',     title: '十连胜',      description: '连续赢得 10 场游戏',     icon: '👑' },
  { key: 'DAILY_3',       title: '三日挑战',    description: '完成 3 天每日挑战',      icon: '📅' },
  { key: 'DAILY_7',       title: '七日挑战',    description: '连续 7 天每日挑战',      icon: '🗓' },
  { key: 'DAILY_30',      title: '月度挑战王',  description: '完成 30 天每日挑战',      icon: '🌟' },
  { key: 'HARD_WIN',      title: '硬核玩家',    description: '困难模式下赢得游戏',      icon: '⚔' },
  { key: 'FIRST_BLOOD',   title: '一血',        description: '1 次内猜对角色',          icon: '🎯' },
  { key: 'FAST_3',        title: '快枪手',      description: '3 次以内猜对角色',        icon: '⚡' },
  { key: 'FAST_6',        title: '神射手',      description: '6 次以内猜对角色',        icon: '🏹' },
  { key: 'COLLECTOR',     title: '收集者',      description: '累计赢得 20 场游戏',      icon: '📚' },
  { key: 'MASTER',        title: '大师',        description: '累计赢得 50 场游戏',      icon: '🎖' },
  { key: 'GRANDMASTER',   title: '宗师',        description: '累计赢得 100 场游戏',     icon: '🏅' },
  { key: 'MULTI_WIN',     title: '联机首胜',    description: '在多人联机中获胜',        icon: '🤝' },
  { key: 'ARTIST',        title: '灵魂画手',    description: '在你画我猜中获胜',        icon: '🎨' },
]

// ============ 成就检查（本地计算） ============

function checkAchievements(history: GameRecord[]): Achievement[] {
  const wins = history.filter(r => r.result === 'WIN')
  const dailyWins = history.filter(r => r.mode === 'daily' && r.result === 'WIN')
  const hardWins = wins.filter(r => r.difficulty === 'hard')
  const veryFastWins = wins.filter(r => r.guessCount === 1)
  const fast3 = wins.filter(r => r.guessCount <= 3)
  const fast6 = wins.filter(r => r.guessCount <= 6)
  const multiWins = wins.filter(r => r.mode === 'multiplayer')
  const drawGuessWins = wins.filter(r => r.mode === 'drawGuess')

  let streak = 0, maxStreak = 0
  for (const r of history) {
    if (r.result === 'WIN') { streak++; maxStreak = Math.max(maxStreak, streak) }
    else streak = 0
  }

  const unlocked = new Set<string>()
  if (wins.length >= 1) unlocked.add('FIRST_WIN')
  if (maxStreak >= 3) unlocked.add('STREAK_3')
  if (maxStreak >= 5) unlocked.add('STREAK_5')
  if (maxStreak >= 10) unlocked.add('STREAK_10')
  if (dailyWins.length >= 3) unlocked.add('DAILY_3')
  if (dailyWins.length >= 7) unlocked.add('DAILY_7')
  if (dailyWins.length >= 30) unlocked.add('DAILY_30')
  if (hardWins.length >= 1) unlocked.add('HARD_WIN')
  if (veryFastWins.length >= 1) unlocked.add('FIRST_BLOOD')
  if (fast3.length >= 1) unlocked.add('FAST_3')
  if (fast6.length >= 1) unlocked.add('FAST_6')
  if (wins.length >= 20) unlocked.add('COLLECTOR')
  if (wins.length >= 50) unlocked.add('MASTER')
  if (wins.length >= 100) unlocked.add('GRANDMASTER')
  if (multiWins.length >= 1) unlocked.add('MULTI_WIN')
  if (drawGuessWins.length >= 1) unlocked.add('ARTIST')

  return ACHIEVEMENT_DEFS.map(a => ({
    ...a,
    unlockedAt: unlocked.has(a.key) ? new Date().toISOString() : undefined,
  }))
}

// ============ Store ============

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthed: false,
      user: null,
      token: null,
      gameHistory: [],
      achievements: ACHIEVEMENT_DEFS.map(a => ({ ...a })),

      // ---- 登录（纯后端） ----
      login: async (username, password) => {
        try {
          const data = await api<any>('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
          })
          localStorage.setItem('arkcode-token', data.token)
          set({
            isAuthed: true,
            token: data.token,
            user: {
              username: data.user.username,
              email: data.user.email || '',
              gender: data.user.gender || '',
              avatar: data.user.avatar || '',
              bio: data.user.bio || '',
              points: data.user.points || 0,
            },
          })
          return true
        } catch { return false }
      },

      // ---- 注册（纯后端） ----
      register: async (username, email, password) => {
        try {
          const data = await api<any>('/api/auth/register', { method: 'POST', body: JSON.stringify({ username, email, password }) })
          localStorage.setItem('arkcode-token', data.token)
          set({
            isAuthed: true,
            token: data.token,
            user: {
              username: data.user.username,
              email: data.user.email || '',
              gender: data.user.gender || '',
              avatar: data.user.avatar || '',
              bio: data.user.bio || '',
              points: data.user.points || 0,
            },
          })
          return true
        } catch { return false }
      },

      // ---- 退出 ----
      logout: () => {
        localStorage.removeItem('arkcode-token')
        api('/api/auth/logout', { method: 'POST' }).catch(() => {})
        set({ isAuthed: false, user: null, token: null, gameHistory: [], achievements: ACHIEVEMENT_DEFS.map(a => ({ ...a })) })
      },

      // ---- 加载用户信息 ----
      loadUser: async () => {
        try {
          const data = await api<any>('/api/auth/me')
          set({
            isAuthed: true,
            user: {
              username: data.user.username,
              email: data.user.email || '',
              gender: data.user.gender || '',
              avatar: data.user.avatar || '',
              bio: data.user.bio || '',
              points: data.user.points || 0,
            },
          })
          // 加载战绩和成就
          try {
            const hist = await api<any>('/api/user/history')
            const ach = await api<any>('/api/user/achievements')
            set({
              gameHistory: hist.records || [],
              achievements: ach.achievements || ACHIEVEMENT_DEFS.map(a => ({ ...a })),
            })
          } catch { /* 战绩接口暂未实现 */ }
        } catch {
          // token 过期，清除
          localStorage.removeItem('arkcode-token')
          set({ isAuthed: false, user: null, token: null })
        }
      },

      // ---- 更新个人信息 ----
      updateProfile: async (partial) => {
        const data = await api<any>('/api/user/profile', {
          method: 'PATCH',
          body: JSON.stringify(partial),
        })
        set({ user: { ...get().user!, ...data.user } })
      },

      // ---- 添加战绩（本地累计 + 后端同步） ----
      addGameRecord: (record) => {
        const { isAuthed, user, gameHistory } = get()
        if (!isAuthed || !user) return
        const newRecord: GameRecord = { ...record, date: new Date().toISOString().slice(0, 10) }
        const history = [newRecord, ...gameHistory]
        const achievements = checkAchievements(history)
        set({ gameHistory: history, achievements })
        // 后端提交（fire-and-forget）
        api('/api/game/records', {
          method: 'POST',
          body: JSON.stringify(record),
        }).catch(() => {})
      },
    }),
    {
      name: 'arkcode-auth',
      partialize: (state) => ({
        isAuthed: state.isAuthed,
        user: state.user,
        token: state.token,
        gameHistory: state.gameHistory,
        achievements: state.achievements,
      }),
      merge: (persisted: any, current) => ({
        ...current,
        isAuthed: persisted?.isAuthed ?? current.isAuthed,
        user: persisted?.user ?? current.user,
        token: persisted?.token ?? current.token,
        gameHistory: Array.isArray(persisted?.gameHistory) ? persisted.gameHistory : current.gameHistory,
        achievements: Array.isArray(persisted?.achievements) ? persisted.achievements : current.achievements,
      }),
    },
  ),
)
