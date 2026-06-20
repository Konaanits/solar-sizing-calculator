import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17211f",
        field: "#f7faf8",
        line: "#d8e1dd",
        solar: "#f5b642",
        leaf: "#16745f",
        tide: "#256f8f",
        ember: "#c95532"
      },
      boxShadow: {
        soft: "0 16px 40px rgba(23, 33, 31, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
