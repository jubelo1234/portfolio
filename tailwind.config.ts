import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "web-max": "1300px",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      screens: {
        five: "500px",
        tablet: "700px",
        laptop: "1200px",
      },
      colors: {
        main: "#FCA311",
        dblue: "#14213D",
        text: "#67737E",
        border: "#E4EAF0",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
