import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Shop = () => {
  const cart = useSelector((state: RootState) => state.addToCart.items);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {cart.map((product) => (
            <div key={product.id} className="bg-gray-100 p-4 rounded-md shadow">
              <h2>{product.quantity}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
