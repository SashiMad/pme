import React from "react";
import "./UserIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const userIcon = new URL("./images/UserIcon1.png", import.meta.url);

export default function UserIcon() {
  return (
    <div>
      <img src={userIcon} alt="userIcon" />
    </div>
  );
}
