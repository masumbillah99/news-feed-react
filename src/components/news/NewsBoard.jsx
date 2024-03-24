import { useContext } from "react";
import { NewsContext } from "../../context";
import NewsCard from "./NewsCard";

export default function NewsBoard() {
  const { allNews } = useContext(NewsContext);
  const { articles, result } = allNews;

  // remove no 1 data list from allNews
  const removeSecondIndex = articles?.slice(0, 1).concat(articles?.slice(2));

  // Split the news array into two separate arrays for each column
  const column1 = articles?.slice(0, Math.ceil(articles?.length / 2));
  const column2 = articles?.slice(Math.ceil(articles?.length / 2));
  const dataWithoutSecondIndex = removeSecondIndex?.slice(
    0,
    Math.ceil(removeSecondIndex?.length / 2)
  );

  return (
    <div className={`container mx-auto grid grid-cols-12 gap-8`}>
      {/* Left column */}
      <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
        {/* First row with larger card */}
        {column1?.slice(1, 2).map((news) => (
          <div key={news.title} className="col-span-12 grid grid-cols-12 gap-4">
            <NewsCard news={news} />
          </div>
        ))}

        {/* smaller cards */}
        {dataWithoutSecondIndex?.map((news) => (
          <div
            key={news.title}
            className="col-span-12 md:col-span-6 lg:col-span-4"
          >
            <NewsCard news={news} />
          </div>
        ))}
      </div>

      {/* Right column */}
      <div className="col-span-12 self-start xl:col-span-4">
        <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
          {column2?.map((news) => (
            <div key={news.title} className="col-span-12 mb-6 md:col-span-8">
              <NewsCard news={news} />
            </div>
          ))}
        </div>
      </div>

      {/* if search result found  */}
      {result && result?.length > 0 ? (
        <div className="col-span-12 grid grid-cols-12 gap-6 xl:col-span-8">
          {result.map((news) => (
            <div
              key={news.title}
              className="col-span-12 grid grid-cols-12 gap-4"
            >
              <NewsCard news={news} />
            </div>
          ))}
        </div>
      ) : (
        <div className="pb-20">
          <p className="text-3xl font-semibold text-center text-white bg-red-500 p-5 lg:w-[500px] mx-auto">
            No data found
          </p>
        </div>
      )}
    </div>
  );
}
