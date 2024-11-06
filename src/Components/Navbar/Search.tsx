import SearchIcon from "../../assets/Icons/SearchIcon";

const Search = () => {
  return (
    <div className="bg-gray-200 p-2 rounded-lg xl:flex gap-4 hidden">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="bg-inherit outline-none text-[12px] text-black"
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
