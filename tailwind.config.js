/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        fly: {
          bg: "#0B1220",
          surface: "#0F172A",
          primary: "#3B82F6",
          accent: "#22D3EE",
          text: "#E5E7EB",
          muted: "#94A3B8"
        }
      }
    }
  },
  plugins: []
};
