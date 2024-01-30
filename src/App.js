import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFotter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header>
        <MyNav subtitle="Il miglior ebooks del web" />
      </header>
      <main>
        <Welcome />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
