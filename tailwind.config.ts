import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gm: {
          paper: "#FAF8F3",
          white: "#FFFFFF",
          ink: "#1B211D",
          soft: "#565F58",
          emerald: "#0E3B2E",
          emeraldDark: "#0A2C22",
          tint: "#E7EFE9",
          line: "#E6E1D6",
        },
        cx: {
          bg: "#FAF8F3",
          panel: "#FFFFFF",
          panelLight: "#E7EFE9",
          text: "#1B211D",
          muted: "#56645B",
          green: "#087653",
          greenDark: "#064E3B",
          line: "#DCE7DE",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
