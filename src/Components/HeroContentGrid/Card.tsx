import { HeroContent } from "../../../types/Hero";

const HeroCard = ({ name, description, imageUrl }: HeroContent) => {
  return (
    <div className="text-white flex p-10 md:p-5 md:flex-row flex-col md:justify-between md:h-72 h-96">
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <img
            src={imageUrl}
            alt="icon"
            width={20}
            height={20}
            className="rounded-full"
          />
          <h3 className="font-poppins text-base font-normal text-centerc">
            {name}
          </h3>
        </div>
        <p className="font-semibold text-5xl font-inter">{description}</p>
        <div className="pt-5">
          <button className="hover:underline text-start ">Shop Now</button>
          <button className="ml-8">→</button>
        </div>
      </div>
      <img src={imageUrl} alt={name} />
    </div>
  );
};

export default HeroCard;
