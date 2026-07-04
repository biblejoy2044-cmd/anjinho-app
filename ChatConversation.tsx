import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ChevronLeft, Mic, Send } from 'lucide-react'
import { MascotAvatar } from '../components/MascotAvatar'
import { ChatBubble } from '../components/ChatBubble'
import type { ChatMessage } from '../types/database'

const RESPONSES: { content: string; ref: string }[] = [
  {
    content: 'Não se preocupe, meu amigo. Deus tem planos lindos para você. Entregue o seu caminho a Ele e confie. Ele cuidará de cada detalhe. ✨',
    ref: 'Provérbios 3:5-6',
  },
  {
    content: 'Estou sempre aqui com você. Conte comigo para o que precisar. Você não está sozinho. Deus te ama! 💕',
    ref: '',
  },
  {
    content: 'Lance sobre Ele toda a sua ansiedade, porque Ele tem cuidado de você.',
    ref: '1 Pedro 5:7',
  },
]

function makeId() {
  return Math.random().toString(36).slice(2)
}

export default function ChatConversation() {
  const navigate = useNavigate()
  const location = useLocation() as { state?: { firstMessage?: string } }
  const scrollRef = useRef<HTMLDivElement>(null)

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const seed: ChatMessage[] = [
      {
        id: makeId(),
        role: 'assistant',
        content: 'Estou sempre aqui com você. Conte comigo para o que precisar. Você não está sozinho. Deus te ama! 💕',
        createdAt: new Date().toISOString(),
      },
    ]
    return seed
  })
  const [text, setText] = useState('')
  const [responseIndex, setResponseIndex] = useState(0)

  useEffect(() => {
    const first = location.state?.firstMessage
    if (first) {
      sendMessage(first)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  function sendMessage(content: string) {
    if (!content.trim()) return
    const userMsg: ChatMessage = {
      id: makeId(),
      role: 'user',
      content,
      createdAt: new Date().toISOString(),
    }
    setMessages((prev) => [...prev, userMsg])
    setText('')

    setTimeout(() => {
      const reply = RESPONSES[responseIndex % RESPONSES.length]
      setResponseIndex((i) => i + 1)
      const assistantMsg: ChatMessage = {
        id: makeId(),
        role: 'assistant',
        content: reply.content,
        bibleReference: reply.ref || undefined,
        createdAt: new Date().toISOString(),
      }
      setMessages((prev) => [...prev, assistantMsg])
    }, 700)
  }

  return (
    <div className="flex h-full flex-col bg-anjinho-bg">
      <header className="flex shrink-0 items-center gap-3 border-b border-black/5 bg-white px-4 py-3">
        <button onClick={() => navigate(-1)} className="text-anjinho-navy">
          <ChevronLeft size={24} />
        </button>
        <h1 className="flex-1 text-center font-display text-[17px] font-bold text-anjinho-navy">Conversa</h1>
        <div className="h-9 w-9 overflow-hidden rounded-full">
          <MascotAvatar size={36} />
        </div>
      </header>

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto no-scrollbar px-4 py-4">
        {messages.map((m) => (
          <ChatBubble key={m.id} message={m} />
        ))}
      </div>

      <div className="shrink-0 border-t border-black/5 bg-white px-3 py-3">
        <div className="flex items-center gap-2 rounded-full bg-anjinho-bg px-4 py-2.5">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage(text)}
            placeholder="Fale comigo..."
            className="w-full bg-transparent text-[15px] outline-none placeholder:text-gray-400"
          />
          {text.trim() ? (
            <button onClick={() => sendMessage(text)} className="text-anjinho-blue">
              <Send size={20} />
            </button>
          ) : (
            <button className="text-anjinho-blue">
              <Mic size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
