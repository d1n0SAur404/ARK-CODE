/**
 * 全局错误处理
 */

import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'

export function errorHandler(
  error: FastifyError,
  _req: FastifyRequest,
  reply: FastifyReply,
) {
  // Zod 校验错误
  if (error.statusCode === 400 && error.message.includes('expected')) {
    return reply.code(400).send({ error: '参数格式错误' })
  }

  // 默认 500
  const statusCode = error.statusCode ?? 500
  const message = statusCode >= 500 ? '服务器内部错误' : error.message

  if (statusCode >= 500) {
    console.error('[ERROR]', error)
  }

  return reply.code(statusCode).send({ error: message })
}
