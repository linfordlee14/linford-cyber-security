import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b', // Navy/Dark slate
        accent: '#06b6d4', // Cyan accent
        danger: '#dc2626',
        success: '#16a34a',
        warning: '#ea580c',
      },
    },
  },
  plugins: [],
}

export default config
