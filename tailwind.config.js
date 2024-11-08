/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        whites:{
          100:'#FFFFFF',
          200:'#F7F7F7'
        },
        blacks:{
          50:'#BDBDBD',
          100: '#0A0A0B',
          200:'#000000'
        },
        purples:{
          100:'#B9B6B0',
          200:'#6E199F'
        },
        oranges:{
          100:'#E3AE3B',
          200:'#DA9F1F'
        }
      },
      backgroundImage:{
        'programHeader':"url('./src/assets/programHeader.png')",
        'programJoin': "url('/src/assets/programJoin.png')",
        'contactHeader': "url('/src/assets/contactHeader.png')",
        'donateHeader': "url('/src/assets/donateHeader.png')"
      }
    },
  },
  plugins: [],
}

