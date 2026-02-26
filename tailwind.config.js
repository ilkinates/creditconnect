/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0066FF", dark: "#0050CC", light: "#EBF3FF" },
        accent: { DEFAULT: "#00D68F", dark: "#00B377", light: "#E8FBF3" },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
