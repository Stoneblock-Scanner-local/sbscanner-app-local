import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        blue: "#2657a6",
        gold: "#f3c63f",
        red: "#FF6363",
        grey: {
          50: "#F9FAFB",
          100: "#DEE1E6",
          200: "#cccccc",
          300: "#6f7787",
          400: "#424856",
          900: "#333",
        },
        comment: "#67727E",
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      aspectRatio: {
        "16/9": "16 / 9",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
