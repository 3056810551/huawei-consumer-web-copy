export interface ProductProps {
  productName: string;
  productImageSrc: string;
  productImageAlt?: string;
}

export interface MessageContextType {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}
