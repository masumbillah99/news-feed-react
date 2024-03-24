import { useState } from "react";
import { NewsContext } from "../context";
import { useNewsQuery } from "../hooks";

export default function ({ children }) {
  const [category, setCategory] = useState("");
  const { allNews, loading, error } = useNewsQuery(category);

  return (
    <NewsContext.Provider
      value={{
        allNews,
        loading,
        error,
        setCategory,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
