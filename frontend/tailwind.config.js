module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xl-height': { 'raw': '(min-height: 720px)' },
        '2xl-height': { 'raw': '(min-height: 816px)' }
      },
      spacing: {
        '54': '13.5rem',
        '130': '34rem'
      },
      maxWidth: {
        '130': '34rem',
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
      'dark-gray-2': '#1F1F1F',
      'dark-gray-1': '#B6B6B6',
      'light-gray-1': '#CCCCCC',
      'light-gray-2': '#464646',
      'light-gray-3': '#BCBCBC',
      'white': '#ffffff',
      'black': '#282828',
      'light-blue': '#7EA2D6',
      'blue': '#0D2C99',
      'yellow': '#F9CC2C'
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
        DEFAULT: '20px',
        sm: '3rem',
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
