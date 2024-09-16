/*
 * @Date: 2024-09-14 14:15:28
 * @LastEditors: 杨剑华
 * @LastEditTime: 2024-09-14 16:47:08
 * @FilePath: \huawei-consumer-shop\tailwind.config.ts
 */
import type { Config } from "tailwindcss";

const config: Config = {
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
        "gray-7f": "#7f7f7f",
        "footer-links-color": "#767676",
      },
      boxShadow: {
        "no-shadow": "rgb(0, 0, 0) 0px 0px 0px !important",
        "no-text-shadow": "rgb(255, 255, 255) 0px 0px 0px !important",
        "text-shadow-custom": "rgb(127, 127, 127) 0px 0px 0px !important",
      },
      lineHeight: {
        "1.25": "1.25",
        "1.6": "1.6",
      },
      width: {
        "170": "680px",
      },
      height: {
        "182": "728px",
      },
    },
  },
  plugins: [],
};
export default config;
