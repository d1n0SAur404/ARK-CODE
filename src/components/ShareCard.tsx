/**
 * 分享卡片 — 游戏结果分享
 * - 文字版：复制到剪贴板（Wordle 式 emoji 网格）
 * - 图片版：Canvas 绘制 PNG 下载
 */

import { useRef, useState, useCallback } from 'react'
import type { GuessResult, GameMode, Difficulty } from '@/types/game'
import type { Operator } from '@/types/operator'
import { Button } from '@components/ui'
import clsx from 'clsx'

interface ShareCardProps {
  status: 'won' | 'lost'
  target: Operator
  guesses: GuessResult[]
  mode: GameMode
  difficulty?: Difficulty
}

const MODE_LABELS: Record<string, string> = {
  daily: '每日挑战',
  practice: '无限练习',
  timed: '限时挑战',
  multiplayer: '多人联机',
}

const DIFF_LABELS: Record<string, string> = {
  easy: '简单',
  medium: '中等',
  hard: '困难',
}

// 颜色映射（emoji + hex）
const STATUS_EMOJI: Record<string, string> = {
  correct: '🟩',
  partial: '🟨',
  wrong: '🟥',
}

const STATUS_HEX: Record<string, string> = {
  correct: '#3d8c3d',
  partial: '#c8b400',
  wrong: '#c44844',
}

const STATUS_HEX_DARK: Record<string, string> = {
  correct: '#5cb85c',
  partial: '#f0ad4e',
  wrong: '#e05a56',
}

/** 生成文字分享内容 */
function generateShareText({ status, target, guesses, mode, difficulty }: ShareCardProps): string {
  const date = new Date().toLocaleDateString('zh-CN')
  const modeLabel = MODE_LABELS[mode] || mode
  const diffLabel = difficulty ? ` · ${DIFF_LABELS[difficulty]}` : ''

  const lines: string[] = []
  lines.push('方舟密令 ARK CODE')
  lines.push(`${modeLabel}${diffLabel} ${date}`)
  lines.push('')

  for (const guess of guesses) {
    const row = guess.fields
      .map((f) => STATUS_EMOJI[f.status] || '⬛')
      .join('')
    lines.push(row)
  }

  lines.push('')
  if (status === 'won') {
    lines.push(`${guesses.length}/8 猜对！目标：${target.name}`)
  } else {
    lines.push(`❌ 8 次用尽，答案是 ${target.name}`)
  }
  lines.push('')
  lines.push('🔗 来猜角色：ark-code.game')

  return lines.join('\n')
}

/** 在 Canvas 上绘制分享图片 */
function drawShareCanvas(
  canvas: HTMLCanvasElement,
  { status, target, guesses, mode, difficulty }: ShareCardProps,
) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const W = 480
  const H = 320 + guesses.length * 28
  canvas.width = W
  canvas.height = H

  // 背景 — 深色渐变
  const bg = ctx.createLinearGradient(0, 0, W, H)
  bg.addColorStop(0, '#0a0a0f')
  bg.addColorStop(0.5, '#131419')
  bg.addColorStop(1, '#0a0a0f')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, W, H)

  // 顶部彩条
  const barColor = status === 'won' ? '#5cb85c' : '#e05a56'
  ctx.fillStyle = barColor
  ctx.fillRect(0, 0, W, 6)

  // 标题
  ctx.textAlign = 'center'
  ctx.fillStyle = '#d4a574'
  ctx.font = 'bold 28px system-ui, sans-serif'
  ctx.fillText('方舟密令', W / 2, 42)

  ctx.fillStyle = '#7a7a8a'
  ctx.font = 'bold 11px system-ui, sans-serif'
  ctx.fillText('A R K   C O D E', W / 2, 58)

  // 模式 + 难度 + 日期
  const date = new Date().toLocaleDateString('zh-CN')
  const modeLabel = MODE_LABELS[mode] || mode
  const diffLabel = difficulty ? ` · ${DIFF_LABELS[difficulty]}` : ''
  ctx.fillStyle = '#b0b0c0'
  ctx.font = '13px system-ui, sans-serif'
  ctx.fillText(`${modeLabel}${diffLabel}  ${date}`, W / 2, 80)

  // 颜色网格
  const cellW = 44
  const cellH = 24
  const gap = 4
  const gridW = 8 * cellW + 7 * gap
  const startX = (W - gridW) / 2
  let y = 100

  for (const guess of guesses) {
    let x = startX
    for (const field of guess.fields) {
      const color = STATUS_HEX_DARK[field.status] || '#3a3b45'
      ctx.fillStyle = color
      ctx.fillRect(x, y, cellW, cellH)
      // 边框
      ctx.strokeStyle = 'rgba(255,255,255,0.1)'
      ctx.lineWidth = 1
      ctx.strokeRect(x, y, cellW, cellH)
      x += cellW + gap
    }
    y += cellH + gap
  }

  // 结果文字
  ctx.textAlign = 'center'
  if (status === 'won') {
    ctx.fillStyle = '#5cb85c'
    ctx.font = 'bold 20px system-ui, sans-serif'
    ctx.fillText(`${guesses.length}/8 猜对！`, W / 2, y + 28)
  } else {
    ctx.fillStyle = '#e05a56'
    ctx.font = 'bold 20px system-ui, sans-serif'
    ctx.fillText('挑战失败', W / 2, y + 28)
  }

  // 目标干员
  ctx.fillStyle = '#d4a574'
  ctx.font = '14px system-ui, sans-serif'
  const starStr = '★'.repeat(target.rarity)
  ctx.fillText(
    `${target.name}  ${starStr}  ${target.profession} · ${target.race}`,
    W / 2,
    y + 52,
  )

  // 底部水印
  ctx.fillStyle = '#7a7a8a'
  ctx.font = '11px system-ui, sans-serif'
  ctx.fillText('ark-code.game · 方舟密令', W / 2, H - 16)
}

export function ShareCard(props: ShareCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [copied, setCopied] = useState(false)
  const [showImage, setShowImage] = useState(false)

  const handleCopyText = useCallback(async () => {
    const text = generateShareText(props)
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback: select + execCommand
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      try {
        document.execCommand('copy')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch {
        // ignore
      }
      document.body.removeChild(textarea)
    }
  }, [props])

  const handleDownloadImage = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    drawShareCanvas(canvas, props)

    const link = document.createElement('a')
    const date = new Date().toISOString().slice(0, 10)
    link.download = `ark-code-${date}-${props.target.name}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }, [props])

  return (
    <div className="mt-4">
      {/* 预览：文字版 emoji 网格 */}
      <div className="rounded-xl border border-ark-border bg-ark-card p-4">
        <p className="mb-2 text-xs font-bold text-ark-muted">分享预览</p>
        <div className="font-mono text-xs leading-relaxed text-ark-text-secondary">
          <p className="font-bold text-ark-primary">方舟密令 ARK CODE</p>
          <p className="text-ark-muted">
            {MODE_LABELS[props.mode] || props.mode}
            {props.difficulty ? ` · ${DIFF_LABELS[props.difficulty]}` : ''}{' '}
            {new Date().toLocaleDateString('zh-CN')}
          </p>
          <div className="my-2 space-y-0.5">
            {props.guesses.map((guess, i) => (
              <div key={i} className="text-base tracking-wider">
                {guess.fields.map((f) => STATUS_EMOJI[f.status] || '⬛').join('')}
              </div>
            ))}
          </div>
          <p className={clsx('font-bold', props.status === 'won' ? 'text-ark-success' : 'text-ark-danger')}>
            {props.status === 'won'
              ? `${props.guesses.length}/8 猜对！目标：${props.target.name}`
              : `8 次用尽，答案是 ${props.target.name}`}
          </p>
          <p className="mt-1 text-ark-muted">🔗 来猜角色：ark-code.game</p>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <Button size="sm" variant="primary" onClick={handleCopyText} className="flex-1">
          {copied ? '✓ 已复制' : '复制结果'}
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            setShowImage((v) => !v)
            if (!showImage) {
              setTimeout(() => {
                if (canvasRef.current) drawShareCanvas(canvasRef.current, props)
              }, 50)
            }
          }}
          className="flex-1"
        >
          {showImage ? '隐藏图片' : '生成图片'}
        </Button>
        {showImage && (
          <Button size="sm" variant="ghost" onClick={handleDownloadImage} className="flex-1">
            下载 PNG
          </Button>
        )}
      </div>

      {/* Canvas 预览 */}
      {showImage && (
        <div className="mt-3 overflow-auto rounded-xl border border-ark-border bg-ark-card p-2">
          <canvas
            ref={canvasRef}
            className="mx-auto"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      )}
    </div>
  )
}
