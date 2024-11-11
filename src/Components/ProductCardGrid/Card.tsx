import type { ProductCard } from "../../types/Product";

const ProductCard = ({
  image,
  title,
  newPrice,
  oldPrice,
  rating,
}: ProductCard) => {
  return (
    <div className="rounded-md shadow-md">
      <div className="bg-gray-100 flex justify-center h-2/3 py-5">
        <img src={image} alt="product" width={240} />
      </div>
      <div className="p-2">
        <h3>{title}</h3>
        <div className="flex gap-3">
          <p className="text-red-600">${newPrice}</p>
          <p className="line-through text-gray-400">${oldPrice}</p>
        </div>
        <span>⭐️</span> <span>({rating})</span>
      </div>
    </div>
  );
};

export default ProductCard;
