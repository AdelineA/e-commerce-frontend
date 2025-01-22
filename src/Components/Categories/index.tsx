import { useState } from "react";
import SearchIcon from "../../assets/Icons/SearchIcon";
import useCategories from "../../Hook/useCategories";
import Card from "./Card";

interface CategoryProps {
  title: string;
}
const imageUrl = import.meta.env.VITE_IMAGE_URL || "";

const Category = ({ title }: CategoryProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: { target: { value: string } }) => {
    const searchItem = e.target.value;
    setSearchTerm(searchItem);
  };
  const { categories } = useCategories();
  return (
    <div>
      <div className="flex justify-between py-5">
        <h1 className="font-semibold text-4xl">{title}</h1>
        <div className="bg-gray-200 p-2 rounded-lg flex gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="What are you looking for?"
            className="bg-inherit outline-none text-[12px] text-black"
          />
          <SearchIcon />
        </div>
      </div>
      <div className="flex gap-10">
        {categories
          .filter(
            (category) =>
              searchTerm === "" ||
              category.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((category) => (
            <Card
              key={category.id}
              name={category.name}
              imageUrl={`${imageUrl}${category.imageUrl}`}
            />
          ))}
      </div>
    </div>
  );
};

export default Category;
