import { Signal, Wifi, BatteryFull } from 'lucide-react'

export function StatusBar({ dark = true }: { dark?: boolean }) {
  const color = dark ? 'text-anjinho-navy' : 'text-white'
  return (
    <div className={`flex items-center justify-between px-6 pb-1 pt-3 text-[13px] font-semibold ${color}`}>
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <Signal size={14} />
        <Wifi size={14} />
        <BatteryFull size={16} />
      </div>
    </div>
  )
}
