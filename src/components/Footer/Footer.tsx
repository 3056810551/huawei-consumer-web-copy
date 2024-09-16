import FooterDeatails from "./FooterDetais";
import FooterLinks from "./FooterLinks";

const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full overflow-hidden bg-white px-10">
        <FooterDeatails />
        <FooterLinks />
      </div>
    </>
  );
};

export default Footer;
