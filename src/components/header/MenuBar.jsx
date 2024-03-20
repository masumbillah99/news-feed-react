import { useContext } from "react";
import { NewsContext } from "../../context";

export default function MenuBar() {
  const { fetchNewsData } = useContext(NewsContext);

  const handleMenuItemClick = async (category) => {
    await fetchNewsData(category);
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
