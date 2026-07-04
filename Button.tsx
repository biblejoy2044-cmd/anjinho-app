import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({ children, variant = 'primary', className = '', ...rest }: ButtonProps) {
  const base =
    'w-full rounded-2xl py-3.5 text-[16px] font-bold transition-transform active:scale-[0.98] disabled:opacity-50'
  const styles =
    variant === 'primary'
      ? 'bg-anjinho-blue text-white shadow-card'
      : 'bg-white text-anjinho-blue border border-anjinho-blue/30'

  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  )
}
