/**
 * 干员名字输入框（带自动补全）
 */

import { useState, useRef, useEffect, useMemo } from 'react'
import { searchOperators, operators } from '@/data/operatorData'
import type { Operator } from '@/types/operator'
import { Input } from '@components/ui'
import clsx from 'clsx'

interface OperatorInputProps {
  onSubmit: (name: string) => void
  disabled?: boolean
  placeholder?: string
  excludeNames?: string[]
  /** 搜索范围（难度池），不传则搜索全部 */
  pool?: Operator[]
}

export function OperatorInput({
  onSubmit,
  disabled,
  placeholder = '输入干员代号...',
  excludeNames = [],
  pool = operators,
}: OperatorInputProps) {
  const [value, setValue] = useState('')
  const [suggestions, setSuggestions] = useState<typeof operators>([])
  const [highlightIndex, setHighlightIndex] = useState(-1)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const excludeSet = useMemo(() => new Set(excludeNames), [excludeNames])
  const poolSet = useMemo(() => new Set(pool.map(op => op.name)), [pool])

  // 过滤建议 — 按匹配优先级排序：名字开头匹配 > 名字包含 > 其他字段匹配
  useEffect(() => {
    if (!value.trim()) {
      setSuggestions([])
      return
    }
    const q = value.trim().toLowerCase()
    const results = searchOperators(value)
      .filter((op) => poolSet.has(op.name) && !excludeSet.has(op.name))
      .sort((a, b) => {
        const aName = a.name.toLowerCase()
        const bName = b.name.toLowerCase()
        const aStarts = aName.startsWith(q)
        const bStarts = bName.startsWith(q)
        if (aStarts && !bStarts) return -1
        if (!aStarts && bStarts) return 1
        // 都开头匹配或都不开头匹配，按名字包含排序
        const aIncludes = aName.includes(q)
        const bIncludes = bName.includes(q)
        if (aIncludes && !bIncludes) return -1
        if (!aIncludes && bIncludes) return 1
        // 都包含或都不包含，按稀有度降序
        return b.rarity - a.rarity
      })
      .slice(0, 8)
    setSuggestions(results)
    setHighlightIndex(-1)
  }, [value, excludeSet, poolSet])

  // 点击外部关闭
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleSubmit(name: string) {
    const trimmed = name.trim()
    if (!trimmed) return
    onSubmit(trimmed)
    setValue('')
    setSuggestions([])
    setShowSuggestions(false)
    inputRef.current?.focus()
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (highlightIndex >= 0 && suggestions[highlightIndex]) {
        handleSubmit(suggestions[highlightIndex].name)
      } else if (suggestions.length === 1) {
        handleSubmit(suggestions[0].name)
      } else if (suggestions.length > 0 && highlightIndex >= 0) {
        handleSubmit(suggestions[highlightIndex].name)
      } else if (value.trim()) {
        // 尝试精确匹配
        const exact = pool.find(
          (op) => op.name === value.trim(),
        )
        if (exact && !excludeSet.has(exact.name)) {
          handleSubmit(exact.name)
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlightIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0,
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1,
      )
    } else if (e.key === 'Escape') {
      setShowSuggestions(false)
    }
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <Input
        ref={inputRef}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          setShowSuggestions(true)
        }}
        onKeyDown={handleKeyDown}
        onFocus={() => value && setShowSuggestions(true)}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete="off"
      />
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 mt-1 w-full max-h-64 overflow-y-auto rounded-lg border border-ark-border bg-ark-surface shadow-lg">
          {suggestions.map((op, i) => (
            <button
              key={op.name}
              type="button"
              className={clsx(
                'flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors',
                i === highlightIndex
                  ? 'bg-ark-primary-light text-ark-primary'
                  : 'text-ark-text hover:bg-ark-card',
              )}
              onClick={() => handleSubmit(op.name)}
            >
              <span className="font-medium">{op.name}</span>
              <span className="text-xs text-ark-muted">
                {'★'.repeat(op.rarity)} {op.profession}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
