/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        homeColor: "#666666",
        homeTitle: "#42446E",
      },
    },
  },
  plugins: [],
};
