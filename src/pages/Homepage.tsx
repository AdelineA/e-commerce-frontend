import ProductCardGrid from "../Components/ProductCardGrid";
import HeroContentGrid from "../Components/HeroContentGrid";

const Homepage = () => {
  return (
    <>
      <HeroContentGrid />
      <div className="lg:pt-52 pt-[570px]">
        <ProductCardGrid id={""} title={"Best Selling Products"} content={[]} />
      </div>
    </>
  );
};

export default Homepage;
