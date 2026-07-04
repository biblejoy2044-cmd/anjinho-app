import { HandHeart, Shield, Users, BookOpenCheck, Leaf, Zap, Heart, ChevronRight } from 'lucide-react'
import { StatusBar } from '../components/StatusBar'
import { BottomNav } from '../components/BottomNav'

const categories = [
  { title: 'Gratidão', icon: HandHeart, bg: 'bg-amber-50', iconColor: 'text-anjinho-gold' },
  { title: 'Proteção', icon: Shield, bg: 'bg-blue-50', iconColor: 'text-anjinho-blue' },
  { title: 'Família', icon: Users, bg: 'bg-pink-50', iconColor: 'text-anjinho-red' },
  { title: 'Sabedoria', icon: BookOpenCheck, bg: 'bg-indigo-50', iconColor: 'text-anjinho-blue' },
  { title: 'Paz', icon: Leaf, bg: 'bg-green-50', iconColor: 'text-anjinho-green' },
  { title: 'Força', icon: Zap, bg: 'bg-orange-50', iconColor: 'text-anjinho-gold' },
]

const myPrayers = [
  { title: 'Obrigado por mais um dia', when: 'Hoje, 08:30' },
  { title: 'Cuida da minha família', when: 'Ontem, 22:15' },
  { title: 'Me dá forças para continuar', when: '12/06/2024' },
]

export default function Prayer() {
  return (
    <div className="flex h-full flex-col bg-anjinho-bg">
      <StatusBar />
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-4 pt-1">
        <div className="flex items-center justify-between">
          <h1 className="font-display text-2xl font-extrabold text-anjinho-navy">Oração</h1>
          <Heart size={20} className="text-anjinho-red" />
        </div>

        <p className="mt-1 text-[15px] font-bold text-anjinho-navy">Fale com seu anjinho</p>
        <p className="text-[14px] text-anjinho-grayText">Ele te ouve sempre.</p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {categories.map((c) => (
            <button
              key={c.title}
              className={`flex items-center gap-3 rounded-2xl ${c.bg} px-4 py-4 text-left shadow-card`}
            >
              <c.icon size={20} className={c.iconColor} />
              <span className="text-[15px] font-bold text-anjinho-navy">{c.title}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <h2 className="text-[15px] font-bold text-anjinho-navy">Minhas orações</h2>
          <button className="text-[14px] font-semibold text-anjinho-blue">Ver todas</button>
        </div>

        <div className="mt-2 divide-y divide-black/5 rounded-2xl bg-white shadow-card">
          {myPrayers.map((p) => (
            <div key={p.title} className="flex items-center gap-3 px-4 py-3.5">
              <div className="flex-1">
                <p className="text-[15px] font-semibold text-anjinho-navy">{p.title}</p>
                <p className="text-[13px] text-anjinho-grayText">{p.when}</p>
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
