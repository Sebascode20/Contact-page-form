/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Vietnam': ['Be Vietnam Pro', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'bg-image': "url('/src/images/bg-image.svg')",
      }
    },
  },
  plugins: [],
}

