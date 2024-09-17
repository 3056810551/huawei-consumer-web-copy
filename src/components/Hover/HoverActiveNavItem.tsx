import { useState } from "react";
import { HoverActiveNavItemProps } from "./type";
import { useHoverContent } from "./HoverContentContext";

export const HoverActiveNavItem: React.FC<HoverActiveNavItemProps> = ({
  content,
  href,
  activeIndex,
  liclassName,
  appointUlclassName,
  isProductsDisplay = false,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { setHoverContent } = useHoverContent();
  const handleMouseEnter = () => {
    setIsHovered(true);
    setHoverContent(content);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  let defineSpanClass = {};
  if (props.isActive) {
    defineSpanClass = {
      transform:
        isHovered ||
        (typeof activeIndex === "number" &&
          "index" in props &&
          activeIndex !== undefined &&
          activeIndex === props.index)
          ? "scaleX(1)"
          : "scaleX(0)",
      transformOrigin: "center center",
    };
  } else {
    defineSpanClass = {
      transform: isHovered ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "center center",
    };
  }

  return (
    <li className={`${liclassName} ${appointUlclassName ?? ""}`} {...props}>
      <a
        href={href}
        className={`${isProductsDisplay ? "text-stone-500" : ""} font-serif`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
      <span
        className="absolute -bottom-4 left-0 h-1 w-full rounded-sm bg-black transition-all duration-300 ease-in-out"
        style={defineSpanClass}
      ></span>
    </li>
  );
};

export default HoverActiveNavItem;
