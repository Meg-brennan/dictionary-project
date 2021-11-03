import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center mt-4">
          <small>
            <a
              href="https://github.com/Meg-brennan/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Coded
            </a>{" "}
            by Megan Brennan and{" "}
            <a
              href="https://adoring-dubinsky-7cea47.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
