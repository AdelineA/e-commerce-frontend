import { HeroContent } from "../../../types/Hero";

const Card = ({ imageUrl, name }: HeroContent) => {
  return (
    <div className="border-2 border-gray-300 w-24 2xl:w-[170px] flex flex-col justify-center items-center text-center shadow-md rounded-lg">
      <img src={imageUrl} alt={name} className="h-1/2" />
      <h1 className="pt-3 font-poppins text-base">{name}</h1>
    </div>
  );
};

export default Card;
