import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // if we are using arrow function binding is not required
    //  this.onImageChange = this.onImageChange.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-fluid py-5 mt-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded fit-cover"
                  src="assets/img/about.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mb-4">
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                  <FormattedMessage id="about.title" />
                </h5>
                <h1 className="display-4">
                  <FormattedMessage id="about.content" />
                </h1>
              </div>

              <div className="row g-3 pt-3">
                <div className="col-sm-3 col-6">
                  <div className="bg-light text-center rounded-circle py-4">
                    <i className="fa fa-3x fa-user-md text-primary mb-3"></i>
                    <h6 className="mb-0">
                      <FormattedMessage id="about.doctors" />

                      <small className="d-block text-primary">
                        {" "}
                        <FormattedMessage id="about.qualified" />
                      </small>
                    </h6>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="bg-light text-center rounded-circle py-4">
                    <i className="fa fa-3x fa-procedures text-primary mb-3"></i>
                    <h6 className="mb-0">
                      <FormattedMessage id="about.services" />

                      <small className="d-block text-primary">
                        <FormattedMessage id="about.emergency" />
                      </small>
                    </h6>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="bg-light text-center rounded-circle py-4">
                    <i className="fa fa-3x fa-microscope text-primary mb-3"></i>
                    <h6 className="mb-0">
                      <FormattedMessage id="about.testing" />

                      <small className="d-block text-primary">
                        <FormattedMessage id="about.accurate" />
                      </small>
                    </h6>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="bg-light text-center rounded-circle py-4">
                    <i className="fa fa-3x fa-ambulance text-primary mb-3"></i>
                    <h6 className="mb-0">
                      <FormattedMessage id="about.ambulance" />
                      <small className="d-block text-primary">
                        {" "}
                        <FormattedMessage id="about.free" />
                      </small>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(About);
