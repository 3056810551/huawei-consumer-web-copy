import HoverActiveNavBar from "@components/Hover/HoverActiveNavBar";
import ProductGrid from "./ProductGrid";
import HoverContentProvider from "@components/Hover/HoverContentProvider";

const ProductsDisplay: React.FC = ({}) => {
  const navigationFItems = [
    { content: "手机", href: "#", isActive: true },
    { content: "穿戴", href: "#" },
    { content: "电脑", href: "#" },
    { content: "平板", href: "#" },
    { content: "智慧屏", href: "#" },
    { content: "耳机音箱", href: "#" },
  ];

  return (
    <>
      <div className="w-full overflow-hidden px-10 py-20">
        <div className="mx-auto mb-10">
          <div className="no-shadow text-40 px-10 text-center font-bold leading-tight text-black">
            所有产品
          </div>
        </div>
        <div>
          <HoverContentProvider>
            <div className="flex justify-center">
              <HoverActiveNavBar
                activateFirstItem={true}
                items={navigationFItems}
                ulClassName="flex items-center"
                liclassName="relative mr-5 text-xl "
                isProductsDisplay={true}
              />
            </div>
            <ProductGrid />
          </HoverContentProvider>
        </div>
      </div>
    </>
  );
};

export default ProductsDisplay;
