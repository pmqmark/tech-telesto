/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#1E1E1E",
        primary: "#00A3FF",
        secondary: '#7D7D7D'
      },
      fontSize:{
        "xs": "12px",
        "sm": "16px",
        "md": "18px",
        "lg": "32px",
      },
      dropShadow: {
        '3xl': '0 5px 35px rgba(0, 163, 255, 0.45)',
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

