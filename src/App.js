import "./App.css";
import DropdownMenu from "./DropdownMenu";

import UserIcon from "./UserIcon";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "bootstrap";

library.add(fab, faCircleUser);

function App() {
  return (
    <div>
      <header className="background-image"></header>
      <UserIcon />
      <DropdownMenu />
    </div>
  );
}

export default App;
