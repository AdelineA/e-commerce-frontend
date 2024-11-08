import HeroCard from "./Card";
import data from "../../../public/data/data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryGrid from "./CategoryGrid";
const HeroContentGrid = () => {
  const logoCarousel = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="content-wrapper flex gap-10 w-full">
      <div className="w-1/3 flex justify-center items-center">
        <CategoryGrid />
      </div>
      <div className="w-2/3">
        <Slider {...logoCarousel}>
          {data.map((item, index) => (
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
