/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "blue-dark": "#1D293D;",
        "blue-color": "rgb(0, 75, 135, 1);",
        "button-color": "rgb(210, 175, 57, 1);",
      },
    },
  },
  plugins: [],
};
