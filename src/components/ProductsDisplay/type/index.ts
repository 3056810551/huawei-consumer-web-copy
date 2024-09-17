export interface ProductProps {
  productName: string;
  productImageSrc: string;
  productImageAlt?: string;
}

export interface MessageContextType {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export interface BannerProps {
  src: string;
  alt?: string; // alt文本，默认为空字符串
  title: string;
  description?: string;
  primaryButtonText?: string; // 默认为“了解更多”
  secondaryButtonText?: string; // 默认为“购买”
  textColor?: "white" | "black"; // 文本颜色，默认为白色
  boxShadow?: "no-shadow" | "no-text-shadow"; // 文本颜色，默认为白色
}

export type productsDataProps = {
  type: string;
  data: [];
};
