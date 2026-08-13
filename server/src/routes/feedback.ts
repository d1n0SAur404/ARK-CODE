/**
 * BUG 反馈 + 更新公告 路由
 * - 反馈：玩家提交，仅管理员可见
 * - 公告：公开展示，管理员发布
 */
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma.js'
import { verifyToken } from '../lib/jwt.js'

// ====== 认证工具 ======
function getUserId(req: any): string | null {
  const auth = req.headers.authorization
  if (!auth?.startsWith('Bearer ')) return null
  const payload = verifyToken(auth.slice(7))
  return payload?.userId ?? null
}

async function getUserRole(userId: string): Promise<'USER' | 'MODERATOR' | 'ADMIN'> {
  const user = await prisma.user.findUnique({ where: { id: userId }, select: { role: true } })
  return (user?.role as any) || 'USER'
}

// ====== Schemas ======
const feedbackSchema = z.object({ content: z.string().min(1).max(1000) })
const announcementSchema = z.object({ title: z.string().min(1).max(100), content: z.string().min(1).max(2000) })

export async function feedbackRoutes(app: FastifyInstance) {
  // ========== BUG 反馈 ==========

  // ---- 提交反馈（需登录） ----
  app.post('/feedback', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '请先登录' })

    const body = feedbackSchema.safeParse(req.body)
    if (!body.success) return reply.code(400).send({ error: '反馈内容不合法' })

    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) return reply.code(401).send({ error: '用户不存在' })

    const feedback = await prisma.feedback.create({
      data: { userId, username: user.username, content: body.data.content },
    })
    return reply.send({ ok: true, id: feedback.id })
  })

  // ---- 反馈列表（仅管理员） ----
  app.get('/feedback', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '请先登录' })
    const role = await getUserRole(userId)
    if (role !== 'ADMIN') return reply.code(403).send({ error: '仅管理员可查看反馈' })

    const feedbacks = await prisma.feedback.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    })
    return reply.send({ feedbacks })
  })

  // ---- 标记反馈状态（仅管理员） ----
  app.post('/feedback/status', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '请先登录' })
    const role = await getUserRole(userId)
    if (role !== 'ADMIN') return reply.code(403).send({ error: '仅管理员可操作' })

    const { id, status } = req.body as any
    if (!id || !['pending', 'resolved'].includes(status)) return reply.code(400).send({ error: '参数错误' })

    await prisma.feedback.update({ where: { id }, data: { status } })
    return reply.send({ ok: true })
  })

  // ========== 更新公告 ==========

  // ---- 公告列表（公开） ----
  app.get('/announcements', async (_req, reply) => {
    const announcements = await prisma.announcement.findMany({
      orderBy: [{ isPinned: 'desc' }, { createdAt: 'desc' }],
      take: 20,
    })
    return reply.send({ announcements })
  })

  // ---- 发布公告（仅管理员） ----
  app.post('/announcements', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '请先登录' })
    const role = await getUserRole(userId)
    if (role !== 'ADMIN') return reply.code(403).send({ error: '仅管理员可发布公告' })

    const body = announcementSchema.safeParse(req.body)
    if (!body.success) return reply.code(400).send({ error: '公告内容不合法' })

    const announcement = await prisma.announcement.create({
      data: { title: body.data.title, content: body.data.content },
    })
    return reply.send({ ok: true, id: announcement.id })
  })
}
