module.exports = {
  purge: [',/pages/**/*.ts', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          450: '#1ea7fd'
        },
      },
    },
    fontFamily: {
      'sans': ['Nunito Sans', 'Helvetica Neue', "Helvetica", "Arial", "sans-serif"],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
