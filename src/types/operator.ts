/**
 * 干员数据类型定义
 */

export type Profession =
  | '先锋'
  | '近卫'
  | '重装'
  | '狙击'
  | '术师'
  | '医疗'
  | '辅助'
  | '特种'

export type OripathyStatus = '感染者' | '非感染者' | '未知'

export interface Operator {
  /** 干员代号 */
  name: string
  /** 稀有度（1-6 星） */
  rarity: 1 | 2 | 3 | 4 | 5 | 6
  /** 职业大类 */
  profession: Profession
  /** 子职业分支 */
  subProfession: string
  /** 出身地 */
  birthplace: string
  /** 种族 */
  race: string
  /** 阵营/组织 */
  faction: string
  /** 国家/地区 */
  nation: string
  /** 战斗经验 */
  combatExperience: string
  /** 矿石病感染情况（原文） */
  oripathy: string
  /** 矿石病感染状态（标准化） */
  oripathyStatus: OripathyStatus
}

/**
 * 猜测比较结果 — 用于 Wordle 式颜色反馈
 */
export interface ComparisonResult {
  /** 该字段是否完全匹配 */
  match: boolean
  /** 该字段是否部分匹配（如同为感染者/非感染者） */
  partial: boolean
}

/**
 * 对比两个干员的某属性，返回匹配状态
 */
export function compareField(
  guess: string,
  target: string,
): ComparisonResult {
  const match = guess === target
  const partial = !match && guess !== '' && target !== '' && guess !== '未知' && target !== '未知'
  return { match, partial }
}

/**
 * 对比稀有度，返回匹配/偏高/偏低
 */
export function compareRarity(guess: number, target: number): 'match' | 'higher' | 'lower' {
  if (guess === target) return 'match'
  return guess > target ? 'higher' : 'lower'
}

/**
 * 对比矿石病感染状态
 */
export function compareOripathy(
  guess: OripathyStatus,
  target: OripathyStatus,
): ComparisonResult {
  return compareField(guess, target)
}
