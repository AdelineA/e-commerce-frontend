import data from "../../../../public/data.json";

const CategorySidebar = () => {
  return (
    <ul className="flex flex-col gap-4 text-base align-center">
      {data.categories.map((category) => (
        <li key={category.id}>{category.title}</li>
      ))}
    </ul>
  );
};

export default CategorySidebar;
