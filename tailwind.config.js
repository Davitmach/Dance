/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'linear': 'linear-gradient(90deg, #ec523a 0%, #da40bb 100%)',
      },
    },
  },
  plugins: [],
}

