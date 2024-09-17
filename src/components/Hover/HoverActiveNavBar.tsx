import React, { useState } from "react";
import { NavigationListProps } from "./type";
import HoverActiveNavItem from "./HoverActiveNavItem";

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
          // 传递当前激活的索引
          activeIndex={activeIndex}
          // 当鼠标进入时更新激活索引
          onMouseEnter={() => setActiveIndex(index)}
          index={index}
          isActive={activateFirstItem}
        />
      ))}
    </ul>
  );
};

export default HoverActiveNavBar;
