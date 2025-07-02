/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nafar-purple': '#704ED9',
        'nafar-dark': '#192C4D',
        'nafar-light': '#F8F8FC',
        'nafar-light-2': '#F9F9FC',
        'nafar-text': '#475B80',
        'nafar-text-2': '#384D64',
        'nafar-text-3': '#7283A3',
        'nafar-border': '#E1E8F4',
        'nafar-bg': '#ECECF1',
        'nafar-yellow': '#F4B400',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-in-left': 'slideInLeft 1s ease-out',
        'slide-in-right': 'slideInRight 1s ease-out',
        'scale-up': 'scaleUp 0.8s ease-out',
        'reveal': 'reveal 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleUp: {
          'from': { opacity: '0', transform: 'scale(0.8)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        reveal: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-nafar': 'linear-gradient(90.35deg, #192C4D -17.95%, #704ED9 110.67%)',
        'gradient-vision': 'linear-gradient(90.22deg, #FFFFFF -8.4%, #704ED9 154.35%)',
        'gradient-text': 'linear-gradient(90.35deg, #192C4D -17.95%, #704ED9 110.67%)',
      },
      maxWidth: {
        'container': '1440px',
      },
      width: {
        'container': '1224px',
      },
      height: {
        'vision': '477px',
      },
    },
  },
  plugins: [],
} 