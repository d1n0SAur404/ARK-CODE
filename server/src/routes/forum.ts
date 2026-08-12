/**
 * 论坛路由 — 帖子 / 评论 / 管理
 * 限速：每用户每分钟最多 3 次发帖/评论
 */
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma.js'
import { verifyToken } from '../lib/jwt.js'

// ====== 限速 ======
const rateMap = new Map<string, { count: number; resetAt: number }>()
function checkRate(userId: string, max = 3): boolean {
  const now = Date.now()
  const entry = rateMap.get(userId)
  if (!entry || now > entry.resetAt) {
    rateMap.set(userId, { count: 1, resetAt: now + 60000 })
    return true
  }
  if (entry.count >= max) return false
  entry.count++
  return true
}

// ====== 认证 ======
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

async function isStaff(userId: string): Promise<boolean> {
  const role = await getUserRole(userId)
  return role === 'ADMIN' || role === 'MODERATOR'
}

async function isAdmin(userId: string): Promise<boolean> {
  const role = await getUserRole(userId)
  return role === 'ADMIN'
}

// ====== Schemas ======
const postSchema = z.object({ title: z.string().min(1).max(100), content: z.string().min(1).max(500) })
const commentSchema = z.object({ postId: z.number(), content: z.string().min(1).max(300) })
const adminSchema = z.object({
  action: z.enum(['delete_post', 'pin_post', 'delete_comment', 'ban_user', 'unban_user']),
  targetId: z.union([z.number(), z.string()]),
})

export async function forumRoutes(app: FastifyInstance) {
  // ========== 帖子 ==========

  // ---- 列表（隐藏已删除） ----
  app.get('/list', async (_req, reply) => {
    const posts = await prisma.forumPost.findMany({
      where: { isDeleted: false },
      orderBy: [{ isPinned: 'desc' }, { createdAt: 'desc' }],
      take: 50,
      include: { comments: { orderBy: { createdAt: 'asc' }, take: 5 } },
    })
    return reply.send({ posts })
  })

  // ---- 发帖（需登录 + 限速） ----
  app.post('/create', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '请先登录' })
    if (!checkRate(userId)) return reply.code(429).send({ error: '发言过快，请 1 分钟后再试' })

    const body = postSchema.safeParse(req.body)
    if (!body.success) return reply.code(400).send({ error: '标题或内容不合法' })

    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user || user.isBanned) return reply.code(403).send({ error: '你已被封禁' })

    const post = await prisma.forumPost.create({
      data: { author: user.username, avatar: user.avatar || '👤', title: body.data.title, content: body.data.content },
    })
    return reply.send({ post })
  })

  // ---- 点赞 ----
  app.post('/like', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '请先登录' })
    const { postId } = req.body as any
    if (!postId) return reply.code(400).send({ error: '参数错误' })
    await prisma.forumPost.update({ where: { id: postId }, data: { likes: { increment: 1 } } })
    return reply.send({ ok: true })
  })

  // ========== 评论 ==========

  // ---- 某帖子的评论 ----
  app.get('/comments/:postId', async (req, reply) => {
    const postId = Number((req.params as any).postId)
    const comments = await prisma.forumComment.findMany({
      where: { postId },
      orderBy: { createdAt: 'asc' },
    })
    return reply.send({ comments })
  })

  // ---- 发评论（需登录 + 限速） ----
  app.post('/comment', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '请先登录' })
    if (!checkRate(userId)) return reply.code(429).send({ error: '发言过快，请 1 分钟后再试' })

    const body = commentSchema.safeParse(req.body)
    if (!body.success) return reply.code(400).send({ error: '评论内容不合法' })

    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user || user.isBanned) return reply.code(403).send({ error: '你已被封禁' })

    const comment = await prisma.forumComment.create({
      data: { postId: body.data.postId, author: user.username, avatar: user.avatar || '👤', content: body.data.content },
    })
    return reply.send({ comment })
  })

  // ========== 管理 ==========

  // ---- 角色检查 ----
  app.get('/admin/check', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '请先登录' })
    const role = await getUserRole(userId)
    return reply.send({ role, isAdmin: role === 'ADMIN', isStaff: role === 'ADMIN' || role === 'MODERATOR' })
  })

  // ---- 内容管理（版主+管理员） ----
  app.post('/admin', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '请先登录' })
    if (!(await isStaff(userId))) return reply.code(403).send({ error: '权限不足' })

    const body = adminSchema.safeParse(req.body)
    if (!body.success) return reply.code(400).send({ error: '参数错误' })

    switch (body.data.action) {
      case 'delete_post':
        await prisma.forumPost.update({ where: { id: body.data.targetId as number }, data: { isDeleted: true } })
        return reply.send({ ok: true })
      case 'pin_post':
        const post = await prisma.forumPost.findUnique({ where: { id: body.data.targetId as number } })
        await prisma.forumPost.update({ where: { id: body.data.targetId as number }, data: { isPinned: !post?.isPinned } })
        return reply.send({ ok: true })
      case 'delete_comment':
        await prisma.forumComment.delete({ where: { id: body.data.targetId as number } })
        return reply.send({ ok: true })
    }
  })

  // ---- 用户管理（仅管理员） ----
  app.post('/admin/user', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '请先登录' })
    if (!(await isAdmin(userId))) return reply.code(403).send({ error: '仅管理员可执行此操作' })

    const body = z.object({
      action: z.enum(['ban_user', 'unban_user', 'promote_moderator', 'demote_moderator']),
      targetId: z.string(),
    }).safeParse(req.body)
    if (!body.success) return reply.code(400).send({ error: '参数错误' })

    switch (body.data.action) {
      case 'ban_user':
        await prisma.user.update({ where: { id: body.data.targetId }, data: { isBanned: true, banReason: '违规' } })
        return reply.send({ ok: true })
      case 'unban_user':
        await prisma.user.update({ where: { id: body.data.targetId }, data: { isBanned: false, banReason: null } })
        return reply.send({ ok: true })
      case 'promote_moderator':
        await prisma.user.update({ where: { id: body.data.targetId }, data: { role: 'MODERATOR' } })
        return reply.send({ ok: true })
      case 'demote_moderator':
        await prisma.user.update({ where: { id: body.data.targetId }, data: { role: 'USER' } })
        return reply.send({ ok: true })
    }
  })

  // ---- 用户列表（管理员） ----
  app.get('/admin/users', async (req, reply) => {
    const userId = getUserId(req)
    if (!userId) return reply.code(401).send({ error: '请先登录' })
    if (!(await isAdmin(userId))) return reply.code(403).send({ error: '权限不足' })

    const users = await prisma.user.findMany({ select: { id: true, username: true, role: true, isBanned: true, createdAt: true }, orderBy: { createdAt: 'desc' }, take: 50 })
    return reply.send({ users })
  })
}
