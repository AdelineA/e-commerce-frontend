import WishList from "../../assets/Icons/Wishlist";
import type { ProductCard } from "../../../types/Product";
import { addToWishlist } from "../../store/wishlistSlice";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import Cart from "../../assets/Icons/Cart";
import { addToCart } from "../../store/addToCartSlice";

const ProductCard = ({ id, imageUrl, title, price }: ProductCard) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleAddToWishlist = () => {
    dispatch(addToWishlist({ id, imageUrl, title, price }));
    alert(`${title} Added to wishlist`);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ productId: id, quantity: 1 }));
    alert(`${title} Added to cart`);
  };
  return (
    <div className="rounded-md shadow-md">
      <div className="bg-gray-100 flex justify-center h-2/3 py-5">
        <img src={imageUrl} alt="product" width={200} />
        <div className="flex flex-col gap-4 relative top-0 lg:-right-10 -right-5 items-center">
          <button
            onClick={handleAddToWishlist}
            className="bg-white p-2 rounded-full w-10 h-10"
          >
            <WishList />
          </button>
          <button
            onClick={handleAddToCart}
            className="bg-white p-2 rounded-full h-10 w-10"
          >
            <Cart />
          </button>
        </div>
      </div>
      <div className="p-2">
        <h3>{title}</h3>
        <div className="flex gap-3">
          <p className="text-red-600">${price}</p>
          <p className="line-through text-gray-400">${500}</p>
        </div>
        <span>⭐️</span> <span>({})</span>
      </div>
    </div>
  );
};

export default ProductCard;
