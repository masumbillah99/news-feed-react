import { useContext } from "react";
import { NewsContext } from "../../context";
import NewsCard from "./NewsCard";

export default function NewsBoard() {
  const { allNews } = useContext(NewsContext);

  // remove no 1 data list from allNews
  const newNewsArray = [...allNews.slice(0, 1), ...allNews.slice(2)];
  // console.log(newData);

  // Split the news array into two separate arrays for each column
  const column1 = allNews.slice(0, Math.ceil(allNews.length / 2));
  const column1Data = newNewsArray.slice(0, Math.ceil(newNewsArray.length / 2));
  const column2 = allNews.slice(Math.ceil(allNews.length / 2));

  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      {/* Left column */}
      <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
        <>
          {/* First row with larger card */}
          {column1.slice(1, 2).map((news) => (
            <div
              key={news.title}
              className="col-span-12 grid grid-cols-12 gap-4"
            >
              <NewsCard news={news} />
            </div>
          ))}
        </>

        {/* Remaining smaller cards */}
        {/* <div className="col-span-12 grid grid-cols-12 gap-4"> */}
        <>
          {column1Data.map((news) => (
            <div
              key={news.title}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <NewsCard news={news} />
            </div>
          ))}
        </>
        {/* </div> */}
      </div>

      {/* Right column */}
      <div className="col-span-12 self-start xl:col-span-4">
        <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
          {column2.map((news) => (
            <div key={news.title} className="col-span-12 mb-6 md:col-span-8">
              <NewsCard news={news} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
