/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm:'480px',
      md: '720px',
      lg: '976 px',
      xl: '1440'
    },
    extend: {},
  },
  plugins: [],
}
