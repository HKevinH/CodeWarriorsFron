/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-color": "rgb(0, 75, 135, 1);",
        "button-color": "rgb(210, 175, 57, 1);",
      },
    },
  },
  plugins: [],
};
