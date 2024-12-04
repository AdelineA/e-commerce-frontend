import useCategories from "../../Hook/useCategories";
import Card from "./Card";

interface CategoryProps {
  title: string;
}
const imageUrl = import.meta.env.VITE_IMAGE_URL || "";

const Category = ({ title }: CategoryProps) => {
  const { categories } = useCategories();
  return (
    <div className="">
      <h1 className="py-5 font-semibold text-4xl">{title}</h1>
      <div className="flex gap-10">
        {categories.map((category) => {
          return (
            <Card
              key={category.id}
              name={category.name}
              imageUrl={`${imageUrl}${category.imageUrl}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
