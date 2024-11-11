import type { SubCategory } from "../../../../types/Category";
const SubCategory = ({ subCategory }: SubCategory) => {
  return (
    <ul className="pl-6 mt-2 space-y-1">
      {subCategory.map((item, index: number) => (
        <li key={index}>
          <h1>{item.title}</h1>
        </li>
      ))}
    </ul>
  );
};

export default SubCategory;
