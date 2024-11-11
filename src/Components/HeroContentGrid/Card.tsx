import { HeroContent } from "../../../types/Hero";

const HeroCard = ({ icon, name, title, image }: HeroContent) => {
  return (
    <div className="text-white flex p-10 md:flex-row flex-col">
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <img src={icon} alt="icon" width={16} height={16} />
          <h3 className="font-poppins text-base font-normal text-centerc">
            {name}
          </h3>
        </div>
        <h1 className="font-semibold text-5xl font-inter">{title}</h1>
        <div className="pt-5">
          <button className="hover:underline text-start ">Shop Now</button>
          <button className="ml-10">→</button>
        </div>
      </div>
      <div>
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default HeroCard;
