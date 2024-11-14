import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        comic: ["Comic Sans MS", "cursive"],
      },
      borderWidth: {
        "3": "3px",
      },
      dropShadow: {
        custom: "5px 5px 0px rgba(0, 0, 0, 0.2)",
      },
      boxShadow: {
        custom: "8px 8px 0px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        pattern: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [],
} satisfies Config;
