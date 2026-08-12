/**
 * 方舟密令 — 主页
 * 大标题 + 单人/多人模式 + 干员查询 + 论坛 + 商店
 */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, CardHeader, CardFooter, Badge, Button } from '@components/ui'
import clsx from 'clsx'

type ModeCategory = 'single' | 'multi' | null

const SINGLE_MODES = [
  {
    mode: 'practice' as const,
    title: '无限练习',
    desc: '随机抽取干员，不限次数，3 种难度可选。',
    icon: '♾',
    color: 'from-ark-primary to-ark-accent',
  },
  {
    mode: 'timed' as const,
    title: '限时挑战',
    desc: '3 分钟限时，8 次猜测，比拼速度。',
    icon: '⏱',
    color: 'from-ark-accent to-ark-primary',
  },
]

const MULTI_MODES = [
  {
    mode: 'multiplayer' as const,
    title: '多人联机',
    desc: '2 分钟限时，先答对 5 题获胜，实时对战。',
    icon: '⚔',
    color: 'from-ark-success to-ark-primary',
  },
  {
    mode: 'drawGuess' as const,
    title: '你画我猜',
    desc: '轮流当画师，5 分钟限时，首位猜对 +2 分。',
    icon: '🎨',
    color: 'from-ark-warning to-ark-accent',
  },
]

export default function HomePage() {
  const navigate = useNavigate()
  const [expanded, setExpanded] = useState<ModeCategory>(null)

  function handleModeClick(mode: string) {
    if (mode === 'drawGuess') {
      navigate('/game', { state: { mode: 'drawGuess' } })
    } else if (mode === 'multiplayer') {
      navigate('/multiplayer')
    } else {
      navigate('/game', { state: { mode } })
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-6 sm:py-8">
      {/* ===== 大标题 ===== */}
      <section className="mb-8 text-center sm:mb-12">
        <h1 className="text-4xl font-black tracking-tight ark-text-gradient sm:text-6xl sm:text-7xl">
          方舟密令
        </h1>
        <p className="mt-2 text-sm font-bold tracking-[0.3em] text-ark-muted sm:text-xl">
          A R K &nbsp; C O D E
        </p>
        <p className="mt-3 text-xs text-ark-text-secondary sm:mt-4 sm:text-sm">
          解码干员档案 · 猜出隐藏身份 · 挑战全图鉴
        </p>
      </section>

      {/* ===== 模式选择 ===== */}
      <section className="mb-8 sm:mb-12">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {/* 单人模式 */}
          <div
            className={clsx(
              'rounded-2xl border-2 transition-all duration-300',
              expanded === 'single'
                ? 'border-ark-primary shadow-glow'
                : 'border-ark-border hover:border-ark-primary',
            )}
          >
            <button
              onClick={() => setExpanded(expanded === 'single' ? null : 'single')}
              className="flex w-full items-center justify-between p-4 sm:p-6"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-ark-primary to-ark-accent text-xl text-white shadow-lg sm:h-14 sm:w-14 sm:text-2xl">
                  🎮
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-ark-text sm:text-xl">单人模式</h3>
                  <p className="text-xs text-ark-muted sm:text-sm">独自挑战，磨练技巧</p>
                </div>
              </div>
              <span
                className={clsx(
                  'text-2xl text-ark-muted transition-transform duration-300',
                  expanded === 'single' && 'rotate-180',
                )}
              >
                ▼
              </span>
            </button>

            {/* 子选项 */}
            <div
              className={clsx(
                'grid overflow-hidden transition-all duration-300',
                expanded === 'single'
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <div className="grid gap-3 p-4 pt-0 sm:grid-cols-2">
                  {SINGLE_MODES.map((m) => (
                    <button
                      key={m.mode}
                      onClick={() => handleModeClick(m.mode)}
                      className="group rounded-xl border border-ark-border bg-ark-card p-4 text-left transition-all hover:border-ark-primary hover:bg-ark-card-hover"
                    >
                      <div
                        className={clsx(
          'mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br text-lg text-white shadow',
                          m.color,
                        )}
                      >
                        {m.icon}
                      </div>
                      <h4 className="font-bold text-ark-text group-hover:text-ark-primary">
                        {m.title}
                      </h4>
                      <p className="mt-1 text-xs text-ark-muted">{m.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 多人模式 */}
          <div
            className={clsx(
              'rounded-2xl border-2 transition-all duration-300',
              expanded === 'multi'
                ? 'border-ark-accent shadow-glow'
                : 'border-ark-border hover:border-ark-accent',
            )}
          >
            <button
              onClick={() => setExpanded(expanded === 'multi' ? null : 'multi')}
              className="flex w-full items-center justify-between p-4 sm:p-6"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-ark-success to-ark-accent text-xl text-white shadow-lg sm:h-14 sm:w-14 sm:text-2xl">
                  ⚔
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-ark-text sm:text-xl">多人模式</h3>
                  <p className="text-xs text-ark-muted sm:text-sm">实时对战，社交互动</p>
                </div>
              </div>
              <span
                className={clsx(
                  'text-2xl text-ark-muted transition-transform duration-300',
                  expanded === 'multi' && 'rotate-180',
                )}
              >
                ▼
              </span>
            </button>

            {/* 子选项 */}
            <div
              className={clsx(
                'grid overflow-hidden transition-all duration-300',
                expanded === 'multi'
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <div className="grid gap-3 p-4 pt-0 sm:grid-cols-2">
                  {MULTI_MODES.map((m) => (
                    <button
                      key={m.mode}
                      onClick={() => handleModeClick(m.mode)}
                      className="group rounded-xl border border-ark-border bg-ark-card p-4 text-left transition-all hover:border-ark-accent hover:bg-ark-card-hover"
                    >
                      <div
                        className={clsx(
                          'mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br text-lg text-white shadow',
                          m.color,
                        )}
                      >
                        {m.icon}
                      </div>
                      <h4 className="font-bold text-ark-text group-hover:text-ark-accent">
                        {m.title}
                      </h4>
                      <p className="mt-1 text-xs text-ark-muted">{m.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 功能区 ===== */}
      <section className="mb-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {/* 干员查询 */}
          <Card
            hover
            onClick={() => navigate('/operators')}
            className="cursor-pointer"
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔍</span>
                <h3 className="font-bold text-ark-text">干员查询</h3>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-ark-text-secondary">
                查询全部 439 名干员的档案信息，包括稀有度、职业、阵营等。
              </p>
            </CardBody>
            <CardFooter>
              <Badge variant="primary">439 名干员</Badge>
            </CardFooter>
          </Card>

          {/* 论坛 */}
          <Card
            hover
            onClick={() => navigate('/forum')}
            className="cursor-pointer"
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💬</span>
                <h3 className="font-bold text-ark-text">论坛</h3>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-ark-text-secondary">
                发布有趣的东西，分享攻略心得，与其他玩家交流互动。
              </p>
            </CardBody>
            <CardFooter>
              <Badge variant="accent">社区</Badge>
            </CardFooter>
          </Card>

          {/* 商店 */}
          <Card
            hover
            className="cursor-pointer opacity-60"
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛒</span>
                <h3 className="font-bold text-ark-text">商店</h3>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-ark-text-secondary">
                头像框、称号、特殊道具……丰富你的游戏体验。
              </p>
            </CardBody>
            <CardFooter>
              <Badge variant="warning">敬请期待</Badge>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* ===== 玩法说明 ===== */}
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
