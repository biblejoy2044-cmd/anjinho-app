import { Search, ChevronRight, BookOpen, Heart, Leaf } from 'lucide-react'
import { StatusBar } from '../components/StatusBar'
import { BottomNav } from '../components/BottomNav'

const plans = [
  { title: 'Novo Testamento', days: '21 dias', icon: BookOpen, bg: 'bg-blue-50', iconBg: 'bg-anjinho-blue' },
  { title: 'Salmos', days: '30 dias', icon: Heart, bg: 'bg-pink-50', iconBg: 'bg-anjinho-red' },
  { title: 'Provérbios', days: '15 dias', icon: Leaf, bg: 'bg-green-50', iconBg: 'bg-anjinho-green' },
]

export default function Bible() {
  return (
    <div className="flex h-full flex-col bg-anjinho-bg">
      <StatusBar />
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-4 pt-1">
        <h1 className="font-display text-2xl font-extrabold text-anjinho-navy">Bíblia</h1>

        <div className="mt-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-card">
          <Search size={18} className="text-gray-400" />
          <input
            placeholder="Buscar na Bíblia"
            className="w-full bg-transparent text-[15px] outline-none placeholder:text-gray-400"
          />
        </div>

        <h2 className="mt-6 text-[15px] font-bold text-anjinho-navy">Versículo do dia</h2>
        <div className="mt-2 overflow-hidden rounded-3xl shadow-card">
          <div
            className="relative flex h-40 flex-col justify-between p-5"
            style={{
              background: 'linear-gradient(160deg, #FDF6E3 0%, #F3D9A4 45%, #D9A441 100%)',
            }}
          >
            <p className="max-w-[75%] font-display text-[16px] font-bold leading-snug text-anjinho-navy">
              &ldquo;Entregue o seu caminho ao Senhor; confie nele, e o mais ele fará.&rdquo;
            </p>
            <span className="text-[13px] font-semibold text-anjinho-navy/80">Salmos 37:5</span>
            <span className="absolute bottom-4 right-5 text-3xl">✝️</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <h2 className="text-[15px] font-bold text-anjinho-navy">Planos de leitura</h2>
          <button className="text-[14px] font-semibold text-anjinho-blue">Ver todos</button>
        </div>

        <div className="mt-2 space-y-3">
          {plans.map((p) => (
            <div
              key={p.title}
              className={`flex items-center gap-3 rounded-2xl ${p.bg} px-4 py-3.5 shadow-card`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${p.iconBg} text-white`}>
                <p.icon size={18} />
              </div>
              <div className="flex-1">
                <p className="text-[15px] font-bold text-anjinho-navy">{p.title}</p>
                <p className="text-[13px] text-anjinho-grayText">{p.days}</p>
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
