import { GrLanguage } from "react-icons/gr";

const FooterLegals: React.FC = () => {
  return (
    <>
      <div className="w-full overflow-hidden py-8">
        <div className="flex flex-wrap font-sans text-sm font-medium leading-6 text-gray-7f">
          <div className="basis-1/3">
            <span>
              版权所有 © 华为终端有限公司
              1998-2024。保留一切权利。粤A2-20044005号
            </span>
          </div>
          <div className="basis-1/3">
            <ul className="flex items-center justify-between">
              <li>
                <a href="#">网站地图</a>
              </li>
              <li>
                <a href="#">使用条款</a>
              </li>
              <li>
                <a href="#">隐私声明</a>
              </li>
              <li>
                <a href="#">关于cookies</a>
              </li>
              <li>
                <a href="#">法律信息</a>
              </li>
            </ul>
          </div>
          <div className="flex basis-1/3 justify-end">
            <a href="#" className="inline-block">
              China - 简体中文
            </a>
            <a href="#">
              <GrLanguage className="ml-5 inline-block h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLegals;
