import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Page from "./Page";
import { NewsProvider, SearchProvider } from "./provider";

function App() {
  return (
    <SearchProvider>
      <NewsProvider>
        <Header />
        <Page />
        <Footer />
      </NewsProvider>
    </SearchProvider>
  );
}

export default App;
