/**
 * 更新公告 + BUG 反馈 页面
 * - 公告：公开展示更新内容
 * - 反馈：玩家提交，仅管理员可见
 */
import { useState, useEffect } from 'react'
import { useAuthStore } from '@/store/auth'
import { Button, Card, CardBody, CardHeader, Badge } from '@components/ui'
import { BackButton } from '@components/BackButton'

const API = import.meta.env.VITE_API_URL || ''

interface Announcement {
  id: string
  title: string
  content: string
  isPinned: boolean
  createdAt: string
}

interface Feedback {
  id: string
  username: string
  content: string
  status: string
  createdAt: string
}

function getToken(): string | null {
  return localStorage.getItem('arkcode-token') || useAuthStore.getState().token
}

async function apiFetch<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const token = getToken()
  const res = await fetch(`${API}${path}`, {
    ...opts,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(opts.headers || {}),
    },
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: '请求失败' }))
    throw new Error(err.error || `请求失败(${res.status})`)
  }
  return res.json()
}

export default function FeedbackPage() {
  const { user, isAuthed } = useAuthStore()
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [content, setContent] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  // 管理员反馈列表
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [isAdmin, setIsAdmin] = useState(false)

  // 加载公告
  useEffect(() => {
    apiFetch<{ announcements: Announcement[] }>('/api/announcements')
      .then(d => setAnnouncements(d.announcements || []))
      .catch(() => {})
  }, [])

  // 管理员加载反馈列表
  useEffect(() => {
    if (!isAuthed || user?.role !== 'ADMIN') return
    apiFetch<{ feedbacks: Feedback[] }>('/api/feedback')
      .then(d => { setFeedbacks(d.feedbacks || []); setIsAdmin(true) })
      .catch(() => setIsAdmin(false))
  }, [isAuthed, user?.role])

  async function handleSubmit() {
    if (!content.trim()) { setError('请输入反馈内容'); return }
    if (!isAuthed) { setError('请先登录后再反馈'); return }
    setSubmitting(true)
    setError('')
    try {
      await apiFetch('/api/feedback', { method: 'POST', body: JSON.stringify({ content: content.trim() }) })
      setSubmitted(true)
      setContent('')
      setTimeout(() => setSubmitted(false), 3000)
    } catch (e: any) {
      setError(e.message || '提交失败')
    } finally {
      setSubmitting(false)
    }
  }

  async function handleResolve(id: string, status: string) {
    try {
      await apiFetch('/api/feedback/status', { method: 'POST', body: JSON.stringify({ id, status }) })
      setFeedbacks(fs => fs.map(f => f.id === id ? { ...f, status } : f))
    } catch (e: any) {
      setError(e.message || '操作失败')
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-3 py-6 sm:px-4 sm:py-8">
      <div className="mb-4">
        <BackButton />
      </div>

      <h1 className="mb-6 text-center text-2xl font-bold ark-text-gradient">📢 更新公告 & 反馈</h1>

      {/* ====== 更新公告 ====== */}
      <section className="mb-6">
        <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-ark-text">
          📢 更新公告
        </h2>
        {announcements.length === 0 ? (
          <Card>
            <CardBody className="text-center text-sm text-ark-muted">暂无更新公告</CardBody>
          </Card>
        ) : (
          <div className="space-y-3">
            {announcements.map(a => (
              <Card key={a.id}>
                <CardHeader className="flex items-center justify-between">
                  <h3 className="font-bold text-ark-text">
                    {a.isPinned && <span className="mr-1 text-ark-accent">📌</span>}
                    {a.title}
                  </h3>
                  <span className="text-xs text-ark-muted">
                    {new Date(a.createdAt).toLocaleDateString('zh-CN')}
                  </span>
                </CardHeader>
                <CardBody>
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-ark-text-secondary">{a.content}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* ====== BUG 反馈 ====== */}
      <section className="mb-6">
        <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-ark-text">
          🐛 问题反馈
        </h2>
        <Card>
          <CardBody className="space-y-4">
            <p className="text-sm text-ark-muted">
              遇到 BUG 或有改进建议？欢迎反馈，管理员会第一时间查看处理。
            </p>
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="描述你遇到的问题或建议..."
              maxLength={1000}
              rows={4}
              className="w-full resize-none rounded-lg border border-ark-border bg-ark-card px-4 py-2.5 text-sm text-ark-text placeholder:text-ark-muted focus:border-ark-primary focus:outline-none focus:ring-2 focus:ring-ark-primary/20"
            />
            <div className="flex items-center gap-3">
              <Button onClick={handleSubmit} disabled={submitting}>
                {submitting ? '提交中...' : '提交反馈'}
              </Button>
              {submitted && <span className="text-sm font-medium text-ark-success">✓ 已提交，感谢反馈！</span>}
            </div>
            {error && <p className="text-sm text-ark-danger">{error}</p>}
          </CardBody>
        </Card>
      </section>

      {/* ====== 管理员：反馈列表 ====== */}
      {isAdmin && (
        <section>
          <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-ark-text">
            🛠️ 反馈管理 <Badge variant="accent">{feedbacks.length}</Badge>
          </h2>
          {feedbacks.length === 0 ? (
            <Card>
              <CardBody className="text-center text-sm text-ark-muted">暂无反馈</CardBody>
            </Card>
          ) : (
            <div className="space-y-2">
              {feedbacks.map(f => (
                <Card key={f.id}>
                  <CardBody className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-ark-text">
                        👤 {f.username}
                        <span className="ml-2 text-xs text-ark-muted">
                          {new Date(f.createdAt).toLocaleString('zh-CN')}
                        </span>
                      </span>
                      <button
                        onClick={() => handleResolve(f.id, f.status === 'resolved' ? 'pending' : 'resolved')}
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${
                          f.status === 'resolved'
                            ? 'bg-ark-success/15 text-ark-success'
                            : 'bg-ark-warning/15 text-ark-warning'
                        }`}
                      >
                        {f.status === 'resolved' ? '✓ 已处理' : '待处理'}
                      </button>
                    </div>
                    <p className="whitespace-pre-wrap text-sm text-ark-text-secondary">{f.content}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        </section>
      )}
    </main>
  )
}
