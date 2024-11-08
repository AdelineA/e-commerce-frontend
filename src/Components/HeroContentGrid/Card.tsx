import { HeroContent } from "../../../types/Hero";

const HeroCard = ({ icon, name, title, image }: HeroContent) => {
  return (
    <div className="text-white w-screen grid grid-cols-2 p-10">
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <img src={icon} alt="icon" />
          <h3 className="font-poppins text-base font-normal text-centerc">
            {name}
          </h3>
        </div>
        <h1 className="font-semibold text-5xl font-inter">{title}</h1>
      </div>
      <div>
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default HeroCard;
