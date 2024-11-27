import View from "../../assets/Icons/View";
import WishList from "../../assets/Icons/Wishlist";
import type { ProductCard } from "../../../types/Product";
import { addToWishlist } from "../../store/wishlistSlice";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, imageUrl, title, price }: ProductCard) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleAddToWishlist = () => {
    dispatch(addToWishlist({ id, imageUrl, title, price }));
    navigate("/wishlist");
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
          <button className="bg-white p-2 rounded-full h-10 w-10">
            <View />
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
