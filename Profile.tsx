import { ChevronRight, Flame, Crown, Bell, Shield, LogOut, Settings } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { MascotAvatar } from '../components/MascotAvatar'
import { StatusBar } from '../components/StatusBar'
import { BottomNav } from '../components/BottomNav'
import { useAuth } from '../hooks/useAuth'

const menu = [
  { icon: Crown, label: 'Seja Premium', color: 'text-anjinho-gold' },
  { icon: Bell, label: 'Notificações', color: 'text-anjinho-blue' },
  { icon: Shield, label: 'Privacidade e segurança', color: 'text-anjinho-green' },
  { icon: Settings, label: 'Configurações', color: 'text-anjinho-grayText' },
]

export default function Profile() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await signOut()
    navigate('/')
  }

  return (
    <div className="flex h-full flex-col bg-anjinho-bg">
      <StatusBar />
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-4 pt-1">
        <h1 className="font-display text-2xl font-extrabold text-anjinho-navy">Perfil</h1>

        <div className="mt-4 flex items-center gap-4 rounded-3xl bg-white p-4 shadow-card">
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <MascotAvatar size={64} />
          </div>
          <div className="flex-1">
            <p className="font-display text-[17px] font-bold text-anjinho-navy">
              {(user?.user_metadata?.full_name as string) || 'Meu perfil'}
            </p>
            <p className="text-[13px] text-anjinho-grayText">{user?.email || 'convidado@anjinho.app'}</p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1">
            <Flame size={14} className="text-anjinho-gold" />
            <span className="text-[13px] font-bold text-anjinho-navy">7</span>
          </div>
        </div>

        <div className="mt-6 divide-y divide-black/5 rounded-2xl bg-white shadow-card">
          {menu.map((m) => (
            <button key={m.label} className="flex w-full items-center gap-3 px-4 py-3.5 text-left">
              <m.icon size={19} className={m.color} />
              <span className="flex-1 text-[15px] font-semibold text-anjinho-navy">{m.label}</span>
              <ChevronRight size={18} className="text-gray-400" />
            </button>
          ))}
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-anjinho-red/30 bg-white py-3.5 text-[15px] font-bold text-anjinho-red shadow-card"
        >
          <LogOut size={18} />
          Sair da conta
        </button>
      </div>
      <BottomNav />
    </div>
  )
}
