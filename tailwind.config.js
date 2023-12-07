/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./index.html"
],
  theme: {
    fontFamily: {
      'Vietnam': ['Be Vietnam Pro', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'body-image': "url('/src/images/bg-image.svg')",
      }
    },
  },
  plugins: [],
}

