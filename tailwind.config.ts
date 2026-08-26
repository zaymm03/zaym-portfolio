import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0B0F14",
        panel: "#131922",
        panelborder: "#1E2733",
        cyan: "#00D9FF",
        amber: "#FFB454",
        ink: "#E6EDF3",
        muted: "#7D8590",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        typein: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        fadeup: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        fadeup: "fadeup 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
