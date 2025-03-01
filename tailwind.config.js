/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
         header: "url('/src/assets/images/header.png')",
      }
    },
  },
  plugins: [],
}

