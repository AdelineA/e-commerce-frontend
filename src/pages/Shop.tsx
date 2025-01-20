import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ProductCard } from "../../types/Product";

const Shop = () => {
  const cart = useSelector((state: RootState) => state.addToCart.items);

  return (
    <div>
      <h1 className="py-10">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid xl:grid-cols-3 mg:grid-col-2 grid-cols-1 gap-4">
          {cart.map((product: ProductCard) => (
            <div key={product.id} className="p-4 rounded-md shadow-md h-2/3">
              <h2>{product.quantity}</h2>
              <div className="flex justify-center h-1/2">
                <img src={product.imageUrl} alt={product.title} />
              </div>
              <h3 className="pt-4 text-base font-semibold text-center">
                {product.title}
              </h3>
              <p>${product.price * (product.quantity ?? 1)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
