/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'textPrimary': '#0072ff',
        'textSecondary': '#87cefa',
        'textTertiary': '#f0ad4e',
        'textAccent': '#f0ad4e',
        'textbackground': '#ffffff'
      }
    },
  },
  plugins: [
    
  ],
}
