/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4728A', // Dusty rose
          dark: '#B85E74',    // Darker rose
        },
        secondary: {
          DEFAULT: '#F8B3C5', // Soft pink
          dark: '#E097AB',    // Darker pink
        },
        accent: {
          DEFAULT: '#FFE4E9', // Very light pink
          dark: '#FFD1DB',    // Slightly darker light pink
        }
      },
    },
  },
  plugins: [],
}