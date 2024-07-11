/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"510px",
        md:"767px",
        mdl:"768px",
        lg:"970px",
        lgl:"1024px",
        xl:"1280px"
      },

      fontFamily:{
        bodyFont: ["Poppins", "sans-serif"],
         titleFont: ["Montserrat", "sans-serif"],
      },
        colors:{
          bodyColor:"#2eb82e",
          lightText:"#007bff",
          boxBg: "linear-gradient(145deg, #01e202, #23272b)",
          designColor:"#ff014f",
        }
    },
  },
  plugins: [],
}