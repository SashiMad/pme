import React from "react";
import { Button, Popover, PopoverBody } from "reactstrap";
import PopupContent from "./PopupContent";

export default class EmailButtonPopup extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" type="button">
          <strong>E-MAIL-ADRESSE ÄNDERN</strong>
        </Button>
        <Popover
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.toggle}
        >
          <PopoverBody>
            <div className="row">
              <div className="col">
                <PopupContent />
              </div>
            </div>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}
