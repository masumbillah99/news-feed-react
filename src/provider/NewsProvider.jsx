import { NewsContext } from "../context";
import { useNewsQuery } from "../hooks";

export default function ({ children }) {
  const { allNews, loading, error, fetchNewsData, searchNewsData } =
    useNewsQuery();

  return (
    <NewsContext.Provider
      value={{ allNews, loading, error, fetchNewsData, searchNewsData }}
    >
      {children}
    </NewsContext.Provider>
  );
}
