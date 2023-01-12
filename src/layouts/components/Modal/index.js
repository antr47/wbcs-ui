import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
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
        <Modal
          isOpen={this.props.isShowModal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggle}>
            <FormattedMessage id="message.detection-message" />
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
const mapStateToProps = (state) => {
  return {
    language: state.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalExample);
