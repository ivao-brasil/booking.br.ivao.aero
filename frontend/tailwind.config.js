module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '34': '34rem',
      },
    },
    fontFamily: {
      'header': ['Nunito Sans'],
      'normal': ['Roboto'],
      'action': ['Poppins']
    },
    colors: {
      'green': '#2EC662',
      'light-green': '#39E574',
      'gray': '#A9A9A9',
      'light-gray': '#D7D7DC',
      'white': '#ffffff'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
