import React, { useState } from "react";

interface HoverActiveNavItemProps {
  content: React.ReactNode; // 支持任意 ReactNode 类型
  href: string;
  isActive?: boolean; // 标记当前项是否为激活状态
  liclassName?: string; // 自定义类名
  appointUlclassName?: string; // 指定li的样式
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
}

export const HoverActiveNavItem: React.FC<HoverActiveNavItemProps> = ({
  content,
  href,
  isActive,
  liclassName,
  appointUlclassName,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li className={`${liclassName} ${appointUlclassName ?? ""}`}>
      <a
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </a>
      <span
        className="absolute -bottom-4 left-0 h-1 w-full rounded-sm bg-black transition-all duration-300 ease-in-out"
        style={{
          transform: isHovered || isActive ? "scaleX(1)" : "scaleX(0)",
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
}) => {
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
        />
      ))}
    </ul>
  );
};

export default HoverActiveNavBar;
