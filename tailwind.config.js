/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // main
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#10b981",
        back: "#e2e8f0",
        darker: "#059669",
      },
    },
  },
  plugins: [],
};
