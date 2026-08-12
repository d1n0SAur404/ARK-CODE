/**
 * 游戏页面 — 接收主页导航状态，展示难度选择 / 游戏面板
 */

import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useGameStore } from '@/store/game'
import { GameBoard } from '@features/game/GameBoard'
import { DrawGuessBoard } from '@features/game/DrawGuessBoard'
import { Card, CardBody, CardHeader, CardFooter, Badge, Button } from '@components/ui'
import { BackButton } from '@components/BackButton'
import { DIFFICULTY_INFO } from '@/data/operatorData'
import type { GameMode, Difficulty } from '@/types/game'

const MODES: {
  mode: GameMode
  title: string
  desc: string
  badge: string
  badgeVariant: 'primary' | 'accent' | 'success' | 'warning'
  icon: string
}[] = [
  {
    mode: 'daily',
    title: '每日挑战',
    desc: '每天一题，全网同一目标干员，8 猜测机会，无时间限制。',
    badge: '每日',
    badgeVariant: 'primary',
    icon: '🎯',
  },
  {
    mode: 'practice',
    title: '无限练习',
    desc: '随机抽取干员，不限次数，3 种难度可选（100/250/全角色）。',
    badge: '练习',
    badgeVariant: 'accent',
    icon: '♾',
  },
  {
    mode: 'timed',
    title: '限时挑战',
    desc: '3 分钟限时，8 次猜测，3 种难度可选，看你能多快猜出目标。',
    badge: '限时',
    badgeVariant: 'warning',
    icon: '⏱',
  },
  {
    mode: 'multiplayer',
    title: '多人联机',
    desc: '2 分钟限时，先答对 5 题获胜，3 种难度可选，实时房间对战。',
    badge: '联机',
    badgeVariant: 'success',
    icon: '⚔',
  },
  {
    mode: 'drawGuess',
    title: '你画我猜',
    desc: '一人绘画其余人猜，5 分钟限时，首位猜对 +2 分，画师 +1 分。',
    badge: '画猜',
    badgeVariant: 'warning',
    icon: '🎨',
  },
]

export default function GamePage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { status, mode: currentMode, startGame, resetGame } = useGameStore()
  const [selectedMode, setSelectedMode] = useState<GameMode | null>(null)
  const [pendingMode, setPendingMode] = useState<GameMode | null>(null)

  // 接收主页导航传入的 mode
  useEffect(() => {
    const navMode = (location.state as { mode?: GameMode } | null)?.mode

    // 如果 store 里已有游戏（从 Header 直接启动），直接显示
    if (!navMode && status === 'playing' && currentMode) {
      if (currentMode === 'drawGuess') { setSelectedMode('drawGuess') }
      else if (currentMode === 'multiplayer') { navigate('/multiplayer', { replace: true }) }
      else { setSelectedMode(currentMode as GameMode) }
      return
    }

    if (!navMode) return

    if (navMode === 'drawGuess') {
      setSelectedMode('drawGuess')
    } else if (navMode === 'daily') {
      setSelectedMode('daily')
      startGame('daily', 'hard')
    } else if (navMode === 'practice' || navMode === 'timed') {
      setPendingMode(navMode)
    } else if (navMode === 'multiplayer') {
      navigate('/multiplayer', { replace: true })
      return
    }
    // 清除 state 防止刷新重复触发
    navigate(location.pathname, { replace: true })
  }, [location, navigate, startGame])

  // 你画我猜走独立面板
  if (selectedMode === 'drawGuess') {
    return (
      <div>
        <div className="mx-auto max-w-4xl px-4 pt-4">
          <BackButton onClick={() => {
            setSelectedMode(null)
            navigate('/')
          }} />
        </div>
        <DrawGuessBoard />
      </div>
    )
  }

  // 每日挑战 — 直接嵌入游戏，无外层包裹
  if (selectedMode === 'daily' && status !== 'idle') {
    return <GameBoard />
  }

  // 猜测模式进行中（其他模式）
  if (selectedMode && status !== 'idle') {
    return (
      <div>
        <div className="mx-auto max-w-3xl px-4 pt-4">
          <BackButton onClick={() => {
            resetGame()
            setSelectedMode(null)
            setPendingMode(null)
            navigate('/')
          }} />
        </div>
        <GameBoard />
      </div>
    )
  }

  // 难度选择界面
  if (pendingMode) {
    const diffs: { key: Difficulty; variant: 'success' | 'warning' | 'danger'; icon: string }[] = [
      { key: 'easy', variant: 'success', icon: '🟢' },
      { key: 'medium', variant: 'warning', icon: '🟡' },
      { key: 'hard', variant: 'danger', icon: '🔴' },
    ]
    const modeLabels: Record<string, string> = {
      practice: '无限练习',
      timed: '限时挑战',
      multiplayer: '多人联机',
    }
    return (
      <main className="mx-auto max-w-4xl px-3 py-6 sm:px-4 sm:py-8">
        <div className="mb-4">
          <BackButton onClick={() => {
            setPendingMode(null)
            navigate('/')
          }} />
        </div>
        <section className="mb-6 text-center sm:mb-8">
          <h2 className="text-2xl font-bold ark-text-gradient sm:text-3xl">
            {modeLabels[pendingMode]} · 选择难度
          </h2>
          <p className="mt-2 text-xs text-ark-text-secondary sm:text-sm">
            难度决定可选干员范围，目标干员将从对应池中随机抽取
          </p>
        </section>
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
          {diffs.map((d) => {
            const info = DIFFICULTY_INFO[d.key]
            return (
              <Card
                key={d.key}
                hover
                onClick={() => {
                  startGame(pendingMode, d.key)
                  setSelectedMode(pendingMode)
                  setPendingMode(null)
                }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">
                      <span className="mr-2">{d.icon}</span>
                      {info.label}
                    </h3>
                    <Badge variant={d.variant}>{info.count}</Badge>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-sm text-ark-text-secondary">{info.desc}</p>
                </CardBody>
                <CardFooter>
                  <div className="flex items-center gap-2 text-xs text-ark-muted">
                    {d.key === 'easy' && <span>6 星干员为主，适合新手</span>}
                    {d.key === 'medium' && <span>5 星 + 6 星，进阶挑战</span>}
                    {d.key === 'hard' && <span>全干员池，硬核考验</span>}
                  </div>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </main>
    )
  }

  // 模式选择（直接访问 /game 时展示）
  return (
    <main className="mx-auto max-w-4xl px-3 py-6 sm:px-4 sm:py-8">
      <div className="mb-4">
        <BackButton to="/" />
      </div>
      <section className="mb-6 text-center sm:mb-8">
        <h2 className="text-2xl font-bold ark-text-gradient sm:text-3xl">选择游戏模式</h2>
        <p className="mt-2 text-xs text-ark-text-secondary sm:text-sm">
          8 次猜测机会 · 颜色反馈提示 · 绿=正确 黄=关联 红=错误
        </p>
      </section>

      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
        {MODES.map((m) => (
          <Card key={m.mode} hover onClick={() => {
            if (m.mode === 'drawGuess') {
              setSelectedMode('drawGuess')
            } else if (m.mode === 'practice' || m.mode === 'timed' || m.mode === 'multiplayer') {
              setPendingMode(m.mode)
            } else {
              setSelectedMode(m.mode)
              startGame(m.mode)
            }
          }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">
                  <span className="mr-2">{m.icon}</span>
                  {m.title}
                </h3>
                <Badge variant={m.badgeVariant}>{m.badge}</Badge>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-ark-text-secondary">{m.desc}</p>
            </CardBody>
            <CardFooter>
              <div className="flex items-center gap-2 text-xs text-ark-muted">
                {m.mode === 'daily' && <span>📅 按日期固定题目</span>}
                {m.mode === 'practice' && <span>🎲 三种难度可选</span>}
                {m.mode === 'timed' && <span>⏰ 3:00 倒计时 · 三种难度</span>}
                {m.mode === 'multiplayer' && <span>🏆 先到 5 分 · 三种难度</span>}
                {m.mode === 'drawGuess' && <span>🎨 轮流当画师</span>}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* 规则说明 */}
      <Card className="mt-6">
        <CardHeader>
          <h3 className="font-bold">游戏规则</h3>
        </CardHeader>
        <CardBody>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 text-sm font-bold text-ark-text">颜色含义</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-12 rounded border-2 border-ark-success bg-ark-success-light" />
                  <span className="text-sm text-ark-text-secondary">信息完全正确</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-12 rounded border-2 border-ark-warning bg-ark-warning-light" />
                  <span className="text-sm text-ark-text-secondary">关联（异格/同地区等）</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-12 rounded border-2 border-ark-danger bg-ark-danger-light" />
                  <span className="text-sm text-ark-text-secondary">信息错误</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-bold text-ark-text">对比字段</h4>
              <p className="text-sm text-ark-text-secondary">
                干员代号 · 稀有度（↑↓提示）· 职业 · 种族 · 出身地 · 阵营 · 感染状态 · 战斗经验
              </p>
              <h4 className="mt-3 mb-2 text-sm font-bold text-ark-text">稀有度提示</h4>
              <p className="text-sm text-ark-text-secondary">
                <span className="text-ark-success">★</span> 正确 ·{' '}
                <span className="text-ark-danger">↑</span> 偏高 ·{' '}
                <span className="text-ark-danger">↓</span> 偏低
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </main>
  )
}
