import { Link } from "react-router-dom";
import Cart from "../../../assets/Icons/Cart";

const AddToCart = () => {
  return (
    <Link to="/shop">
      <Cart />
    </Link>
  );
};

export default AddToCart;
