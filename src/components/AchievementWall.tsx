/**
 * 成就墙组件 — 网格展示全部成就（已解锁/未解锁）
 */

import type { Achievement } from '@/store/auth'
import clsx from 'clsx'

interface Props {
  achievements: Achievement[]
}

export function AchievementWall({ achievements }: Props) {
  const unlocked = achievements.filter(a => a.unlockedAt).length
  const total = achievements.length
  const pct = Math.round((unlocked / total) * 100)

  return (
    <div className="rounded-xl border border-ark-border bg-ark-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-bold text-ark-text">成就墙</h3>
        <span className="text-xs text-ark-muted">{unlocked}/{total} · {pct}%</span>
      </div>
      <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-ark-card-hover">
        <div className="h-full rounded-full bg-gradient-to-r from-ark-primary to-ark-accent transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {achievements.map(ach => {
          const isUnlocked = !!ach.unlockedAt
          return (
            <div
              key={ach.key}
              className={clsx(
                'flex flex-col items-center gap-1 rounded-lg border p-3 text-center transition-all',
                isUnlocked ? 'border-ark-primary bg-ark-primary-light' : 'border-ark-border bg-ark-card-hover opacity-50',
              )}
            >
              <span className={clsx('text-2xl', !isUnlocked && 'grayscale')}>{ach.icon}</span>
              <span className={clsx('text-xs font-medium', isUnlocked ? 'text-ark-text' : 'text-ark-muted')}>{ach.title}</span>
              <span className="text-[10px] text-ark-muted leading-tight">{isUnlocked ? ach.description : '???'}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
