import ProductCardGrid from "../Components/ProductCardGrid";
import HeroContentGrid from "../Components/HeroContentGrid";

const Homepage = () => {
  return (
    <>
      <HeroContentGrid />
      <ProductCardGrid id={""} title={"Best Selling Products"} content={[]} />
    </>
  );
};

export default Homepage;
