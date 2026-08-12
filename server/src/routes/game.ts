/**
 * 游戏路由 — 提交战绩
 */

import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma.js'
import { verifyToken } from '../lib/jwt.js'

const submitSchema = z.object({
  mode: z.enum(['DAILY', 'ENDLESS', 'TIMED', 'MULTIPLAYER', 'DRAW_GUESS']),
  difficulty: z.enum(['EASY', 'MEDIUM', 'HARD']),
  result: z.enum(['WIN', 'LOSS', 'GIVE_UP']),
  targetId: z.string().optional(),
  guessCount: z.number().int().min(0).default(0),
  timeSpent: z.number().int().min(0).optional(),
  shareGrid: z.string().optional(),
})

function getUserId(req: { headers: { authorization?: string } }): string | null {
  const auth = req.headers.authorization
  if (!auth?.startsWith('Bearer ')) return null
  const payload = verifyToken(auth.slice(7))
  return payload?.userId ?? null
}

export async function gameRoutes(app: FastifyInstance) {
  // ---- 提交战绩 ----
  app.post('/submit', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '未登录' })

    const body = submitSchema.safeParse(req.body)
    if (!body.success) {
      return reply.code(400).send({ error: body.error.errors[0]?.message ?? '参数错误' })
    }

    const record = await prisma.gameRecord.create({
      data: { userId, ...body.data },
    })

    // 胜利加分
    if (body.data.result === 'WIN') {
      const points =
        body.data.difficulty === 'HARD' ? 50 :
        body.data.difficulty === 'MEDIUM' ? 30 : 15
      await prisma.user.update({
        where: { id: userId },
        data: { points: { increment: points } },
      })
    }

    return reply.send({ record, points: body.data.result === 'WIN' ? record : null })
  })

  // ---- 获取战绩列表 ----
  app.get('/records', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '未登录' })

    const { limit = '20', offset = '0' } = req.query as { limit?: string; offset?: string }

    const records = await prisma.gameRecord.findMany({
      where: { userId },
      orderBy: { playedAt: 'desc' },
      take: Math.min(Number(limit), 100),
      skip: Number(offset),
    })

    const total = await prisma.gameRecord.count({ where: { userId } })

    return reply.send({ records, total })
  })
}
