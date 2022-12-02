import React, { Component } from "react";
import {Link} from "react-router-dom";
class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div className="container-fluid py-5 mt-5">
        <div className="container">
          <div className="text-center mx-auto mb-5">
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
              Services
            </h5>
            <h1 className="display-4">Excellent Medical Services</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <i className="fa fa-2x fa-user-md text-white"></i>
                </div>
                <h4 className="mb-3">Emergency Care</h4>
                <p className="m-0">
                  Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                  rebum stet, justo elitr dolor amet sit
                </p>
                <Link className="btn btn-lg btn-primary rounded-pill" href="">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <i className="fa fa-2x fa-pills text-white"></i>
                </div>
                <h4 className="mb-3">Medicine & Pharmacy</h4>
                <p className="m-0">
                  Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                  rebum stet, justo elitr dolor amet sit
                </p>
                <Link className="btn btn-lg btn-primary rounded-pill" href="">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <i className="fa fa-2x fa-microscope text-white"></i>
                </div>
                <h4 className="mb-3">Blood Testing</h4>
                <p className="m-0">
                  Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                  rebum stet, justo elitr dolor amet sit
                </p>
                <Link className="btn btn-lg btn-primary rounded-pill" href="">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Service;
