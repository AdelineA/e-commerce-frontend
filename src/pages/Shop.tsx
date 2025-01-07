import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ProductCard } from "../../types/Product";

const Shop = () => {
  const cart = useSelector((state: RootState) => state.addToCart.items);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex gap-10">
          {cart.map((product: ProductCard) => (
            <div key={product.id} className="bg-gray-100 p-4 rounded-md shadow">
              <h2>{product.quantity}</h2>
              <img src={product.imageUrl} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price * (product.quantity ?? 1)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
