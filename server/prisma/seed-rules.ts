/**
 * 论坛守则 — 种子帖
 * 可作为置顶帖持久存在
 */
import { prisma } from '../src/lib/prisma.js'

const RULES = `# 📜 方舟密令 · 论坛守则

欢迎来到方舟密令社区！请遵守以下规则，共同维护友好交流环境。

---

## 一、基本原则

1. **友善交流** —— 禁止人身攻击、辱骂、引战、阴阳怪气
2. **内容相关** —— 帖子应与游戏相关（明日方舟、方舟密令、猜角色、画猜等）
3. **尊重原创** —— 转载需注明出处，禁止抄袭他人攻略/心得
4. **禁止广告** —— 不得发布代练、账号交易、外部链接推广等内容

## 二、禁止行为

| 行为 | 处理 |
|------|------|
| 辱骂/人身攻击/歧视性言论 | 删帖 + 封禁 3 天 |
| 发布色情/暴力/违法内容 | 永久封禁 |
| 恶意刷屏/重复灌水 | 删帖 + 警告 |
| 冒充官方/管理员 | 永久封禁 |
| 发布作弊工具/外挂 | 删帖 + 封禁 7 天 |
| 泄露他人隐私信息 | 永久封禁 |

## 三、发帖规范

- 标题应简洁明确，避免纯符号或"111""test"等无意义内容
- 攻略/心得类帖子请标注对应难度和模式
- 吐槽帖请在标题标注【吐槽】，情绪有处可放但请勿升级为骂战
- 同一话题请勿重复发帖，可在原帖下补充

## 四、社区奖励

- 高质量攻略/教程帖可由版主加精置顶
- 积极参与讨论、帮助新人的用户有机会被推荐为版主
- 定期举办社区活动，优胜者获得论坛专属头衔

---

> 违规举报：请私信管理员或版主处理  
> 申诉方式：被封禁后可通过注册新号联系管理员说明情况  
> 本守则解释权归方舟密令管理团队所有`

async function seed() {
  const existing = await prisma.forumPost.findFirst({ where: { title: '📜 方舟密令 · 论坛守则' } })
  if (existing) { console.log('Rules already exist, resetting...'); await prisma.forumPost.delete({ where: { id: existing.id } }) }
  await prisma.forumPost.create({
    data: {
      author: 'ArkMaster',
      avatar: '🛡️',
      title: '📜 方舟密令 · 论坛守则',
      content: RULES,
      likes: 999,
      isPinned: true,
    },
  })
  console.log('Forum rules posted and pinned.')
  await prisma.$disconnect()
}

seed()
