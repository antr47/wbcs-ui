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
      <div class="container-fluid py-5 mt-5">
        <div class="container">
          <div class="row gx-5">
            <div class="col-lg-5 mb-5 mb-lg-0">
              <div class="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded fit-cover"
                  src="assets/img/about.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="mb-4">
                <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">
                  <FormattedMessage id="about.title" />
                </h5>
                <h1 class="display-4">
                  <FormattedMessage id="about.content" />
                </h1>
              </div>

              <div class="row g-3 pt-3">
                <div class="col-sm-3 col-6">
                  <div class="bg-light text-center rounded-circle py-4">
                    <i class="fa fa-3x fa-user-md text-primary mb-3"></i>
                    <h6 class="mb-0">
                      <FormattedMessage id="about.doctors" />

                      <small class="d-block text-primary">
                        {" "}
                        <FormattedMessage id="about.qualified" />
                      </small>
                    </h6>
                  </div>
                </div>
                <div class="col-sm-3 col-6">
                  <div class="bg-light text-center rounded-circle py-4">
                    <i class="fa fa-3x fa-procedures text-primary mb-3"></i>
                    <h6 class="mb-0">
                      <FormattedMessage id="about.services" />

                      <small class="d-block text-primary">
                        <FormattedMessage id="about.emergency" />
                      </small>
                    </h6>
                  </div>
                </div>
                <div class="col-sm-3 col-6">
                  <div class="bg-light text-center rounded-circle py-4">
                    <i class="fa fa-3x fa-microscope text-primary mb-3"></i>
                    <h6 class="mb-0">
                      <FormattedMessage id="about.testing" />

                      <small class="d-block text-primary">
                        <FormattedMessage id="about.accurate" />
                      </small>
                    </h6>
                  </div>
                </div>
                <div class="col-sm-3 col-6">
                  <div class="bg-light text-center rounded-circle py-4">
                    <i class="fa fa-3x fa-ambulance text-primary mb-3"></i>
                    <h6 class="mb-0">
                      <FormattedMessage id="about.ambulance" />
                      <small class="d-block text-primary">
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
