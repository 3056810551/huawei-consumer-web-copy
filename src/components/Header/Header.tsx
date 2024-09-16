import FirstHeader from "./FirstHeader";
import SecondHeader from "./SecondHeader";
import { HeaderProps } from "./type";

const Header: React.FC<HeaderProps> = ({ logoAlt }) => {
  return (
    <>
      <FirstHeader />
      <SecondHeader logoAlt={logoAlt} />
    </>
  );
};

export default Header;
