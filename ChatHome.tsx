import { useState } from 'react'
import { Flame, Settings, Mic, Send } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { MascotAvatar } from '../components/MascotAvatar'
import { StatusBar } from '../components/StatusBar'
import { BottomNav } from '../components/BottomNav'

export default function ChatHome() {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const streak = 7

  function handleSend() {
    if (!text.trim()) return
    navigate('/chat/conversa', { state: { firstMessage: text } })
  }

  return (
    <div className="flex h-full flex-col">
      <div
        className="relative flex flex-1 flex-col overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #4A90E2 0%, #8FD3F4 100%)' }}
      >
        <StatusBar dark={false} />

        <div className="flex items-center justify-between px-5 pt-2">
          <div className="flex items-center gap-1.5 rounded-full bg-white/25 px-3 py-1.5 text-white backdrop-blur-sm">
            <Flame size={16} fill="white" />
            <span className="text-[14px] font-bold">{streak}</span>
          </div>
          <button className="rounded-full bg-white/25 p-2 text-white backdrop-blur-sm">
            <Settings size={18} />
          </button>
        </div>

        {/* soft sparkle decorations */}
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute left-8 top-16 h-1.5 w-1.5 rounded-full bg-white/80" />
          <span className="absolute right-10 top-24 h-1 w-1 rounded-full bg-white/70" />
          <span className="absolute left-16 top-32 h-1 w-1 rounded-full bg-white/60" />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-6">
          <MascotAvatar size={180} pose="standing" />
        </div>

        <div className="px-6 pb-4 text-center">
          <p className="font-display text-[20px] font-extrabold text-white drop-shadow-sm">
            Oi! Eu sou seu anjinho 💗
          </p>
          <p className="mt-1 text-[15px] font-semibold text-white/95">Como posso te ajudar hoje?</p>
        </div>

        <div className="px-4 pb-4">
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-3 shadow-card">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Fale comigo..."
              className="w-full bg-transparent text-[15px] outline-none placeholder:text-gray-400"
            />
            {text.trim() ? (
              <button onClick={handleSend} className="rounded-full bg-anjinho-blue p-2 text-white">
                <Send size={16} />
              </button>
            ) : (
              <button className="rounded-full bg-anjinho-blue p-2 text-white">
                <Mic size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
