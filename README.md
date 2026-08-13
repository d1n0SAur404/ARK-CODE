# 方舟密令 · ARK CODE

一款基于《明日方舟》题材的猜角色网页游戏。通过有限的线索提示逐步缩小范围猜出目标干员，融合每日挑战、多人实时对战、你画我猜等多种玩法，配套完整的账号体系、排行榜、论坛社区与成就系统。

## 技术框架

| 层 | 技术栈 |
|----|--------|
| **前端** | React 18 + TypeScript + Vite + Tailwind CSS + Zustand + React Router |
| **后端** | Node.js + Fastify + @fastify/websocket（WebSocket 实时通信） |
| **数据层** | Prisma ORM + PostgreSQL（Neon Serverless） |
| **认证** | JWT 令牌 + bcrypt 密码加密 + Session 会话管理 |
| **部署** | 前端 CloudStudio / 后端腾讯云 CloudBase 云托管（Docker）/ 数据库 Neon |

## 核心功能

1. **三种单人模式**：每日挑战、无限练习、限时挑战，共享干员属性（稀有度 / 职业 / 阵营 / 种族）线索反馈机制
2. **多人实时联机**：WebSocket 房间制对战，支持建房 / 加入 / 观战 / 准备 / 回合制猜角色
3. **你画我猜**：实时画板 + 在线猜画，支持调色板、撤销清空
4. **干员图鉴**：439 名干员完整数据（含异格干员、阵营、出身地、感染状态等）
5. **社区系统**：排行榜、论坛（发帖 / 评论 / 点赞 / 置顶 / 封禁管理）、商店、成就墙

## 核心技术亮点

- **WebSocket 全双工实时通信**：多人联机与你画我猜基于 `@fastify/websocket`，房间状态维护在服务端内存，实现毫秒级实时同步
- **数据种子体系**：一键导入 439 干员 JSON + 种子用户 / 战绩 / 成就 / 论坛守则，启动时自动 `prisma db push` + 种子导入
- **多阶段 Docker 构建**：build 阶段安装依赖并生成 Prisma Client，runner 阶段只保留运行必需文件，镜像体积从 874MB 压缩至 300MB 级
- **类型安全全链路**：前端 TypeScript + 后端 Zod 参数校验 + Prisma 类型推断，端到端类型保障
- **安全防护**：JWT 鉴权、bcrypt 加密、论坛限速、管理权限分级（用户 / 版主 / 管理员）

## 部署架构

```
浏览器 ──→ CloudStudio（前端静态站）
              │  HTTPS / WSS
              ▼
         CloudBase 云托管（后端 Fastify 容器）
              │  PostgreSQL 协议
              ▼
         Neon PostgreSQL（云数据库）
```

## 目录结构

```
ark-guess/
├── src/                    # 前端源码
│   ├── pages/              # 页面组件
│   ├── features/game/      # 游戏组件（画板 / 棋盘 / 输入）
│   ├── components/         # 通用组件
│   ├── store/              # Zustand 状态管理（auth / game / theme）
│   ├── data/               # 干员数据（operators.json）
│   └── types/              # TypeScript 类型定义
├── server/                 # 后端源码
│   ├── src/
│   │   ├── routes/         # 路由（auth / game / forum / ws 等）
│   │   ├── engine/         # 游戏引擎（房间 / 画猜房间）
│   │   ├── middleware/     # 中间件（缓存 / 安全 / 错误）
│   │   └── lib/            # 工具库（jwt / prisma / password）
│   ├── prisma/             # 数据库 Schema + 种子脚本
│   ├── Dockerfile          # 多阶段构建镜像
│   └── entrypoint.sh       # 启动脚本（建表 + 种子 + 启动）
└── Dockerfile              # 根目录部署镜像（CloudBase Git 部署用）
```

## 本地开发

```bash
# 后端
cd server
npm install
npm run dev              # 启动 Fastify（默认 3000 端口）

# 前端
npm install
npm run dev              # 启动 Vite（默认 5173 端口）
```

本地开发需要 PostgreSQL（`docker compose up -d` 可一键启动）或配置 `DATABASE_URL` 指向任意 PostgreSQL。

## 线上地址

- 前端：https://306869d4c8b9467489a430493a6e63ab.bj6.agentos-app.net
- 后端：https://arkcode-server-296176-8-1467509426.sh.run.tcloudbase.com
