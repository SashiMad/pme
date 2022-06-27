import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import EmailForm from "./EmailForm";
import "./EmailForm.css";
import { useWindowSize } from "./useWindowSize";

export default function EmailButtonPopup() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggle = () => setModalIsOpen(!modalIsOpen);

  const size = useWindowSize();

  return (
    <div className="EmailButtonPopup">
      <div>
        <Button
          style={{
            background: "#AD325D",
            border: "none",
            display: "block",
            margin: "0 auto",
            padding: "10px 50px",
          }}
          onClick={() => setModalIsOpen(true)}
          className="email-button"
        >
          <strong>E-MAIL-ADRESSE ÄNDERN</strong>
        </Button>

        <Modal
          isOpen={modalIsOpen}
          toggle={toggle}
          style={{
            width: size.width > 580 ? "65%" : "80%",
          }}
        >
          <ModalHeader toggle={toggle}>
            <h2>E-Mail-Adresse ändern</h2>
          </ModalHeader>
          <ModalBody>
            <p>
              Bitte gib deine neue E-Mail-Adresse zweimal an. Deine alte
              E-Mail-Adresse wird damit für das Portal ungültig. Bei Angeboten
              oder Fragen werden wir dich künftig über die neue E-Mail-Adresse
              kontaktieren. Um wieder alle Funktionen des Portals nutzen zu
              können, musst du deine neue E-Mail-Adresse bestätigen.
            </p>
            <EmailForm />
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}
