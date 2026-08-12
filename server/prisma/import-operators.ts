/**
 * 干员数据导入脚本
 * 从 src/data/operators.json 导入到数据库
 * 用法: npx tsx prisma/import-operators.ts
 */

import { PrismaClient } from '@prisma/client'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const prisma = new PrismaClient()

interface OpData {
  name: string
  rarity: number
  profession: string
  subProfession?: string
  birthplace?: string
  race?: string
  faction?: string
  nation?: string
  combatExperience?: string
  oripathy?: string
}

async function main() {
  const jsonPath = resolve('..', 'src', 'data', 'operators.json')
  const raw = readFileSync(jsonPath, 'utf-8')
  const operators: OpData[] = JSON.parse(raw)

  console.log(`📦 读取 ${operators.length} 个干员，开始导入...`)

  // 清空已有数据
  await prisma.operator.deleteMany()

  let count = 0
  for (const op of operators) {
    await prisma.operator.create({
      data: {
        name: op.name,
        rarity: op.rarity,
        profession: op.profession,
        subProfession: op.subProfession ?? null,
        race: op.race ?? null,
        birthplace: op.birthplace ?? null,
        faction: op.faction ?? null,
        nation: op.nation ?? null,
        combatExperience: op.combatExperience ?? null,
        oripathy: op.oripathy ?? null,
      },
    })
    count++
    if (count % 50 === 0) process.stdout.write(`\r  已导入 ${count}/${operators.length}`)
  }

  console.log(`\r✅ 导入完成: ${count} 个干员`)
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
