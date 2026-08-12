/**
 * 用户路由 — 获取/更新个人信息
 */

import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma.js'
import { verifyToken } from '../lib/jwt.js'

const updateProfileSchema = z.object({
  username: z.string().min(2).max(32).optional(),
  email: z.string().email().optional(),
  avatar: z.string().max(512).optional(),
  bio: z.string().max(200).optional(),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
})

/** 认证中间件 */
function getUserId(req: { headers: { authorization?: string } }): string | null {
  const auth = req.headers.authorization
  if (!auth?.startsWith('Bearer ')) return null
  const payload = verifyToken(auth.slice(7))
  return payload?.userId ?? null
}

export async function userRoutes(app: FastifyInstance) {
  // ---- 获取个人信息 ----
  app.get('/profile', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '未登录' })

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        avatar: true,
        bio: true,
        gender: true,
        points: true,
        role: true,
        isVerified: true,
        createdAt: true,
      },
    })
    if (!user) return reply.code(404).send({ error: '用户不存在' })

    return reply.send({ user })
  })

  // ---- 更新个人信息 ----
  app.patch('/profile', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '未登录' })

    const body = updateProfileSchema.safeParse(req.body)
    if (!body.success) {
      return reply.code(400).send({ error: body.error.errors[0]?.message ?? '参数错误' })
    }

    // 检查用户名/邮箱冲突
    if (body.data.username || body.data.email) {
      const conflict = await prisma.user.findFirst({
        where: {
          AND: [
            { id: { not: userId } },
            {
              OR: [
                ...(body.data.username ? [{ username: body.data.username }] : []),
                ...(body.data.email ? [{ email: body.data.email }] : []),
              ],
            },
          ],
        },
      })
      if (conflict) {
        const field = conflict.username === body.data.username ? '用户名' : '邮箱'
        return reply.code(409).send({ error: `${field}已被占用` })
      }
    }

    const updated = await prisma.user.update({
      where: { id: userId },
      data: body.data,
      select: {
        id: true,
        username: true,
        email: true,
        avatar: true,
        bio: true,
        gender: true,
        points: true,
      },
    })

    return reply.send({ user: updated })
  })

  // ---- 获取战绩日历 ----
  app.get('/stats/calendar', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '未登录' })

    const { month } = req.query as { month?: string }
    const now = new Date()
    const year = month ? Number(month.split('-')[0]) : now.getFullYear()
    const m = month ? Number(month.split('-')[1]) : now.getMonth() + 1

    const start = new Date(year, m - 1, 1)
    const end = new Date(year, m, 0, 23, 59, 59)

    const records = await prisma.gameRecord.findMany({
      where: {
        userId,
        playedAt: { gte: start, lte: end },
      },
      select: {
        playedAt: true,
        result: true,
        mode: true,
        difficulty: true,
        guessCount: true,
      },
      orderBy: { playedAt: 'desc' },
    })

    // 按日聚合
    const calendar: Record<string, { total: number; wins: number; losses: number; records: typeof records }> = {}
    for (const r of records) {
      const day = r.playedAt.toISOString().slice(0, 10)
      if (!calendar[day]) calendar[day] = { total: 0, wins: 0, losses: 0, records: [] }
      calendar[day].total++
      if (r.result === 'WIN') calendar[day].wins++
      else calendar[day].losses++
      calendar[day].records.push(r)
    }

    return reply.send({ calendar })
  })

  // ---- 获取成就墙 ----
  app.get('/achievements', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '未登录' })

    const unlocked = await prisma.userAchievement.findMany({
      where: { userId },
      select: { achievement: true, unlockedAt: true },
    })

    return reply.send({ achievements: unlocked })
  })
}
