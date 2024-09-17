import { Button } from "antd";
import Image from "next/image";
import { BannerProps } from "./ProductsDisplay/type";

const HomeMainBanner: React.FC<BannerProps> = ({
  src,
  alt = "",
  title,
  description = "",
  primaryButtonText = "了解更多",
  secondaryButtonText = "购买",
  textColor = "black",
  boxShadow = "no-shadow",
}) => {
  const textClasses = `absolute left-1/2 top-12 z-10 flex w-170 -translate-x-1/2 flex-col items-center justify-start text-center text-${textColor} ${boxShadow}`;

  return (
    <>
      <div className="h-182 w-full cursor-pointer p-1 px-10">
        <div className="relative h-full w-full overflow-hidden rounded-lg bg-white">
          <div className="relative h-full w-full overflow-hidden">
            <picture>
              <Image
                src={src}
                height={1120}
                width={2392}
                alt={alt}
                priority={true}
                className="h-full w-full object-cover"
              />
            </picture>
          </div>
          <a href="#"></a>
          <div className={textClasses}>
            <h2 className="cursor-pointer break-words text-4xl font-bold leading-1.25">
              {title}
            </h2>
            <p className="mt-4 cursor-pointer break-words text-2xl font-medium leading-1.6">
              {description}
            </p>
            <div className="-mb-2 -ml-3 -mr-3 mt-4 flex flex-wrap items-center justify-center">
              <Button type="primary" className="mb-2 mr-3">
                {primaryButtonText}
              </Button>
              <Button className="mb-2 mr-3">{secondaryButtonText}</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMainBanner;
