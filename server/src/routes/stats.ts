/**
 * 统计路由 — 全局站点数据
 * GET /api/stats/overview — 总览数据（总用户/总局数/今日活跃等）
 */

import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma.js'

export async function statsRoutes(app: FastifyInstance) {
  app.get('/overview', async (_req, reply) => {
    const today = new Date().toISOString().slice(0, 10)

    const [totalUsers, totalGames, todayGames, todayActiveUsers, totalWins] = await Promise.all([
      prisma.user.count({ where: { role: 'USER' } }),
      prisma.gameRecord.count(),
      prisma.gameRecord.count({
        where: { playedAt: { gte: new Date(today) } },
      }),
      prisma.gameRecord.groupBy({
        by: ['userId'],
        where: { playedAt: { gte: new Date(today) } },
      }).then(r => r.length),
      prisma.gameRecord.count({ where: { result: 'WIN' } }),
    ])

    const winRate = totalGames > 0 ? Math.round((totalWins / totalGames) * 100) : 0

    // 各模式统计
    const modeDistribution = await Promise.all(
      ['DAILY', 'ENDLESS', 'TIMED', 'MULTIPLAYER', 'DRAW_GUESS'].map(async mode => {
        const count = await prisma.gameRecord.count({ where: { mode: mode as any } })
        return { mode, count }
      }),
    ).then(r => r.filter(m => m.count > 0))

    return reply.send({
      totalUsers,
      totalGames,
      todayGames,
      todayActiveUsers,
      totalWins,
      winRate,
      modeDistribution,
    })
  })
}
