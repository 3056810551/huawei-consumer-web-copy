import React, { useState } from "react";
import { useHoverContent } from "./HoverContentContext";

interface HoverActiveNavItemProps {
  content: React.ReactNode; // 支持任意 ReactNode 类型
  href: string;
  isActive?: boolean; // 标记当前项是否为激活状态
  liclassName?: string; // 自定义类名
  appointUlclassName?: string; // 指定li的样式
  isProductsDisplay?: boolean;
  activeIndex?: number | null;
}

interface NavigationListProps {
  items: {
    content: React.ReactNode;
    href: string;
    isActive?: boolean;
    appointUlclassName?: string;
  }[];
  ulClassName?: string;
  liclassName?: string;
  isProductsDisplay?: boolean;
  isActive?: boolean;
  activateFirstItem?: boolean; // 是否激活第一个导航项
}

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
    setHoverContent(null);
  };

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
        style={{
          transform:
            isHovered ||
            (activeIndex !== undefined && activeIndex === props.index)
              ? "scaleX(1)"
              : "scaleX(0)",
          transformOrigin: "center center",
        }}
      ></span>
    </li>
  );
};

const HoverActiveNavBar: React.FC<NavigationListProps> = ({
  items,
  ulClassName,
  liclassName,
  isProductsDisplay = false,
  activateFirstItem = false,
}) => {
  const [activeIndex, setActiveIndex] = useState(activateFirstItem ? 0 : null);

  return (
    <ul className={`${ulClassName}`}>
      {items.map((item, index) => (
        <HoverActiveNavItem
          key={index}
          content={item.content}
          href={item.href}
          liclassName={
            item.appointUlclassName === "-mr-10"
              ? "relative -mr-10"
              : liclassName
          }
          appointUlclassName={item.appointUlclassName}
          isProductsDisplay={isProductsDisplay}
          activeIndex={activeIndex} // 传递当前激活的索引
          onMouseEnter={() => setActiveIndex(index)} // 当鼠标进入时更新激活索引
          onMouseLeave={() => setActiveIndex(null)} // 当鼠标离开时清除激活索引
          index={index}
        />
      ))}
    </ul>
  );
};

export default HoverActiveNavBar;
