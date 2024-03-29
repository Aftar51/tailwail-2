/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
],
darkMode: 'class',
theme: {
    fontFamily: {
    'poppins' : ['Poppins'],  
  },
  extend: {
    colors: {
      primaryColor: '#010a5e',
      primaryColorLight: '#010d78',
      secondaryColor: '#FFCC00',
      paragraphColor: '#c0c0c0',
      whiteColor: '#fff',
      blackColor: '#000',
      redColor: '#cc3433',
      darkColor: '#000',
      darkColorLight: '#171717',
    },
    keyframes: {
      move: {
        "50%": {transform: 'translateY(-1rem)'}
      },
      neon: {
        "0%": {
          textShadow: "0 0 10px #00B9FC",
        },
        "100%": {
          textShadow: "0 0 10px #ff0000",
        },
      },
    },
    animation: {
      'movingY': 'move 2s linear infinite'
    }
  },
  container: {
    center: true,
    padding: {
      DEFAULT: '1rem',
      sm: '1.5rem'
    }
  },
  screen:{
    sm: '480px',
    md: '768px',
    lg: '1024px'
  },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

