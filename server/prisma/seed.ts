/**
 * Prisma Seed — 完整种子数据
 * 用法: npx tsx prisma/seed.ts
 */

import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 开始种子数据...\n')

  const passwordHash = await bcrypt.hash('123456', 10)
  const now = new Date()

  // ====== 1. 用户 ======
  console.log('📋 创建用户...')

  const admin = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      email: 'admin@arkcode.cn',
      passwordHash,
      gender: 'OTHER',
      role: 'ADMIN',
      points: 99999,
      avatar: '👑',
      bio: 'ARK CODE 管理员',
    },
  })

  const demo = await prisma.user.upsert({
    where: { username: 'demo' },
    update: {},
    create: {
      username: 'demo',
      email: 'demo@arkcode.cn',
      passwordHash,
      gender: 'MALE',
      points: 1200,
      avatar: '🎮',
      bio: '明日方舟，启动！',
    },
  })

  // 排行榜排名玩家
  const rankUsers = [
    { username: '博士001', email: 'player1@arkcode.cn', points: 5200, avatar: '🦁', gender: 'MALE' as const },
    { username: '罗德岛干员', email: 'player2@arkcode.cn', points: 4800, avatar: '🦊', gender: 'FEMALE' as const },
    { username: '凯尔希喵', email: 'player3@arkcode.cn', points: 3900, avatar: '🐱', gender: 'FEMALE' as const },
    { username: '刀客塔', email: 'player4@arkcode.cn', points: 3100, avatar: '⚔', gender: 'MALE' as const },
    { username: '阿米娅酱', email: 'player5@arkcode.cn', points: 2500, avatar: '🐰', gender: 'FEMALE' as const },
  ]

  const players = [admin, demo]
  for (const u of rankUsers) {
    const p = await prisma.user.upsert({
      where: { username: u.username },
      update: {},
      create: { ...u, passwordHash, bio: '方舟密令玩家' },
    })
    players.push(p)
  }
  console.log(`  ✅ ${players.length} 个用户`)

  // ====== 2. 战绩 ======
  console.log('🎮 创建战绩...')

  const recordDefs = [
    // demo — 近期战绩
    { user: demo, mode: 'DAILY', result: 'WIN', difficulty: 'HARD', guessCount: 3, daysAgo: 0 },
    { user: demo, mode: 'DAILY', result: 'WIN', difficulty: 'HARD', guessCount: 5, daysAgo: 1 },
    { user: demo, mode: 'DAILY', result: 'LOSS', difficulty: 'HARD', guessCount: 6, daysAgo: 2 },
    { user: demo, mode: 'ENDLESS', result: 'WIN', difficulty: 'EASY', guessCount: 2, daysAgo: 3 },
    { user: demo, mode: 'TIMED', result: 'WIN', difficulty: 'MEDIUM', guessCount: 4, daysAgo: 4 },
    { user: demo, mode: 'ENDLESS', result: 'WIN', difficulty: 'EASY', guessCount: 3, daysAgo: 5 },
    { user: demo, mode: 'DAILY', result: 'WIN', difficulty: 'HARD', guessCount: 4, daysAgo: 6 },
    // 排行玩家
    { user: players.find(p => p.username === '博士001')!, mode: 'DAILY', result: 'WIN', difficulty: 'HARD', guessCount: 2, daysAgo: 0 },
    { user: players.find(p => p.username === '博士001')!, mode: 'ENDLESS', result: 'WIN', difficulty: 'EASY', guessCount: 1, daysAgo: 1 },
    { user: players.find(p => p.username === '博士001')!, mode: 'TIMED', result: 'WIN', difficulty: 'MEDIUM', guessCount: 3, daysAgo: 2 },
    { user: players.find(p => p.username === '罗德岛干员')!, mode: 'DAILY', result: 'WIN', difficulty: 'HARD', guessCount: 4, daysAgo: 0 },
    { user: players.find(p => p.username === '罗德岛干员')!, mode: 'DAILY', result: 'WIN', difficulty: 'HARD', guessCount: 6, daysAgo: 1 },
    { user: players.find(p => p.username === '凯尔希喵')!, mode: 'ENDLESS', result: 'WIN', difficulty: 'MEDIUM', guessCount: 2, daysAgo: 0 },
    { user: players.find(p => p.username === '刀客塔')!, mode: 'DAILY', result: 'LOSS', difficulty: 'HARD', guessCount: 6, daysAgo: 0 },
    { user: players.find(p => p.username === '阿米娅酱')!, mode: 'TIMED', result: 'WIN', difficulty: 'EASY', guessCount: 3, daysAgo: 0 },
  ] as const

  for (const r of recordDefs) {
    const playedAt = new Date(now)
    playedAt.setDate(now.getDate() - r.daysAgo)
    playedAt.setHours(10, 0, 0, 0)

    await prisma.gameRecord.create({
      data: {
        userId: r.user.id,
        mode: r.mode as any,
        difficulty: r.difficulty as any,
        result: r.result as any,
        guessCount: r.guessCount,
        playedAt,
        targetId: `seed_${r.user.username}_${r.daysAgo}`,
      },
    })
  }
  console.log(`  ✅ ${recordDefs.length} 条战绩`)

  // ====== 3. 成就 ======
  console.log('🏅 创建成就...')

  const achievementDefs = [
    { user: demo, achievements: ['FIRST_WIN', 'STREAK_3', 'STREAK_5', 'DAILY_3', 'FAST_3', 'FAST_6', 'COLLECTOR'] },
    { user: players.find(p => p.username === '博士001')!, achievements: ['FIRST_WIN', 'STREAK_3', 'HARD_WIN', 'FIRST_BLOOD', 'FAST_3', 'DAILY_3'] },
    { user: players.find(p => p.username === '罗德岛干员')!, achievements: ['FIRST_WIN', 'STREAK_3', 'HARD_WIN', 'DAILY_3'] },
    { user: players.find(p => p.username === '凯尔希喵')!, achievements: ['FIRST_WIN', 'FAST_3'] },
  ]

  let achCount = 0
  for (const def of achievementDefs) {
    for (const a of def.achievements) {
      await prisma.userAchievement.create({
        data: { userId: def.user.id, achievement: a },
      })
      achCount++
    }
  }
  console.log(`  ✅ ${achCount} 个成就`)

  // ====== 4. 每日挑战 ======
  console.log('📅 创建每日挑战...')

  for (let i = 0; i < 7; i++) {
    const d = new Date(now)
    d.setDate(now.getDate() - i)
    const date = d.toISOString().slice(0, 10)

    for (const p of [demo, players.find(x => x.username === '博士001')!, players.find(x => x.username === '罗德岛干员')!]) {
      await prisma.dailyChallenge.create({
        data: {
          userId: p.id,
          date,
          targetId: `daily_target_${date}`,
          result: i < 3 ? 'WIN' : i < 5 ? 'WIN' : 'LOSS',
          guessCount: 2 + i,
        },
      })
    }
  }
  console.log(`  ✅ ${7 * 3} 条每日挑战`)

  // ====== 5. 房间 ======
  console.log('🏠 创建房间...')

  const room = await prisma.room.create({
    data: {
      code: 'ABC123',
      hostId: demo.id,
      status: 'FINISHED',
      maxPlayers: 4,
      mode: 'MULTIPLAYER',
      difficulty: 'MEDIUM',
      roundCount: 3,
      startedAt: new Date(now.getTime() - 3600000),
      finishedAt: now,
      players: {
        create: [
          { userId: demo.id, score: 5 },
          { userId: players.find(p => p.username === '博士001')!.id, score: 3 },
          { userId: players.find(p => p.username === '凯尔希喵')!.id, score: 2 },
        ],
      },
    },
  })
  console.log(`  ✅ 1 个房间 (${room.code}) + 3 个玩家`)

  console.log('\n🌱 种子数据完成！')
  console.log('   admin / 123456  — 管理员')
  console.log('   demo / 123456   — 玩家')
  console.log('   其他用户 / 123456')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
