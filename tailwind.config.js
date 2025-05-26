/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ece8f5',
          100: '#d9d1eb',
          200: '#b3a3d6',
          300: '#8c75c2',
          400: '#6648ad',
          500: '#4f3990',
          600: '#3d2b70',
          700: '#2c1e50',
          800: '#1a1230',
          900: '#0d0918',
          950: '#06040c'
        },
        secondary: {
          50: '#fcf7ed',
          100: '#f9efdb',
          200: '#f3dfb6',
          300: '#eece92',
          400: '#e8be6d',
          500: '#e2ad49',
          600: '#d99e35',
          700: '#b8852d',
          800: '#976c25',
          900: '#76541d',
          950: '#553d15'
        },
        accent: {
          50: '#eeeafc',
          100: '#ddd5f9',
          200: '#bbabf2',
          300: '#9982ec',
          400: '#7758e5',
          500: '#5e37de',
          600: '#4c2cb2',
          700: '#392186',
          800: '#26165a',
          900: '#130b2d',
          950: '#0a0516'
        },
        success: {
          500: '#10b981',
          600: '#059669'
        },
        warning: {
          500: '#f59e0b',
          600: '#d97706'
        },
        error: {
          500: '#ef4444',
          600: '#dc2626'
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        }
      },
      fontFamily: {
        'serif': ['Cinzel', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'stars-pattern': "url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1600')"
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}