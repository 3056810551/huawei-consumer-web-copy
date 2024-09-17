import * as React from "react";
import { FaAngleRight } from "react-icons/fa";
import { ProductProps } from "./type";

const ProductCard: React.FC<ProductProps> = ({
  productName,
  productImageSrc,
  productImageAlt = "Product Image",
}) => {
  return (
    <div className="flex h-[419px] w-[435px] flex-col items-center overflow-hidden rounded-lg bg-white">
      <div className="p-8">
        <picture>
          <img
            width={220}
            height={220}
            src={productImageSrc}
            alt={productImageAlt}
          />
        </picture>
      </div>
      <div>
        <div className="no-shadow mb-4 text-2xl font-bold text-black">
          {productName}
        </div>
        <div className="flex flex-wrap items-center justify-center text-xs font-bold text-black">
          <div className="mb-2 mr-3 flex items-center justify-center">
            <a href="#">了解更多</a>
            <FaAngleRight />
          </div>
          <div className="mb-2 mr-3 flex items-center justify-center">
            <a href="#">购买</a>
            <FaAngleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
