/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Eina', sans-sefif",
        serif: "'Fraunces', serif",
        cursive: "'Tomatoes', cursive"
      }
    }
  },
  plugins: []
}
