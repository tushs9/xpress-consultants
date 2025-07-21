/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003366", // Blue
        gold: "#d4af37",    // Gold
      },
    },
  },
  plugins: [],
};
