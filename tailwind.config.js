const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./images/bg.png')",
      },

    },
    colors: {
      transparent: 'transparent',
      current: "currentColor",
      black: colors.black,
      light: colors.white,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      sky: colors.sky,
      white: colors.white,
      red: colors.red,
      blue: colors.blue,
      teal: colors.teal,
      gray: colors.gray
    }
  },
  variants: {
    extend: {
      filter: ['hover', 'focus']
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
      }

      addComponents(buttons)
    })
  ],
}
