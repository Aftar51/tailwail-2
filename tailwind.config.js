/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
],
  theme: {
    fontFamily: {
    'poppins' : ['Poppins']
  },
  extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

