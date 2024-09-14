import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import profilePic from "../assets/logo.svg";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

interface HeaderProps {
  logoAlt: string;
}

const FHeader: React.FC = () => {
  return (
    <>
      <div className="flex h-6 cursor-pointer items-center bg-black px-10 font-serif text-xs font-medium text-white">
        <span>消费者业务网站</span>
        <FaAngleDown />
      </div>
      <div className="bg-white">
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
              <ul className="flex font-bold">
                <li className="mr-5 hover:bg-slate-400">
                  <a title="手机" data-navicon="手机" href="/cn/phones/">
                    手机
                  </a>
                </li>
                <li className="mr-5">
                  <a title="穿戴" data-navicon="穿戴" href="/cn/wearables/">
                    穿戴
                  </a>
                </li>
                <li className="mr-5">
                  <a title="电脑" data-navicon="电脑" href="/cn/laptops/">
                    电脑
                  </a>
                </li>
                <li className="mr-5">
                  <a title="平板" data-navicon="平板" href="/cn/tablets/">
                    平板
                  </a>
                </li>
                <li className="mr-5">
                  <a title="智慧屏" data-navicon="智慧屏" href="/cn/visions/">
                    智慧屏
                  </a>
                </li>
                <li className="mr-5">
                  <a title="耳机音箱" data-navicon="耳机音箱" href="/cn/audio/">
                    耳机音箱
                  </a>
                </li>
                <li className="mr-5">
                  <a
                    title="全屋智能"
                    data-navicon="全屋智能"
                    href="/cn/wholehome/"
                  >
                    全屋智能
                  </a>
                </li>
                <li className="mr-5">
                  <a title="路由器" data-navicon="路由器" href="/cn/routers/">
                    路由器
                  </a>
                </li>
                <li className="mr-5">
                  <a
                    title="HarmonyOS 4"
                    data-navicon="HarmonyOS 4"
                    href="/cn/harmonyos-4/"
                  >
                    HarmonyOS 4
                  </a>
                </li>
              </ul>
            </div>
            <div className="font-medium">
              <ul className="flex items-center">
                <li className="mr-5">
                  <a
                    title="服务支持"
                    data-navicon="服务支持"
                    href="/cn/support/"
                  >
                    服务支持
                  </a>
                </li>

                <li className="mr-5">
                  <a title="零售店" data-navicon="零售店" href="/cn/retail/">
                    零售店
                  </a>
                </li>

                <li className="mr-5">
                  <a
                    title="商用"
                    data-navicon="商用"
                    href="https://qingyun.huawei.com/?utm_medium=referral&amp;utm_source=consumer.huawei.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    商用
                  </a>
                </li>
                <li className="mr-5">
                  <a href="#">
                    <CiSearch className="h-5 w-5" />
                  </a>
                </li>
                <li className="mr-5">
                  <a href="#">
                    <CgProfile className="h-5 w-5" />
                  </a>
                </li>
                <li className="-mr-10">
                  <a
                    title="华为商城"
                    data-navicon="华为商城"
                    href="https://m.vmall.com/index.html?cid=91712"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="rounded-md border border-gray-300 px-6 py-1 text-xs hover:border-black">
                      华为商城
                    </span>
                  </a>
                </li>
              </ul>
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
