const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white: colors.white,
      sky: colors.sky,
      red: colors.red,
      yellow: colors.yellow,
      grey: colors.grey,
    },
    extend: {
      fontFamily: {
        oxanium: [`Oxanium`],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
