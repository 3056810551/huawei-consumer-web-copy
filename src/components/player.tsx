import React, { useState } from "react";

const NavItem: React.FC<{ title: string; href: string }> = ({
  title,
  href,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li className="relative mr-5">
      <a
        title={title}
        data-navicon={title}
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="block px-3 py-2 text-gray-700 hover:text-blue-500"
      >
        {title}
      </a>
      <span
        className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500 transition-all duration-300 ease-in-out"
        style={{ opacity: isHovered ? 1 : 0 }}
      ></span>
    </li>
  );
};

const NavigationList: React.FC = () => {
  return (
    <ul className="flex flex-wrap items-center">
      <NavItem title="服务支持" href="/cn/support/" />
      <NavItem title="关于我们" href="/cn/about/" />
      <NavItem title="联系我们" href="/cn/contact/" />
    </ul>
  );
};

export default NavigationList;
