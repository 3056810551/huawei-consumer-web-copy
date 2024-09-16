import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

// 定义 icon 类型，它可以是一个 React 组件或者是一个字符串
type IconType = React.ReactElement | string | null;

// 定义 HoverableLink 组件的 props 类型
interface HoverableLinkProps {
  title: string;
  description: string;
  icon?: IconType; // icon 可以是 React 组件、字符串或者 null
  [propName: string]: unknown; // 允许传递任意的其他属性
}

const HoverableLink: React.FC<HoverableLinkProps> = ({
  title,
  description,
  icon = <FaAngleRight />,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex-1 px-5">
      <div className="relative mb-2 flex items-center text-red-700" {...props}>
        <a
          className={`font-medium ${icon === "" ? "" : "cursor-pointer"}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {title}
        </a>
        {icon && (
          <span
            className="fa-solid ml-2 cursor-pointer"
            style={{
              transform: isHovered ? "translateX(0.5rem)" : "translateX(0)",
              transition: "transform 0.5s",
              marginLeft: "2px",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {icon}
          </span>
        )}
      </div>
      <p className={`text-sm ${isHovered ? "text-black" : "text-gray-7f"}`}>
        {description}
      </p>
    </div>
  );
};

export default HoverableLink;
