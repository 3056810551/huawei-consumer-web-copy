import HoverableLink from "@components/Hover/HoverableLink";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const FirstHeader: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverableLinkData = [
    {
      title: "个人用户",
      description: "手机，PC和平板，穿戴设备等个人及家用产品",
      icon: "",
    },
    {
      title: "集团网站",
      description: "公司信息，社会责任，新闻，展会活动，行业洞察等等",
    },
    {
      title: "企业用户",
      description: "企业商用产品、解决方案和云服务",
    },
    {
      title: "运营商用户",
      description: "运营商网络解决方案、产品及服务",
    },
  ];
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
              {hoverableLinkData.map((item, index) => (
                <HoverableLink
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstHeader;
