import { useContext } from "react";
import { NewsContext, SearchContext } from "../../context";

export default function MenuBar() {
  const { setCategory } = useContext(NewsContext);
  const { setSearchValue } = useContext(SearchContext);

  const handleMenuItemClick = (cate) => {
    setSearchValue("");
    setCategory(cate);
  };

  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li>
          <a onClick={() => handleMenuItemClick("general")} href="#">
            General
          </a>
        </li>
        <li>
          <a onClick={() => handleMenuItemClick("business")} href="#">
            Business
          </a>
        </li>
        <li>
          <a onClick={() => handleMenuItemClick("entertainment")} href="#">
            Entertainment
          </a>
        </li>
        <li>
          <a onClick={() => handleMenuItemClick("health")} href="#">
            Health
          </a>
        </li>
        <li>
          <a onClick={() => handleMenuItemClick("science")} href="#">
            Science
          </a>
        </li>
        <li>
          <a onClick={() => handleMenuItemClick("sports")} href="#">
            Sports
          </a>
        </li>
        <li>
          <a onClick={() => handleMenuItemClick("technology")} href="#">
            Technology
          </a>
        </li>
      </ul>
    </div>
  );
}
