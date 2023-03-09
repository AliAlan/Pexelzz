/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        3: "repeat(auto-fit,minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};
