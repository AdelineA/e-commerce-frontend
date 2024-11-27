import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const WishlistPage = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border rounded-md p-4 shadow-md flex flex-col items-center"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-32 h-32 object-cover"
              />
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-red-600">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
