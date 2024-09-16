/*
 * @Date: 2024-09-14 14:15:28
 * @LastEditors: 杨剑华
 * @LastEditTime: 2024-09-14 16:02:48
 * @FilePath: \huawei-consumer-shop\src\app\page.tsx
 */
"use client";

import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import HomeMainBanner from "@components/HomeMainBanner";
import { useEffect, useState } from "react";

type Banner = {
  src: string;
  title: string;
  description: string;
  textColor?: "white" | "black";
  boxShadow?: "no-shadow" | "no-text-shadow";
};

export default function Page() {
  const [data, setData] = useState<Banner[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/bannerData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, []);

  const bannerData = Array.isArray(data) ? data : [];

  return (
    <>
      <Header logoAlt="Huawei-v4" />
      {bannerData.map((banner, index) => (
        <HomeMainBanner
          key={index}
          src={banner.src}
          title={banner.title}
          description={banner.description}
          textColor={banner.textColor === "white" ? banner.textColor : "black"}
          boxShadow={
            banner.boxShadow === "no-shadow"
              ? banner.boxShadow
              : "no-text-shadow"
          }
        />
      ))}
      <Footer />
    </>
  );
}
