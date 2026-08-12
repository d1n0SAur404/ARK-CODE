/**
 * 论坛页面 — 帖子 / 评论 / 分权管理
 */
import { useState, useEffect } from 'react'
import { useAuthStore } from '@/store/auth'
import { Card, CardBody, CardHeader, CardFooter, Button, Input, Badge } from '@components/ui'
import { BackButton } from '@components/BackButton'
import clsx from 'clsx'

interface Post { id: number; author: string; avatar: string; title: string; content: string; likes: number; isPinned: boolean; createdAt: string; comments?: Comment[] }
interface Comment { id: number; author: string; avatar: string; content: string; createdAt: string }

const API = import.meta.env.VITE_API_URL || ''

function getToken(): string | null { return localStorage.getItem('arkcode-token') }
async function apiFetch(path: string, opts: RequestInit = {}): Promise<any> {
  const token = getToken()
  const res = await fetch(`${API}${path}`, { ...opts, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(opts.headers || {}) } })
  if (!res.ok) { const e = await res.json().catch(() => ({ error: '请求失败' })); throw new Error(e.error) }
  return res.json()
}

export default function ForumPage() {
  const { isAuthed, user } = useAuthStore()
  const [posts, setPosts] = useState<Post[]>([])
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [userRole, setUserRole] = useState<string>('USER')
  const [showAdminPanel, setShowAdminPanel] = useState(false)
  const [adminUsers, setAdminUsers] = useState<any[]>([])
  const [expandedPost, setExpandedPost] = useState<number | null>(null)
  const [commentText, setCommentText] = useState('')
  const [commentsMap, setCommentsMap] = useState<Record<number, Comment[]>>({})

  useEffect(() => {
    loadPosts()
    if (isAuthed) apiFetch('/api/forum/admin/check').then(d => { setUserRole(d.role) }).catch(() => {})
  }, [])

  function refreshComments(postId: number) {
    apiFetch(`/api/forum/comments/${postId}`).then(d => setCommentsMap(p => ({ ...p, [postId]: d.comments }))).catch(() => {})
  }

  function loadPosts() {
    setLoading(true)
    apiFetch('/api/forum/list').then(d => {
      setPosts(d.posts.map((p: any) => ({ ...p, createdAt: new Date(p.createdAt).toLocaleString('zh-CN') })))
    }).catch(() => {}).finally(() => setLoading(false))
  }

  async function loadUsers() {
    try { const d = await apiFetch('/api/forum/admin/users'); setAdminUsers(d.users) } catch {}
  }

  async function handlePost() {
    if (!title.trim() || !content.trim()) return
    try {
      const data = await apiFetch('/api/forum/create', { method: 'POST', body: JSON.stringify({ title: title.trim(), content: content.trim() }) })
      setPosts(p => [{ ...data.post, createdAt: new Date(data.post.createdAt).toLocaleString('zh-CN') }, ...p])
      setTitle(''); setContent(''); setShowForm(false)
    } catch (e: any) { alert(e.message) }
  }

  async function handleLike(id: number) { try { await apiFetch('/api/forum/like', { method: 'POST', body: JSON.stringify({ postId: id }) }); loadPosts() } catch {} }
  async function handleComment(postId: number) {
    if (!commentText.trim()) return
    try { const d = await apiFetch('/api/forum/comment', { method: 'POST', body: JSON.stringify({ postId, content: commentText.trim() }) }); setCommentsMap(p => ({ ...p, [postId]: [...(p[postId] || []), d.comment] })); setCommentText('') } catch (e: any) { alert(e.message) }
  }
  function toggleExpand(postId: number) { setExpandedPost(p => p === postId ? null : postId); refreshComments(postId) }
  async function staffAction(action: string, targetId: number) { try { await apiFetch('/api/forum/admin', { method: 'POST', body: JSON.stringify({ action, targetId }) }); loadPosts() } catch (e: any) { alert(e.message) } }
  async function userAction(action: string, targetId: string) { try { await apiFetch('/api/forum/admin/user', { method: 'POST', body: JSON.stringify({ action, targetId }) }); loadUsers() } catch (e: any) { alert(e.message) } }

  const isStaff = userRole === 'ADMIN' || userRole === 'MODERATOR'
  const roleLabel = userRole === 'ADMIN' ? '管理员' : userRole === 'MODERATOR' ? '版主' : ''
  const roleVariant = (r: string) => r === 'ADMIN' ? 'danger' as const : r === 'MODERATOR' ? 'primary' as const : 'default' as const

  return (
    <main className="mx-auto max-w-3xl px-3 py-6 sm:px-4 sm:py-8">
      <div className="mb-4"><BackButton /></div>
      <section className="mb-6 text-center">
        <h2 className="text-2xl font-bold ark-text-gradient sm:text-3xl">论坛</h2>
        <p className="mt-2 text-xs text-ark-text-secondary sm:text-sm">分享有趣的东西，交流游戏心得</p>
        <div className="flex justify-center gap-2 mt-2">
          {roleLabel && <Badge variant={roleVariant(userRole)}>{roleLabel}</Badge>}
          {userRole === 'ADMIN' && <Button size="sm" variant="ghost" onClick={() => { setShowAdminPanel(v => !v); loadUsers() }}>{showAdminPanel ? '关闭管理' : '用户管理'}</Button>}
        </div>
      </section>

      {/* -------- 管理员面板 -------- */}
      {showAdminPanel && userRole === 'ADMIN' && (
        <Card className="mb-6 border-2 border-ark-danger">
          <CardHeader><h3 className="font-bold">用户管理</h3></CardHeader>
          <CardBody className="space-y-2 max-h-80 overflow-auto">
            {adminUsers.map((u: any) => (
              <div key={u.id} className="flex items-center justify-between rounded-lg bg-ark-surface p-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-ark-text">{u.username}</span>
                  <Badge variant={roleVariant(u.role)}>{u.role === 'ADMIN' ? '管理员' : u.role === 'MODERATOR' ? '版主' : '用户'}</Badge>
                  {u.isBanned && <Badge variant="danger">已封</Badge>}
                </div>
                <div className="flex gap-1">
                  {u.role === 'USER' && <Button size="sm" variant="primary" onClick={() => userAction('promote_moderator', u.id)}>升版主</Button>}
                  {u.role === 'MODERATOR' && <Button size="sm" variant="ghost" onClick={() => userAction('demote_moderator', u.id)}>降级</Button>}
                  {u.role !== 'ADMIN' && (u.isBanned ? <Button size="sm" variant="success" onClick={() => userAction('unban_user', u.id)}>解封</Button> : <Button size="sm" variant="danger" onClick={() => userAction('ban_user', u.id)}>封禁</Button>)}
                </div>
              </div>
            ))}
            {adminUsers.length === 0 && <p className="text-xs text-ark-muted text-center py-2">暂无用户</p>}
          </CardBody>
        </Card>
      )}

      {isAuthed ? <div className="mb-6"><Button onClick={() => setShowForm(v => !v)} className="w-full">{showForm ? '收起' : '✏ 发布新帖'}</Button></div> : <Card className="mb-6"><CardBody className="text-center text-sm text-ark-muted">登录后即可发帖</CardBody></Card>}

      {showForm && isAuthed && (
        <Card className="mb-6 border-2 border-ark-primary">
          <CardBody className="space-y-3">
            <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="帖子标题" />
            <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="说点什么..." maxLength={500} rows={4} className="w-full resize-none rounded-lg border border-ark-border bg-ark-card px-4 py-2.5 text-sm text-ark-text placeholder:text-ark-muted focus:border-ark-primary focus:outline-none" />
            <div className="flex items-center justify-between">
              <span className="text-xs text-ark-muted">{content.length}/500</span>
              <div className="flex gap-2"><Button variant="ghost" size="sm" onClick={() => setShowForm(false)}>取消</Button><Button variant="primary" size="sm" onClick={handlePost}>发帖</Button></div>
            </div>
          </CardBody>
        </Card>
      )}

      {loading && <p className="text-center text-ark-muted py-10">加载中...</p>}
      {!loading && posts.length === 0 && <p className="text-center text-ark-muted py-10">暂无帖子</p>}

      <div className="space-y-4">
        {posts.map(post => (
          <Card key={post.id} className={post.isPinned ? 'border-ark-primary' : ''}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{post.avatar}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      {post.isPinned && <Badge variant="accent">置顶</Badge>}
                      <h3 className="font-bold text-ark-text">{post.title}</h3>
                    </div>
                    <p className="text-xs text-ark-muted">{post.author} · {post.createdAt}</p>
                  </div>
                </div>
                {isStaff && (
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost" onClick={() => staffAction('pin_post', post.id)}>{post.isPinned ? '取消置顶' : '置顶'}</Button>
                    <Button size="sm" variant="danger" onClick={() => staffAction('delete_post', post.id)}>删除</Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-ark-text-secondary whitespace-pre-wrap">{post.content}</p>
              <button onClick={() => toggleExpand(post.id)} className="mt-2 text-xs text-ark-muted hover:text-ark-primary">
                {expandedPost === post.id ? '收起评论' : (post.comments?.length || commentsMap[post.id]?.length || 0) > 0 ? `查看评论 (${post.comments?.length || commentsMap[post.id]?.length || 0})` : '发表评论'}
              </button>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <button onClick={() => handleLike(post.id)} className={clsx('flex items-center gap-1 text-xs transition-colors', post.likes > 0 ? 'text-ark-primary' : 'text-ark-muted hover:text-ark-primary')}>❤ {post.likes > 0 && post.likes}</button>
            </CardFooter>

            {expandedPost === post.id && (
              <div className="border-t border-ark-border px-4 py-3">
                <div className="space-y-2 mb-3">
                  {(commentsMap[post.id] || post.comments || []).map((c: Comment) => (
                    <div key={c.id} className="rounded-lg bg-ark-surface p-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-ark-text">{c.author}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-ark-muted">{new Date(c.createdAt).toLocaleString('zh-CN')}</span>
                          {isStaff && <Button size="sm" variant="ghost" onClick={() => { staffAction('delete_comment', c.id); refreshComments(post.id) }}>删除</Button>}
                        </div>
                      </div>
                      <p className="text-xs text-ark-text-secondary mt-1">{c.content}</p>
                    </div>
                  ))}
                  {(!commentsMap[post.id] || commentsMap[post.id].length === 0) && <p className="text-xs text-ark-muted pb-2">暂无评论</p>}
                </div>
                {isAuthed && (
                  <div className="flex gap-2">
                    <Input value={commentText} onChange={e => setCommentText(e.target.value)} placeholder="写评论..." className="flex-1 text-sm" onKeyDown={e => { if (e.key === 'Enter') handleComment(post.id) }} />
                    <Button size="sm" onClick={() => handleComment(post.id)}>发送</Button>
                  </div>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>
    </main>
  )
}
