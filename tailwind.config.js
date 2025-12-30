/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        fire:{
          '0%':{backgroundPosition: '0% 50%'},
          '100%':{backgroundPosition:'200% 50%'},
        },
      },
      animation:{
        fire:'fire 1.5s linear infinite',
      },
    },
  },
  plugins: [],
}

