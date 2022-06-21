import "./App.css";
import UserIcon from "./UserIcon";
import Header from "./images/Header.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <img src={Header} className="header img-fluid" alt="logo" />
        </h1>
        <h2>
          <UserIcon />
        </h2>
      </header>
    </div>
  );
}

export default App;
