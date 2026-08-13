/**
 * 个人主页 — 编辑个人信息
 */

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/auth'
import { Button, Card, CardBody, CardHeader, Input, Badge } from '@components/ui'
import { BackButton } from '@components/BackButton'
import { StatsCalendar } from '@components/StatsCalendar'
import { AchievementWall } from '@components/AchievementWall'
import clsx from 'clsx'

type Tab = 'profile' | 'calendar' | 'achievements'

const AVATAR_PRESETS = [
  '🎮', '⚔', '🎯', '🎨', '🦁', '🐉', '🐺', '🦊',
  '🐧', '🦅', '🌟', '💎', '🔥', '⚡', '🌙', '☀',
]

const GENDERS = [
  { key: 'male' as const, label: '男' },
  { key: 'female' as const, label: '女' },
  { key: 'other' as const, label: '其他' },
]

export default function ProfilePage() {
  const navigate = useNavigate()
  const { user, isAuthed, gameHistory, achievements, updateProfile } = useAuthStore()
  const [tab, setTab] = useState<Tab>('profile')

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState<'male' | 'female' | 'other' | ''>('')
  const [avatar, setAvatar] = useState('')
  const [bio, setBio] = useState('')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (!isAuthed) {
      navigate('/login')
      return
    }
    if (user) {
      setUsername(user.username || '')
      setEmail(user.email || '')
      setGender(user.gender || '')
      setAvatar(user.avatar || '')
      setBio(user.bio || '')
    }
  }, [isAuthed, user, navigate])

  function handleSave() {
    updateProfile({ username, email, gender, avatar, bio })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  if (!isAuthed || !user) return null

  return (
    <main className="mx-auto max-w-4xl px-3 py-6 sm:px-4 sm:py-8">
      <div className="mb-4">
        <BackButton />
      </div>
      <div className="mb-6 text-center">
        <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-ark-primary to-ark-accent text-4xl text-white shadow-lg">
          {avatar || username[0]?.toUpperCase()}
        </div>
        <h2 className="text-2xl font-bold text-ark-text">{username}</h2>
        <div className="mt-2 flex items-center justify-center gap-2">
          <Badge variant="accent">💎 {user.points} 积分</Badge>
          <Badge variant="default">🎮 {gameHistory.length} 场</Badge>
        </div>
      </div>

      {/* 标签页切换 */}
      <div className="mb-4 flex gap-1 rounded-xl bg-ark-card p-1">
        {(
          [
            { key: 'profile' as Tab, label: '个人信息' },
            { key: 'calendar' as Tab, label: '战绩日历', count: gameHistory.length },
            { key: 'achievements' as Tab, label: '成就墙', count: achievements.filter(a => a.unlockedAt).length },
          ] as const
        ).map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={clsx(
              'flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all',
              tab === t.key ? 'bg-ark-primary text-ark-bg shadow-sm' : 'text-ark-text-secondary hover:text-ark-text',
            )}
          >
            {t.label}
            {'count' in t && t.count > 0 && (
              <span className={clsx('ml-1.5 rounded-full px-1.5 py-0.5 text-[10px]', tab === t.key ? 'bg-white/20' : 'bg-ark-primary-light text-ark-primary')}>
                {t.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* 个人信息 */}
      {tab === 'profile' && (
      <Card>
        <CardHeader>
          <h3 className="font-bold">编辑个人信息</h3>
        </CardHeader>
        <CardBody className="space-y-5">
          {/* 用户名 */}
          <div>
            <label className="mb-1 block text-sm font-medium text-ark-text-secondary">
              用户名
            </label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="输入用户名"
            />
          </div>

          {/* 邮箱 */}
          <div>
            <label className="mb-1 block text-sm font-medium text-ark-text-secondary">
              邮箱
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@arkcode.cn"
            />
          </div>

          {/* 性别 */}
          <div>
            <label className="mb-2 block text-sm font-medium text-ark-text-secondary">
              性别
            </label>
            <div className="flex gap-2">
              {GENDERS.map((g) => (
                <button
                  key={g.key}
                  onClick={() => setGender(g.key)}
                  className={clsx(
                    'rounded-lg border px-4 py-2 text-sm transition-all',
                    gender === g.key
                      ? 'border-ark-primary bg-ark-primary text-ark-bg font-medium'
                      : 'border-ark-border text-ark-text-secondary hover:border-ark-primary',
                  )}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* 头像 */}
          <div>
            <label className="mb-2 block text-sm font-medium text-ark-text-secondary">
              头像（选择预设）
            </label>
            <div className="grid grid-cols-8 gap-2">
              {AVATAR_PRESETS.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => setAvatar(emoji)}
                  className={clsx(
                    'flex h-10 w-10 items-center justify-center rounded-lg border-2 text-xl transition-all',
                    avatar === emoji
                      ? 'border-ark-primary bg-ark-primary-light scale-110'
                      : 'border-ark-border hover:border-ark-primary',
                  )}
                >
                  {emoji}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-ark-muted">
              自定义头像上传功能开发中
            </p>
          </div>

          {/* 简介 */}
          <div>
            <label className="mb-1 block text-sm font-medium text-ark-text-secondary">
              个人简介
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="说点什么..."
              maxLength={200}
              className="w-full resize-none rounded-lg border border-ark-border bg-ark-card px-4 py-2.5 text-sm text-ark-text placeholder:text-ark-muted focus:border-ark-primary focus:outline-none focus:ring-2 focus:ring-ark-primary/20"
              rows={3}
            />
            <p className="mt-1 text-right text-xs text-ark-muted">
              {bio.length}/200
            </p>
          </div>

          {/* 保存 */}
          <div className="flex items-center gap-3">
            <Button onClick={handleSave} size="lg">
              保存修改
            </Button>
            <Button variant="ghost" onClick={() => navigate('/')}>
              返回首页
            </Button>
            {saved && (
              <span className="text-sm font-medium text-ark-success">
                ✓ 已保存
              </span>
            )}
          </div>
        </CardBody>
      </Card>
      )}

      {/* 战绩日历 */}
      {tab === 'calendar' && (
        <StatsCalendar gameHistory={gameHistory} />
      )}

      {/* 成就墙 */}
      {tab === 'achievements' && (
        <AchievementWall achievements={achievements} />
      )}
    </main>
  )
}
