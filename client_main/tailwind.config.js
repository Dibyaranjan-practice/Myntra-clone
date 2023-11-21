/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "nav-color": "#282c3f",
        super: "#ff3f6c",
        "border-color": "#5f5f6",
        inputBG: "#d5d5d6",
        categoryHeader: "#3e4152",
      },
    },
  },
  plugins: [],
};
