/**
 * 游戏引擎核心逻辑
 * 对比干员信息、判断胜负、管理游戏流程
 */

import type { Operator } from '@/types/operator'
import type {
  FieldComparison,
  GuessResult,
  GameConfig,
  GameMode,
  Difficulty,
} from '@/types/game'

// ============ 异格干员关联检测 ============

/** 异格干员手动映射表（前缀型：X本体 → 异格名） */
const ALTERNATE_FORM_MAP: Record<string, string[]> = {
  阿米娅: ['阿米娅(医疗)', '阿米娅(近卫)'],
  凯尔希: ['凯尔希·思衡托'],
  能天使: ['新约能天使'],
  德克萨斯: ['缄默德克萨斯'],
  斯卡蒂: ['浊心斯卡蒂'],
  陈: ['假日威龙陈'],
  临光: ['耀骑士临光'],
  拉普兰德: ['荒芜拉普兰德'],
  艾雅法拉: ['纯烬艾雅法拉'],
  焰影苇草: ['芦苇'],
  紫菜: ['谜图'],
  银灰: ['凛御银灰'],
  星熊: ['斩业星熊'],
  诗怀雅: ['琳琅诗怀雅'],
  远山: ['凛冬'],
  华法琳: ['浊心华法琳'],
  幽灵鲨: ['归溟幽灵鲨'],
  伊芙利特: ['炽炎伊芙利特'],
  推进之王: ['不息推进之王'],
  闪灵: ['晨曦闪灵'],
  夜莺: ['白噩夜莺'],
  塞雷娅: ['塞雷娅·澄顶'],
  芙兰卡: ['铸铁芙兰卡'],
  暴行: ['铁校暴行'],
  杰西卡: ['游侠杰西卡'],
  香草: ['独角兽香草'],
  芙洛: ['晶齐芙洛'],
}

/**
 * 检测两个干员是否为异格关系
 */
export function areAlternateForms(op1: Operator, op2: Operator): boolean {
  if (op1.name === op2.name) return false
  const n1 = op1.name
  const n2 = op2.name

  // 1. 手动映射表
  for (const [base, alts] of Object.entries(ALTERNATE_FORM_MAP)) {
    const allNames = [base, ...alts]
    if (allNames.includes(n1) && allNames.includes(n2)) return true
  }

  // 2. 括号/中点分隔：阿米娅(医疗) vs 阿米娅
  const base1 = n1.split('(')[0].split('·')[0].trim()
  const base2 = n2.split('(')[0].split('·')[0].trim()
  if (base1 === base2 && base1 !== n1 && base1 !== n2) return true

  // 3. 后缀匹配：假日威龙陈 → 陈
  if (n1.length > n2.length && n1.endsWith(n2) && n2.length >= 2) return true
  if (n2.length > n1.length && n2.endsWith(n1) && n1.length >= 2) return true

  return false
}

// ============ 字段比较逻辑 ============

/** 字段定义 */
const FIELD_DEFS = [
  { key: 'name', label: '干员代号' },
  { key: 'rarity', label: '稀有度' },
  { key: 'profession', label: '职业' },
  { key: 'race', label: '种族' },
  { key: 'birthplace', label: '出身地' },
  { key: 'faction', label: '阵营' },
  { key: 'oripathyStatus', label: '感染状态' },
  { key: 'combatExperience', label: '战斗经验' },
] as const

/**
 * 获取字段值（字符串形式）
 */
function getFieldValue(op: Operator, key: string): string {
  switch (key) {
    case 'name': return op.name
    case 'rarity': return '★'.repeat(op.rarity)
    case 'profession': return op.profession
    case 'race': return op.race
    case 'birthplace': return op.birthplace
    case 'faction': return op.faction
    case 'oripathyStatus': return op.oripathyStatus
    case 'combatExperience': return op.combatExperience
    default: return ''
  }
}

/**
 * 获取稀有度数值（用于方向比较）
 */
function getRarityValue(op: Operator): number {
  return op.rarity
}

/**
 * 判断两个字符串是否部分匹配（共享关键字符）
 */
function isPartialMatch(a: string, b: string): boolean {
  if (!a || !b || a === '未知' || b === '未知') return false
  if (a === b) return false
  // 检查是否共享 2 个以上连续字符
  for (let i = 0; i < a.length - 1; i++) {
    const sub = a.slice(i, i + 2)
    if (b.includes(sub)) return true
  }
  return false
}

/**
 * 判断阵营是否关联（同国家/地区）
 */
function isFactionRelated(guess: Operator, target: Operator): boolean {
  // 同国家
  if (guess.nation && target.nation && guess.nation === target.nation) return true
  // 阵营名称部分匹配
  if (isPartialMatch(guess.faction, target.faction)) return true
  return false
}

/**
 * 比较单个字段
 */
export function compareField(
  guess: Operator,
  target: Operator,
  key: string,
): FieldComparison {
  const def = FIELD_DEFS.find((f) => f.key === key)!
  const guessValue = getFieldValue(guess, key)
  const targetValue = getFieldValue(target, key)

  let status: FieldComparison['status'] = 'wrong'
  let rarityDirection: FieldComparison['rarityDirection']

  // 稀有度特殊处理
  if (key === 'rarity') {
    const gv = getRarityValue(guess)
    const tv = getRarityValue(target)
    if (gv === tv) {
      status = 'correct'
    }
    rarityDirection = gv === tv ? null : gv > tv ? 'up' : 'down'
    return { key, label: def.label, guessValue, targetValue, status, rarityDirection }
  }

  // 名字字段：完全匹配 = correct，异格 = partial，其他 = wrong
  if (key === 'name') {
    if (guess.name === target.name) {
      status = 'correct'
    } else if (areAlternateForms(guess, target)) {
      status = 'partial'
    }
    return { key, label: def.label, guessValue, targetValue, status }
  }

  // 阵营字段：完全匹配 = correct，关联 = partial，其他 = wrong
  if (key === 'faction') {
    if (guessValue === targetValue) {
      status = 'correct'
    } else if (isFactionRelated(guess, target)) {
      status = 'partial'
    }
    return { key, label: def.label, guessValue, targetValue, status }
  }

  // 出身地字段：完全匹配 = correct，部分匹配 = partial
  if (key === 'birthplace') {
    if (guessValue === targetValue) {
      status = 'correct'
    } else if (isPartialMatch(guessValue, targetValue)) {
      status = 'partial'
    }
    return { key, label: def.label, guessValue, targetValue, status }
  }

  // 种族字段：完全匹配 = correct，部分匹配 = partial
  if (key === 'race') {
    if (guessValue === targetValue) {
      status = 'correct'
    } else if (isPartialMatch(guessValue, targetValue)) {
      status = 'partial'
    }
    return { key, label: def.label, guessValue, targetValue, status }
  }

  // 其他字段：完全匹配 = correct，否则 wrong
  if (guessValue === targetValue) {
    status = 'correct'
  }
  return { key, label: def.label, guessValue, targetValue, status }
}

/**
 * 对比两个干员，生成完整比较结果
 */
export function compareOperators(guess: Operator, target: Operator): GuessResult {
  const fields = FIELD_DEFS.map((def) => compareField(guess, target, def.key))
  const isWin = guess.name === target.name
  return { guessOperator: guess, targetOperator: target, fields, isWin, guessNumber: 0 }
}

// ============ 游戏配置 ============

/** 各模式默认配置 */
export const MODE_CONFIGS: Record<GameMode, GameConfig> = {
  daily: { mode: 'daily', maxGuesses: 8, timeLimit: 0, difficulty: 'hard' },
  practice: { mode: 'practice', maxGuesses: 8, timeLimit: 0, difficulty: 'easy' },
  timed: { mode: 'timed', maxGuesses: 8, timeLimit: 180, difficulty: 'easy' },
  multiplayer: { mode: 'multiplayer', maxGuesses: 8, timeLimit: 120, winScore: 5, difficulty: 'medium' },
  drawGuess: { mode: 'drawGuess', maxGuesses: 8, timeLimit: 0, drawTime: 300, difficulty: 'hard' },
}

/** 难度对应配置覆盖 */
export const DIFFICULTY_CONFIGS: Record<Difficulty, Partial<GameConfig>> = {
  easy: { maxGuesses: 8 },
  medium: { maxGuesses: 8 },
  hard: { maxGuesses: 8 },
}

// ============ 日期种子（每日挑战用） ============

/**
 * 基于日期生成确定性随机种子
 */
export function getDailySeed(date: Date = new Date()): number {
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  return (y * 10000 + m * 100 + d) % 2147483647
}

/**
 * 基于种子从数组中取一个元素（确定性）
 */
export function pickBySeed<T>(arr: T[], seed: number): T {
  const index = seed % arr.length
  return arr[index]
}
