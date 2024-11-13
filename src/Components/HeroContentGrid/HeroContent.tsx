import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useCategories from "../../Hook/useCategories";
import HeroCard from "./Card";

const imageUrl = import.meta.env.VITE_IMAGE_URL || "";

const HeroContent = () => {
  const logoCarousel = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { categories, status, error } = useCategories();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      <Slider {...logoCarousel}>
        {categories.map((category) => {
          return (
            <div key={category.id} className="bg-black">
              <HeroCard
                name={category.name}
                description={category.description}
                imageUrl={`${imageUrl}${category.imageUrl}`}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HeroContent;
