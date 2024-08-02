/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      width: {
        "42rem": "42rem",
        "32rem": "32rem",
        "28rem": "28rem",
      },
      colors: {
        "gray-750": "#343a40",
      },
    },
  },
  plugins: [],
};
