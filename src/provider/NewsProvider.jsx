import { NewsContext } from "../context";
import { useNewsQuery } from "../hooks";

export default function ({ children }) {
  const { allNews, loading, error, fetchNewsData } = useNewsQuery();

  return (
    <NewsContext.Provider value={{ allNews, loading, error, fetchNewsData }}>
      {children}
    </NewsContext.Provider>
  );
}
