import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { HoverableLinkProps } from "./type";

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
