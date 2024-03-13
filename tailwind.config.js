/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "teal-blue": "#007A7C",
        "golden-yellow": "#FFD700",
        "earthy-brown": "#8B4513",
        "terracotta-red": "#E2725B",
        "creamy-white": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
