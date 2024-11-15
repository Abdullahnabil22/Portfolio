import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ["Comic Neue", "Comic Sans MS", "cursive"],
      },
      borderWidth: {
        "3": "3px",
      },
      dropShadow: {
        custom: "5px 5px 0px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
