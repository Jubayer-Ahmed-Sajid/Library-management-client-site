export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      
          primary: '#39b54a',     // Green
          secondary: '#d8b2c9',   // Vivid Orange
          tertiary: '#f0d8d8',    // Pale Pink
        
        
      },
    },
  },
  plugins: [require("daisyui")],
  themes: ["light", "dark"]
};
