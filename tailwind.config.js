/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'grey': '#aaaaaa',
        'accent1': '#0022D6',
        'accent2': '#4710A3',
        'accent3': '#462D70'
      }
    },
  },
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/utils/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
    `${srcDir}/app.config.{js,ts}`
  ],
  darkMode: 'media',
  plugins: [
    
  ],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './components/**/*.{vue,js}',
//     './layouts/**/*.vue',
//     './pages/**/*.vue',
//     './plugins/**/*.{js,ts}',
//     './app.vue',
//   ],
//   darkMode: 'media',
//   theme: {
//     extend: {
//       colors: {
//         'textPrimary': '#FFFFFF',
//         'textSecondary': '#aaaaaa',
//         'color1': '#0022D6',
//         'color2': '#4710A3',
//         'color3': '#462D70'
//       }
//     },
//   },
//   plugins: [
    
//   ],
// }
