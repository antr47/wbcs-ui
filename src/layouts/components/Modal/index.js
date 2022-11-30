import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.props.isShowModal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggle}>
            Detection Message
          </ModalHeader>
          <ModalBody>
            {Object.entries(this.props.result).length === 1 ? (
              <p>
                We have detected {Object.entries(this.props.result).length} WBC
                from your image.
              </p>
            ) : (
              <p>
                We have detected {Object.entries(this.props.result).length} WBCs
                from your image.
              </p>
            )}
            {Object.entries(this.props.result).length > 0 &&
              this.props.result.map((item, index) => {
                return (
                  <div className="mb-3">
                    <span>WBC {++index}:</span>
                    <div key={index}>Name: {item.label}</div>
                    <div key={index}>Score: {item.score * 100}%</div>
                  </div>
                );
              })}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggle}>
              Ok
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
