import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Mail, Lock } from 'lucide-react'
import { MascotAvatar } from '../components/MascotAvatar'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'

export default function Login() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const { error } = await signIn(email, password)
    setLoading(false)
    if (error) setError(error)
    else navigate('/chat')
  }

  return (
    <div className="flex h-full flex-col justify-center bg-anjinho-bg px-7">
      <div className="mb-8 flex flex-col items-center">
        <MascotAvatar size={88} />
        <h1 className="mt-4 font-display text-2xl font-extrabold text-anjinho-navy">Bem-vindo de volta</h1>
        <p className="mt-1 text-[14px] text-anjinho-grayText">Entre para continuar com seu anjinho</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
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
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent text-[15px] outline-none placeholder:text-gray-400"
          />
        </div>

        {error && <p className="text-center text-[13px] text-anjinho-red">{error}</p>}

        <Button type="submit" disabled={loading} className="!mt-6">
          {loading ? 'Entrando...' : 'Entrar'}
        </Button>
      </form>

      <p className="mt-6 text-center text-[14px] text-anjinho-grayText">
        Não tem uma conta?{' '}
        <Link to="/cadastro" className="font-bold text-anjinho-blue">
          Criar conta
        </Link>
      </p>
    </div>
  )
}
