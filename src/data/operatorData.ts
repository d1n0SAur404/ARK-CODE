/**
 * 干员数据加载与查询模块
 */

import type { Operator, OripathyStatus, Profession } from '@/types/operator'
import type { Difficulty } from '@/types/game'
import operatorsRaw from './operators.json'

/** 原始 JSON 数据结构 */
interface RawOperator {
  name: string
  rarity: number
  profession: string
  subProfession: string
  birthplace: string
  race: string
  faction: string
  nation: string
  combatExperience: string
  oripathy: string
}

/** 从原文提取标准化感染状态 */
function normalizeOripathy(text: string): OripathyStatus {
  if (!text) return '未知'
  if (text.includes('感染者') && !text.includes('非感染者')) return '感染者'
  if (text.includes('非感染者')) return '非感染者'
  return '未知'
}

/** 转换原始数据为强类型 */
function transform(raw: RawOperator): Operator {
  return {
    name: raw.name,
    rarity: raw.rarity as Operator['rarity'],
    profession: raw.profession as Profession,
    subProfession: raw.subProfession || '',
    birthplace: raw.birthplace || '未知',
    race: raw.race || '未知',
    faction: raw.faction || '未知',
    nation: raw.nation || '',
    combatExperience: raw.combatExperience || '未知',
    oripathy: raw.oripathy || '',
    oripathyStatus: normalizeOripathy(raw.oripathy),
  }
}

/** 全部干员数据（已标准化） */
export const operators: Operator[] = operatorsRaw.map(transform)

/** 按 ID（名字）索引 */
const nameIndex = new Map<string, Operator>()
operators.forEach((op) => nameIndex.set(op.name, op))

/**
 * 按名字查干员
 */
export function getOperatorByName(name: string): Operator | undefined {
  return nameIndex.get(name)
}

/**
 * 按稀有度筛选
 */
export function getOperatorsByRarity(rarity: number): Operator[] {
  return operators.filter((op) => op.rarity === rarity)
}

/**
 * 按职业筛选
 */
export function getOperatorsByProfession(profession: Profession): Operator[] {
  return operators.filter((op) => op.profession === profession)
}

/**
 * 按种族筛选
 */
export function getOperatorsByRace(race: string): Operator[] {
  return operators.filter((op) => op.race === race)
}

/**
 * 按出身地筛选
 */
export function getOperatorsByBirthplace(birthplace: string): Operator[] {
  return operators.filter((op) => op.birthplace === birthplace)
}

/**
 * 按阵营筛选
 */
export function getOperatorsByFaction(faction: string): Operator[] {
  return operators.filter((op) => op.faction === faction)
}

/**
 * 按感染状态筛选
 */
export function getOperatorsByOripathy(status: OripathyStatus): Operator[] {
  return operators.filter((op) => op.oripathyStatus === status)
}

/**
 * 随机抽取一个干员
 * @param minRarity 最低稀有度（默认 3）
 */
export function getRandomOperator(minRarity = 3): Operator {
  const pool = operators.filter((op) => op.rarity >= minRarity)
  return pool[Math.floor(Math.random() * pool.length)]
}

/**
 * 模糊搜索干员
 */
export function searchOperators(query: string): Operator[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return operators.filter(
    (op) =>
      op.name.toLowerCase().includes(q) ||
      op.profession.includes(q) ||
      op.race.includes(q) ||
      op.faction.includes(q) ||
      op.birthplace.includes(q),
  )
}

/**
 * 获取所有可能的属性值（用于提示/筛选）
 */
export function getAllRaces(): string[] {
  return [...new Set(operators.map((op) => op.race))].filter(Boolean).sort()
}

export function getAllBirthplaces(): string[] {
  return [...new Set(operators.map((op) => op.birthplace))]
    .filter((b) => b && b !== '未知' && b !== '未公开')
    .sort()
}

export function getAllFactions(): string[] {
  return [...new Set(operators.map((op) => op.faction))]
    .filter((f) => f && f !== '未知')
    .sort()
}

export function getAllProfessions(): Profession[] {
  return ['先锋', '近卫', '重装', '狙击', '术师', '医疗', '辅助', '特种'] as Profession[]
}

/** 干员总数 */
export const operatorCount = operators.length

/**
 * 按稀有度降序、名字排序的干员列表（用于难度池）
 */
const operatorsByRarityDesc = [...operators].sort((a, b) => {
  if (b.rarity !== a.rarity) return b.rarity - a.rarity
  return a.name.localeCompare(b.name, 'zh')
})

/**
 * 根据难度获取干员池
 * - easy: 100 个常见干员（6 星优先）
 * - medium: 250 个干员（6 星 + 5 星）
 * - hard: 全部干员
 */
export function getOperatorPool(difficulty: Difficulty): Operator[] {
  switch (difficulty) {
    case 'easy':
      return operatorsByRarityDesc.slice(0, 100)
    case 'medium':
      return operatorsByRarityDesc.slice(0, 250)
    case 'hard':
      return operators
  }
}

/**
 * 从指定难度池中随机抽取一个干员
 */
export function getRandomFromPool(difficulty: Difficulty): Operator {
  const pool = getOperatorPool(difficulty)
  return pool[Math.floor(Math.random() * pool.length)]
}

/**
 * 难度元数据
 */
export const DIFFICULTY_INFO: Record<Difficulty, { label: string; count: number; desc: string }> = {
  easy: { label: '简单', count: 100, desc: '100 个常见干员（6 星优先）' },
  medium: { label: '中等', count: 250, desc: '250 个干员（6 星 + 5 星）' },
  hard: { label: '困难', count: operatorCount, desc: `全部 ${operatorCount} 个干员` },
}
