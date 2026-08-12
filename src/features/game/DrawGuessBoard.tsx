/**
 * 你画我猜 — WebSocket 真联机
 */
import { useState, useRef, useEffect } from 'react'
import { useAuthStore } from '@/store/auth'
import { OperatorInput } from './OperatorInput'
import { Button, Card, CardBody, CardHeader, Badge, Input } from '@components/ui'
import clsx from 'clsx'

const WS_URL = import.meta.env.PROD ? `wss://${window.location.host}/ws-draw` : `ws://${window.location.host}/ws-game-draw`
const PALETTE = ['#ffffff','#c0c0c0','#808080','#404040','#000000','#ff4444','#ff8844','#ffcc44','#ffff44','#88ff44','#44ff44','#44ff88','#44ffcc','#44ffff','#44ccff','#4488ff','#4444ff','#8844ff','#cc44ff','#ff44cc','#ff4488','#8b4513','#d2691e','#daa520']

interface RoomPlayer { userId: string; username: string; avatar: string; ready: boolean; score: number; isMe: boolean }
type Phase = 'create' | 'lobby' | 'selecting' | 'drawing' | 'reveal' | 'finished'

export function DrawGuessBoard() {
  const { user, isAuthed, token: authToken } = useAuthStore()
  const socketRef = useRef<WebSocket | null>(null)
  const [connected, setConnected] = useState(false)
  const [error, setError] = useState('')

  const [phase, setPhase] = useState<Phase>('create')
  const [roomCode, setRoomCode] = useState('')
  const [joinCode, setJoinCode] = useState('')
  const [isHost, setIsHost] = useState(false)
  const [players, setPlayers] = useState<RoomPlayer[]>([])
  const [drawOrder, setDrawOrder] = useState<string[]>([])
  const [currentDrawerIdx, setCurrentDrawerIdx] = useState(-1)
  const [choices, setChoices] = useState<string[]>([])
  const [currentTarget, setCurrentTarget] = useState('')
  const [resultMsg, setResultMsg] = useState('')
  const [finishedPlayers, setFinishedPlayers] = useState<{userId:string;username:string;score:number}[]>([])
  // 猜测日志动画
  const [guessLog, setGuessLog] = useState<{id:number; player:string; answer:string; correct:boolean}[]>([])
  const logIdRef = useRef(0)

  // 画布
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [color, setColor] = useState('#ffffff')
  const [brushSize, setBrushSize] = useState(3)
  const isDrawingRef = useRef(false)
  const strokeRef = useRef<{ points: {x:number;y:number}[], color: string; size: number } | null>(null)

  const myName = user?.username ?? '博士'
  const myAvatar = user?.avatar ?? '🎨'
  // session 存在了 socketRef → 注册时的 session userId 就是当前用户 ID
  const [myUserId, setMyUserId] = useState('')
  const amDrawing = connected && phase === 'drawing' && myUserId && drawOrder[currentDrawerIdx] === myUserId

  // ====== WebSocket ======
  useEffect(() => {
    if (!isAuthed) return
    const token = authToken || localStorage.getItem('arkcode-token')
    if (!token) { setError('请先登录'); return }
    const ws = new WebSocket(`${WS_URL}?token=${token}`)
    socketRef.current = ws
    ws.onopen = () => setConnected(true)
    ws.onclose = () => setConnected(false)
    ws.onerror = () => setError('连接服务器失败')
    ws.onmessage = (e) => {
      let msg: any; try { msg = JSON.parse(e.data) } catch { return }
      switch (msg.type) {
        case 'connected': setMyUserId(msg.userId || ''); break
        case 'dg:created': setRoomCode(msg.room.code); setIsHost(true); setPlayers(msg.room.players); setPhase('lobby'); break
        case 'dg:joined': setPlayers(msg.room.players); setPhase('lobby'); break
        case 'dg:player_joined': setPlayers(p => p.some(x => x.userId === msg.player.userId) ? p : [...p, { ...msg.player, ready: true, score: 0, isMe: msg.player.userId === myUserId }]); break
        case 'dg:player_left': setPlayers(p => p.filter(x => x.userId !== msg.userId)); break
        case 'dg:game_started': setDrawOrder(msg.drawOrder); setCurrentDrawerIdx(msg.drawerIdx); setChoices(msg.choices); setPhase('selecting'); setCurrentTarget(''); setResultMsg(''); break
        case 'dg:drawing_started': setPhase('drawing'); setCurrentTarget(''); clearCanvas(); break
        case 'dg:next_round': setCurrentDrawerIdx(msg.drawerIdx); setChoices(msg.choices || []); setPhase('selecting'); setCurrentTarget(''); setResultMsg(''); clearCanvas(); if (msg.allPlayers) setPlayers((p: any[]) => p.map((x: any) => { const s = msg.allPlayers.find((a: any) => a.userId === x.userId); return s ? { ...x, score: s.score } : x })); break
        case 'dg:guess_result':
          if (msg.correct) {
            setCurrentTarget(msg.operator); setPhase('reveal');
            setResultMsg(`${msg.guesserId === myUserId ? '你' : '有人'}猜对了！正确答案: ${msg.operator}`);
            setPlayers(p => p.map(x => {
              if (x.userId === msg.guesserId) return { ...x, score: msg.score };
              if (drawOrder[currentDrawerIdx] === x.userId) return { ...x, score: msg.drawerScore };
              return x;
            }));
            addGuessLog(msg.operator, true, '系统');
          } else { setResultMsg('猜错了，再试试！'); setTimeout(() => setResultMsg(''), 2000); addGuessLog(msg.operatorName || '?', false, '我'); }
          break
        case 'dg:player_guess': {
          const name = msg.username || '玩家'
          addGuessLog(msg.operatorName || '?', msg.correct, name)
          break
        }
        case 'dg:finished': setPhase('finished'); setFinishedPlayers(msg.players); break
        case 'dg:stroke':
          if (msg.clear) { clearCanvas(); break }
          renderRemoteStroke(msg.points || [], msg.color, msg.size)
          break
        case 'error': setError(msg.message); break
      }
    }
    return () => ws.close()
  }, [isAuthed])

  function send(msg: object) { socketRef.current?.send(JSON.stringify(msg)) }
  function addGuessLog(answer: string, correct: boolean, player: string) {
    const id = ++logIdRef.current
    setGuessLog(p => [...p, { id, player, answer, correct }])
    setTimeout(() => setGuessLog(p => p.filter(l => l.id !== id)), 4000)
  }
  function clearCanvas() {
    const canvas = canvasRef.current; if (!canvas) return
    const ctx = canvas.getContext('2d'); if (!ctx) return
    ctx.fillStyle = '#1a1b23'; ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  // ====== 画布事件 ======
  function getPos(e: React.MouseEvent | React.TouchEvent) {
    const canvas = canvasRef.current; if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()
    return {
      x: ('touches' in e ? (e.touches[0]?.clientX || e.clientX) - rect.left : e.clientX - rect.left) / rect.width * canvas.width,
      y: ('touches' in e ? (e.touches[0]?.clientY || e.clientY) - rect.top : e.clientY - rect.top) / rect.height * canvas.height,
    }
  }
  function startDraw(e: React.MouseEvent | React.TouchEvent) {
    if (!amDrawing) return; e.preventDefault(); isDrawingRef.current = true
    strokeRef.current = { points: [], color, size: brushSize }
    draw(e)
  }
  function draw(e: React.MouseEvent | React.TouchEvent) {
    if (!isDrawingRef.current || !strokeRef.current) return; e.preventDefault()
    const canvas = canvasRef.current; if (!canvas) return
    const ctx = canvas.getContext('2d'); if (!ctx) return
    const pos = getPos(e)
    strokeRef.current.points.push({ x: pos.x, y: pos.y })
    ctx.strokeStyle = color; ctx.lineWidth = brushSize; ctx.lineCap = 'round'; ctx.lineJoin = 'round'
    ctx.lineTo(pos.x, pos.y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(pos.x, pos.y)
  }
  function stopDraw() {
    if (!isDrawingRef.current) return
    isDrawingRef.current = false
    canvasRef.current?.getContext('2d')?.beginPath()
    // 发送完整笔画
    if (strokeRef.current && strokeRef.current.points.length > 0) {
      send({ type: 'dg:stroke', points: strokeRef.current.points, color: strokeRef.current.color, size: strokeRef.current.size })
    }
    strokeRef.current = null
  }
  function handleClear() { clearCanvas(); send({ type: 'dg:clear_canvas' }) }

  // 渲染远程笔画
  function renderRemoteStroke(points: {x:number;y:number}[], rc: string, rs: number) {
    const canvas = canvasRef.current; if (!canvas) return
    const ctx = canvas.getContext('2d'); if (!ctx) return
    ctx.save()
    ctx.strokeStyle = rc; ctx.lineWidth = rs; ctx.lineCap = 'round'; ctx.lineJoin = 'round'
    ctx.beginPath()
    if (points.length > 0) { ctx.moveTo(points[0].x, points[0].y); points.slice(1).forEach(p => { ctx.lineTo(p.x, p.y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(p.x, p.y) }) }
    ctx.restore()
  }

  useEffect(() => { clearCanvas() }, [connected])

  if (!isAuthed) return <div className="text-center text-ark-muted py-20">请先登录</div>

  return (
    <div className="mx-auto max-w-5xl px-3 py-4 sm:px-4 sm:py-6">
      {/* 状态 */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <Badge variant={connected ? 'success' : 'danger'}>{connected ? '已连接' : '未连接'}</Badge>
          {phase !== 'create' && <span className="text-lg font-mono font-bold tracking-widest text-ark-primary">{roomCode}</span>}
        </div>
        {phase !== 'create' && <Button variant="ghost" size="sm" onClick={() => { send({ type: 'dg:leave' }); setPhase('create'); setPlayers([]) }}>离开</Button>}
      </div>

      {/* 结果提示 */}
      {resultMsg && <div className="mb-3 text-center text-sm text-ark-accent font-medium">{resultMsg}</div>}

      {/* -------- 创建/加入 -------- */}
      {phase === 'create' && (
        <div className="mx-auto max-w-md space-y-4">
          <h1 className="text-center text-2xl font-bold ark-text-gradient">你画我猜</h1>
          <p className="text-center text-sm text-ark-muted">联机轮流作画猜干员</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card hover><CardHeader><h3 className="font-bold">创建房间</h3></CardHeader><CardBody><Button onClick={() => send({ type: 'dg:create', avatar: myAvatar })} className="w-full" size="lg" disabled={!connected}>创建房间</Button></CardBody></Card>
            <Card hover><CardHeader><h3 className="font-bold">加入房间</h3></CardHeader><CardBody><Input value={joinCode} onChange={e => setJoinCode(e.target.value.toUpperCase())} placeholder="房间码" className="mb-3" maxLength={6} /><Button onClick={() => { send({ type: 'dg:join', code: joinCode.toUpperCase(), avatar: myAvatar }); setRoomCode(joinCode.toUpperCase()) }} className="w-full" size="lg" disabled={!connected}>加入</Button></CardBody></Card>
          </div>
        </div>
      )}

      {/* -------- 大厅 -------- */}
      {phase === 'lobby' && (
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-xl font-bold mb-4">准备大厅 ({players.length}人)</h2>
          {players.map(p => <div key={p.userId} className={clsx('flex items-center justify-between rounded-lg border p-3 mb-2', p.isMe ? 'border-ark-primary bg-ark-primary-light' : 'border-ark-border')}>{p.username}{p.isMe ? ' (你)' : ''} <Badge variant="accent">{p.score}分</Badge></div>)}
          {isHost && <Button onClick={() => send({ type: 'dg:start' })} className="w-full mt-4" size="lg">开始游戏</Button>}
        </div>
      )}

      {/* -------- 选角 -------- */}
      {phase === 'selecting' && (
        <div className="mx-auto max-w-md">
          {drawOrder[currentDrawerIdx] === myUserId ? (
            <>
              <h3 className="text-center font-bold mb-4 text-ark-primary">轮到你选角了！</h3>
              <div className="grid grid-cols-2 gap-3">
                {choices.map(op => <button key={op} onClick={() => send({ type: 'dg:select', operatorName: op })} className="rounded-lg border border-ark-border bg-ark-card p-3 text-left hover:border-ark-primary hover:bg-ark-primary-light">{op}</button>)}
                {choices.length === 0 && <p className="col-span-2 text-center text-ark-muted py-4">加载候选干员...</p>}
              </div>
            </>
          ) : (
            <div className="text-center py-10">
              <p className="text-ark-muted text-lg">等待 {players.find(p => p.userId === drawOrder[currentDrawerIdx])?.username || '画师'} 选角...</p>
            </div>
          )}
        </div>
      )}

      {/* -------- 绘画 -------- */}
      {phase === 'drawing' && (
        <div>
          <Card className="mb-3">
            <CardBody className="flex items-center justify-between">
              {amDrawing ? <span className="font-bold text-ark-primary">轮到你了！画 {currentTarget || '请选择'}</span> : <span>{players.find(p => p.userId === drawOrder[currentDrawerIdx])?.username || '画师'} 正在绘画...</span>}
              <Badge variant="warning">绘画中</Badge>
            </CardBody>
          </Card>
          <div className="overflow-hidden rounded-lg border border-ark-border mb-3 relative">
            <canvas ref={canvasRef} width={800} height={500} className="w-full touch-none" style={{ backgroundColor: '#1a1b23' }}
              onMouseDown={amDrawing ? startDraw : undefined} onMouseMove={amDrawing ? draw : undefined} onMouseUp={stopDraw} onMouseLeave={stopDraw}
              onTouchStart={amDrawing ? startDraw : undefined} onTouchMove={amDrawing ? draw : undefined} onTouchEnd={stopDraw} />
            {/* 猜测日志动画 */}
            {guessLog.length > 0 && (
              <div className="absolute bottom-2 left-2 z-10 space-y-1 pointer-events-none">
                {guessLog.map(l => (
                  <div key={l.id} className={clsx('animate-draw-fade text-xs px-2 py-0.5 rounded-full opacity-90 font-medium shadow-sm', l.correct ? 'bg-ark-success text-white' : 'bg-ark-danger text-white')}>
                    [{l.player}]: {l.answer} {l.correct ? '✓' : '✗'}
                  </div>
                ))}
              </div>
            )}
          </div>
          {amDrawing && (
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1">{PALETTE.map(c => <button key={c} className={clsx('h-6 w-6 rounded-md border-2', color === c ? 'border-ark-primary' : 'border-ark-border')} style={{ backgroundColor: c }} onClick={() => setColor(c)} />)}</div>
              <div className="flex items-center gap-3"><span className="text-xs text-ark-muted">笔刷</span><input type="range" min={1} max={20} value={brushSize} onChange={e => setBrushSize(Number(e.target.value))} /><Button size="sm" variant="ghost" onClick={handleClear}>清空</Button></div>
            </div>
          )}
          {!amDrawing && (
            <div className="mt-3"><OperatorInput onSubmit={name => send({ type: 'dg:guess', operatorName: name })} placeholder="猜干员代号..." /></div>
          )}
        </div>
      )}

      {/* -------- 揭晓中 -------- */}
      {phase === 'reveal' && (
        <div className="mx-auto max-w-md text-center rounded-xl border-2 border-ark-success bg-ark-success-light p-6">
          <p className="text-xl font-bold text-ark-success">答案揭晓：{currentTarget}</p>
          <p className="text-sm text-ark-muted mt-3">5 秒后自动下一轮...</p>
        </div>
      )}

      {/* -------- 结束 -------- */}
      {phase === 'finished' && (
        <div className="mx-auto max-w-md text-center rounded-xl border-2 border-ark-primary bg-ark-card p-6">
          <p className="text-xl font-bold ark-text-gradient">游戏结束！</p>
          <div className="mt-4 space-y-2">{finishedPlayers.sort((a, b) => b.score - a.score).map((p, i) => <div key={p.userId} className="flex justify-between px-3 py-2 rounded bg-ark-surface">{i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`} {p.username}<Badge variant="accent">{p.score}分</Badge></div>)}</div>
        </div>
      )}

      {/* 说明 */}
      <Card className="mt-4 mx-auto max-w-md">
        <CardHeader><h4 className="text-sm font-bold">玩法</h4></CardHeader>
        <CardBody>
          <ul className="space-y-1 text-xs text-ark-muted">
            <li>· 轮流作画，从 4 个干员中选一个</li><li>· 画师限制 5 分钟（画布操作本地，暂不同步）</li><li>· 猜对：猜的人 +2分，画师 +1分</li><li>· 所有轮完后按排名结算</li>
          </ul>
        </CardBody>
      </Card>
    </div>
  )
}
