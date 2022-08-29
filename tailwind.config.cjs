/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          'personal-purple': '#8D3A87',
          'personal-pink': '#E8AED0',
        },
      },
    },
    plugins: [],
  };