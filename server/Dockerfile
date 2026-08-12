# ---- 基础 ----
FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm

# ---- 构建 ----
FROM base AS build
WORKDIR /app
COPY server/package.json server/pnpm-lock.yaml* server/package-lock.json* ./
RUN if [ -f pnpm-lock.yaml ]; then pnpm install --prod --frozen-lockfile; elif [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi
RUN npx prisma generate
COPY server/src ./src
COPY server/prisma ./prisma
COPY server/tsconfig.json ./

# ---- 运行 ----
FROM base AS runner
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/src ./src
COPY server/package.json ./

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

CMD ["npx", "tsx", "src/index.ts"]
