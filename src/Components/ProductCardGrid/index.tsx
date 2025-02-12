import useProducts from "../../Hook/useProducts";
import { Product } from "../../../types/Product";
import ProductCard from "./Card";
import { ToastContainer } from "react-toastify";

const imageUrl = import.meta.env.VITE_IMAGE_URL || "";

const ProductCardGrid = ({ title }: Product) => {
  const { products, status, error } = useProducts();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="">
      <ToastContainer />

      <h1 className="py-5 font-semibold text-4xl">{title}</h1>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id.toString()}
            title={product.title}
            price={product.price}
            imageUrl={`${imageUrl}${product.imageUrl}`}
            categoryId={""}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCardGrid;
