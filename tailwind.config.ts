// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/omponents/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fdfbf8', // Putih gading
        foreground: '#1a1a1a', // Hitam arang
        primary: '#b9915f',    // Emas/Perunggu
        accent: '#4a5c43',      // Hijau zaitun
      },
      fontFamily: {
        // Kita atur variabel CSS di layout.tsx
        sans: ['var(--font-jost)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
      },
      // Kita bisa tiru breakpoint situs aslinya jika perlu
      // screens: {
      //   'md': '990px', 
      // },
      screens: {
        'lg': '991px', // Mengganti default 'lg' (1024px)
      },
    },
  },
  plugins: [],
}
export default config