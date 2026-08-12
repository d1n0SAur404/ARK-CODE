/**
 * 战绩日历组件 — 月视图方格，展示每日游戏状态
 */

import { useState } from 'react'
import type { GameRecord } from '@/store/auth'
import clsx from 'clsx'

interface Props {
  gameHistory: GameRecord[]
}

const DAY_NAMES = ['日', '一', '二', '三', '四', '五', '六']

export function StatsCalendar({ gameHistory }: Props) {
  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth() + 1)

  const byDay = new Map<string, GameRecord[]>()
  for (const r of gameHistory) {
    const arr = byDay.get(r.date) ?? []
    arr.push(r)
    byDay.set(r.date, arr)
  }

  function getDayStatus(dateStr: string): 'win' | 'loss' | 'mixed' | null {
    const records = byDay.get(dateStr)
    if (!records?.length) return null
    const wins = records.filter(r => r.result === 'WIN').length
    if (wins === records.length) return 'win'
    if (wins === 0) return 'loss'
    return 'mixed'
  }

  const firstDay = new Date(year, month - 1, 1).getDay()
  const daysInMonth = new Date(year, month, 0).getDate()
  const cells: (number | null)[] = Array(firstDay).fill(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const today = new Date().toISOString().slice(0, 10)

  return (
    <div className="rounded-xl border border-ark-border bg-ark-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <button
          onClick={() => month === 1 ? (setYear(y => y - 1), setMonth(12)) : setMonth(m => m - 1)}
          className="rounded p-1 text-ark-muted hover:text-ark-text transition-colors"
        >&lt;</button>
        <span className="text-sm font-bold text-ark-text">{year}年 {month}月</span>
        <button
          onClick={() => month === 12 ? (setYear(y => y + 1), setMonth(1)) : setMonth(m => m + 1)}
          className="rounded p-1 text-ark-muted hover:text-ark-text transition-colors"
        >&gt;</button>
      </div>

      <div className="mb-2 grid grid-cols-7 text-center">
        {DAY_NAMES.map(d => <span key={d} className="text-xs font-medium text-ark-muted">{d}</span>)}
      </div>

      <div className="grid grid-cols-7 gap-1.5">
        {cells.map((day, i) => {
          if (day === null) return <div key={`e${i}`} />
          const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
          const status = getDayStatus(dateStr)
          return (
            <div
              key={dateStr}
              className={clsx(
                'flex aspect-square flex-col items-center justify-center rounded-md text-xs transition-colors',
                dateStr === today && 'font-bold',
                status === 'win' && 'bg-ark-success text-white',
                status === 'loss' && 'bg-ark-danger text-white',
                status === 'mixed' && 'bg-ark-accent text-white',
                !status && 'text-ark-text-secondary hover:bg-ark-card-hover',
              )}
            ><span>{day}</span></div>
          )
        })}
      </div>

      <div className="mt-3 flex items-center gap-3 text-xs text-ark-muted">
        <span className="flex items-center gap-1"><span className="inline-block h-3 w-3 rounded bg-ark-success" /> 胜</span>
        <span className="flex items-center gap-1"><span className="inline-block h-3 w-3 rounded bg-ark-danger" /> 负</span>
        <span className="flex items-center gap-1"><span className="inline-block h-3 w-3 rounded bg-ark-accent" /> 混合</span>
      </div>
    </div>
  )
}
