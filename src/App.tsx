import "./styles.css";
import Header from "./components/Header.js";
import UrlForm from "./components/UrlForm.js";
import Results from "./components/Results.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <UrlForm />
      <Results />
    </div>
  );
}
