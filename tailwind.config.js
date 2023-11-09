/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        'primary': '#6E43A0',     // Royal Purple
        'secondary': '#FF5722',   // Vivid Orange
        'tertiary': '#00A8CC',     // Turquoise Blue
      },
      
    },
  },
   plugins: [require("daisyui")],
   themes:["light","dark"]
}