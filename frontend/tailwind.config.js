/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '640px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: '#2B2D42',
      secondary: '#EDF2F4',
      primary2: '#8D99AE',
      secondary2: '#EF233C',
      accent:'#D90429',
    }
  },
  plugins: [],
}