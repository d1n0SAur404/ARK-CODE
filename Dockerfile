# ARK CODE Server — CloudBase Git 部署镜像
# build context: 仓库根目录 (ark-guess/)
FROM node:22-alpine

WORKDIR /app

# 1. 复制依赖清单并安装（含 prisma / tsx CLI），用腾讯云 npm 镜像加速
# --ignore-scripts：跳过 postinstall 的 prisma generate（此时 schema 还没复制）
COPY server/package.json server/package-lock.json ./
RUN npm config set registry https://mirrors.cloud.tencent.com/npm/ && npm install --ignore-scripts

# 2. 复制源码与 Prisma
COPY server/src ./src
COPY server/prisma ./prisma
COPY server/tsconfig.json ./

# 3. 复制干员数据（import-operators 需要）
COPY src/data/operators.json ./data/operators.json

# 4. 复制启动脚本
COPY server/entrypoint.sh ./entrypoint.sh
RUN chmod +x entrypoint.sh

# 5. 生成 Prisma Client
RUN npx prisma generate

ENV NODE_ENV=production
ENV HOST=0.0.0.0
EXPOSE 8080

CMD ["./entrypoint.sh"]
