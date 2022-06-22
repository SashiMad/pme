import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faEnvelope,
  faLock,
  faAt,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";

export default function DropdownMenu() {
  return (
    <div className="DropdownMenu">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="envelope-icon"
              ></FontAwesomeIcon>
              E-Mail-Benachrichtigungen verwalten
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"></div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              {" "}
              <FontAwesomeIcon
                icon={faAt}
                className="at-icon"
              ></FontAwesomeIcon>
              E-Mail-Adresse ändern
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div>
                {" "}
                <p>
                  Du hast eine neue E-Mail-Adresse? Hier kannst du jederzeit
                  deine E-Mail-Adresse ändern.
                </p>{" "}
              </div>
              <div>
                {" "}
                <p>Deine aktuelle E-Mail-Adresse:</p>{" "}
                <strong>devet@familienservice.de</strong>
              </div>
              <button type="button" class="btn btn-primary btn-lg">
                <strong>E-MAIL-ADRESSE ÄNDERN</strong>
              </button>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {" "}
              <FontAwesomeIcon
                icon={faLock}
                className="lock-icon"
              ></FontAwesomeIcon>
              Passwort ändern
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"></div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              {" "}
              <FontAwesomeIcon
                icon={faTableList}
                className="list-icon"
              ></FontAwesomeIcon>
              Onlinedarstellung verwalten
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"></div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {" "}
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="xmark-icon"
              ></FontAwesomeIcon>{" "}
              Benutzerkonto löschen
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
