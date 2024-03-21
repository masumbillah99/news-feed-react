import { getFormattedDate } from "../../utils/date-util";

export default function NewsCard({ news }) {
  const { title, description, publishedAt, urlToImage } = news;

  return (
    <>
      {urlToImage !== null ? (
        <>
          <div className="col-span-12 lg:col-span-4 my-5">
            {title !== null && (
              <a href="#">
                <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                  {title}
                </h3>
              </a>
            )}
            {description !== null && (
              <p className="text-base text-[#5C5955]">{description}</p>
            )}
            {publishedAt !== null && (
              <p className="mt-5 text-base text-[#5C5955]">
                {getFormattedDate(publishedAt, publishedAt, "date", false)}
              </p>
            )}
          </div>
          <div className="col-span-12 lg:col-span-8">
            {urlToImage !== null && (
              <img className="w-full" src={urlToImage} alt="thumb" />
            )}
          </div>{" "}
        </>
      ) : (
        <div className="col-span-12 md:col-span-4 my-5">
          <a href="#">
            <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
              {title}
            </h3>
          </a>
          <p className="text-base text-[#5C5955]">{description}</p>
          <p className="mt-5 text-base text-[#5C5955]">
            {getFormattedDate(publishedAt, publishedAt, "date", false)}
          </p>
        </div>
      )}
    </>
  );
}
