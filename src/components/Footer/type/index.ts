export type FooterLinkProps = {
  text: string;
  href?: string;
};

export type FooterSectionProps = {
  title: string;
  links: FooterLinkProps[];
  marginB?: string;
};
