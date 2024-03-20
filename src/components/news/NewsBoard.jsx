import { useContext } from "react";
import { NewsContext } from "../../context";
import NewsCard from "./NewsCard";

export default function NewsBoard() {
  const { allNews } = useContext(NewsContext);

  const filterdNews = allNews.filter((news) => news.urlToImage !== null);

  // Split the news array into two separate arrays for each column
  const column1 = filterdNews.slice(0, Math.ceil(allNews.length / 2));
  const column2 = filterdNews.slice(Math.ceil(allNews.length / 2));

  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
        {column1.map((news, index) => (
          <div
            key={news.publishedAt}
            className={`col-span-12 grid grid-cols-12 gap-4 mb-5`}
            // ${
            //   index === 0
            //     ? "grid grid-cols-1 gap-4"
            //     : "md:col-span-6 lg:col-span-4"
            // }
          >
            <NewsCard news={news} />
            <hr />
          </div>
        ))}
      </div>

      <div className="col-span-12 self-start xl:col-span-4">
        <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
          {column2.map((news) => (
            <div
              key={news.publishedAt}
              className={"col-span-12 mb-5 md:col-span-8"}
            >
              <NewsCard news={news} />
              <hr />
            </div>
          ))}
        </div>
      </div>
      {/* {allNews.length > 0 &&
        allNews.map((news) => <NewsCard key={news.publishedAt} news={news} />)} */}
    </div>
  );
}

// col-span-12 mb-6 md:col-span-8
// col-span-12 md:col-span-6 lg:col-span-4
