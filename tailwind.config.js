/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography:{
        DEFAULT:{
          'li::marker':{
            color: '#3498db'
          }
        }
      }
    },
  },
  plugins: [],
}

