import profilePic from "../assets/logo.svg";
import Image from "next/image";

interface HeaderProps {
  logoAlt: string;
}

const FHeader = () => {
  return (
    <>
      <div className="flex h-6 cursor-pointer items-center bg-black px-10 font-serif text-xs text-white">
        <span>消费者业务网站</span>
      </div>
    </>
  );
};

const SHeader: React.FC<HeaderProps> = ({ logoAlt }) => {
  return (
    <>
      <div className="sticky top-0 bg-white font-mono">
        <div className="flex h-14 w-full items-center px-10 py-0">
          <a title="logo" href="#" data-navicon="logo">
            <Image src={profilePic} width={110} alt={logoAlt} />
          </a>
          <nav className="ml-16 mr-10 flex w-64 flex-1 items-center justify-between">
            <div>
              <ul className="flex font-bold">
                <li className="mr-5">
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
            <div>
              <ul className="flex">
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
                  <a
                    title="华为商城"
                    data-navicon="华为商城"
                    href="https://m.vmall.com/index.html?cid=91712"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    华为商城
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
