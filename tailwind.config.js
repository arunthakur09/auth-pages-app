/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        testSoehne: ['TestSoehne', 'sans-serif'], // Add custom font
      },
      fontWeight: {
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 600,
        bold: 700,
        extrabold: 800,
      },
      fontSize: {
        'xxs': '0.54rem',
      },
    },
  },
  plugins: [],
}
