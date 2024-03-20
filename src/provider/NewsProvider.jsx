import { NewsContext } from "../context";
import { useNewsQuery } from "../hooks";

export default function ({ children }) {
  const { allNews, loading, error } = useNewsQuery();

  return (
    <NewsContext.Provider value={{ allNews, loading, error }}>
      {children}
    </NewsContext.Provider>
  );
}
