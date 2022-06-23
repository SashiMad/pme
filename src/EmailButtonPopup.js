import React from "react";
import { Button, Modal } from "reactstrap";
import PopupContent from "./PopupContent";

export default class EmailButtonPopup extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div>
        <Button>
          <strong>E-MAIL-ADRESSE ÄNDERN</strong>
        </Button>
        <Modal show={this.state.show}>
          <Modal.Header>Modal Header</Modal.Header>
          <Modal.Body>Modal Body</Modal.Body>
          <PopupContent />
          <Modal.Footer>Footer</Modal.Footer>
        </Modal>
      </div>
    );
  }
}
