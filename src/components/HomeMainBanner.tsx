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
  defineStyle,
  height = "h-182",
  hFontSize = "text-4xl",
  pFontSize = "text-2xl",
}) => {
  const textClasses = `absolute left-1/2 top-12 z-10 flex -translate-x-1/2 flex-col items-center justify-start text-center text-${textColor} ${boxShadow} `;

  return (
    <>
      <div
        className={`w-full cursor-pointer p-1 ${height}`}
        style={defineStyle}
      >
        <div className="relative h-full w-full overflow-hidden rounded-lg bg-white">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={src}
              height={1120}
              width={2392}
              alt={alt}
              priority={true}
              className="h-full w-full object-cover"
            />
          </div>
          <a href="#"></a>
          <div className={textClasses}>
            <h2
              className={`cursor-pointer break-words font-bold leading-1.25 ${hFontSize}`}
            >
              {title}
            </h2>
            <p
              className={`mt-4 cursor-pointer break-words ${pFontSize} font-medium leading-1.6`}
            >
              {description}
            </p>
            <div className="-mb-2 -ml-3 -mr-3 mt-4 flex flex-wrap items-center justify-center">
              <a
                className={`mb-2 mr-3 rounded-md bg-black px-3 py-2 text-xs font-medium leading-tight text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:font-bold ${textColor === "white" ? "hover:bg-white" : "hover:bg-black"} ${textColor === "white" ? "border-inherit" : ""} ${textColor === "white" ? "border-2" : ""} ${textColor === "white" ? "hover:text-black" : "hover:text-white"}`}
              >
                {primaryButtonText}
              </a>
              <a
                className={`mb-2 mr-3 rounded-md border-2 border-gray-7f px-3 py-2 text-xs font-semibold leading-tight text-black transition delay-150 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:border-2 hover:border-black hover:font-bold text-${textColor} ${textColor === "white" ? "hover:border-inherit" : ""} ${textColor === "white" ? "hover:bg-black" : "hover:bg-white"}`}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMainBanner;
