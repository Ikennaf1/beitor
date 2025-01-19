/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/*.{html,css}",
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-color-hover": "var(--primary-color-hover)",
      },
    },
  },
  plugins: [],
}