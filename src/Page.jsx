import { useContext } from "react";
import { NewsContext } from "./context";
import NewsBoard from "./components/news/NewsBoard";

export default function Page() {
  const { loading, error } = useContext(NewsContext);

  return (
    <main className="my-10 lg:my-14">
      {loading.state === true && (
        <div className={`my-10`}>
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        </div>
      )}

      {error && (
        <div className="text-center mx-auto">
          <p className="text-3xl font-semibold text-center text-white bg-red-500 p-5 lg:w-[500px] mx-auto">
            {error.message}
          </p>
        </div>
      )}

      <NewsBoard />
    </main>
  );
}
