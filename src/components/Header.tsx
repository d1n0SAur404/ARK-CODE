/**
 * 全局顶栏 — 每日挑战 / 积分 / 头像
 */

import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/auth'
import { useGameStore } from '@/store/game'
import { ThemeToggle } from '@components/ThemeToggle'
import { Button, Badge } from '@components/ui'
import clsx from 'clsx'

export function Header() {
  const navigate = useNavigate()
  const { isAuthed, user, logout } = useAuthStore()
  const { startGame } = useGameStore()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleDailyChallenge() {
    startGame('daily', 'hard')
    navigate('/game', { state: { mode: 'daily' } })
  }

  function handleLogout() {
    logout()
    setMenuOpen(false)
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ark-border ark-glass">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3">
        {/* 左侧：Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-black tracking-tight ark-text-gradient sm:text-xl">
            方舟密令
          </span>
          <span className="hidden text-[10px] font-bold tracking-widest text-ark-muted sm:inline">
            ARK CODE
          </span>
        </Link>

        {/* 右侧：排行榜 + 每日挑战 + 积分 + 头像 */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* 排行榜 */}
          <button
            onClick={() => navigate('/leaderboard')}
            className="flex items-center gap-1 rounded-lg border border-ark-border px-2 py-1.5 text-sm font-medium text-ark-text-secondary transition-all hover:border-ark-accent hover:text-ark-accent sm:px-3"
          >
            <span>🏆</span>
            <span className="hidden sm:inline">排行</span>
          </button>

          {/* 每日挑战 */}
          <button
            onClick={handleDailyChallenge}
            className="flex items-center gap-1 rounded-lg border border-ark-border px-2 py-1.5 text-sm font-medium text-ark-text-secondary transition-all hover:border-ark-primary hover:text-ark-primary sm:px-3"
          >
            <span>🎯</span>
            <span className="hidden sm:inline">每日挑战</span>
          </button>

          {/* 公告 & 反馈 */}
          <button
            onClick={() => navigate('/feedback')}
            className="flex items-center gap-1 rounded-lg border border-ark-border px-2 py-1.5 text-sm font-medium text-ark-text-secondary transition-all hover:border-ark-accent hover:text-ark-accent sm:px-3"
          >
            <span>📢</span>
            <span className="hidden sm:inline">公告</span>
          </button>

          {/* 积分 */}
          {isAuthed && user && (
            <div className="flex items-center gap-1 rounded-lg bg-ark-card px-2 py-1.5 text-sm sm:px-3">
              <span className="text-ark-accent">💎</span>
              <span className="font-bold text-ark-accent">{user.points}</span>
            </div>
          )}

          <ThemeToggle />

          {/* 头像 / 登录注册 */}
          {isAuthed && user ? (
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="flex items-center gap-2 rounded-full border-2 border-ark-border p-0.5 transition-colors hover:border-ark-primary"
              >
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-ark-primary to-ark-accent text-sm font-bold text-white">
                    {user.username[0]?.toUpperCase()}
                  </div>
                )}
              </button>

              {menuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-xl border border-ark-border bg-ark-card shadow-lg">
                  <div className="border-b border-ark-border px-4 py-3">
                    <p className="text-sm font-bold text-ark-text">{user.username}</p>
                    <p className="text-xs text-ark-muted">{user.email || '未绑定邮箱'}</p>
                  </div>
                  <button
                    onClick={() => {
                      setMenuOpen(false)
                      navigate('/profile')
                    }}
                    className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-ark-text-secondary transition-colors hover:bg-ark-card-hover"
                  >
                    <span>👤</span> 个人主页
                  </button>
                  <button
                    onClick={() => {
                      setMenuOpen(false)
                      navigate('/operators')
                    }}
                    className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-ark-text-secondary transition-colors hover:bg-ark-card-hover"
                  >
                    <span>📖</span> 干员查询
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-ark-danger transition-colors hover:bg-ark-card-hover"
                  >
                    <span>🚪</span> 退出登录
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-1 sm:gap-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => navigate('/login')}
              >
                登录
              </Button>
              <Button
                size="sm"
                variant="primary"
                onClick={() => navigate('/register')}
              >
                注册
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
