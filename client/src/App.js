import Image from "./img/tfc_black.jpg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-pane">
          <img src={Image} className="site-logo" alt="logo" />
          <p>
            Hello TFC!
          </p>
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn how to not click on links witho-
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
