interface MascotAvatarProps {
  size?: number
  className?: string
  pose?: 'standing' | 'face'
}

/**
 * Original illustration of the "Anjinho" mascot: a small angel with brown
 * curly hair, a gold halo, feathered wings and a white-and-gold robe.
 * Drawn as a fresh SVG (not a copy of any existing artwork) but matching the
 * palette and composition used across the app (gold halo, sky gradient,
 * soft rounded shapes).
 */
export function MascotAvatar({ size = 96, className = '', pose = 'face' }: MascotAvatarProps) {
  if (pose === 'standing') {
    return (
      <svg width={size} height={size * 1.35} viewBox="0 0 120 162" fill="none" className={className}>
        {/* halo */}
        <ellipse cx="60" cy="20" rx="22" ry="7" stroke="#F5B942" strokeWidth="5" fill="none" />
        {/* wings */}
        <path d="M40 70C20 60 8 78 6 100C24 96 38 88 46 74Z" fill="#FFFFFF" stroke="#E7E9F3" strokeWidth="1.5" />
        <path d="M80 70C100 60 112 78 114 100C96 96 82 88 74 74Z" fill="#FFFFFF" stroke="#E7E9F3" strokeWidth="1.5" />
        {/* robe */}
        <path d="M60 78C46 78 36 90 34 112C32 128 34 146 34 146H86C86 146 88 128 86 112C84 90 74 78 60 78Z" fill="#FFFFFF" stroke="#F0E4C8" strokeWidth="1.5" />
        <path d="M48 96L60 106L72 96" stroke="#F5B942" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="60" cy="102" r="3" fill="#F5B942" />
        {/* hands together */}
        <path d="M52 98C52 90 56 86 60 86C64 86 68 90 68 98" stroke="#F0C79A" strokeWidth="7" strokeLinecap="round" fill="none" />
        {/* head */}
        <circle cx="60" cy="56" r="26" fill="#F3C79E" />
        {/* hair */}
        <path d="M34 54C32 34 46 24 60 24C76 24 88 36 86 56C82 48 78 44 78 44C74 50 66 46 66 40C60 48 50 48 46 40C44 46 38 48 36 52Z" fill="#7A4B2E" />
        {/* face */}
        <circle cx="50" cy="58" r="4" fill="#2B2320" />
        <circle cx="70" cy="58" r="4" fill="#2B2320" />
        <ellipse cx="45" cy="66" rx="4" ry="2.5" fill="#F6A6A6" opacity="0.7" />
        <ellipse cx="75" cy="66" rx="4" ry="2.5" fill="#F6A6A6" opacity="0.7" />
        <path d="M54 68C57 71 63 71 66 68" stroke="#2B2320" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    )
  }

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A90E2" />
          <stop offset="100%" stopColor="#8FD3F4" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="24" fill="url(#skyGrad)" />
      {/* halo */}
      <ellipse cx="50" cy="18" rx="16" ry="5" stroke="#F5B942" strokeWidth="4" fill="none" />
      {/* wings */}
      <path d="M28 58C14 52 8 64 8 76C20 74 30 68 36 58Z" fill="#FFFFFF" />
      <path d="M72 58C86 52 92 64 92 76C80 74 70 68 64 58Z" fill="#FFFFFF" />
      {/* head */}
      <circle cx="50" cy="52" r="24" fill="#F3C79E" />
      {/* hair */}
      <path d="M27 50C25 32 38 22 50 22C64 22 76 32 74 50C70 43 66 40 66 40C62 46 55 42 55 37C50 44 41 44 38 37C36 42 30 44 29 48Z" fill="#7A4B2E" />
      {/* face */}
      <circle cx="41" cy="54" r="3.6" fill="#2B2320" />
      <circle cx="59" cy="54" r="3.6" fill="#2B2320" />
      <ellipse cx="37" cy="61" rx="3.6" ry="2.2" fill="#F6A6A6" opacity="0.75" />
      <ellipse cx="63" cy="61" rx="3.6" ry="2.2" fill="#F6A6A6" opacity="0.75" />
      <path d="M45 63C47.5 66 52.5 66 55 63" stroke="#2B2320" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </svg>
  )
}
