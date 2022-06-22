import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function DropdownMenu() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className="envelope-icon"
        ></FontAwesomeIcon>
        E-Mail-Benachrichtigungen verwalten
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="/">
          Action
        </a>
      </div>
    </div>
  );
}
