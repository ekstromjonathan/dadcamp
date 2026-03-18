/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        forest: "#1a2e1a",
        moss:   "#2d4a2d",
        bark:   "#8b6f47",
        ember:  "#c4622d",
        cream:  "#f5f0e8",
        smoke:  "#e8e2d9",
      },
      fontFamily: {
        sans:    ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
