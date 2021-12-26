module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '34': '34rem',
      },
      screens: {
        'xl-height': { 'raw': '(min-height: 720px)' },
        '2xl-height': { 'raw': '(min-height: 816px)' }
      },
      spacing: {
        '54': '13.5rem'
      }
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
      'dark-gray': '#B6B6B6',
      'light-gray': '#CCCCCC',
      'white': '#ffffff',
      'black': '#282828',
      'blue': '#0D2C99',
    },
    fontSize: {
      "sm": ['0.63rem', '150%'],
      "md": ['1rem', '150%'],
      "lg": ['1.5rem', '152%'],
      "xl": ['3rem', '120%'],
      "2xl": ['3.5rem', '127%']
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1120px"
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '0'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
