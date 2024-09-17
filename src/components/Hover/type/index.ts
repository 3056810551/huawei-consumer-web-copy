export interface HoverActiveNavItemProps {
  content: React.ReactNode; // 支持任意 ReactNode 类型
  href: string;
  isActive?: boolean; // 标记当前项是否为激活状态
  liclassName?: string; // 自定义类名
  appointUlclassName?: string; // 指定li的样式
  isProductsDisplay?: boolean;
  activeIndex?: number | null;
  index?: number | null;
  onMouseEnter?: () => void;
}

export interface NavigationListProps {
  items: {
    content: React.ReactNode;
    href: string;
    isActive?: boolean;
    appointUlclassName?: string;
  }[];
  ulClassName?: string;
  liclassName?: string;
  isProductsDisplay?: boolean;
  isActive?: boolean;
  activateFirstItem?: boolean; // 是否激活第一个导航项
}

// 定义 icon 类型，它可以是一个 React 组件或者是一个字符串
export type IconType = React.ReactElement | string | null;

// 定义 HoverableLink 组件的 props 类型
export interface HoverableLinkProps {
  title: string;
  description: string;
  icon?: IconType; // icon 可以是 React 组件、字符串或者 null
  [propName: string]: unknown; // 允许传递任意的其他属性
}
