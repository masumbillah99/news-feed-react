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
      // console.log(data);
      setAllNews(data.articles);
    } catch (error) {
      setError(error);
    } finally {
      setLoading({ ...loading, state: false, message: "" });
    }
  };

  useEffect(() => {
    fetchNewsData("general");
  }, []);

  return { allNews, error, loading, fetchNewsData };
};

export default useNewsQuery;
