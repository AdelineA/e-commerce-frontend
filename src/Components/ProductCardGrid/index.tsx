import { Product } from "../../types/Product";
import data from "./../../../public/data.json";
import ProductCard from "./Card";
const ProductCardGrid = ({ title }: Product) => {
  return (
    <div>
      <h1 className="py-5 font-semibold text-4xl">{title}</h1>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-5">
        {data.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardGrid;
