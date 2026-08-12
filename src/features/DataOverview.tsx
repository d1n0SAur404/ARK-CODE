import { useMemo, useState } from 'react'
import { Card, CardHeader, CardBody, Badge } from '@components/ui'
import {
  operators,
  operatorCount,
  getAllRaces,
  getAllBirthplaces,
  getAllProfessions,
} from '@/data/operatorData'
import type { Operator, Profession } from '@/types/operator'

const rarityColors: Record<number, string> = {
  6: 'text-amber-500',
  5: 'text-purple-400',
  4: 'text-blue-400',
  3: 'text-sky-400',
  2: 'text-green-400',
  1: 'text-gray-400',
}

const rarityStars = (r: number) => '★'.repeat(r)

function OperatorRow({ op }: { op: Operator }) {
  return (
    <tr className="border-b border-ark-border last:border-0">
      <td className="px-3 py-2 font-medium text-ark-text">{op.name}</td>
      <td className={`px-3 py-2 ${rarityColors[op.rarity] || ''}`}>
        {rarityStars(op.rarity)}
      </td>
      <td className="px-3 py-2 text-ark-text-secondary">{op.profession}</td>
      <td className="px-3 py-2 text-ark-text-secondary">{op.race || '—'}</td>
      <td className="px-3 py-2 text-ark-text-secondary">
        {op.birthplace || '—'}
      </td>
      <td className="px-3 py-2 text-ark-text-secondary">
        {op.faction || '—'}
      </td>
      <td className="px-3 py-2 text-ark-text-secondary">
        {op.combatExperience || '—'}
      </td>
      <td className="px-3 py-2">
        <Badge
          variant={
            op.oripathyStatus === '感染者'
              ? 'danger'
              : op.oripathyStatus === '非感染者'
                ? 'success'
                : 'default'
          }
        >
          {op.oripathyStatus}
        </Badge>
      </td>
    </tr>
  )
}

export function DataOverview() {
  const [filterProfession, setFilterProfession] = useState<Profession | 'all'>(
    'all',
  )
  const [filterRarity, setFilterRarity] = useState<number | 0>(0)
  const [searchQuery, setSearchQuery] = useState('')

  const professions = getAllProfessions()
  const races = getAllRaces()
  const birthplaces = getAllBirthplaces()

  const filtered = useMemo(() => {
    return operators.filter((op) => {
      if (filterProfession !== 'all' && op.profession !== filterProfession)
        return false
      if (filterRarity > 0 && op.rarity !== filterRarity) return false
      if (searchQuery) {
        const q = searchQuery.toLowerCase()
        return (
          op.name.toLowerCase().includes(q) ||
          op.race.toLowerCase().includes(q) ||
          op.birthplace.toLowerCase().includes(q) ||
          op.faction.toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [filterProfession, filterRarity, searchQuery])

  const rarityCounts = useMemo(() => {
    const counts: Record<number, number> = {}
    operators.forEach((op) => {
      counts[op.rarity] = (counts[op.rarity] || 0) + 1
    })
    return counts
  }, [])

  const profCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    operators.forEach((op) => {
      counts[op.profession] = (counts[op.profession] || 0) + 1
    })
    return counts
  }, [])

  return (
    <div className="space-y-6">
      {/* 统计概览 */}
      <section>
        <h3 className="mb-4 text-xl font-bold">干员数据概览</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Card>
            <CardBody className="text-center">
              <p className="text-3xl font-bold text-ark-primary">
                {operatorCount}
              </p>
              <p className="text-xs text-ark-muted">干员总数</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center">
              <p className="text-3xl font-bold text-ark-accent">
                {races.length}
              </p>
              <p className="text-xs text-ark-muted">种族</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center">
              <p className="text-3xl font-bold text-ark-accent">
                {birthplaces.length}
              </p>
              <p className="text-xs text-ark-muted">出身地</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center">
              <p className="text-3xl font-bold text-ark-accent">8</p>
              <p className="text-xs text-ark-muted">职业</p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* 稀有度分布 */}
      <section>
        <h4 className="mb-3 text-lg font-semibold">稀有度分布</h4>
        <div className="flex flex-wrap gap-2">
          {[6, 5, 4, 3, 2, 1].map((r) => (
            <Badge
              key={r}
              variant={r === 6 ? 'primary' : r >= 4 ? 'accent' : 'default'}
            >
              {rarityStars(r)} ({rarityCounts[r] || 0})
            </Badge>
          ))}
        </div>
      </section>

      {/* 职业分布 */}
      <section>
        <h4 className="mb-3 text-lg font-semibold">职业分布</h4>
        <div className="flex flex-wrap gap-2">
          {professions.map((p) => (
            <Badge key={p} variant="default">
              {p} ({profCounts[p] || 0})
            </Badge>
          ))}
        </div>
      </section>

      {/* 筛选器 */}
      <section>
        <Card>
          <CardHeader>
            <h4 className="font-bold">干员列表</h4>
          </CardHeader>
          <CardBody className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterProfession('all')}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  filterProfession === 'all'
                    ? 'bg-ark-primary text-ark-bg'
                    : 'bg-ark-card-hover text-ark-text-secondary'
                }`}
              >
                全部职业
              </button>
              {professions.map((p) => (
                <button
                  key={p}
                  onClick={() => setFilterProfession(p)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    filterProfession === p
                      ? 'bg-ark-primary text-ark-bg'
                      : 'bg-ark-card-hover text-ark-text-secondary'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterRarity(0)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  filterRarity === 0
                    ? 'bg-ark-accent text-white'
                    : 'bg-ark-card-hover text-ark-text-secondary'
                }`}
              >
                全部星级
              </button>
              {[6, 5, 4, 3, 2, 1].map((r) => (
                <button
                  key={r}
                  onClick={() => setFilterRarity(r)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    filterRarity === r
                      ? 'bg-ark-accent text-white'
                      : 'bg-ark-card-hover text-ark-text-secondary'
                  }`}
                >
                  {rarityStars(r)}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="搜索干员名/种族/出身地/阵营..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ark-input w-full"
            />
            <p className="text-xs text-ark-muted">
              共 {filtered.length} 个结果
            </p>
          </CardBody>
        </Card>
      </section>

      {/* 干员表格 */}
      <section>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ark-border-strong">
                <th className="px-3 py-2 text-left font-semibold text-ark-text">
                  代号
                </th>
                <th className="px-3 py-2 text-left font-semibold text-ark-text">
                  稀有度
                </th>
                <th className="px-3 py-2 text-left font-semibold text-ark-text">
                  职业
                </th>
                <th className="px-3 py-2 text-left font-semibold text-ark-text">
                  种族
                </th>
                <th className="px-3 py-2 text-left font-semibold text-ark-text">
                  出身地
                </th>
                <th className="px-3 py-2 text-left font-semibold text-ark-text">
                  阵营
                </th>
                <th className="px-3 py-2 text-left font-semibold text-ark-text">
                  战斗经验
                </th>
                <th className="px-3 py-2 text-left font-semibold text-ark-text">
                  感染
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 50).map((op) => (
                <OperatorRow key={op.name} op={op} />
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length > 50 && (
          <p className="mt-2 text-center text-xs text-ark-muted">
            仅显示前 50 条，共 {filtered.length} 条结果
          </p>
        )}
      </section>
    </div>
  )
}
