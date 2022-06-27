import React from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EmailButtonPopup from "./EmailButtonPopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faEnvelope,
  faLock,
  faAt,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import "./Accordion.css";
import { useWindowSize } from "./useWindowSize";

export default function AccordionDropdown() {
  const size = useWindowSize();

  return (
    <div className="accordion">
      <Accordion
        flush
        style={{
          width: size.width > 580 ? "65%" : "100%",
          display: "block",
          margin: "0 auto",
          
        }}
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <FontAwesomeIcon
              style={{
                color: "#007AAD",
                padding: "0px 10px",
              }}
              icon={faEnvelope}
            ></FontAwesomeIcon>
            E-Mail-Benachrichtigungen verwalten
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <FontAwesomeIcon
              style={{
                color: "#007AAD",
                padding: "0px 10px",
              }}
              icon={faAt}
            ></FontAwesomeIcon>
            E-Mail-Adresse ändern
          </Accordion.Header>
          <Accordion.Body>
            <div>
              {" "}
              <p>
                Du hast eine neue E-Mail-Adresse? Hier kannst du jederzeit deine
                E-Mail-Adresse ändern.
              </p>{" "}
            </div>
            <div>
              {" "}
              <p>
                Deine aktuelle E-Mail-Adresse:{" "}
                <strong>devet@familienservice.de</strong>{" "}
              </p>
            </div>
            <EmailButtonPopup />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <FontAwesomeIcon
              style={{
                color: "#007AAD",
                padding: "0px 10px",
              }}
              icon={faLock}
            ></FontAwesomeIcon>
            Passwort ändern
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <FontAwesomeIcon
              style={{
                color: "#007AAD",
                padding: "0px 10px",
              }}
              icon={faTableList}
            ></FontAwesomeIcon>
            Onlinedarstellung verwalten
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <FontAwesomeIcon
              style={{
                color: "#007AAD",
                padding: "0px 10px",
              }}
              icon={faCircleXmark}
            ></FontAwesomeIcon>{" "}
            Benutzerkonto löschen
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
