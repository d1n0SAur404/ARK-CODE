/**
 * 排行榜路由
 * GET /api/leaderboard?type=points|wins&limit=20 — 排行榜
 */

import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma.js'

export async function leaderboardRoutes(app: FastifyInstance) {
  app.get('/', async (req, reply) => {
    const { type = 'points', limit = '20' } = req.query as { type?: string; limit?: string }
    const take = Math.min(Number(limit) || 20, 100)

    const users = await prisma.user.findMany({
      where: { role: { not: 'ADMIN' } },
      select: {
        id: true,
        username: true,
        points: true,
        avatar: true,
        gameRecords: {
          select: { result: true },
          where: { result: 'WIN' },
        },
      },
    })

    // 计算胜场
    const ranked = users.map(u => ({
      username: u.username,
      points: u.points,
      avatar: u.avatar,
      wins: u.gameRecords.length,
    }))

    // 排序
    if (type === 'wins') {
      ranked.sort((a, b) => b.wins - a.wins)
    } else {
      ranked.sort((a, b) => b.points - a.points)
    }

    return reply.send({
      type,
      rankings: ranked.slice(0, take).map((u, i) => ({ rank: i + 1, ...u })),
    })
  })
}
