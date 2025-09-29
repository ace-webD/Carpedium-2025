/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'bag-color':'#8EB7BD'
      },
      fontFamily: {
        lexend: ['"Lexend Deca"', 'sans-serif'],
        display: ['"Bebas Neue"','cursive']
      }
    },
  },
  plugins: [],
}

