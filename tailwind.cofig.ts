import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        primary: {
          "100": "#F3E8FF", // light lavender
          DEFAULT: "#B57EDC", // main lavender purple
        },
        secondary: "#A0E8AF", // soft mint green
        accent: "#F8C8DC", // pastel pink
        black: {
          "100": "#7D8087", // soft gray
          "200": "#333333", // dark gray
          "300": "#1C1B23", // near black
          DEFAULT: "#000000",
        },
        white: {
          "100": "#FAFAFA",
          DEFAULT: "#FFFFFF",
        },
      },
      fontFamily: {
        "work-sans": ["var(--font-work-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        100: "2px 2px 0px 0px rgb(28, 27, 35)",
        200: "2px 2px 0px 2px rgb(181, 126, 220)", // purple glow
        300: "4px 4px 15px rgba(181, 126, 220, 0.4)", // soft shadow
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
