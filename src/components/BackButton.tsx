/**
 * 通用返回按钮 — 左上角，返回上一级
 */

import { useNavigate } from 'react-router-dom'

interface BackButtonProps {
  /** 自定义回退路径，默认浏览器历史 -1 */
  to?: string
  /** 自定义点击逻辑（覆盖默认导航） */
  onClick?: () => void
  label?: string
}

export function BackButton({ to, onClick, label = '返回' }: BackButtonProps) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => {
        if (onClick) {
          onClick()
        } else if (to) {
          navigate(to)
        } else if (window.history.length > 1) {
          navigate(-1)
        } else {
          navigate('/')
        }
      }}
      className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-ark-text-secondary transition-all hover:bg-ark-card-hover hover:text-ark-primary"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 18l-6-6 6-6" />
      </svg>
      {label}
    </button>
  )
}
