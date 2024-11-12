import View from "../../assets/Icons/View";
import WishList from "../../assets/Icons/Wishlist";
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
        <img src={image} alt="product" width={200} />
        <div className="flex flex-col gap-4 relative top-0 -right-10 items-center">
          <button className="bg-white p-2 rounded-full w-10 h-10">
            <WishList />
          </button>
          <button className="bg-white p-2 rounded-full h-10 w-10">
            <View />
          </button>
        </div>
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
