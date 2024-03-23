import { useState } from "react";
import { SearchContext } from "../context";

export default function SearchProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
}
