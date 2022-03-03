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
        '13': '3.75rem',
        '54': '13.5rem',
        '130': '36rem'
      },
      maxWidth: {
        '130': '36rem',
      },
      boxShadow: {
        '3xl': '0px 0px 60px rgba(0, 0, 0, 0.05)',
      },
      height: {
        'slot-table': 'calc(100vh - 146px)',
      },
      backgroundImage: {
        'gradient-event-sidebar': 'linear-gradient(0deg, #282828 47.19%, rgba(40, 40, 40, 0.61) 84.56%)'
      }
    },
    fontFamily: {
      'header': ['Nunito Sans'],
      'text': ['Roboto'],
      'action': ['Poppins']
    },
    colors: {
      'green': '#2EC662',
      'light-green': '#39E574',
      'gray': '#A9A9A9',
      'dark-gray-5': '#303030',
      'dark-gray-4': '#303030',
      'dark-gray-3': '#747474',
      'dark-gray-2': '#1F1F1F',
      'dark-gray-1': '#B6B6B6',
      'light-gray-1': '#CCCCCC',
      'light-gray-2': '#464646',
      'light-gray-3': '#BCBCBC',
      'light-gray-4': '#F8F8F8',
      'light-gray-5': '#D7D7DC',
      'light-gray-6': '#F8F8F8',
      'white': '#ffffff',
      'black': '#282828',
      'light-blue': '#7EA2D6',
      'blue': '#0D2C99',
      'yellow': '#F9CC2C',
      'transparent': 'transparent',
      'red': '#E93434',
      'orange': '#F56E2F',
      'brown': '#FF702E1A'
    },
    fontSize: {
      "xs": ['0.63rem', '150%'],
      "sm": ['0.75rem', '150%'],
      "md": ['1rem', '150%'],
      "lg": ['1.5rem', '152%'],
      "xl": ['2.2rem', '100%'],
      "2xl": ['3rem', '120%'],
      "3xl": ['3.5rem', '127%']
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
        lg: '2rem'
      },
    }
  },
  variants: {
    scrollbar: ['dark', 'rounded'],
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
};
