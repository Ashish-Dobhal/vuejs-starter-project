/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  // search src and all directories in it with directories of extension
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans]
      },
      gridTemplateColumns: {
        // 24 column grid
        24: "repeat(24, minmax(0, 1fr))"
      },
      colors: {
        "brand-gray-1": "#dadce0",
        "brand-gray-2": "#f8f9fa",
        "brand-gray-3": "#5f6368",
        "brand-gray-4": "rgb(32, 33, 36)",
        "brand-blue-1": "#1967d2",
        "brand-green-1": "#137333",
        "brand-black-1": "#202124",
        boxShadow: {
          blue: "0 0 3px 3px #4285f4",
          gray: "0 1px 3px 0 rgba(60 64 67 .3)"
        }
      },
      backgroundImage: {
        "spotlight-1": "url('./assets/spotlight1.jpg')",
        "spotlight-2": "url('./assets/spotlight2.jpg')"
      }
    }
  },
  plugins: []
}
