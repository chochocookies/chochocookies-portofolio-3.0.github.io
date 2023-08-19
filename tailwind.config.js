/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#464866',
        secondary: '#64748d',
        dark: '#0f172a',
      },
      screens: {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

