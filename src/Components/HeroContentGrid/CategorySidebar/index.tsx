import useCategories from "../../../Hook/useCategories";

const CategorySidebar = () => {
  const { categories, status, error } = useCategories();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <ul className="flex flex-col gap-4 font-inter text-base ">
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
