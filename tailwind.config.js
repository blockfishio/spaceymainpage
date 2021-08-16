module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url(/images/home_section_1.jpg)"
      })
    },
    colors: {
      'spacey-heavy': '#060f18', 
      'spacey-white': '#fff',
      'spacey-light-grey': '#464646' 
    },
    fontFamily: {
      'robo': ['roboto', 'sans-serif', 'arial','helvetica','clean'], 
      'bankgothic': ['Bank Gothic', 'roboto', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
