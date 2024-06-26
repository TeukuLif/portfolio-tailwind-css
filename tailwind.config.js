/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#ef4444',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      fontFamily: {
        inter: ['inter'],
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

