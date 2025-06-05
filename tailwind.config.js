/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zendots: ['"Zen Dots"', "cursive"],
      },
      animation: {
        slideDown: "slideDown 0.4s ease-in-out",
      },
      keyframes: {
        slideDown: {
          "0%": { opacity: 0, transform: "translateY(-20%) scale(0.95)" },
          "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
