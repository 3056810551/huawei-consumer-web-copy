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
      },
    },
  },
  plugins: [],
};
export default config;
