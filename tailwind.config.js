/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        xxs: "240px",
      },
      colors: {
        orange: "#F3A94D",
        "orange-light": "#FFC398",
        red: "#FF3A26",
        dark: "#222025",
        blue: "#5776C3",
        "blue-dark": "#4F5C75",
        gray: "#D1D1D1",
      },
    },
  },
  plugins: [],
};
