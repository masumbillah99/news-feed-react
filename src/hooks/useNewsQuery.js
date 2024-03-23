import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context";

const useNewsQuery = (category, searchTerm) => {
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState(null);
  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    setError("");

    setLoading({
      ...loading,
      state: true,
      message: "Fetching news data...! please wait...",
    });

    let url = `${import.meta.env.VITE_LOCAL_SERVER_URL}${
      !searchValue ? "/top-headlines" : ""
    }`;

    if (searchTerm || searchValue) {
      url += `/search?q=${searchTerm || searchValue}`;
    }

    if (category && !searchValue && !searchTerm) {
      url += `?category=${category}`;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          const errorMessage = `Failed to fetch news data: ${response.status}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();
        // console.log(data);
        setAllNews(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading({ ...loading, state: false, message: "" });
      }
    };

    fetchData();
  }, [searchValue, category, searchTerm]);

  return { allNews, error, loading };
};

export default useNewsQuery;
