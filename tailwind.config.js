module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'spacey-heavy': '#060f18', 
      'spacey-white': '#fff',
      'spacey-light-grey': '#464646' 
    },
    fontFamily: {
      'robo': ['roboto', 'sans-serif', 'arial','helvetica','clean']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
