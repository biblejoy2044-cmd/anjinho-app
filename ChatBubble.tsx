import { motion } from 'framer-motion'
import { CheckCheck } from 'lucide-react'
import { MascotAvatar } from './MascotAvatar'
import type { ChatMessage } from '../types/database'

function formatTime(iso: string) {
  const d = new Date(iso)
  return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}

export function ChatBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user'

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`flex items-end gap-2 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {!isUser && (
        <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full">
          <MascotAvatar size={32} />
        </div>
      )}
      <div className={`max-w-[75%] ${isUser ? 'items-end' : 'items-start'} flex flex-col`}>
        <div
          className={`rounded-2xl px-4 py-2.5 text-[15px] leading-snug ${
            isUser
              ? 'rounded-br-md bg-anjinho-blueBubble text-anjinho-navy'
              : 'rounded-bl-md bg-white text-anjinho-navy shadow-sm'
          }`}
        >
          {message.content}
        </div>
        <div className="mt-1 flex items-center gap-1 px-1 text-[11px] text-gray-400">
          {message.bibleReference && <span className="font-semibold text-gray-400">{message.bibleReference}</span>}
          <span>{formatTime(message.createdAt)}</span>
          {isUser && <CheckCheck size={13} className="text-anjinho-blue" />}
        </div>
      </div>
    </motion.div>
  )
}
