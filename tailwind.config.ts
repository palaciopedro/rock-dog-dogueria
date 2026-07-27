import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rd: {
          yellow: "#F4D000",
          black: "#0D0D0D",
          white: "#FAFAF7",
          red: "#D32B1F",
        },
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        body: ["var(--font-barlow)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;