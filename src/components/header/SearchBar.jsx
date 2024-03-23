import { useContext, useState } from "react";
import searchIcon from "../../assets/icons/search.svg";
import { SearchContext } from "../../context";
import useDebounce from "../../hooks/useDebounce";

export default function SearchBar() {
  const [show, setShow] = useState(false);
  const { setSearchValue } = useContext(SearchContext);

  const doSearch = useDebounce(async (value) => {
    setSearchValue(value);
  }, 500);

  const handleSearchChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    doSearch(value);
  };

  return (
    <form action="#">
      <div
        className={`flex items-center space-x-2 py-2 px-3 group transition-all relative`}
      >
        <input
          className={`${
            show ? "block absolute right-10 w-60" : "hidden"
          } text-xs md:text-base px-3 py-1 bg-[#EBEDEF] border-[#E3E5E8] border-2 rounded-lg outline-none`}
          type="search"
          placeholder="Search Location"
          onChange={(e) => handleSearchChange(e)}
          required
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => setShow(!show)}
          className="cursor-pointer"
        />
      </div>
    </form>
  );
}
