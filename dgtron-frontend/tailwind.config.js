/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        secondaryFont: ["Palanquin", "sans-serif"],
        primaryFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "green-leaf": "#3B7918",
        "dgt-green": "#72BF01",
        "dark-green": "#00312D",
        "aqua-spring": "#EAFDE7",
        "milk-white": "#FEFEFE",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
