/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        homeColor: "#666666",
        homeTitle: "#42446E",
        homeDarkColor: "#A7A7A7",
        homeDarkTitle: "#CCCCCC",
      },
    },
  },
  plugins: [],
};
