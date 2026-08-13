#!/bin/sh
set -e

echo "==> 生成 Prisma Client"
npx prisma generate

echo "==> 同步数据库结构 (db push)"
npx prisma db push --skip-generate --accept-data-loss

echo "==> 导入种子数据（用户/记录/成就）"
npx tsx prisma/seed.ts || echo "⚠️ seed 失败，继续..."

echo "==> 导入干员数据"
npx tsx prisma/import-operators.ts || echo "⚠️ 干员导入失败，继续..."

echo "==> 启动服务"
exec npx tsx src/index.ts
