/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        greenlight: '#40A93E',
      },
      screens: {
        '2xl': '1320px',  
      },
      fontFamily: {
        'Poppins': ['Poppins', 'san-serif'],
      },
    },
  },
  plugins: [],
}