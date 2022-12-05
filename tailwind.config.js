/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'parallax-image': "url('./assets/parallax.jpg')",
      },
      colors: {
        'dark-color':"#0d0b0a",
        'accent-color':"hsla(0,0%,100%,0.2)",
        'pink-color':"#cc84b7",
        'orange-color':"#d59623",
        'green-color':"#9dcb87",
        'blue-color':"#00f1f1",
      },
      backgroundColor: {
        'dark-color':"#0d0b0a",
        'accent-color':"hsla(0,0%,100%,0.2)",
        'pink-color':"#cc84b7",
        'orange-color':"#d59623",
        'green-color':"#9dcb87",
        'blue-color':"#00f1f1",
      },
      textColor: {
        'dark-color':"#0d0b0a",
        'accent-color':"hsla(0,0%,100%,0.2)",
        'pink-color':"#cc84b7",
        'orange-color':"#d59623",
        'green-color':"#9dcb87",
        'blue-color':"#00f1f1",
      }
    },
  },
  plugins: [],
}
