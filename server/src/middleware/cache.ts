/**
 * 缓存中间件 — Redis + 内存降级
 *
 * 策略：
 * - 排行榜：60s
 * - 统计：30s
 * - 每日挑战目标：24h
 * - 干员搜索：10min
 *
 * 本地开发无 Redis 时自动降级为内存 LRU
 */

import type { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

// ====== 内存 LRU 缓存（Redis 降级方案） ======

interface CacheEntry { data: any; expiresAt: number }
const memoryCache = new Map<string, CacheEntry>()
const MAX_CACHE_SIZE = 500

function memGet(key: string): any | null {
  const entry = memoryCache.get(key)
  if (!entry) return null
  if (Date.now() > entry.expiresAt) {
    memoryCache.delete(key)
    return null
  }
  return entry.data
}

function memSet(key: string, data: any, ttlMs: number): void {
  // LRU 淘汰
  if (memoryCache.size >= MAX_CACHE_SIZE) {
    const oldestKey = memoryCache.keys().next().value
    if (oldestKey) memoryCache.delete(oldestKey)
  }
  memoryCache.set(key, { data, expiresAt: Date.now() + ttlMs })
}

// ====== Redis 客户端（可选） ======

let redisClient: any = null

/** 尝试连接 Redis，失败则降级为内存缓存 */
export async function initRedis(redisUrl?: string): Promise<boolean> {
  if (!redisUrl) {
    console.log('📦 Redis 未配置，使用内存缓存')
    return false
  }
  try {
    // 动态导入 ioredis（未安装时降级）
    const Redis = (await import('ioredis')).default
    redisClient = new Redis(redisUrl, { retryStrategy: () => null })
    await redisClient.ping()
    console.log('✅ Redis 连接成功')
    return true
  } catch {
    console.log('⚠️ Redis 连接失败，降级为内存缓存')
    redisClient = null
    return false
  }
}

/** 通用缓存读写 */
export async function cacheGet<T>(key: string): Promise<T | null> {
  // 优先 Redis
  if (redisClient) {
    try {
      const data = await redisClient.get(key)
      if (data) return JSON.parse(data)
    } catch { /* fallthrough */ }
  }
  // 降级内存
  return memGet(key)
}

export async function cacheSet(key: string, data: any, ttlMs: number): Promise<void> {
  const ttlSec = Math.ceil(ttlMs / 1000)
  if (redisClient) {
    try {
      await redisClient.setex(key, ttlSec, JSON.stringify(data))
      return
    } catch { /* fallthrough */ }
  }
  memSet(key, data, ttlMs)
}

export async function cacheDel(key: string): Promise<void> {
  if (redisClient) {
    try { await redisClient.del(key) } catch {}
  }
  memoryCache.delete(key)
}

// ====== 缓存键生成 ======

export const CACHE_KEYS = {
  leaderboard: (type: string, limit: number) => `lb:${type}:${limit}`,
  stats: () => 'stats:overview',
  dailyTarget: (date: string) => `daily:target:${date}`,
  operatorSearch: (query: string) => `op:search:${query.toLowerCase()}`,
}

// ====== 缓存 TTL ======

export const CACHE_TTL = {
  LEADERBOARD: 60 * 1000,       // 1 分钟
  STATS: 30 * 1000,             // 30 秒
  DAILY_TARGET: 24 * 60 * 60 * 1000,  // 24 小时
  OPERATOR_SEARCH: 10 * 60 * 1000,    // 10 分钟
}

// ====== Fastify 缓存中间件 ======

/** 为指定路由添加缓存 */
export function withCache(ttlMs: number, keyFn: (req: FastifyRequest) => string) {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    // 只缓存 GET 请求
    if (req.method !== 'GET') return

    const key = keyFn(req)
    const cached = await cacheGet(key)
    if (cached) {
      reply.header('X-Cache', 'HIT')
      reply.header('X-Cache-TTL', Math.ceil(ttlMs / 1000))
      return reply.send(cached)
    }

    // 包装 reply.send 以拦截响应数据
    const originalSend = reply.send.bind(reply)
    reply.send = function (payload: any) {
      if (reply.statusCode === 200 && payload) {
        const data = typeof payload === 'string' ? JSON.parse(payload) : payload
        cacheSet(key, data, ttlMs)
        reply.header('X-Cache', 'MISS')
      }
      return originalSend(payload)
    }
  }
}

// ====== 注册缓存 ======

export function registerCache(app: FastifyInstance) {
  // 排行榜缓存
  app.addHook('onRequest', async (req, reply) => {
    if (req.routerPath === '/api/leaderboard' && req.method === 'GET') {
      const query = req.query as { type?: string; limit?: string }
      const key = CACHE_KEYS.leaderboard(query.type || 'points', Number(query.limit) || 20)
      const cached = await cacheGet(key)
      if (cached) {
        reply.header('X-Cache', 'HIT')
        return reply.send(cached)
      }
      const originalSend = reply.send.bind(reply)
      reply.send = function (payload: any) {
        if (reply.statusCode === 200) {
          const data = typeof payload === 'string' ? JSON.parse(payload) : payload
          cacheSet(key, data, CACHE_TTL.LEADERBOARD)
        }
        return originalSend(payload)
      }
    }
  })

  // 统计缓存
  app.addHook('onRequest', async (req, reply) => {
    if (req.routerPath === '/api/stats/overview' && req.method === 'GET') {
      const key = CACHE_KEYS.stats()
      const cached = await cacheGet(key)
      if (cached) {
        reply.header('X-Cache', 'HIT')
        return reply.send(cached)
      }
      const originalSend = reply.send.bind(reply)
      reply.send = function (payload: any) {
        if (reply.statusCode === 200) {
          const data = typeof payload === 'string' ? JSON.parse(payload) : payload
          cacheSet(key, data, CACHE_TTL.STATS)
        }
        return originalSend(payload)
      }
    }
  })
}

// ====== 缓存失效 ======

/** 用户提交战绩后清除相关缓存 */
export async function invalidateGameCache(): Promise<void> {
  await Promise.all([
    cacheDel(CACHE_KEYS.stats()),
    cacheDel(CACHE_KEYS.leaderboard('points', 20)),
    cacheDel(CACHE_KEYS.leaderboard('points', 100)),
    cacheDel(CACHE_KEYS.leaderboard('wins', 20)),
    cacheDel(CACHE_KEYS.leaderboard('wins', 100)),
  ])
}

/** 每日挑战提交后清除 */
export async function invalidateDailyCache(): Promise<void> {
  await cacheDel(CACHE_KEYS.stats())
}
