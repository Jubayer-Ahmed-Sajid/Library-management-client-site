export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6A5ACD",
        secondary: "#D3D3D3",
        accent: "#19ae9f",
        background: "#FFFFFF",
        texts: "#4B4B4B",
      },
    },
  },
  plugins: [require("daisyui")],
  themes: ["light", "dark"],
};
