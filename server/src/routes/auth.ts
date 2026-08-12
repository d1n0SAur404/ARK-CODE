/**
 * 认证路由 — 注册 / 登录 / 退出 / me
 */

import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma.js'
import { hashPassword, verifyPassword } from '../lib/password.js'
import { signToken, verifyToken } from '../lib/jwt.js'

// ============ Schemas ============

const registerSchema = z.object({
  username: z.string().min(2).max(32),
  email: z.string().email(),
  password: z.string().min(6).max(128),
})

const loginSchema = z.object({
  username: z.string().min(1), // 用户名或邮箱
  password: z.string().min(1),
})

// ============ Routes ============

export async function authRoutes(app: FastifyInstance) {
  // ---- 注册 ----
  app.post('/register', async (req, reply) => {
    const body = registerSchema.safeParse(req.body)
    if (!body.success) {
      return reply.code(400).send({ error: body.error.errors[0]?.message ?? '参数错误' })
    }
    const { username, email, password } = body.data

    // 检查重复
    const exists = await prisma.user.findFirst({
      where: { OR: [{ username }, { email }] },
    })
    if (exists) {
      const field = exists.username === username ? '用户名' : '邮箱'
      return reply.code(409).send({ error: `${field}已被注册` })
    }

    // 创建用户
    const passwordHash = await hashPassword(password)
    const user = await prisma.user.create({
      data: { username, email, passwordHash },
    })

    const token = signToken({ userId: user.id, username: user.username })

    // 创建会话
    await prisma.session.create({
      data: {
        userId: user.id,
        token,
        ip: req.ip,
        userAgent: req.headers['user-agent'] ?? null,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    })

    // 更新最后登录
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    })

    return reply.send({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        points: user.points,
        avatar: user.avatar,
        bio: user.bio,
        gender: user.gender,
      },
    })
  })

  // ---- 登录 ----
  app.post('/login', async (req, reply) => {
    const body = loginSchema.safeParse(req.body)
    if (!body.success) {
      return reply.code(400).send({ error: '参数错误' })
    }
    const { username: input, password } = body.data

    const user = await prisma.user.findFirst({
      where: { OR: [{ username: input }, { email: input }] },
    })
    if (!user) {
      return reply.code(401).send({ error: '用户名或密码错误' })
    }

    const ok = await verifyPassword(password, user.passwordHash)
    if (!ok) {
      return reply.code(401).send({ error: '用户名或密码错误' })
    }

    const token = signToken({ userId: user.id, username: user.username })

    // session 写入（跳过如果数据库只读）
    try {
      await prisma.session.create({
        data: {
          userId: user.id, token, ip: req.ip,
          userAgent: req.headers['user-agent'] ?? null,
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      })
      await prisma.user.update({
        where: { id: user.id },
        data: { lastLoginAt: new Date() },
      })
    } catch { /* 数据库只读时跳过 */ }

    return reply.send({
      token,
      user: { id: user.id, username: user.username, email: user.email, points: user.points, avatar: user.avatar, bio: user.bio, gender: user.gender },
    })
  })

  // ---- 退出 ----
  app.post('/logout', async (req, reply) => {
    const auth = req.headers.authorization
    if (auth?.startsWith('Bearer ')) {
      const token = auth.slice(7)
      await prisma.session.deleteMany({ where: { token } }).catch(() => {})
    }
    return reply.send({ ok: true })
  })

  // ---- 当前用户 ----
  app.get('/me', async (req, reply) => {
    const auth = req.headers.authorization
    if (!auth?.startsWith('Bearer ')) {
      return reply.code(401).send({ error: '未登录' })
    }
    const payload = verifyToken(auth.slice(7))
    if (!payload) {
      return reply.code(401).send({ error: 'token无效' })
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
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
        lastLoginAt: true,
        createdAt: true,
      },
    })
    if (!user) {
      return reply.code(404).send({ error: '用户不存在' })
    }

    return reply.send({ user })
  })
}
