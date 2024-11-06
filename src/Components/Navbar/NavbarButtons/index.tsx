import AddToCart from "./AddToCart";
import Favorites from "./Favorites";
import Search from "./Search";

const index = () => {
  return (
    <div className="flex xl:flex-row flex-col gap-4 justify-center items-center">
      <Search />
      <div className="flex">
        <Favorites />
        <AddToCart />
      </div>
    </div>
  );
};

export default index;
