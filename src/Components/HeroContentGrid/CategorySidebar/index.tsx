import { useState } from "react";
import data from "../../../../public/data.json";
import SubCategory from "./SubCategory";

const CategorySidebar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="w-64 h-full p-4">
      <ul className="space-y-2">
        {data.categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => toggleDropdown(category.id)}
              className="flex items-center justify-between w-full text-left px-4 py-2"
            >
              {category.title}
              {category.subcategory && category.subcategory.length > 0 && (
                <span>{openDropdown === category.id ? "←" : "→"}</span>
              )}
            </button>
            {openDropdown === category.id && (
              <SubCategory
                id={category.id}
                title={category.title}
                subCategory={category.subcategory || []}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
