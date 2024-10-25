/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ctfont: ["Noto Sans Thai", 'serif'], 
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {          
          "grey": "#e0e0e0",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
