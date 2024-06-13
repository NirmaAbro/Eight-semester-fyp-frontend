/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors:{
        primary:"#4F6F52",
        secondary:"#E8DFCA"
      },
      fontFamily:{
        'display':['poppins','sans-serif'],
        'body':['Inter','sans-serif']
      }
    },
  },
  plugins: [],
};
