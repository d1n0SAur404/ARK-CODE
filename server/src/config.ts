/**
 * 环境变量配置
 */

function required(key: string, fallback?: string): string {
  const val = process.env[key] ?? fallback
  if (!val) {
    throw new Error(`Missing env var: ${key}`)
  }
  return val
}

export const env = {
  DATABASE_URL: required('DATABASE_URL', 'postgresql://arkcode:arkcode123@localhost:5432/arkcode?schema=public'),
  REDIS_URL: required('REDIS_URL', 'redis://localhost:6379'),
  JWT_SECRET: required('JWT_SECRET', 'ark-code-dev-secret'),
  JWT_EXPIRES_IN: required('JWT_EXPIRES_IN', '7d'),
  PORT: Number(required('PORT', '3000')),
  HOST: required('HOST', '0.0.0.0'),
  CORS_ORIGIN: required('CORS_ORIGIN', 'http://localhost:5187'),
  NODE_ENV: required('NODE_ENV', 'development'),
} as const
