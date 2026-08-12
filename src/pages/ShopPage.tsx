/**
 * 商店页面 — 敬请期待
 */

import { Card, CardBody, CardHeader, Badge } from '@components/ui'
import { BackButton } from '@components/BackButton'

const PREVIEW_ITEMS = [
  { icon: '🖼', name: '头像框', desc: '精美动态头像框' },
  { icon: '🏆', name: '称号', desc: '独特个性称号' },
  { icon: '🎲', name: '提示道具', desc: '额外猜测提示' },
  { icon: '🎨', name: '主题皮肤', desc: '页面主题切换' },
]

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-3xl px-3 py-6 sm:px-4 sm:py-8">
      <div className="mb-4">
        <BackButton />
      </div>
      <section className="mb-6 text-center sm:mb-8">
        <h2 className="text-2xl font-bold ark-text-gradient sm:text-3xl">商店</h2>
        <p className="mt-2 text-xs text-ark-text-secondary sm:text-sm">
          用积分兑换丰富道具
        </p>
      </section>

      <Card className="mb-6 border-2 border-dashed border-ark-border">
        <CardBody className="py-12 text-center">
          <div className="mb-4 text-5xl">🛒</div>
          <h3 className="mb-2 text-xl font-bold text-ark-text">敬请期待</h3>
          <p className="text-sm text-ark-muted">
            商店正在筹备中，即将上线丰富道具与功能
          </p>
        </CardBody>
      </Card>

      {/* 预览道具 */}
      <div className="grid gap-4 sm:grid-cols-2">
        {PREVIEW_ITEMS.map((item) => (
          <Card key={item.name} className="opacity-60">
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <h4 className="font-bold text-ark-text">{item.name}</h4>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-ark-text-secondary">{item.desc}</p>
            </CardBody>
          </Card>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-ark-muted">
        💡 积分可通过每日挑战、多人对战等方式获取
      </p>
    </main>
  )
}
