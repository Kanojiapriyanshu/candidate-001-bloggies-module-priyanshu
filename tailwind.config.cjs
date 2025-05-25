/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3F51B5',
        accent: '#FFC107',
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 