import FooterContact from "./FooterContact";
import FooterDeatails from "./FooterDetais";
import FooterLegals from "./FooterLegals";
import FooterLinks from "./FooterLinks";

const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full overflow-hidden bg-white px-10">
        <FooterDeatails />
        <FooterLinks />
        <FooterContact />
        <FooterLegals />
      </div>
    </>
  );
};

export default Footer;
