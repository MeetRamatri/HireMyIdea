import { theme } from './src/constants/theme.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: theme.fontFamily,
    },
  },
  plugins: [],
}
