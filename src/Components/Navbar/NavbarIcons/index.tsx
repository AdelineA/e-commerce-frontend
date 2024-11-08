import Search from "../Search";
import AddToCart from "./AddToCart";
import Favorites from "./Favorites";
const NavbarIcons = () => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <Search />
      <Favorites />
      <AddToCart />
    </div>
  );
};

export default NavbarIcons;
