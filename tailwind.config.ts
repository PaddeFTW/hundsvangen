import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFF8EF",
        primary: "#E08A3C",
        water: "#7BA3A0",
        calm: "#C17B6B",
        open: "#6B8F71",
        play: "#E0B04A",
        ink: "#2F2A26",
        card: "#FFFDF9",
        taupe: "#C4B4A3",
      },
      fontFamily: {
        nunito: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
