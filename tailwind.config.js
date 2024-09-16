/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      screens: {
        desktop: '1440px'
      },
      colors: {
        ocean: {
          500: '#ecf2f8',
          600: '#9eafc2',
          700: '#6d7f97',
          800: '#48556a'
        }
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif']
      },
      fontSize: {
        article: '13px'
      },
      maxWidth: {
        article: '375px'
      }
    }
  },
  plugins: []
}
