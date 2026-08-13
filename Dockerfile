# ARK CODE Server — CloudBase Git 部署镜像（多阶段，精简体积）
# build context: 仓库根目录 (ark-guess/)

# ---- 构建阶段 ----
FROM node:22-alpine AS build
WORKDIR /app
COPY server/package.json server/package-lock.json ./
RUN npm config set registry https://mirrors.cloud.tencent.com/npm/ && npm install --omit=dev --ignore-scripts

# ---- 运行阶段 ----
FROM node:22-alpine AS runner
WORKDIR /app

# 复制依赖（含 tsx、prisma 等运行必需）
COPY --from=build /app/node_modules ./node_modules

# 复制源码与 Prisma
COPY server/src ./src
COPY server/prisma ./prisma
COPY server/tsconfig.json ./

# 复制干员数据
COPY src/data/operators.json ./data/operators.json

# 复制启动脚本
COPY server/entrypoint.sh ./entrypoint.sh
RUN chmod +x entrypoint.sh

# 生成 Prisma Client
RUN npx prisma generate

# 清理缓存减小体积
RUN npm cache clean --force 2>/dev/null || true

ENV NODE_ENV=production
ENV HOST=0.0.0.0
EXPOSE 8080

CMD ["./entrypoint.sh"]
