import { useEffect, useState } from "react";

type FooterLinkProps = {
  text: string;
  href?: string;
};

type FooterSectionProps = {
  title: string;
  links: FooterLinkProps[];
};

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  return (
    <div className="basis-1/5">
      <div>
        <div className="no-shadow mb-12 text-base font-bold leading-6 tracking-wide text-black">
          {title}
        </div>
        <ul className="text-footer-links-color text-sm font-normal leading-6">
          {links.map((link, index) => (
            <li key={index} className="mb-1">
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
      <div className="border-b border-gray-300 py-20">
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
