/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['neue-haas-grotesk-text', 'serif'],
      display: ['neue-haas-grotesk-display', 'serif'],
    },
    extend: {
      gridTemplateColumns: {
        'title': '2fr 1fr 1fr;',
        'body': '1fr 2fr;'
      },
    },
  },
  plugins: [],
};