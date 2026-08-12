/**
 * 登录页面
 */

import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '@/store/auth'
import { Button, Card, CardBody, CardHeader, Input } from '@components/ui'
import { BackButton } from '@components/BackButton'

export default function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuthStore()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!username.trim() || !password.trim()) {
      setError('请填写用户名和密码')
      return
    }

    const ok = await login(username.trim(), password)
    if (ok) {
      navigate('/profile')
    } else {
      setError('用户名或密码错误')
    }
  }

  return (
    <main className="mx-auto max-w-md px-3 py-8 sm:px-4 sm:py-12">
      <div className="mb-4">
        <BackButton />
      </div>
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold ark-text-gradient">登录</h2>
          <p className="mt-1 text-sm text-ark-muted">登录后可同步积分与战绩</p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="rounded-lg border border-ark-danger bg-ark-danger-light px-4 py-2.5 text-sm text-ark-danger">
                {error}
              </div>
            )}
            <div>
              <label className="mb-1 block text-sm font-medium text-ark-text-secondary">
                用户名
              </label>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="输入用户名"
                autoComplete="username"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-ark-text-secondary">
                密码
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="输入密码"
                autoComplete="current-password"
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              登录
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-ark-muted">
            还没有账号？{' '}
            <Link to="/register" className="font-bold text-ark-primary hover:underline">
              立即注册
            </Link>
          </p>
        </CardBody>
      </Card>
    </main>
  )
}
