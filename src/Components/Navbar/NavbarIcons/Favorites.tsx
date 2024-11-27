import { Link } from "react-router-dom";
import WishList from "../../../assets/Icons/Wishlist";

const Favorites = () => {
  return (
    <Link to="/wishlist">
      <WishList />
    </Link>
  );
};

export default Favorites;
