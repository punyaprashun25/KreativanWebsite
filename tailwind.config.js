/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '266/67': '266 / 67',
        'serviceImage': '1.883721/1',
      },
    },
  },
  plugins: [],
}