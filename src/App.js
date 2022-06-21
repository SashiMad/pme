import Header from "./images/Header.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <img src={Header} className="header img-fluid" alt="logo" />
        </h1>
      </header>
    </div>
  );
}

export default App;
