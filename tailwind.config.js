/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGradientStart: '#FEE1E8', 
        customGradientEnd: '#97C1A9',  
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #FEE1E8, #97C1A9)',
      },
      fontFamily: {
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
}