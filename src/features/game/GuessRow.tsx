/**
 * 单次猜测结果行（Wordle 式颜色反馈）
 */

import type { GuessResult, FieldComparison } from '@/types/game'
import clsx from 'clsx'

interface GuessRowProps {
  result: GuessResult
  isRevealed: boolean
}

const STATUS_STYLES: Record<string, string> = {
  correct: 'border-ark-success bg-ark-success-light text-ark-success',
  partial: 'border-ark-warning bg-ark-warning-light text-ark-warning',
  wrong: 'border-ark-danger bg-ark-danger-light text-ark-danger opacity-80',
}

const STATUS_LABELS: Record<string, string> = {
  correct: '✓',
  partial: '≈',
  wrong: '✗',
}

function FieldCell({ field }: { field: FieldComparison }) {
  const style = STATUS_STYLES[field.status]
  const label = STATUS_LABELS[field.status]

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center gap-0.5 rounded-lg border-2 px-0.5 py-1.5 text-center transition-all sm:px-1 sm:py-2',
        style,
      )}
      style={{ minWidth: 0 }}
    >
      <span className="text-[9px] text-ark-muted sm:text-[10px]">{field.label}</span>
      <span className="text-xs font-bold leading-tight">
        {field.guessValue}
      </span>
      <span className="text-[9px] sm:text-[10px]">
        {field.rarityDirection === 'up' && '↑ 偏高'}
        {field.rarityDirection === 'down' && '↓ 偏低'}
        {field.rarityDirection === null && field.status === 'correct' && label}
        {field.rarityDirection === undefined && field.status !== 'correct' && label}
        {field.rarityDirection === undefined && field.status === 'partial' && label}
      </span>
    </div>
  )
}

export function GuessRow({ result, isRevealed }: GuessRowProps) {
  return (
    <div
      className={clsx(
        'grid grid-cols-4 gap-0.5 sm:gap-1 sm:grid-cols-8 transition-all duration-300',
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
      )}
    >
      {result.fields.map((field) => (
        <FieldCell key={field.key} field={field} />
      ))}
    </div>
  )
}
