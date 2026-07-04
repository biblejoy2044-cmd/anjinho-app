/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Exact palette extracted from the Anjinho screenshots
        anjinho: {
          navy: '#111C4E',      // headline / nav-active text
          bg: '#F7F8FC',        // app background (very light lavender-white)
          skyTop: '#4A90E2',    // splash sky gradient top
          skyBottom: '#8FD3F4', // splash sky gradient bottom
          blue: '#3B82F6',      // "Converse sempre" icon + chat bubble (user)
          blueBubble: '#DCEBFF',// user chat bubble bg
          red: '#F26D6D',       // "Baseado na Bíblia" icon
          gold: '#F5B942',      // "Memória e cuidado" icon / halo gold
          green: '#5FBE8D',     // "Voz realista" icon
          cream: '#FBF6EC',     // "Privado e seguro" card bg
          grayText: '#6B7280',  // subtitle / description gray
          cardShadow: 'rgba(17, 28, 78, 0.06)',
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', '"Nunito"', 'system-ui', 'sans-serif'],
        body: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.75rem',
      },
      boxShadow: {
        card: '0 4px 20px rgba(17, 28, 78, 0.06)',
        nav: '0 -2px 12px rgba(17, 28, 78, 0.05)',
      },
    },
  },
  plugins: [],
}
