/*
 * @Date: 2024-09-14 14:15:28
 * @LastEditors: 杨剑华
 * @LastEditTime: 2024-09-14 17:16:27
 * @FilePath: \huawei-consumer-shop\src\app\layout.tsx
 */
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Huawei-Consumer-Shop",
  description: "huawei-consumer-shop",
};

export default function RootLayout({ children }: DashboardLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
