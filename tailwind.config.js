const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        display: '"Noto Sans", sans-serif',
        primary: "Montserrat, sans-serif",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "4rem",
        },
      },
      colors: {
        dark: colors.zinc[900],
        light: colors.zinc[200],
        primary: colors.violet[700],
        "primary-dark": colors.violet[400],
        secondary: colors.violet[800],
        "secondary-dark": colors.violet[500],
      },
      keyframes: {
        "modal-show": {
          "0%": { transform: "scale(0.5)", opacity: 0.5 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        "modal-hide": {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.5)", opacity: 0.5 },
        },
      },
      animation: {
        "modal-show": "modal-show 300ms ease-out",
        "modal-hide": "modal-hide 300ms ease-in forwards",
      },
    },
  },
  plugins: [],
};
