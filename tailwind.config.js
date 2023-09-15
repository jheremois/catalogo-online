const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      slate: colors.slate,
      dark: "#242424",
      mainBlack: "#060606",
      mainBlue: "#4593E7",
      background: "#ECECEC",
      lowGray: "#BBBBBB",
      ligthGray: "#585858",
      mainPurple: "#C047E0"
    },
    extend: {
      skew: {
        '12': '12deg',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
