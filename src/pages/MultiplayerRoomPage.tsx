/**
 * 多人联机房间 — WebSocket 真联机
 */
import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/auth'
import { BackButton } from '@components/BackButton'
import { Button, Card, CardBody, CardHeader, Badge, Input } from '@components/ui'
import { OperatorInput } from '@features/game/OperatorInput'
import { GuessRow } from '@features/game/GuessRow'
import { getOperatorByName, getOperatorPool, DIFFICULTY_INFO } from '@/data/operatorData'
import type { FieldStatus, Difficulty } from '@/types/game'
import clsx from 'clsx'

// ====== Types ======
interface RoomPlayer { userId: string; username: string; avatar: string; ready: boolean; score: number; isMe: boolean }
interface Spectator { userId: string; username: string; avatar: string; isMe: boolean }
type Phase = 'create' | 'lobby' | 'difficulty' | 'playing' | 'result'

const COLOR_MAP: Record<string, string> = {
  correct:'bg-ark-success', partial:'bg-ark-warning', wrong:'bg-ark-danger',
}
const DIFFICULTIES: Difficulty[] = ['easy','medium','hard']

// WebSocket 地址
const WS_URL = import.meta.env.VITE_WS_URL || (import.meta.env.PROD ? 'wss://' + window.location.host + '/ws' : 'ws://' + window.location.host + '/ws-game')

export default function MultiplayerRoomPage() {
  const nav = useNavigate()
  const { user, isAuthed, token: authToken } = useAuthStore()
  const socketRef = useRef<WebSocket | null>(null)
  const [connected, setConnected] = useState(false)
  const [error, setError] = useState('')

  // 阶段
  const [phase, setPhase] = useState<Phase>('create')
  const [roomCode, setRoomCode] = useState('')
  const [joinCode, setJoinCode] = useState('')
  const [isHost, setIsHost] = useState(false)
  const [players, setPlayers] = useState<RoomPlayer[]>([])
  const [spectators, setSpectators] = useState<Spectator[]>([])
  const [difficulty, setDifficulty] = useState<Difficulty>('medium')
  const [roundCount, setRoundCount] = useState(3)
  const [round, setRound] = useState(1)
  const [maxRounds, setMaxRounds] = useState(3)

  // 游戏
  const [targetName, setTargetName] = useState('')
  const [targetRarity, setTargetRarity] = useState(1)
  const [targetProfession, setTargetProfession] = useState('')
  const [guesses, setGuesses] = useState<any[]>([])
  const [othersGrids, setOthersGrids] = useState<Record<string, {count:number;grids:FieldStatus[][]}>>({})
  const [winner, setWinner] = useState<string|null>(null)
  const [timer, setTimer] = useState(120)
  const [autoCountdown, setAutoCountdown] = useState(0)
  const [skipPlayers, setSkipPlayers] = useState<Set<string>>(new Set())
  const [hasSkipped, setHasSkipped] = useState(false)

  const myName = user?.username ?? '博士'
  const myAvatar = user?.avatar ?? '🎮'

  // ====== WebSocket ======
  useEffect(() => {
    if (!isAuthed) return
    const token = authToken || localStorage.getItem('arkcode-token')
    if (!token) {
      setError('未获取到服务器令牌，请退出后重新登录以连接联机服务器')
      return
    }

    const ws = new WebSocket(`${WS_URL}?token=${token}`)
    socketRef.current = ws

    ws.onopen = () => setConnected(true)
    ws.onclose = () => setConnected(false)
    ws.onerror = () => {}
    ws.onmessage = (e) => {
      let msg: any
      try { msg = JSON.parse(e.data) } catch { return }

      switch (msg.type) {
        case 'connected':
          break
        case 'room:created':
          setRoomCode(msg.room.code); setIsHost(true)
          setPlayers(msg.room.players); setSpectators(msg.room.spectators)
          setPhase('lobby'); setError('')
          break
        case 'room:joined':
          setPlayers(msg.room.players); setSpectators(msg.room.spectators)
          setPhase('lobby'); setError('')
          break
        case 'room:player_joined':
          setPlayers((p: any[]) => p.some((x: any) => x.userId === msg.player.userId) ? p : [
            ...p.filter((x: any) => x.userId !== msg.player.userId),
            { ...msg.player, ready: false, score: 0, isMe: msg.player.userId === user?.id },
          ])
          break
        case 'room:player_ready':
          setPlayers((p: any[]) => p.map((x: any) => x.userId === msg.userId ? { ...x, ready: msg.ready } : x))
          break
        case 'room:player_left':
          setPlayers((p: any[]) => p.filter((x: any) => x.userId !== msg.userId))
          break
        case 'game:started':
          setTargetName(msg.target?.name || '')
          setTargetRarity(msg.target?.rarity || 3)
          setTargetProfession(msg.target?.profession || '')
          setGuesses([]); setOthersGrids({}); setWinner(null)
          setRound(msg.round); setMaxRounds(msg.maxRounds)
          if (msg.difficulty) setDifficulty(msg.difficulty as Difficulty)
          setTimer(msg.timeLimit)
          setPhase('playing'); setError('')
          setHasSkipped(false); setSkipPlayers(new Set())
          break
        case 'game:guess_result': {
          // 服务端 fields 是 Record<string, {label,value,status}>，转为 GuessRow 需要的数组
          const rawFields = msg.result?.fields || {}
          const fieldsArr = Array.isArray(rawFields)
            ? rawFields
            : Object.entries(rawFields).map(([key, f]: [string, any]) => ({
                key,
                label: f?.label || key,
                guessValue: f?.value || '',
                targetValue: '',
                status: f?.status || 'wrong',
              }))
          setGuesses((g: any[]) => [...g, {
            ...msg.result,
            fields: fieldsArr,
            guessOperator: { name: msg.result?.operatorName || '' },
            isWin: msg.isWin ?? msg.result?.isCorrect ?? false,
          }])
          break
        }
        case 'game:player_guessed': {
          // 服务端 grid 是 [{key,label,status},...]，转为 FieldStatus[] 一行
          const newRow: FieldStatus[] = Array.isArray(msg.grid)
            ? msg.grid.map((f: any) => f?.status as FieldStatus)
            : []
          setOthersGrids((prev: any) => {
            const existing = prev[msg.userId] || { count: 0, grids: [] as FieldStatus[][] }
            return {
              ...prev,
              [msg.userId]: {
                count: msg.guessCount ?? existing.count + 1,
                grids: [...existing.grids, newRow],
              },
            }
          })
          break
        }
        case 'game:round_end':
          setWinner(msg.winner || 'timeout')
          setHasSkipped(false)
          break
        case 'game:skip_update':
          setSkipPlayers(new Set(msg.skipPlayers || []))
          break
        case 'game:all_skipped':
          setWinner('skipped')
          break
        case 'game:finished':
          setWinner('finished')
          // 更新最终分数
          if (msg.scores) {
            setPlayers((p: any[]) => p.map((x: any) => {
              const s = msg.scores.find((sc: any) => sc.userId === x.userId)
              return s ? { ...x, score: s.score } : x
            }))
          }
          break
        case 'error':
          setError(msg.message)
          break
      }
    }

    return () => { ws.close() }
  }, [isAuthed])

  function send(msg: object) {
    socketRef.current?.send(JSON.stringify(msg))
  }

  // ====== 计时器 ======
  useEffect(() => {
    if (phase !== 'playing' || winner) return
    const id = setInterval(() => {
      setTimer(t => {
        if (t <= 1) { clearInterval(id); setWinner('timeout'); return 0 }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [phase, winner])

  // ====== 回合结束后 5 秒自动下一题 ======
  useEffect(() => {
    if (!winner) { setAutoCountdown(0); return }
    setAutoCountdown(5)
    const id = setInterval(() => {
      setAutoCountdown(c => {
        if (c <= 1) { clearInterval(id); if (isHost) nextRound(); return 0 }
        return c - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [winner])

  // ====== Actions ======
  function createRoom() {
    setError(''); send({ type: 'room:create', avatar: myAvatar })
  }
  function handleJoinRoom(asSpectator = false) {
    if (!joinCode.trim()) return
    setError(''); setRoomCode(joinCode.toUpperCase())
    send({ type: asSpectator ? 'room:spectate' : 'room:join', code: joinCode.toUpperCase(), avatar: myAvatar })
  }
  function toggleReady() {
    send({ type: 'room:ready' })
  }
  function goToDifficulty() {
    setPhase('difficulty')
  }
  function startGame(diff: Difficulty) {
    setDifficulty(diff)
    send({ type: 'room:start', difficulty: diff, maxRounds: roundCount })
  }
  function submitGuess(name: string) {
    send({ type: 'game:guess', operatorName: name })
  }
  function handleSkip() {
    setHasSkipped(true)
    send({ type: 'game:skip' })
  }
  function nextRound() {
    send({ type: 'room:start', difficulty, maxRounds: roundCount })
  }
  function leaveRoom() {
    send({ type: 'room:leave' })
    setPhase('create'); setPlayers([]); setSpectators([]); setGuesses([])
  }

  useEffect(() => () => {}, [])

  if (!isAuthed) {
    return (
      <main className="mx-auto max-w-4xl px-3 py-6 sm:px-4 sm:py-8">
        <div className="text-center text-ark-muted py-20">正在验证登录状态...</div>
      </main>
    )
  }

  const isSpect = players.find(p => p.userId === user?.id)?.ready === undefined && false

  return (
    <main className="mx-auto max-w-4xl px-3 py-6 sm:px-4 sm:py-8">
      <div className="mb-4 flex items-center justify-between">
        <BackButton onClick={() => { leaveRoom(); nav('/') }} />
        {connected ? <Badge variant="success">已连接</Badge> : <Badge variant="danger">未连接</Badge>}
      </div>

      {error && (
        <div className="mx-auto max-w-md mb-4 rounded-lg border border-ark-danger bg-ark-danger-light p-3 text-center text-sm text-ark-danger">
          {error}
        </div>
      )}

      {/* ====== 创建/加入 ====== */}
      {phase === 'create' && (
        <div className="mx-auto max-w-md space-y-4">
          <h1 className="text-center text-2xl font-bold ark-text-gradient sm:text-3xl">多人联机</h1>
          <p className="text-center text-sm text-ark-muted">创建房间，邀请好友，实时对战比拼</p>
          <div className="flex items-center gap-3 rounded-xl bg-ark-card p-4">
            {user?.avatar ? <span className="text-2xl">{user.avatar}</span> : <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-ark-primary to-ark-accent text-sm font-bold text-white">{myName[0]?.toUpperCase()}</div>}
            <div><p className="font-bold text-ark-text">{myName}</p><p className="text-xs text-ark-muted">{connected ? '已连接服务器，可创建/加入房间' : '连接中...'}</p></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card hover>
              <CardHeader><h3 className="font-bold">创建房间</h3></CardHeader>
              <CardBody>
                <p className="mb-3 text-sm text-ark-muted">创建一个新房间，分享房间码给好友</p>
                <Button onClick={createRoom} className="w-full" size="lg" disabled={!connected}>创建房间</Button>
              </CardBody>
            </Card>
            <Card hover>
              <CardHeader><h3 className="font-bold">加入房间</h3></CardHeader>
              <CardBody>
                <p className="mb-3 text-sm text-ark-muted">输入房间码加入已有房间</p>
                <Input value={joinCode} onChange={e => setJoinCode(e.target.value.toUpperCase())} placeholder="如 ABC123" className="mb-3" maxLength={6} />
                <div className="flex gap-2">
                  <Button onClick={() => handleJoinRoom(false)} className="flex-1" size="lg" disabled={!connected}>加入对战</Button>
                  <Button onClick={() => handleJoinRoom(true)} variant="ghost" size="lg" disabled={!connected}>观战</Button>
                </div>
              </CardBody>
            </Card>
          </div>
          <p className="text-center text-xs text-ark-muted">提示：需要先启动后端服务（npm run dev），联机需要同一网络下的多台电脑</p>
        </div>
      )}

      {/* ====== 准备大厅 ====== */}
      {phase === 'lobby' && (
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold ark-text-gradient sm:text-3xl">准备大厅</h1>
            <div className="mt-3 inline-flex items-center gap-3 rounded-xl bg-ark-card px-6 py-3">
              <span className="text-sm text-ark-muted">房间码</span>
              <span className="text-2xl font-mono font-bold tracking-widest ark-text-gradient">{roomCode}</span>
            </div>
          </div>
          <Card>
            <CardHeader><h3 className="font-bold">玩家 ({players.length})</h3></CardHeader>
            <CardBody className="space-y-2">
              {players.map(p => (
                <div key={p.userId} className={clsx('flex items-center justify-between rounded-lg border p-3', p.isMe ? 'border-ark-primary bg-ark-primary-light' : 'border-ark-border')}>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{p.avatar}</span>
                    <div>
                      <p className="text-sm font-bold text-ark-text">{p.username}</p>
                      <p className="text-[10px] text-ark-muted">{p.isMe ? '你' : ''}{p.userId === players[0]?.userId ? ' · 房主' : ''}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={p.ready ? 'success' : 'warning'}>{p.ready ? '已准备' : '未准备'}</Badge>
                    <Badge variant="accent">{p.score} 分</Badge>
                  </div>
                </div>
              ))}
              {players.length === 0 && <p className="text-center text-sm text-ark-muted py-4">等待玩家加入...</p>}
            </CardBody>
          </Card>
          {spectators.length > 0 && (
            <Card className="mt-4 opacity-70">
              <CardHeader><h3 className="font-bold text-sm">观战席 ({spectators.length})</h3></CardHeader>
              <CardBody className="space-y-2">
                {spectators.map(s => (<div key={s.userId} className="flex items-center gap-3 rounded-lg border border-ark-border p-2"><span>👀</span><span className="text-sm text-ark-text">{s.username}</span></div>))}
              </CardBody>
            </Card>
          )}
          <div className="mt-4 flex gap-3">
            {players.find(p => p.isMe) && (
              <Button onClick={toggleReady} size="lg" variant={players.find(p => p.isMe)?.ready ? 'ghost' : 'primary'} className="flex-1">
                {players.find(p => p.isMe)?.ready ? '取消准备' : '准备'}
              </Button>
            )}
            {isHost && (
              <Button onClick={goToDifficulty} size="lg" variant="accent" className="flex-1" disabled={players.length < 1 || !players.every(p => p.ready)}>
                {players.every(p => p.ready) ? '选择难度' : '等待准备...'}
              </Button>
            )}
          </div>
          <div className="mt-3 text-center">
            <Button variant="ghost" size="sm" onClick={leaveRoom}>离开房间</Button>
          </div>
        </div>
      )}

      {/* ====== 难度 + 题数选择 ====== */}
      {phase === 'difficulty' && (
        <div className="mx-auto max-w-md">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold ark-text-gradient sm:text-2xl">选择难度与题数</h2>
            <p className="text-sm text-ark-muted mt-1">{roomCode}</p>
          </div>

          {/* 总题数 */}
          <Card className="mb-4">
            <CardHeader><h3 className="font-bold text-sm">答对几题结束</h3></CardHeader>
            <CardBody>
              <div className="flex gap-2">
                {[1, 3, 5].map(n => (
                  <button key={n} onClick={() => setRoundCount(n)} className={clsx('flex-1 rounded-lg border-2 py-3 text-center font-bold transition-all', roundCount === n ? 'border-ark-primary bg-ark-primary-light text-ark-primary' : 'border-ark-border bg-ark-card text-ark-text hover:border-ark-primary')}>
                    {n} 题
                  </button>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* 难度 */}
          <div className="space-y-3">
            {DIFFICULTIES.map(diff => {
              const info = DIFFICULTY_INFO[diff]
              return (
                <Card key={diff} hover onClick={() => startGame(diff)} className="cursor-pointer">
                  <CardBody className="flex items-center gap-4">
                    <div className={clsx('flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white', diff === 'easy' ? 'bg-ark-success' : diff === 'medium' ? 'bg-ark-warning' : 'bg-ark-danger')}>
                      {diff === 'easy' ? '🌟' : diff === 'medium' ? '🔥' : '💀'}
                    </div>
                    <div>
                      <p className="font-bold text-ark-text">{info.label}</p>
                      <p className="text-xs text-ark-muted">{info.desc} · {info.count} 名干员 · 共 {roundCount} 题</p>
                    </div>
                  </CardBody>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {/* ====== 对战中 ====== */}
      {(phase === 'playing' || phase === 'result') && (
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Badge variant="primary">{DIFFICULTY_INFO[difficulty].label}</Badge>
                <Badge variant="default">第 {round} 题</Badge>
              </div>
              <div className="flex items-center gap-3">
                <Button size="sm" variant={hasSkipped ? 'ghost' : 'warning'} onClick={handleSkip} disabled={hasSkipped || !!winner}>
                  {hasSkipped ? '已跳过' : '跳过'} ({skipPlayers.size}/{players.length})
                </Button>
                <div className={clsx('text-lg font-mono font-bold', timer <= 30 && 'text-ark-danger animate-pulse')}>
                  {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
                </div>
              </div>
            </div>

            {/* 猜测进度条 */}
            {!winner && (
              <div className="mb-4 flex items-center gap-2 rounded-lg border border-ark-border bg-ark-surface px-3 py-2.5">
                <span className="shrink-0 text-xs font-medium text-ark-muted sm:text-sm">剩余猜测</span>
                <div className="flex flex-1 gap-0.5">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className={clsx('h-8 flex-1 rounded-md transition-all', i < guesses.length ? (guesses[i]?.isWin ? 'bg-ark-success' : 'bg-ark-danger') : (8 - guesses.length) === 8 - i ? 'bg-ark-primary/30 ring-2 ring-ark-primary' : 'bg-ark-card')} />
                  ))}
                </div>
                <span className="text-xl font-bold text-ark-text sm:text-2xl">{8 - guesses.length}<span className="text-sm font-normal text-ark-muted">/8</span></span>
              </div>
            )}

            {/* 猜测历史 */}
            <div className="mb-4 space-y-0.5 sm:space-y-1">
              <div className="grid grid-cols-4 gap-0.5 sm:gap-1 sm:grid-cols-8">
                {['代号', '稀有度', '职业', '种族', '出身地', '阵营', '感染', '战斗经验'].map(label => (
                  <div key={label} className="px-1 py-1 text-center text-[10px] font-semibold text-ark-muted">{label}</div>
                ))}
              </div>
              {guesses.map((g, i) => (<GuessRow key={i} result={g} isRevealed />))}
              {!winner && Array.from({ length: Math.max(0, 8 - guesses.length - 1) }).map((_, i) => (
                <div key={`e-${i}`} className="grid grid-cols-4 gap-0.5 sm:gap-1 sm:grid-cols-8">
                  {Array.from({ length: 8 }).map((_, j) => (<div key={j} className="h-12 rounded-lg border border-dashed border-ark-border opacity-30 sm:h-14" />))}
                </div>
              ))}
            </div>

            {/* 输入区 */}
            {!winner && (
              <OperatorInput onSubmit={submitGuess} excludeNames={guesses.map(g => g.guessOperator?.name || '')} pool={getOperatorPool(difficulty)} placeholder="输入干员代号，回车提交..." />
            )}

            {/* 结果 */}
            {winner && winner !== 'finished' && (
              <div className="rounded-xl border-2 border-ark-success bg-ark-success-light p-4 text-center">
                <p className="text-sm text-ark-muted mb-2">本轮结束</p>
                <p className="text-2xl font-black ark-text-gradient">{targetName}</p>
                <p className="text-sm text-ark-muted">{'★'.repeat(targetRarity)} · {targetProfession}</p>
                <p className="mt-3 text-sm text-ark-primary font-medium">
                  {autoCountdown > 0 ? `${autoCountdown} 秒后自动下一题...` : '即将开始...'}
                </p>
              </div>
            )}

            {/* 游戏结束 */}
            {winner === 'finished' && (
              <div className="rounded-xl border-2 border-ark-primary bg-ark-card p-4 text-center">
                <p className="text-xl font-bold ark-text-gradient">对局结束！</p>
                <p className="mt-2 text-sm text-ark-muted">共 {maxRounds} 题，最终排名：</p>
                <div className="mt-3 space-y-2">
                  {[...players].sort((a, b) => b.score - a.score).map((p, i) => (
                    <div key={p.userId} className={clsx('flex items-center justify-between rounded-lg px-3 py-2', p.isMe ? 'bg-ark-primary-light' : 'bg-ark-surface')}>
                      <span className="text-sm">{i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`} {p.username}</span>
                      <Badge variant={i === 0 ? 'primary' : 'default'}>{p.score} 分</Badge>
                    </div>
                  ))}
                </div>
                {isHost && <Button onClick={nextRound} className="mt-4" size="lg">再来一局</Button>}
              </div>
            )}
          </div>

          {/* 侧边栏 */}
          <div>
            <Card>
              <CardHeader><h3 className="font-bold text-sm">玩家状态</h3></CardHeader>
              <CardBody className="space-y-2">
                {players.filter(p => !p.isMe).map(p => (
                  <div key={p.userId} className="rounded-lg border border-ark-border p-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-ark-text">{p.avatar} {p.username}</span>
                      <span className="text-xs text-ark-muted">{othersGrids[p.userId]?.count ?? 0} 次</span>
                    </div>
                    {othersGrids[p.userId]?.grids?.map((row, ri) => (
                      <div key={ri} className="mt-0.5 grid grid-cols-8 gap-0.5">
                        {row.map((s, ci) => (<div key={ci} className={clsx('h-3 rounded-sm', COLOR_MAP[s])} />))}
                      </div>
                    ))}
                    {(!othersGrids[p.userId] || othersGrids[p.userId]?.count === 0) && <div className="text-[10px] text-ark-muted py-1">等待中...</div>}
                  </div>
                ))}
                {players.filter(p => !p.isMe).length === 0 && <p className="text-xs text-ark-muted py-2 text-center">暂无其他玩家</p>}
              </CardBody>
            </Card>
          </div>
        </div>
      )}
    </main>
  )
}
