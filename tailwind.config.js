/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      lg: '976px',
      md: '768px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'custom-pink': '#FF01FB',
      },
      fontFamily: {
        'squada': ['"Squada One"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}