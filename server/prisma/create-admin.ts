import { prisma } from '../src/lib/prisma.js'
import { hashPassword } from '../src/lib/password.js'

const pwd = await hashPassword('Ark@2026Admin#Code!')
// 更新现有 admin 密码，不存在则创建
const existing = await prisma.user.findFirst({ where: { role: 'ADMIN' } })
if (existing) {
  await prisma.user.update({ where: { id: existing.id }, data: { passwordHash: pwd } })
  console.log('Admin password updated:', existing.username)
} else {
  await prisma.user.create({
    data: { username: 'ArkMaster2026', email: 'admin@arkcode.admin', passwordHash: pwd, role: 'ADMIN', points: 99999, avatar: '🛡️', bio: 'Ark Master Admin' },
  })
  console.log('Admin created: ArkMaster2026')
}
console.log('密码: Ark@2026Admin#Code!')
await prisma.$disconnect()
