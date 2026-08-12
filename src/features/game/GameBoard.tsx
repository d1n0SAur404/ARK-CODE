/**
 * 游戏面板 — 猜测模式（每日/练习/限时/联机）
 */

import { useEffect, useState } from 'react'
import { useGameStore } from '@/store/game'
import { useAuthStore } from '@/store/auth'
import { OperatorInput } from './OperatorInput'
import { GuessRow } from './GuessRow'
import { Button, Badge } from '@components/ui'
import { ShareCard } from '@components/ShareCard'
import { formatTime } from '@/lib/drawGuessEngine'
import type { OtherPlayerState, GuessResult, GameMode, Difficulty } from '@/types/game'
import type { Operator } from '@/types/operator'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'

export function GameBoard() {
  const { mode, status, target, guesses, config, timeRemaining, score, questionsAnswered, otherPlayers, pool, startGame, submitGuess, resetGame, tickTimer, giveUp } = useGameStore()
  const { addGameRecord } = useAuthStore()
  const [showAnswer, setShowAnswer] = useState(false)

  // 计时器
  useEffect(() => {
    if (status !== 'playing' || config.timeLimit === 0) return
    const timer = setInterval(() => tickTimer(), 1000)
    return () => clearInterval(timer)
  }, [status, config.timeLimit, tickTimer])

  // 游戏结束时记录战绩
  useEffect(() => {
    if (status === 'won' || status === 'lost') {
      addGameRecord({
        mode,
        difficulty: config.difficulty ?? 'medium',
        result: status === 'won' ? 'WIN' : 'LOSS',
        guessCount: guesses.length,
      })
    }
  }, [status]) // eslint-disable-line react-hooks/exhaustive-deps

  const guessedNames = guesses.map((g) => g.guessOperator.name)
  const remaining = config.maxGuesses - guesses.length

  if (!target) return null

  const modeLabels: Record<string, string> = {
    daily: '每日挑战',
    practice: '无限练习',
    timed: '限时挑战',
    multiplayer: '多人联机',
  }

  const difficultyLabels: Record<string, { label: string; variant: 'success' | 'warning' | 'danger' }> = {
    easy: { label: '简单 · 100', variant: 'success' },
    medium: { label: '中等 · 250', variant: 'warning' },
    hard: { label: '困难 · 全部', variant: 'danger' },
  }
  const diffInfo = config.difficulty ? difficultyLabels[config.difficulty] : null

  return (
    <div className="mx-auto max-w-3xl px-3 py-4 sm:px-4 sm:py-6">
      {/* 头部状态 */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="primary">{modeLabels[mode] || mode}</Badge>
          {diffInfo && (
            <Badge variant={diffInfo.variant}>{diffInfo.label}</Badge>
          )}
        </div>
        {config.timeLimit > 0 && (
          <div className="flex items-center gap-3">
            <Button size="sm" variant="ghost" onClick={giveUp} disabled={status !== 'playing'}>跳过</Button>
            <div
              className={clsx(
                'font-mono text-lg font-bold',
                timeRemaining <= 30 ? 'text-ark-danger animate-pulse' : 'text-ark-text',
              )}
            >
              {formatTime(timeRemaining)}
            </div>
          </div>
        )}
        {!config.timeLimit && (
          <Button size="sm" variant="ghost" onClick={giveUp} disabled={status !== 'playing'}>跳过</Button>
        )}
      </div>

      {/* 猜测次数 — 单独一行、醒目显示 */}
      {status === 'playing' && (
        <div className="mb-4 flex items-center gap-2 rounded-lg border border-ark-border bg-ark-surface px-3 py-2.5 sm:px-4 sm:py-3">
          <span className="shrink-0 text-xs font-medium text-ark-muted sm:text-sm">剩余猜测</span>
          <div className="flex flex-1 gap-0.5 sm:gap-1">
            {Array.from({ length: config.maxGuesses }).map((_, i) => (
              <div
                key={i}
                className={clsx(
                  'h-8 flex-1 rounded-md transition-all duration-300',
                  i < guesses.length
                    ? guesses[i]?.isWin
                      ? 'bg-ark-success'
                      : 'bg-ark-danger'
                    : remaining === config.maxGuesses - i
                    ? 'bg-ark-primary/30 ring-2 ring-ark-primary ring-offset-1'
                    : 'bg-ark-card',
                )}
              />
            ))}
          </div>
          <span className="text-xl font-bold text-ark-text sm:text-2xl">
            {remaining}
            <span className="text-sm font-normal text-ark-muted">/{config.maxGuesses}</span>
          </span>
        </div>
      )}

      {/* 多人模式得分 + 其他玩家状态 */}
      {mode === 'multiplayer' && (
        <div className="mb-4 space-y-2">
          <div className="flex gap-3">
            <Badge variant="success">我的得分 {score}</Badge>
            <Badge variant="warning">
              答对 {questionsAnswered}/{config.winScore}
            </Badge>
          </div>
          {/* 其他玩家状态 — 只显示正确/错误，不显示内容 */}
          <div className="flex flex-wrap gap-2 rounded-lg border border-ark-border bg-ark-card px-3 py-2">
            <span className="self-center text-xs font-semibold text-ark-muted">其他玩家：</span>
            {otherPlayers.map((p) => (
              <OtherPlayerBadge key={p.name} player={p} />
            ))}
          </div>
        </div>
      )}

      {/* 猜测历史 */}
      <div className="mb-4 space-y-0.5 sm:space-y-1">
        {/* 表头 */}
        <div className="grid grid-cols-4 gap-0.5 sm:gap-1 sm:grid-cols-8">
          {['代号', '稀有度', '职业', '种族', '出身地', '阵营', '感染', '战斗经验'].map(
            (label) => (
              <div
                key={label}
                className="px-1 py-1 text-center text-[10px] font-semibold text-ark-muted"
              >
                {label}
              </div>
            ),
          )}
        </div>

        {/* 已提交的猜测 */}
        {guesses.map((result, i) => (
          <GuessRow key={i} result={result} isRevealed />
        ))}

        {/* 空行占位 */}
        {status === 'playing' &&
          Array.from({ length: Math.max(0, remaining - 1) }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="grid grid-cols-4 gap-0.5 sm:gap-1 sm:grid-cols-8"
            >
              {Array.from({ length: 8 }).map((_, j) => (
                <div
                  key={j}
                  className="h-12 rounded-lg border border-dashed border-ark-border opacity-30 sm:h-14"
                />
              ))}
            </div>
          ))}
      </div>

      {/* 输入区 */}
      {status === 'playing' && (
        <OperatorInput
          onSubmit={submitGuess}
          excludeNames={guessedNames}
          pool={pool}
          placeholder="输入干员代号，回车提交..."
        />
      )}

      {/* 胜利/失败 — 独立弹框 */}
      {status !== 'playing' && (
        <VictoryModal
          status={status}
          target={target}
          guesses={guesses}
          mode={mode}
          difficulty={config.difficulty}
          showAnswer={showAnswer}
          onToggleAnswer={() => setShowAnswer(!showAnswer)}
          onRetry={mode === 'daily' ? undefined : () => { setShowAnswer(false); startGame(mode, config.difficulty) }}
          onBack={() => { setShowAnswer(false); resetGame(); if (mode === 'daily') navigate('/') }}
        />
      )}
    </div>
  )
}

/** 其他玩家状态徽章 — 只显示正确/错误，不显示猜测内容 */
function OtherPlayerBadge({ player }: { player: OtherPlayerState }) {
  const icon = player.lastGuessCorrect === null ? '—' : player.lastGuessCorrect ? '✓' : '✗'
  const colorClass =
    player.lastGuessCorrect === null
      ? 'text-ark-muted bg-ark-card'
      : player.lastGuessCorrect
      ? 'text-ark-success bg-ark-success-light'
      : 'text-ark-danger bg-ark-danger-light'

  return (
    <span className={clsx('flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium', colorClass)}>
      {player.name}
      <span className="font-bold">{icon}</span>
      <span className="text-ark-muted">答对 {player.correctCount}</span>
    </span>
  )
}

/** 胜利/失败弹框 */
interface VictoryModalProps {
  status: 'won' | 'lost' | 'idle'
  target: Operator
  guesses: GuessResult[]
  mode: GameMode
  difficulty?: Difficulty
  showAnswer: boolean
  onToggleAnswer: () => void
  onRetry?: () => void
  onBack: () => void
}

function VictoryModal({ status, target, guesses, mode, difficulty, showAnswer, onToggleAnswer, onRetry, onBack }: VictoryModalProps) {
  const won = status === 'won'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-4">
      <div
        className={clsx(
          'max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border-2 bg-ark-surface shadow-2xl',
          won ? 'border-ark-success' : 'border-ark-danger',
        )}
      >
        {/* 顶部彩条 */}
        <div className={clsx('h-2 rounded-t-2xl', won ? 'bg-ark-success' : 'bg-ark-danger')} />

        <div className="p-5 text-center sm:p-6">
          {won ? (
            <>
              <p className="text-2xl font-bold text-ark-success sm:text-3xl">猜对了！</p>
              <p className="mt-3 text-ark-text-secondary">
                用了 <span className="text-xl font-bold text-ark-primary">{guesses.length}</span> 次猜中
              </p>
            </>
          ) : (
            <p className="text-2xl font-bold text-ark-danger sm:text-3xl">没猜出来...</p>
          )}

          {/* 答案展示 */}
          <div className="mt-4 rounded-xl border border-ark-border bg-ark-card p-4">
            <p className="text-xl font-bold text-ark-primary">{target.name}</p>
            <p className="mt-1 text-sm text-ark-muted">
              {'★'.repeat(target.rarity)} {target.profession} · {target.race}
            </p>
            <p className="text-xs text-ark-muted">
              {target.birthplace} · {target.faction}
            </p>
          </div>

          {/* 查看详情 */}
          {showAnswer && (
            <div className="mt-3 rounded-lg border border-ark-border bg-ark-card p-4 text-left">
              <h4 className="mb-2 font-bold text-ark-text">{target.name} · 完整档案</h4>
              <dl className="grid grid-cols-2 gap-2 text-sm">
                <dt className="text-ark-muted">稀有度</dt>
                <dd className="text-ark-text">{'★'.repeat(target.rarity)}</dd>
                <dt className="text-ark-muted">职业</dt>
                <dd className="text-ark-text">{target.profession}</dd>
                <dt className="text-ark-muted">种族</dt>
                <dd className="text-ark-text">{target.race}</dd>
                <dt className="text-ark-muted">出身地</dt>
                <dd className="text-ark-text">{target.birthplace}</dd>
                <dt className="text-ark-muted">阵营</dt>
                <dd className="text-ark-text">{target.faction}</dd>
                <dt className="text-ark-muted">感染状态</dt>
                <dd className="text-ark-text">{target.oripathyStatus}</dd>
                <dt className="text-ark-muted">战斗经验</dt>
                <dd className="text-ark-text">{target.combatExperience}</dd>
              </dl>
            </div>
          )}

          {/* 分享卡片 */}
          {won && (
            <ShareCard
              status="won"
              target={target}
              guesses={guesses}
              mode={mode}
              difficulty={difficulty}
            />
          )}

          {/* 操作按钮 */}
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center">
            {onRetry && (
              <Button variant="primary" onClick={onRetry} className="sm:flex-1">
                再来一局
              </Button>
            )}
            <Button variant="outline" onClick={onToggleAnswer} className="sm:flex-1">
              {showAnswer ? '隐藏' : '查看'}详情
            </Button>
            <Button variant="ghost" onClick={onBack} className="sm:flex-1">
              {mode === 'daily' ? '返回首页' : '返回'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
