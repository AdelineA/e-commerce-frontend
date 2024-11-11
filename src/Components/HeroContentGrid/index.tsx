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
    <section className="flex md:flex-row md:justify-between w-full py-10 flex-col gap-5">
      <div>
        <CategorySidebar />
      </div>
      <div className="md:w-[72%] w-full">
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
