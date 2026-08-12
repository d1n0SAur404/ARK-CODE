/**
 * 干员查询页面 — 搜索 & 查看干员详情
 */

import { useState, useMemo } from 'react'
import { operators, searchOperators } from '@/data/operatorData'
import type { Operator } from '@/types/operator'
import { Card, CardBody, CardHeader, Input, Badge, Button } from '@components/ui'
import { BackButton } from '@components/BackButton'
import clsx from 'clsx'

const RARITY_STARS = (n: number) => '★'.repeat(n)

const RARITY_COLORS: Record<number, string> = {
  1: 'text-ark-muted',
  2: 'text-ark-muted',
  3: 'text-ark-success',
  4: 'text-ark-accent',
  5: 'text-ark-warning',
  6: 'text-ark-danger',
}

export default function OperatorQueryPage() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Operator | null>(null)
  const [filterRarity, setFilterRarity] = useState<number | null>(null)
  const [filterProfession, setFilterProfession] = useState<string | null>(null)
  const [filterRace, setFilterRace] = useState<string | null>(null)
  const [filterFaction, setFilterFaction] = useState<string | null>(null)

  const professions = useMemo(
    () => ['先锋', '近卫', '重装', '狙击', '术师', '医疗', '辅助', '特种'],
    [],
  )

  const races = useMemo(
    () => Array.from(new Set(operators.map(op => op.race).filter(Boolean))).sort(),
    [],
  )

  const factions = useMemo(
    () => Array.from(new Set(operators.map(op => op.faction).filter(Boolean))).sort(),
    [],
  )

  const results = useMemo(() => {
    let list = query.trim() ? searchOperators(query) : operators
    if (filterRarity) list = list.filter((op) => op.rarity === filterRarity)
    if (filterProfession) list = list.filter((op) => op.profession === filterProfession)
    if (filterRace) list = list.filter((op) => op.race === filterRace)
    if (filterFaction) list = list.filter((op) => op.faction === filterFaction)
    return list
  }, [query, filterRarity, filterProfession, filterRace, filterFaction])

  return (
    <main className="mx-auto max-w-5xl px-3 py-6 sm:px-4 sm:py-8">
      <div className="mb-4">
        <BackButton />
      </div>
      <section className="mb-6 text-center">
        <h2 className="text-2xl font-bold ark-text-gradient sm:text-3xl">干员查询</h2>
        <p className="mt-2 text-xs text-ark-text-secondary sm:text-sm">
          共 {operators.length} 名干员 · 支持名字、职业、种族、阵营、出身地搜索
        </p>
      </section>

      {/* 搜索栏 */}
      <div className="mb-4 flex gap-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="输入干员代号 / 职业 / 种族 / 阵营..."
          className="flex-1"
        />
        {query && (
          <Button variant="ghost" onClick={() => setQuery('')}>
            清除
          </Button>
        )}
      </div>

      {/* 筛选 */}
      <div className="mb-6 flex flex-wrap items-center gap-1.5 sm:gap-2">
        <span className="text-xs text-ark-muted">稀有度：</span>
        {[6, 5, 4, 3].map((r) => (
          <button
            key={r}
            onClick={() => setFilterRarity(filterRarity === r ? null : r)}
            className={clsx(
              'rounded border px-2 py-0.5 text-xs transition-all',
              filterRarity === r
                ? 'border-ark-primary bg-ark-primary text-ark-bg'
                : 'border-ark-border text-ark-text-secondary hover:border-ark-primary',
            )}
          >
            {RARITY_STARS(r)}
          </button>
        ))}
        <span className="ml-3 text-xs text-ark-muted">职业：</span>
        {professions.map((p) => (
          <button
            key={p}
            onClick={() => setFilterProfession(filterProfession === p ? null : p)}
            className={clsx(
              'rounded border px-2 py-0.5 text-xs transition-all',
              filterProfession === p
                ? 'border-ark-accent bg-ark-accent text-white'
                : 'border-ark-border text-ark-text-secondary hover:border-ark-accent',
            )}
          >
            {p}
          </button>
        ))}
        <span className="ml-3 text-xs text-ark-muted">种族：</span>
        {races.slice(0, 15).map((r) => (
          <button
            key={r}
            onClick={() => setFilterRace(filterRace === r ? null : r)}
            className={clsx(
              'rounded border px-2 py-0.5 text-xs transition-all',
              filterRace === r
                ? 'border-ark-success bg-ark-success text-white'
                : 'border-ark-border text-ark-text-secondary hover:border-ark-success',
            )}
          >
            {r}
          </button>
        ))}
        <span className="ml-3 text-xs text-ark-muted">阵营：</span>
        {factions.slice(0, 15).map((f) => (
          <button
            key={f}
            onClick={() => setFilterFaction(filterFaction === f ? null : f)}
            className={clsx(
              'rounded border px-2 py-0.5 text-xs transition-all',
              filterFaction === f
                ? 'border-ark-warning bg-ark-warning text-white'
                : 'border-ark-border text-ark-text-secondary hover:border-ark-warning',
            )}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto text-xs text-ark-muted">
          共 {results.length} 条结果
        </span>
      </div>

      {/* 结果列表 */}
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {results.slice(0, 120).map((op) => (
          <button
            key={op.name}
            onClick={() => setSelected(op)}
            className="flex items-center gap-3 rounded-lg border border-ark-border bg-ark-card p-3 text-left transition-all hover:border-ark-primary hover:bg-ark-card-hover"
          >
            <span className={clsx('text-lg font-bold', RARITY_COLORS[op.rarity] || '')}>
              {RARITY_STARS(op.rarity)}
            </span>
            <div className="flex-1">
              <p className="font-bold text-ark-text">{op.name}</p>
              <p className="text-xs text-ark-muted">
                {op.profession} · {op.race}
              </p>
            </div>
          </button>
        ))}
      </div>

      {results.length > 120 && (
        <p className="mt-4 text-center text-sm text-ark-muted">
          仅显示前 120 条，请缩小搜索范围
        </p>
      )}

      {/* 详情弹窗 */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <Card
            className="max-h-[80vh] max-w-lg overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={clsx('text-2xl font-bold', RARITY_COLORS[selected.rarity] || '')}>
                    {RARITY_STARS(selected.rarity)}
                  </span>
                  <h3 className="text-xl font-bold text-ark-text">{selected.name}</h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-2xl text-ark-muted hover:text-ark-text"
                >
                  ×
                </button>
              </div>
            </CardHeader>
            <CardBody className="space-y-3">
              <DetailRow label="职业" value={selected.profession} />
              <DetailRow label="种族" value={selected.race} />
              <DetailRow label="出身地" value={selected.birthplace} />
              <DetailRow label="阵营" value={selected.faction} />
              <DetailRow label="矿石病感染" value={selected.oripathyStatus} />
              <DetailRow label="战斗经验" value={selected.combatExperience} />
            </CardBody>
          </Card>
        </div>
      )}
    </main>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 border-b border-ark-border pb-2 last:border-0">
      <span className="w-24 shrink-0 text-sm font-medium text-ark-muted">{label}</span>
      <span className="flex-1 text-sm text-ark-text">{value || '未知'}</span>
    </div>
  )
}
