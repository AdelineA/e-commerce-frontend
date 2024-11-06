import AddToCart from "./AddToCart";
import Favorites from "./Favorites";
import Search from "./Search";

const index = () => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <Search />
      <Favorites />
      <AddToCart />
    </div>
  );
};

export default index;
