import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#3B82F6',
        background: '#0F172A',
        surface:   '#1E293B',
        muted:     '#94A3B8',
        text:      '#F8FAFC',
      },
    },
  },
  plugins: [],
}

export default config
