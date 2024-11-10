/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#010C80',
      },
      fontFamily: {
        'mono': ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}