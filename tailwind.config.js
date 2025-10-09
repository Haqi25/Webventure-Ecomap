/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // 👈 tambahkan baris ini
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
