import "./App.css";
import UserIcon from "./UserIcon";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCircleUser);

function App() {
  return (
    <div>
      <header className="background-image"></header>
      <UserIcon />
    </div>
  );
}

export default App;
