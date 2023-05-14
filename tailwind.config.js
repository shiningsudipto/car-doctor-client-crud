/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": "#FF3811",
        "pColor": "#737373"
      }
    },
  },
  plugins: [require("daisyui")],
}

