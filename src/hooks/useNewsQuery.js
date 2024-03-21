import { useEffect, useState } from "react";

const useNewsQuery = () => {
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState(null);

  // data fetching function
  const fetchNewsData = async (category) => {
    setLoading({ state: true, message: "Fetching data..." });
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching news data...",
      });

      const response = await fetch(
        `http://localhost:8000/v2/top-headlines?category=${category}`
      );

      if (!response.ok) {
        const errorMessage = `Failed to fetch news data: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setAllNews(data.articles);
    } catch (error) {
      setError(error);
    } finally {
      setLoading({ ...loading, state: false, message: "" });
    }
  };

  // Search / filter news articles based on title
  const searchNewsData = async (query) => {
    setLoading({ ...loading, state: true, message: "Searching data..." });

    try {
      const response = await fetch(
        `http://localhost:8000/v2/search?q=${query}`
      );

      if (!response.ok) {
        const errorMessage = `Failed to fetch search results: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      // console.log(data);
      setAllNews(data.result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading({ ...loading, state: false, message: "" });
    }
  };

  useEffect(() => {
    fetchNewsData("general");
  }, []);

  return { allNews, error, loading, fetchNewsData, searchNewsData };
};

export default useNewsQuery;
