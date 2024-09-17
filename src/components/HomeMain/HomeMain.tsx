import { useEffect, useState } from "react";
import HomeMainBanner from "./HomeMainBanner";
import { Banner } from "./type";

const HomeMain = () => {
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
      <div className="px-10">
        {bannerData.slice(0, 4).map((banner, index) => {
          return (
            <HomeMainBanner
              key={index}
              src={banner.src}
              title={banner.title}
              description={banner.description}
              textColor={
                banner.textColor === "white" ? banner.textColor : "black"
              }
              boxShadow={
                banner.boxShadow === "no-shadow"
                  ? banner.boxShadow
                  : "no-text-shadow"
              }
            />
          );
        })}
      </div>
      <div
        className="grid grid-flow-row px-10"
        style={{
          gridTemplateColumns: "repeat(2, 1fr)",
          gridAutoRows: "minmax(100px, auto)",
        }}
      >
        {bannerData.slice(5, 11).map((banner, index) => {
          return (
            <HomeMainBanner
              buttonSize="small"
              key={index}
              src={banner.src}
              title={banner.title}
              description={banner.description}
              height="h-[520px]"
              hFontSize="text-3xl"
              pFontSize="text-xl"
              textColor={
                banner.textColor === "white" ? banner.textColor : "black"
              }
              boxShadow={
                banner.boxShadow === "no-shadow"
                  ? banner.boxShadow
                  : "no-text-shadow"
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default HomeMain;
