import React from "react";
import "./UserIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function UserIcon() {
  return (
    <div>
      <FontAwesomeIcon
        icon={faCircleUser}
        className="user-icon"
      ></FontAwesomeIcon>
      <h3>devel oper</h3>
    </div>
  );
}
