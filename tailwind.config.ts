import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#181818",
          2: "#1F1F1F",
          3: "#2A2A2A",
          4: "#3A3A3A",
        },
        paper: {
          DEFAULT: "#F2EFE6",
          dim: "rgba(242,239,230,0.72)",
          mute: "rgba(242,239,230,0.48)",
        },
        mustard: {
          DEFAULT: "#C9B548",
          2: "#B6A33A",
        },
        yellow: {
          DEFAULT: "#FFE500",
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.16)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      letterSpacing: {
        eyebrow: "0.22em",
        btn: "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
