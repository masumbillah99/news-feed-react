import { useState } from "react";
import { NewsContext } from "../context";
import { useNewsQuery } from "../hooks";

export default function ({ children }) {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { allNews, loading, error } = useNewsQuery(category, searchTerm);

  return (
    <NewsContext.Provider
      value={{
        allNews,
        loading,
        error,
        setCategory,
        setSearchTerm,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
