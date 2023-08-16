/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}","./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
       "railwayBold" : "railwayBold",
       "railwayRegular" : "railwayRegular",
       "railwayItalic" : "railwayItalic",
       "railwayLight" : "railwayLight",
       "railwayBlack" : "railwayBlack",
      },
      colors: {
        "green": '#8ACC50',
        "darkBlue":"#001342"
      }
    },
  },
  plugins: [],
}

