import React from "react";
import "./UserIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faSquarePen } from "@fortawesome/free-solid-svg-icons";

export default function UserIcon() {
  return (
    <div>
      <FontAwesomeIcon
        icon={faCircleUser}
        className="user-icon"
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        icon={faSquarePen}
        className="pen-icon"
      ></FontAwesomeIcon>
      <h3>
        <strong>devel oper</strong>
      </h3>
    </div>
  );
}
