/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      lg: "1200px",
      // => @media (min-width: 640px) { ... }
    },
  },
  plugins: [],
};
