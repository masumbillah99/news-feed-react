import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NewsBoard from "./components/news/NewsBoard";
import { NewsProvider } from "./provider";

function App() {
  return (
    <NewsProvider>
      <Header />

      <main className="my-10 lg:my-14">
        <NewsBoard />
      </main>

      <Footer />
    </NewsProvider>
  );
}

export default App;
