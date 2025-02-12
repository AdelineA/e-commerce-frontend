import ProductCardGrid from "../Components/ProductCardGrid";
import HeroContentGrid from "../Components/HeroContentGrid";
import Category from "../Components/Categories";

const Homepage = () => {
  return (
    <>
      <HeroContentGrid />
      <div className="pt-52">
        <Category title={"Categories"} />
      </div>
      <div className="w-full pt-10 ">
        <hr className="border-black" />
      </div>
      <div className="pt-5">
        <ProductCardGrid id={""} title={"Explore our Products"} content={[]} />
      </div>
    </>
  );
};

export default Homepage;
