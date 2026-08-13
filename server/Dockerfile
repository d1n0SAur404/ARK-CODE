# ARK CODE Server — Fly.io 生产镜像
# build context: server/
FROM node:22-alpine

WORKDIR /app

# 1. 依赖（含 prisma / tsx CLI）
COPY package.json package-lock.json ./
RUN npm install

# 2. 源码 + Prisma
COPY src ./src
COPY prisma ./prisma
COPY tsconfig.json ./

# 3. 干员数据（import-operators 需要）
COPY data/operators.json ./data/operators.json

# 4. 启动脚本
COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x entrypoint.sh

# 5. 生成 Prisma Client
RUN npx prisma generate

ENV NODE_ENV=production
ENV HOST=0.0.0.0
EXPOSE 8080

CMD ["./entrypoint.sh"]
