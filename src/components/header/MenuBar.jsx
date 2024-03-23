import { useContext } from "react";
import { NewsContext } from "../../context";

export default function MenuBar() {
  const { setCategory } = useContext(NewsContext);

  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li>
          <a onClick={() => setCategory("general")} href="#">
            General
          </a>
        </li>
        <li>
          <a onClick={() => setCategory("business")} href="#">
            Business
          </a>
        </li>
        <li>
          <a onClick={() => setCategory("entertainment")} href="#">
            Entertainment
          </a>
        </li>
        <li>
          <a onClick={() => setCategory("health")} href="#">
            Health
          </a>
        </li>
        <li>
          <a onClick={() => setCategory("science")} href="#">
            Science
          </a>
        </li>
        <li>
          <a onClick={() => setCategory("sports")} href="#">
            Sports
          </a>
        </li>
        <li>
          <a onClick={() => setCategory("technology")} href="#">
            Technology
          </a>
        </li>
      </ul>
    </div>
  );
}
