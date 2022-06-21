import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <img src={logo} className="App-logo" alt="logo" />
          <button type="button" class="btn btn-primary">
            Primary
          </button>
        </h1>
      </header>
    </div>
  );
}

export default App;
