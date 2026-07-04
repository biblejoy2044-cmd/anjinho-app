import type { LucideIcon } from 'lucide-react'

const colorMap = {
  blue: 'bg-anjinho-blue text-white',
  red: 'bg-anjinho-red text-white',
  gold: 'bg-anjinho-gold text-white',
  green: 'bg-anjinho-green text-white',
} as const

interface FeatureCardProps {
  icon: LucideIcon
  color: keyof typeof colorMap
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, color, title, description }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-4 py-3">
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${colorMap[color]}`}>
        <Icon size={22} />
      </div>
      <div>
        <h3 className="font-display text-[17px] font-bold text-anjinho-navy">{title}</h3>
        <p className="mt-0.5 text-[14px] leading-snug text-anjinho-grayText">{description}</p>
      </div>
    </div>
  )
}
