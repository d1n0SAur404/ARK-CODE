/**
 * ARK CODE Server — Fastify 入口
 */
import Fastify from 'fastify'
import cors from '@fastify/cors'
import cookie from '@fastify/cookie'
import ws from '@fastify/websocket'
import { env } from './config.js'
import { authRoutes } from './routes/auth.js'
import { userRoutes } from './routes/user.js'
import { gameRoutes } from './routes/game.js'
import { dailyRoutes } from './routes/daily.js'
import { leaderboardRoutes } from './routes/leaderboard.js'
import { statsRoutes } from './routes/stats.js'
import { wsRoutes } from './routes/ws.js'
import { drawGuessWsRoutes } from './routes/ws-draw.js'
import { forumRoutes } from './routes/forum.js'
import { feedbackRoutes } from './routes/feedback.js'
import { errorHandler } from './middleware/error.js'
import { registerSecurity } from './middleware/security.js'
import { registerCache, initRedis } from './middleware/cache.js'

async function main() {
  // 初始化 Redis（失败时自动降级为内存缓存）
  await initRedis(env.REDIS_URL)

  const app = Fastify({
    bodyLimit: 100 * 1024, // 100KB
    logger: env.NODE_ENV === 'production'
      ? true
      : {
          transport: { target: 'pino-pretty', options: { colorize: true, translateTime: 'HH:MM:ss' } },
        },
  })

  // 插件
  await app.register(cors, { origin: env.CORS_ORIGIN === 'true' ? true : env.CORS_ORIGIN, credentials: true })
  await app.register(cookie, { secret: env.JWT_SECRET })
  await app.register(ws)

  // 安全防护 + 缓存
  registerSecurity(app)
  registerCache(app)

  // 错误处理
  app.setErrorHandler(errorHandler)

  // 健康检查
  app.get('/health', () => ({ status: 'ok', timestamp: Date.now() }))

  // 路由
  await app.register(authRoutes, { prefix: '/api/auth' })
  await app.register(userRoutes, { prefix: '/api/user' })
  await app.register(gameRoutes, { prefix: '/api/game' })
  await app.register(dailyRoutes, { prefix: '/api/daily' })
  await app.register(leaderboardRoutes, { prefix: '/api/leaderboard' })
  await app.register(statsRoutes, { prefix: '/api/stats' })
  await app.register(wsRoutes)
  await app.register(drawGuessWsRoutes)
  await app.register(forumRoutes, { prefix: '/api/forum' })
  await app.register(feedbackRoutes, { prefix: '/api' })

  // 启动
  try {
    await app.listen({ port: env.PORT, host: env.HOST })
    app.log.info(`ARK CODE Server running on http://${env.HOST}:${env.PORT}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

main()
