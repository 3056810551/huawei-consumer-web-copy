import { useEffect, useState } from "react";
import { FooterSectionProps } from "./type";

export const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  links,
  marginB = "mb-12",
}) => {
  const theTitleClass = `${marginB} no-shadow  text-base font-bold leading-6 tracking-wide text-black`;
  return (
    <div className="basis-1/5">
      <div>
        <div className={theTitleClass}>{title}</div>
        <ul className="text-footer-links-color text-sm font-normal leading-6">
          {links.map((link, index) => (
            <li key={index} className="mb-1 mr-3">
              <a href={link.href || "#"}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FooterLinks: React.FC = () => {
  const [data, setData] = useState<FooterSectionProps[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/footerSections.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, []);

  const footerSections = Array.isArray(data) ? data : [];

  return (
    <>
      <div className="border-b border-slate-200 pb-16 pt-20">
        <div className="flex flex-wrap">
          {footerSections.map(({ title, links }, index) => (
            <FooterSection key={index} title={title} links={links} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
