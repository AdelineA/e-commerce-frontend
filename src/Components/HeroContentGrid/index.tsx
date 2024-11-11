import HeroCard from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./../../../public/data.json";
import CategorySidebar from "./CategorySidebar/index";
const HeroContentGrid = () => {
  const logoCarousel = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="flex lg:flex-row lg:justify-between w-full py-10 flex-col items-center">
      <div>
        <CategorySidebar />
      </div>
      <div className="lg:w-[72%] w-full">
        <Slider {...logoCarousel}>
          {data.products.map((item, index) => (
            <div key={index} className="flex bg-black h-fit">
              <HeroCard {...item} />;
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroContentGrid;
