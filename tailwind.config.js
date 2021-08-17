module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url(/images/home_section_1.jpg)",
        'explore-image': "url(/images/explore.jpg)",
        'defense-image': "url(/images/defense_bg.png)",
        "defense-right-background": "url(/images/defend@2x.png)"
      })
    },
    colors: {
      'spacey-heavy': '#060f18', 
      'spacey-white': '#fff',
      'spacey-light-grey': '#464646',
      'spacey-underline': '#373634',
      'spacey-black-background': '#1a1a1a',
      'spacey-black': '#000',
      'spacey-pink': '#ff2d54',
      'spacey-input-background': '#f1f1f1',
      'spacey-sidemenu-background': '#21252e',
      'spacey-orange-border': '#f87c6b'
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
