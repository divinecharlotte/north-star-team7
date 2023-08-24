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
       "montserratLight":"montserratLight",
       "montserratMedium":"montserratMedium",
      },
      colors: {
        "green": '#8ACC50',
        "darkBlue":"#001342"
      },
      screens: {
        xs: { min: "375px" },
        lg: { min: "768px" },
      },
      backgroundImage: {
        'unsere': "url('/images/bg-unsere2.webp')"
      }
    },
    },
  plugins: [],
}

