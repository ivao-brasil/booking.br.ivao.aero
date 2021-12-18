module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '34': '34rem',
      },
      screens: {
        '2xl-height': {'raw': '(min-height: 816px)'}
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
      'light-gray': '#CCCCCC',
      'white': '#ffffff',
      'black': '#282828',
      'blue': '#0D2C99'
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['1.5rem', '152%'],
      xl: ['3.5rem', '127%'],
    },
    container: {
      screens: {
         sm: "100%",
         md: "100%",
         lg: "1024px",
         xl: "1120px"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
