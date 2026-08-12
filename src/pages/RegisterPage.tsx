/**
 * 注册页面 — 含 Canvas 验证码
 */

import { useState, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '@/store/auth'
import { Button, Card, CardBody, CardHeader, Input } from '@components/ui'
import { Captcha } from '@components/Captcha'
import { BackButton } from '@components/BackButton'

export default function RegisterPage() {
  const navigate = useNavigate()
  const { register } = useAuthStore()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [captchaCode, setCaptchaCode] = useState('')
  const [captchaInput, setCaptchaInput] = useState('')
  const [error, setError] = useState('')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCaptchaChange = useCallback((code: string) => {
    setCaptchaCode(code)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!username.trim()) {
      setError('请输入用户名')
      return
    }
    if (username.trim().length < 2) {
      setError('用户名至少 2 个字符')
      return
    }
    if (!email.trim() || !email.includes('@')) {
      setError('请输入有效邮箱')
      return
    }
    if (password.length < 6) {
      setError('密码至少 6 位')
      return
    }
    if (password !== confirmPassword) {
      setError('两次密码不一致')
      return
    }
    if (captchaInput.toUpperCase() !== captchaCode) {
      setError('验证码不正确')
      return
    }

    const ok = await register(username.trim(), email.trim(), password)
    if (ok) {
      navigate('/profile')
    } else {
      setError('用户名已存在')
    }
  }

  return (
    <main className="mx-auto max-w-md px-3 py-8 sm:px-4 sm:py-12">
      <div className="mb-4">
        <BackButton />
      </div>
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold ark-text-gradient">注册</h2>
          <p className="mt-1 text-sm text-ark-muted">注册即可获赠 1000 初始积分</p>
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
                placeholder="2-20 个字符"
              />
            </div>
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
            <div>
              <label className="mb-1 block text-sm font-medium text-ark-text-secondary">
                密码
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="至少 6 位"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-ark-text-secondary">
                确认密码
              </label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="再输一次"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-ark-text-secondary">
                验证码
              </label>
              <div className="flex items-center gap-2">
                <Input
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  placeholder="输入验证码"
                  className="flex-1"
                />
                <Captcha value={captchaCode} onChange={handleCaptchaChange} />
              </div>
            </div>
            <Button type="submit" className="w-full" size="lg">
              注册
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-ark-muted">
            已有账号？{' '}
            <Link to="/login" className="font-bold text-ark-primary hover:underline">
              去登录
            </Link>
          </p>
        </CardBody>
      </Card>
    </main>
  )
}
