import { useHoverContent } from "@components/Hover/HoverContentContext";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

type productsDataProps = {
  type: string;
  data: [];
};
const ProductGrid: React.FC = () => {
  const [data, setData] = useState<productsDataProps[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(null);
  const { hoverContent } = useHoverContent();

  useEffect(() => {
    fetch("http://localhost:3000/productGrid.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, [hoverContent]);

  const dataList = Array.isArray(data) ? data : [];
  const productsData: Array<{
    productName: string;
    productImageSrc: string;
    productInfo?: string;
  }> = dataList.find((item) => item.type === hoverContent)?.data || [
    {
      productName: "手机",
      productImageSrc: "http://localhost:3000/pura70-pro-plus.jpg",
      productInfo: "洞悉万象，开启美学新",
    },
    {
      productName: "HUAWEI Pura 70 Pro+",
      productImageSrc: "http://localhost:3000/pura70-pro-plus.jpg",
    },
    {
      productName: "HUAWEI Pura 70",
      productImageSrc: "http://localhost:3000/pocket-2.jpg",
    },
    {
      productName: "HUAWEI Pocket 2",
      productImageSrc: "http://localhost:3000/pocket-2.jpg",
    },
    {
      productName: "HUAWEI Mate 60 Pro",
      productImageSrc: "http://localhost:3000/mate-60-pro.jpg",
    },
  ];

  return (
    <>
      <div className="mx-auto pt-8">
        <div
          className="grid place-content-stretch gap-2 text-gray-7f"
          style={{
            gridTemplateColumns: "calc(31.43vw + 71px) repeat(2, 1fr)",
            gridTemplateRows: "1fr 1fr",
          }}
        >
          <div
            className="flex h-[846px] flex-col items-center justify-stretch overflow-hidden rounded-lg bg-white"
            style={{
              gridRowStart: "span 2",
              boxShadow: "0 3px 6px rgba(0, 0, 0, 0.01)",
            }}
          >
            <div className="h-[620px]">
              <picture>
                <img
                  className="h-full w-full object-cover"
                  src={productsData[0].productImageSrc}
                  alt={productsData[0].productName}
                />
              </picture>
            </div>
            <div
              className="flex w-full items-center justify-between px-6 text-black"
              style={{
                height: "calc(100% - 620px)",
              }}
            >
              <div>
                <div className="no-shadow text-2xl font-bold leading-tight">
                  {productsData[0].productName}
                </div>
                <div className="no-shadow mt-4">
                  {productsData[0].productInfo}
                </div>
              </div>
              <div className="no-text-shadow">
                <a className="rounded-md bg-black px-3 py-2 text-xs font-medium leading-tight text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:bg-gray-800 hover:font-bold">
                  {`查看全部${productsData[0].productName}`}
                </a>
              </div>
            </div>
          </div>
          {/* 从第二个元素开始遍历 */}
          {productsData.slice(1).map((product, index) => (
            <ProductCard
              key={index + 1}
              productName={product.productName}
              productImageSrc={product.productImageSrc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
