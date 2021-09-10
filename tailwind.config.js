module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}','./layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url(/images/home_section_1.jpg)",
        'hero-image-mobile': "url(/images/home_section_1_mobile.jpg)",
        'hero-image-lg': "url(/images/home_section_1_extra_lg.png)",
        'explore-image': "url(/images/explore.jpg)",
        'defense-image': "url(/images/defense_bg.png)",
        'defense-image-mobile': "url(/images/defense_bg_mobile.png)",
        "defense-right-background": "url(/images/defend@2x.png)",
        "astro-background": "url(/images/astro.jpg)",
        "astro-background-mobile": "url(/images/astro_mobile.jpg)",
        "login-background": "url(/images/ic_loginbasemap.png)"
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
      'spacey-orange-border': '#f87c6b',
      'spacey-grey': '#9e9e9e',
      'spacey-form-background': '#0b1926',
      'spacey-form-input-background': '#1d3149',
      'spacey-form-text': '#a7b0b9',
      'spacey-form-border': '#1c3049',
      'spacey-mobile-grey': '#9b9b9b',
      'spacey-mobile-background': '#e6e6e6',
      'spacey-mobile-grey-heavy':'#5a5a5a',
      "spacey-text-header": '#f9f9f9',
      "spacey-text-subheader": '#cccbc9',
      "spacey-vote-button": '#ad693a',
      "spacey-learnmore-button": '#575757',
      "spacey-dao-tab-seperator": '#595959',
      "spacey-dao-tab-active": '#bd8e6a',
      "spacey-dao-line-breaker": "#20222e",
      "spacey-dao-grey": "#747474",
      "spacey-dao-content": "#121d2b",
      "spacey-dao-content-bg": "#121e2c",
      "spacey-dao-content-bottom": '#0d1522',
      'spacey-dao-content-text': '#c6c6c8',
      'spacey-dao-content-dashline': '#34445b',
      'spacey-dao-blue-bar': '#0ae5ff',
      'spacey-login-close': '#3d3b47',
      'spacey-login-text-heavy': '#bdbbc7',
      'spacey-login-text-light': '#777387'

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
