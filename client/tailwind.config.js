
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#059669', // Emerald 600
        'secondary': '#2563EB', // Blue 600
        'dark': '#1F2937', // Gray 800
        'light': '#F3F4F6', // Gray 100
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}