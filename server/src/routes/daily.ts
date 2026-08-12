/**
 * 每日挑战路由
 * GET  /api/daily/today    — 获取今日挑战目标
 * POST /api/daily/submit   — 提交今日挑战答案
 * GET  /api/daily/history  — 我的每日挑战历史
 */

import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma.js'
import { verifyToken } from '../lib/jwt.js'

function getUserId(req: { headers: { authorization?: string } }): string | null {
  const auth = req.headers.authorization
  if (!auth?.startsWith('Bearer ')) return null
  const payload = verifyToken(auth.slice(7))
  return payload?.userId ?? null
}

/** 基于日期生成确定性的目标干员 */
async function getDailyTarget(date: string): Promise<{ id: string; name: string; rarity: number; profession: string } | null> {
  // 用日期作为种子，取 hash mod count
  let hash = 0
  for (let i = 0; i < date.length; i++) {
    hash = ((hash << 5) - hash) + date.charCodeAt(i)
    hash |= 0
  }
  hash = Math.abs(hash)

  const count = await prisma.operator.count()
  if (count === 0) return null

  const skip = hash % count
  const ops = await prisma.operator.findMany({ take: 1, skip, select: { id: true, name: true, rarity: true, profession: true } })
  return ops[0] ?? null
}

const submitSchema = z.object({
  guessCount: z.number().int().min(0),
  timeSpent: z.number().int().min(0).optional(),
})

export async function dailyRoutes(app: FastifyInstance) {
  // ---- 获取今日挑战 ----
  app.get('/today', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '未登录' })

    const today = new Date().toISOString().slice(0, 10)

    // 检查今天是否已完成
    const existing = await prisma.dailyChallenge.findUnique({
      where: { userId_date: { userId, date: today } },
    })
    if (existing) {
      return reply.send({ completed: true, result: existing.result, guessCount: existing.guessCount })
    }

    // 获取今天的干员
    const target = await getDailyTarget(today)
    if (!target) return reply.code(500).send({ error: '干员池为空' })

    return reply.send({ completed: false, target })
  })

  // ---- 提交每日挑战 ----
  app.post('/submit', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '未登录' })

    const body = submitSchema.safeParse(req.body)
    if (!body.success) return reply.code(400).send({ error: '参数错误' })

    const today = new Date().toISOString().slice(0, 10)

    // 检查是否已提交
    const existing = await prisma.dailyChallenge.findUnique({
      where: { userId_date: { userId, date: today } },
    })
    if (existing) return reply.code(409).send({ error: '今日已提交过' })

    const target = await getDailyTarget(today)
    if (!target) return reply.code(500).send({ error: '干员池为空' })

    const { guessCount, timeSpent } = body.data
    // 只有 6 次以内算赢，最多 8 次
    const result = guessCount <= 6 ? 'WIN' as const : guessCount <= 8 ? 'WIN' as const : 'LOSS' as const

    const record = await prisma.dailyChallenge.create({
      data: { userId, date: today, targetId: target.id, result, guessCount, timeSpent },
    })

    // WIN 加分
    if (result === 'WIN') {
      const points = guessCount <= 3 ? 50 : 30
      await prisma.user.update({ where: { id: userId }, data: { points: { increment: points } } })
    }

    return reply.send({ record, result, pointsEarned: result === 'WIN' ? (guessCount <= 3 ? 50 : 30) : 0 })
  })

  // ---- 每日挑战历史 ----
  app.get('/history', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '未登录' })

    const records = await prisma.dailyChallenge.findMany({
      where: { userId },
      orderBy: { completedAt: 'desc' },
      take: 30,
      select: { date: true, result: true, guessCount: true, timeSpent: true, completedAt: true },
    })

    const winCount = records.filter(r => r.result === 'WIN').length
    const streak = (() => {
      let s = 0
      for (const r of records) {
        if (r.result !== 'WIN') break
        s++
      }
      return s
    })()

    return reply.send({ records, winCount, total: records.length, currentStreak: streak })
  })
}
