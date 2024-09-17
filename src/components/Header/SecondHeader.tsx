/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import HoverActiveNavBar from "@components/Hover/HoverActiveNavBar";

const SecondHeader: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hasBorder = scrollY > 20;

  const navigationFItems = [
    { content: "手机", href: "#", isActive: true },
    { content: "穿戴", href: "#" },
    { content: "电脑", href: "#" },
    { content: "平板", href: "#" },
    { content: "智慧屏", href: "#" },
    { content: "耳机音箱", href: "#" },
    { content: "全屋智能", href: "#" },
    { content: "路由器", href: "#" },
    { content: "HarmonyOS 4", href: "#" },
  ];
  const navigationSItems = [
    { content: "服务支持", href: "#" },
    { content: "零售店", href: "#" },
    { content: "商用", href: "#" },
    { content: <CiSearch className="h-5 w-5" />, href: "#" },
    { content: <CgProfile className="h-5 w-5" />, href: "#", isActive: true },
    {
      content: (
        <span className="rounded-md border border-gray-300 px-6 py-1 text-xs hover:border-black">
          华为商城
        </span>
      ),
      href: "#",
      appointUlclassName: "-mr-10",
    },
  ];

  return (
    <>
      <div
        className={`sticky top-0 z-50 bg-white font-sans ${hasBorder ? "border-b border-gray-300" : ""}`}
      >
        <div className="flex h-14 w-full items-center px-10 py-0">
          <a title="logo" href="#" data-navicon="logo">
            <img
              src="http://localhost:3000/logo.svg"
              alt="logo"
              width={110}
              height={"auto"}
            />
          </a>
          <nav className="ml-16 mr-10 flex w-64 flex-1 items-center justify-between">
            <div>
              <HoverActiveNavBar
                items={navigationFItems}
                ulClassName="flex font-bold"
                liclassName="relative mr-5"
              />
            </div>
            <div className="font-medium">
              <HoverActiveNavBar
                items={navigationSItems}
                ulClassName="flex items-center"
                liclassName="relative mr-5"
              />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SecondHeader;
