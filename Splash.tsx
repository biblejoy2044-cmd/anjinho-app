import { MessageCircle, BookOpen, Heart, Mic, Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { MascotAvatar } from '../components/MascotAvatar'
import { FeatureCard } from '../components/FeatureCard'
import { Button } from '../components/Button'

const features = [
  {
    icon: MessageCircle,
    color: 'blue' as const,
    title: 'Converse sempre',
    description: 'Fale sobre tudo e receba respostas com amor e sabedoria.',
  },
  {
    icon: BookOpen,
    color: 'red' as const,
    title: 'Baseado na Bíblia',
    description: 'Respostas guiadas pelas Escrituras Sagradas.',
  },
  {
    icon: Heart,
    color: 'gold' as const,
    title: 'Memória e cuidado',
    description: 'O anjinho lembra de você e se importa de verdade.',
  },
  {
    icon: Mic,
    color: 'green' as const,
    title: 'Voz realista',
    description: 'Converse por voz e sinta a presença real.',
  },
]

export default function Splash() {
  const navigate = useNavigate()

  return (
    <div className="flex h-full flex-col overflow-y-auto no-scrollbar bg-anjinho-bg px-6 pb-8 pt-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="mx-auto overflow-hidden rounded-[28px] shadow-card"
      >
        <MascotAvatar size={112} />
      </motion.div>

      <h1 className="mt-6 text-center font-display text-[40px] font-extrabold leading-none text-anjinho-navy">
        Anjinho <span className="align-middle text-3xl">💗</span>
      </h1>
      <p className="mt-3 text-center text-[16px] font-semibold text-anjinho-grayText">
        O anjinho da sua fé
        <br />
        sempre com você.
      </p>

      <div className="mt-6 divide-y divide-black/5">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>

      <div className="my-6 flex justify-center">
        <MascotAvatar size={160} pose="standing" />
      </div>

      <div className="rounded-3xl bg-anjinho-cream px-5 py-5">
        <div className="flex items-center gap-2">
          <Lock size={18} className="text-anjinho-navy" />
          <h3 className="font-display text-[16px] font-bold text-anjinho-navy">Privado e seguro</h3>
        </div>
        <p className="mt-1.5 text-[14px] leading-snug text-anjinho-grayText">
          Suas conversas são protegidas e permanecem só entre você e seu anjinho.
        </p>
      </div>

      <div className="mt-8 space-y-3">
        <Button onClick={() => navigate('/cadastro')}>Começar agora</Button>
        <Button variant="secondary" onClick={() => navigate('/login')}>
          Já tenho uma conta
        </Button>
      </div>
    </div>
  )
}
