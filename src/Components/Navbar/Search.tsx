import { useState } from "react";
import SearchIcon from "../../assets/Icons/SearchIcon";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: { target: { value: string } }) => {
    const searchItem = e.target.value;
    setSearchTerm(searchItem);
  };
  return (
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
  );
};

export default Search;
