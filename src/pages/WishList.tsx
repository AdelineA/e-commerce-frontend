import { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../store/wishlistSlice";
import { ProductCard } from "../../types/Product";
import Delete from "../assets/Icons/Delete";

const WishlistPage = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (product: ProductCard) => {
    dispatch(removeFromWishlist(product));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="bg-gray-100 p-4 rounded-md shadow">
              <div className="flex justify-between text-white font-semibold pb-4">
                <h3>{product.status}</h3>
                <button
                  onClick={() => handleRemoveFromWishlist(product)}
                  className="bg-white p-2 rounded-full hover:bg-red-400"
                >
                  <Delete />
                </button>
              </div>
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-red-500">${product.price}</p>
                <button className="mt-2 px-5 py-2 bg-black rounded-md hover:bg-green-500 text-white">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
