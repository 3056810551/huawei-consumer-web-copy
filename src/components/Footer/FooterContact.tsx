import { BsSinaWeibo } from "react-icons/bs";
import { IoLogoWechat } from "react-icons/io5";
import { FooterSection } from "./FooterLinks";
import { FooterLinkProps } from "./type";
import { useState } from "react";
import Image from "next/image";

const FooterContact: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const footerSections: { title: string; links: FooterLinkProps[] }[] = [
    {
      title: "在线支持",
      links: [
        { text: "消费者服务热线" },
        { text: "950800" },
        { text: "7*24小时 | 普通话" },
        { text: "Mate X、非凡大师系列、艺术定制系列、Pura 70 Ultra 专属热线" },
        { text: "950801" },
        { text: "在线客服 | 7*24小时" },
      ],
    },
    {
      title: "线下支持",
      links: [{ text: "服务店查询" }, { text: "零售店查询" }],
    },
  ];

  return (
    <>
      <div className="border-b border-slate-200 pb-16 pt-10">
        <div className="flex flex-wrap">
          {footerSections.map(({ title, links }, index) => (
            <FooterSection
              key={index}
              title={title}
              links={links}
              marginB={"mb-2"}
            />
          ))}
          <div className="basis-1/5">
            <div>
              <div
                className={
                  "no-shadow mb-2 text-base font-bold leading-6 tracking-wide text-black"
                }
              >
                关注我们
              </div>
              <ul className="text-footer-links-color text-sm font-normal leading-6">
                <li className="mb-1 mr-3 mt-5">
                  <a
                    href="#"
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <IoLogoWechat className="inline-block h-6 w-6" />
                    <span
                      className="absolute -bottom-4 left-0 h-1 w-full rounded-sm bg-black transition-all duration-300 ease-in-out"
                      style={{
                        transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "center center",
                      }}
                    ></span>
                    <div
                      className="contact__social_qrcode absolute bottom-20 left-1/2 h-[10.41667vw] w-[10.41667vw] -translate-x-1/2 rounded-md bg-black p-[1.041667vw]"
                      style={{
                        display: isHovered ? "block" : "none",
                      }}
                    >
                      <picture>
                        <Image
                          alt="微信二维码"
                          width={100}
                          height={100}
                          src={"http://localhost:3000/weixin.jpg"}
                          className="h-full w-full object-cover"
                        />
                      </picture>
                    </div>
                  </a>
                  <a href="#">
                    <BsSinaWeibo className="ml-6 inline-block h-6 w-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContact;
