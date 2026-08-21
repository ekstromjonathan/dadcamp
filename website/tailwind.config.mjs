/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Core brand
        forest: "#16251b",
        pine:   "#0c1410",
        moss:   "#2f4a35",
        sage:   "#7d9382",
        // Autumn accents
        ember:  "#c4622d",
        rust:   "#a1441c",
        amber:  "#e2a049",
        // Paper
        cream:  "#f7f3ea",
        sand:   "#ece3d3",
        bark:   "#8b6f47",
      },
      fontFamily: {
        sans:    ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter Tight", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif:   ["Instrument Serif", "ui-serif", "Georgia", "serif"],
      },
      letterSpacing: {
        label: "0.22em",
      },
      // Fine-grained steps used for hairline borders and tinted surfaces
      opacity: {
        8: "0.08",
        12: "0.12",
        98: "0.98",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft:  "0 1px 2px rgba(12,20,16,0.04), 0 8px 24px -12px rgba(12,20,16,0.12)",
        lift:  "0 2px 4px rgba(12,20,16,0.05), 0 24px 48px -24px rgba(12,20,16,0.25)",
        glow:  "0 24px 80px -32px rgba(196,98,45,0.55)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to:   { opacity: "1", transform: "none" },
        },
        "scroll-cue": {
          "0%":   { transform: "translateY(-100%)", opacity: "0" },
          "40%":  { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "scroll-cue": "scroll-cue 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
