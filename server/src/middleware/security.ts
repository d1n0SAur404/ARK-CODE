/**
 * 安全防护中间件
 * - 速率限制（内存版，无需 Redis）
 * - 安全响应头
 * - 输入消毒
 * - 请求体大小限制
 */

import type { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

// ====== 速率限制 ======

interface RateBucket { count: number; resetAt: number }
const rateBuckets = new Map<string, RateBucket>()

interface RateLimitOptions {
  windowMs: number  // 时间窗口
  max: number       // 最大请求数
}

/** 速率限制中间件工厂 */
export function rateLimit(opts: RateLimitOptions) {
  return (req: FastifyRequest, reply: FastifyReply) => {
    const ip = req.ip || 'unknown'
    const key = `${ip}:${req.routerPath || req.url}`

    const now = Date.now()
    let bucket = rateBuckets.get(key)

    if (!bucket || now > bucket.resetAt) {
      bucket = { count: 0, resetAt: now + opts.windowMs }
      rateBuckets.set(key, bucket)
    }

    bucket.count++

    // 设置响应头
    reply.header('X-RateLimit-Limit', opts.max)
    reply.header('X-RateLimit-Remaining', Math.max(0, opts.max - bucket.count))
    reply.header('X-RateLimit-Reset', Math.ceil(bucket.resetAt / 1000))

    if (bucket.count > opts.max) {
      reply.code(429).send({
        error: '请求过于频繁',
        message: `请在 ${Math.ceil((bucket.resetAt - now) / 1000)} 秒后重试`,
        retryAfter: Math.ceil((bucket.resetAt - now) / 1000),
      })
      return true // 表示已拦截
    }
    return false
  }
}

// 定期清理过期 bucket（每 5 分钟）
setInterval(() => {
  const now = Date.now()
  for (const [key, bucket] of rateBuckets) {
    if (now > bucket.resetAt) rateBuckets.delete(key)
  }
}, 5 * 60 * 1000)

// ====== 安全响应头 ======

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'X-DNS-Prefetch-Control': 'off',
  'X-Download-Options': 'noopen',
}

/** 安全头中间件 */
export function securityHeaders(req: FastifyRequest, reply: FastifyReply, done: () => void) {
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    reply.header(key, value)
  }
  done()
}

// ====== 输入消毒 ======

/** HTML 转义，防止 XSS */
export function sanitizeString(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

/** SQL 注入检测（基础） */
const SQL_INJECTION_PATTERNS = [
  /(\b(OR|AND)\b\s+\d+\s*=\s*\d+)/i,
  /(\bUNION\b\s+\bSELECT\b)/i,
  /(\bDROP\b\s+\bTABLE\b)/i,
  /(\bINSERT\b\s+\bINTO\b)/i,
  /(\bDELETE\b\s+\bFROM\b)/i,
  /(--\s*$)/,
  /(\bor\b\s+1\s*=\s*1)/i,
]

export function detectSqlInjection(input: string): boolean {
  return SQL_INJECTION_PATTERNS.some(p => p.test(input))
}

/** 请求体消毒中间件 */
export function sanitizeBody(req: FastifyRequest, _reply: FastifyReply, done: () => void) {
  if (req.body && typeof req.body === 'object') {
    sanitizeObject(req.body)
  }
  done()
}

function sanitizeObject(obj: any): void {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      // 检测 SQL 注入
      if (detectSqlInjection(obj[key])) {
        obj[key] = obj[key].replace(/[;'"\\]/g, '')
      }
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      sanitizeObject(obj[key])
    }
  }
}

// ====== 注册所有安全中间件 ======

export function registerSecurity(app: FastifyInstance) {
  // 1. 安全头
  app.addHook('onRequest', securityHeaders)

  // 2. 输入消毒
  app.addHook('preValidation', sanitizeBody)

  // 3. 全局速率限制（每分钟 60 次/IP）
  app.addHook('onRequest', (req, reply, done) => {
    const blocked = rateLimit({ windowMs: 60 * 1000, max: 60 })(req, reply)
    if (blocked) return done(new Error('rate limited'))
    done()
  })

  // 4. 登录接口单独限制（每分钟 5 次/IP，防暴力破解）
  app.addHook('onRequest', (req, reply, done) => {
    if ((req.routerPath === '/api/auth/login' || req.routerPath === '/api/auth/register') && req.method === 'POST') {
      const blocked = rateLimit({ windowMs: 60 * 1000, max: 5 })(req, reply)
      if (blocked) return done(new Error('rate limited'))
    }
    done()
  })
}
