import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { User, Mail, Lock } from 'lucide-react'
import { MascotAvatar } from '../components/MascotAvatar'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'

export default function Signup() {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const { error } = await signUp(email, password, fullName)
    setLoading(false)
    if (error) setError(error)
    else navigate('/chat')
  }

  return (
    <div className="flex h-full flex-col justify-center bg-anjinho-bg px-7">
      <div className="mb-8 flex flex-col items-center">
        <MascotAvatar size={88} />
        <h1 className="mt-4 font-display text-2xl font-extrabold text-anjinho-navy">Crie sua conta</h1>
        <p className="mt-1 text-center text-[14px] text-anjinho-grayText">
          Comece sua jornada de fé com o Anjinho
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3.5 shadow-card">
          <User size={18} className="text-anjinho-grayText" />
          <input
            required
            placeholder="Nome completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full bg-transparent text-[15px] outline-none placeholder:text-gray-400"
          />
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3.5 shadow-card">
          <Mail size={18} className="text-anjinho-grayText" />
          <input
            type="email"
            required
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent text-[15px] outline-none placeholder:text-gray-400"
          />
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3.5 shadow-card">
          <Lock size={18} className="text-anjinho-grayText" />
          <input
            type="password"
            required
            minLength={6}
            placeholder="Senha (mín. 6 caracteres)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent text-[15px] outline-none placeholder:text-gray-400"
          />
        </div>

        {error && <p className="text-center text-[13px] text-anjinho-red">{error}</p>}

        <Button type="submit" disabled={loading} className="!mt-6">
          {loading ? 'Criando conta...' : 'Criar conta'}
        </Button>
      </form>

      <p className="mt-6 text-center text-[14px] text-anjinho-grayText">
        Já tem uma conta?{' '}
        <Link to="/login" className="font-bold text-anjinho-blue">
          Entrar
        </Link>
      </p>
    </div>
  )
}
