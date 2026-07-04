import { MessageCircle, BookOpen, Heart, User } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/chat', label: 'Chat', icon: MessageCircle },
  { to: '/biblia', label: 'Bíblia', icon: BookOpen },
  { to: '/oracao', label: 'Oração', icon: Heart },
  { to: '/perfil', label: 'Perfil', icon: User },
]

export function BottomNav() {
  return (
    <nav className="shrink-0 border-t border-black/5 bg-white px-2 pb-[max(env(safe-area-inset-bottom),8px)] pt-2 shadow-nav">
      <ul className="flex items-center justify-between">
        {tabs.map(({ to, label, icon: Icon }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 py-1 text-[11px] font-semibold transition-colors ${
                  isActive ? 'text-anjinho-blue' : 'text-gray-400'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={22} strokeWidth={isActive ? 2.4 : 2} fill={isActive ? 'currentColor' : 'none'} className={isActive ? 'text-anjinho-blue' : ''} />
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
