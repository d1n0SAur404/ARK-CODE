/**
 * 排行榜页面 — 积分榜 / 胜场榜
 */

import { useState, useEffect } from 'react'
import { BackButton } from '@components/BackButton'
import { Card, CardBody, CardHeader, Badge } from '@components/ui'
import clsx from 'clsx'

interface RankedUser {
  rank: number
  username: string
  points: number
  wins: number
  totalGames: number
}

type RankTab = 'points' | 'wins'

async function fetchLeaderboard(type: string, limit = 20): Promise<RankedUser[]> {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
    const res = await fetch(`${apiUrl}/api/leaderboard?type=${type}&limit=${limit}`)
    if (!res.ok) return []
    const data = await res.json()
    return (data.rankings || []).map((r: any) => ({
      username: r.username,
      points: r.points || 0,
      wins: r.wins || 0,
      totalGames: r.totalGames || 0,
      rank: r.rank,
    }))
  } catch { return [] }
}

/** 金银铜 medal */
function medalRank(rank: number): string | null {
  if (rank === 0) return '🥇'
  if (rank === 1) return '🥈'
  if (rank === 2) return '🥉'
  return null
}

export default function LeaderboardPage() {
  const [tab, setTab] = useState<RankTab>('points')
  const [rankings, setRankings] = useState<RankedUser[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchLeaderboard(tab).then(setRankings).catch(() => []).finally(() => setLoading(false))
  }, [tab])

  return (
    <main className="mx-auto max-w-2xl px-3 py-6 sm:px-4 sm:py-8">
      <div className="mb-4">
        <BackButton />
      </div>

      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold ark-text-gradient sm:text-3xl">排行榜</h1>
        <p className="mt-1 text-sm text-ark-muted">看看谁是方舟密令的顶级玩家</p>
      </div>

      {/* 标签切换 */}
      <div className="mb-4 flex gap-1 rounded-xl bg-ark-card p-1">
        <button
          onClick={() => setTab('points')}
          className={clsx(
            'flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all',
            tab === 'points' ? 'bg-ark-primary text-ark-bg shadow-sm' : 'text-ark-text-secondary hover:text-ark-text',
          )}
        >
          💎 积分榜
        </button>
        <button
          onClick={() => setTab('wins')}
          className={clsx(
            'flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all',
            tab === 'wins' ? 'bg-ark-primary text-ark-bg shadow-sm' : 'text-ark-text-secondary hover:text-ark-text',
          )}
        >
          🏆 胜场榜
        </button>
      </div>

      {/* 排行列表 */}
      <Card>
        <CardBody className="space-y-1 p-0">
          {rankings.length === 0 ? (
            <div className="py-12 text-center text-ark-muted">
              <p className="text-4xl mb-2">📭</p>
              <p className="text-sm">还没有玩家数据</p>
              <p className="text-xs mt-1">注册并完成游戏即可上榜</p>
            </div>
          ) : (
            rankings.map((u, i) => {
              const medal = medalRank(i)
              return (
                <div
                  key={u.username}
                  className={clsx(
                    'flex items-center gap-3 px-4 py-3 transition-colors hover:bg-ark-card-hover',
                    i < rankings.length - 1 && 'border-b border-ark-border',
                  )}
                >
                  {/* 排名 */}
                  <div className="flex w-8 shrink-0 justify-center">
                    {medal ? (
                      <span className="text-xl">{medal}</span>
                    ) : (
                      <span className="text-sm font-bold text-ark-muted">{i + 1}</span>
                    )}
                  </div>

                  {/* 用户信息 */}
                  <div className="flex-1">
                    <p className="text-sm font-bold text-ark-text">{u.username}</p>
                    <div className="flex gap-2 mt-0.5">
                      <span className="text-[10px] text-ark-muted">💎 {u.points}</span>
                      <span className="text-[10px] text-ark-muted">🏆 {u.wins}胜</span>
                      <span className="text-[10px] text-ark-muted">🎮 {u.totalGames}场</span>
                    </div>
                  </div>

                  {/* 主要数值 */}
                  <div className="shrink-0 text-right">
                    <span className="text-lg font-bold ark-text-gradient">
                      {tab === 'points' ? u.points : u.wins}
                    </span>
                    <span className="text-xs text-ark-muted ml-1">
                      {tab === 'points' ? '分' : '胜'}
                    </span>
                  </div>
                </div>
              )
            })
          )}
        </CardBody>
      </Card>
    </main>
  )
}
