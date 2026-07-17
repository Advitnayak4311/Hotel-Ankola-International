/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a', // Primary Navy Blue
          950: '#020617',
        },
        gold: {
          50: '#fefdf6',
          100: '#fdfbe7',
          200: '#faf4c4',
          300: '#f5e994',
          400: '#eed65d',
          500: '#e3bf32',
          600: '#cca025',
          700: '#a37a1d',
          850: '#D4AF37', // Primary Gold
          900: '#825e1a',
          DEFAULT: '#D4AF37',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
