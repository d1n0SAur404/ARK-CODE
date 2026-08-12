/**
 * Canvas 验证码组件
 * 生成随机字符 + 干扰线，点击刷新
 */

import { useRef, useEffect, useState, useCallback } from 'react'

interface CaptchaProps {
  value: string
  onChange: (value: string) => void
}

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

function randomText(len: number): string {
  let s = ''
  for (let i = 0; i < len; i++) {
    s += CHARS[Math.floor(Math.random() * CHARS.length)]
  }
  return s
}

export function Captcha({ value, onChange }: CaptchaProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [code, setCode] = useState('')

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const text = randomText(4)
    setCode(text)

    const W = canvas.width
    const H = canvas.height

    // 背景
    ctx.fillStyle = '#1a1a2e'
    ctx.fillRect(0, 0, W, H)

    // 渐变
    const grad = ctx.createLinearGradient(0, 0, W, H)
    grad.addColorStop(0, 'rgba(42,109,181,0.15)')
    grad.addColorStop(1, 'rgba(0,212,170,0.15)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, W, H)

    // 干扰线
    for (let i = 0; i < 4; i++) {
      ctx.strokeStyle = `rgba(${Math.random() * 200},${Math.random() * 200},${Math.random() * 200},0.3)`
      ctx.beginPath()
      ctx.moveTo(Math.random() * W, Math.random() * H)
      ctx.lineTo(Math.random() * W, Math.random() * H)
      ctx.stroke()
    }

    // 干扰点
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.3})`
      ctx.beginPath()
      ctx.arc(Math.random() * W, Math.random() * H, 1, 0, Math.PI * 2)
      ctx.fill()
    }

    // 文字
    const colors = ['#00d4aa', '#2a6db5', '#ffd700', '#ff6b6b', '#e0e0e0']
    for (let i = 0; i < text.length; i++) {
      ctx.save()
      ctx.fillStyle = colors[i % colors.length]
      ctx.font = `bold ${24 + Math.random() * 6}px monospace`
      const x = 18 + i * 22 + (Math.random() * 4 - 2)
      const y = 28 + (Math.random() * 6 - 3)
      ctx.translate(x, y)
      ctx.rotate((Math.random() - 0.5) * 0.4)
      ctx.fillText(text[i], 0, 0)
      ctx.restore()
    }
  }, [])

  useEffect(() => {
    draw()
  }, [draw])

  // 通知父组件当前验证码（通过 data 属性，不直接比较）
  useEffect(() => {
    onChange(code)
  }, [code, onChange])

  return (
    <div className="flex items-center gap-2">
      <canvas
        ref={canvasRef}
        width={120}
        height={40}
        onClick={draw}
        className="cursor-pointer rounded-lg border border-ark-border"
        title="点击刷新验证码"
      />
      <span className="text-xs text-ark-muted">点击刷新</span>
      <input type="hidden" value={value} />
    </div>
  )
}
