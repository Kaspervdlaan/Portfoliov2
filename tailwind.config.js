/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'parallax-image': "url('./assets/parallax.jpg')",
      }
    },
  },
  plugins: [],
}
