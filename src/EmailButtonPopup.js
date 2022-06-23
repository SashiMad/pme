import React, { useState, useRef } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import PopupContent from "./PopupContent";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EmailButtonPopup() {
  const inputRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggle = () => setModalIsOpen(!modalIsOpen);
  const handleOpen = () => inputRef.current.focus();

  return (
    <div className="EmailButtonPopup">
      <div>
        <Button onClick={() => setModalIsOpen(true)}>Save</Button>
        <Modal isOpen={modalIsOpen} toggle={toggle} onOpened={handleOpen}>
          <ModalHeader toggle={toggle}>Save</ModalHeader>
          <ModalBody>
            Name:
            <Input innerRef={inputRef} />
          </ModalBody>
          <ModalFooter>
            <Button>Save</Button>
            <Button onClick={toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
