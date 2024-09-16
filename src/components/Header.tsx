import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import HoverActiveNavBar from "@components/HoverActiveNavBar/HoverActiveNavBar";
import profilePic from "../assets/logo.svg";
interface HeaderProps {
  logoAlt: string;
}

const FHeader: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered && dropdownRef.current) {
      dropdownRef.current.style.height = `${dropdownRef.current.scrollHeight}px`;
    }
  }, [isHovered]);

  return (
    <>
      <div>
        <div
          className="flex h-6 cursor-pointer items-center bg-black px-10 font-serif text-xs font-medium text-white"
          onMouseEnter={() => setIsHovered(true)}
        >
          <span>消费者业务网站</span>
          <a href="#" className="ml-1">
            {isHovered ? <FaAngleUp /> : <FaAngleDown />}
          </a>
        </div>
        <div
          ref={dropdownRef}
          className={`left-0 right-0 top-full overflow-hidden border border-gray-200 bg-white shadow-lg transition-all duration-300 ease-in-out`}
          style={{
            height: isHovered ? `${dropdownRef.current?.scrollHeight}px` : "0",
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="px-10 text-sm">
            <div className="-ml-5 -mr-5 flex py-8">
              <div className="flex-1 px-5">
                <div className="mb-2">
                  <a
                    title="个人用户"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-bgname="个人用户"
                    className="font-medium"
                  >
                    个人用户
                  </a>
                </div>

                <p className="text-gray-7f">
                  手机，PC和平板，穿戴设备等个人及家用产品
                </p>
              </div>

              <div className="flex-1 px-5">
                <div className="relative mb-2 flex items-center text-red-700">
                  <a
                    title="集团网站"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-bgname="集团网站"
                    href="https://www.huawei.com/cn/"
                    className="font-medium"
                  >
                    集团网站
                  </a>
                  <span className="fa-solid ml-2 transition-transform duration-500 hover:translate-x-4">
                    <FaAngleRight />
                  </span>
                </div>

                <p className="text-sm text-gray-7f">
                  公司信息，社会责任，新闻，展会活动，行业洞察等等
                </p>
              </div>

              <div className="flex-1 px-5">
                <div className="relative mb-2 flex items-center text-red-700">
                  <a
                    title="企业用户"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-bgname="企业用户"
                    href="https://e.huawei.com/cn/"
                    className="font-medium"
                  >
                    企业用户
                  </a>
                  <span className="fa-solid ml-2 transition-transform duration-500 hover:translate-x-4">
                    <FaAngleRight />
                  </span>
                </div>

                <p className="text-sm text-gray-7f">
                  企业商用产品、解决方案和云服务
                </p>
              </div>

              <div className="flex-1 px-5">
                <div className="relative mb-2 flex items-center text-red-700">
                  <a
                    title="运营商用户"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-bgname="运营商用户"
                    href="https://carrier.huawei.com/cn/"
                    className="font-medium"
                  >
                    运营商用户
                  </a>
                  <span className="fa-solid ml-2 transition-transform duration-500 hover:translate-x-4">
                    <FaAngleRight />
                  </span>
                </div>

                <p className="text-sm text-gray-7f">
                  运营商网络解决方案、产品及服务
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SHeader: React.FC<HeaderProps> = ({ logoAlt }) => {
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
            <Image src={profilePic} width={110} alt={logoAlt} />
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

const Header: React.FC<HeaderProps> = ({ logoAlt }) => {
  return (
    <>
      <FHeader />
      <SHeader logoAlt={logoAlt} />
    </>
  );
};

export default Header;
