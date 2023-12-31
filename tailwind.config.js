/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 960px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1280px) { ... }

      'xl': '1366px',
      // => @media (min-width: 1438px) { ... }
    },
    extend: {
        colors: {
          'white': '#fff',

          'pb-normal-active': '#012033',
          'pb-draker': '#000e16',

          'p-normal': '#008fff',
          'p-dark-hover': '#004073',
        },
      fontFamily: {
        "plus-jakarta-sans": "Plus Jakarta Sans",
        "inter": "Inter",
      },
      dropShadow: {
        navbar: '0px 5px 20px rgba(0, 0, 0, 0.17)',
        card: '-5px 6px 22px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}