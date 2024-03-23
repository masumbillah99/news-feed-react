import { useContext } from "react";
import { NewsContext } from "./context";
import NewsBoard from "./components/news/NewsBoard";

export default function Page() {
  const { loading } = useContext(NewsContext);

  return (
    <main className="my-10 lg:my-14">
      {loading.state === true ? (
        <p className="text-3xl font-semibold">{loading.message}</p>
      ) : (
        <NewsBoard />
      )}
    </main>
  );
}
