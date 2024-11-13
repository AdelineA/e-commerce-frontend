import CategorySidebar from "./CategorySidebar/index";
import HeroContent from "./HeroContent";

const HeroContentGrid = () => {
  return (
    <section className="flex md:flex-row md:justify-between w-full py-10 flex-col gap-5 h-52">
      <div>
        <CategorySidebar />
      </div>
      <div className="md:w-[72%] w-full">
        <HeroContent />
      </div>
    </section>
  );
};

export default HeroContentGrid;
