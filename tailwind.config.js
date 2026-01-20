/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
            sans:['Inter','system-ui','sans-serif'],
        },
      keyframes:{
        slideleft:{
          '0%':{transform:'translateX(-160px) scale(0.9) rotateY(8deg)', filter:'blur(6px)',opacity:'0'},
          '100%':{transform:'translateX(0) scale(1) rotateY(0)',filter:"blur(0)",opacity:'1'},
        },
        slideright:{
          '0%':{transform:'translateX(160px) scale(0.9) rotateY(-8deg)',filter:'blur(6px)',opacity:'0'},
          '100%':{transform:'translateX(0) scale(1) rotateY(0)',filter:"blur(0)",opacity:'1'},
        },
        slideup:{
          '0%':{transform:'translateY(80px) scale(0.92)',opacity:'0',filter:'blur(6px)'},
          '100%':{transform:'translateY(0) scale(1)',opacity:'1',filter:'blur(0)'},
        },
        appearance:{
          '0%':{opacity:0,transform:'translateY(40px) scale(0.96)',filter:'blur(6px)'},
          '100%':{opacity:1,transform:'translateY(0) scale(1)',filter:'blur(0)'}
        },
        
      },

      animation:{
        'left':'slideleft 1.2s linear both',
        'center':'slideup 1.2s linear both',
        'right':'slideright 1.2s linear both',
        'spin-slow':'spin 3s linear infinite',
        'appearance':'appearance 1.2s linear both',
        
      }
      
    },
  },
  plugins: [],
}

