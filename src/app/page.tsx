/*
 * @Date: 2024-09-14 14:15:28
 * @LastEditors: 杨剑华
 * @LastEditTime: 2024-09-14 16:02:48
 * @FilePath: \huawei-consumer-shop\src\app\page.tsx
 */
"use client";

import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import HomeMain from "@components/HomeMain/HomeMain";
import ProductsDisplay from "@components/ProductsDisplay/ProductsDisplay";

export default function Page() {
  return (
    <>
      <Header logoAlt="Huawei-v4" />
      <HomeMain />
      <ProductsDisplay />
      <Footer />
    </>
  );
}
