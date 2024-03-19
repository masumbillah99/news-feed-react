import searchIcon from "../../assets/icons/search.svg";

export default function SearchBar() {
  return (
    <div className="flex items-center space-x-3 lg:space-x-8">
      <img src={searchIcon} alt="search" />
    </div>
  );
}
