import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="footer-wrap">
        <div className="container-fluid bg-dark text-light mt-5 py-5">
          <div className="container py-5">
            <div className="row g-5 d-flex justify-content-between">
              <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                  Get In Touch
                </h4>

                <p className="mb-2">
                  <i className="fa fa-map-marker-alt text-primary me-3"></i>140
                  Le Trong Tan, Tay Thanh, Tan Phu, HCMC
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope text-primary me-3"></i>
                  infor@hufi.edu.vn
                </p>
                <p className="mb-0">
                  <i className="fa fa-phone-alt text-primary me-3"></i>0283 8163
                  318
                </p>
              </div>

              <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                  Popular Links
                </h4>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-light mb-2" to="/">
                    <i className="fa fa-angle-right me-2"></i>Home
                  </Link>
                  <Link className="text-light mb-2" to="/about">
                    <i className="fa fa-angle-right me-2"></i>About Us
                  </Link>
                  <Link className="text-light" to="/contact">
                    <i className="fa fa-angle-right me-2"></i>Contact Us
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                  Newsletter
                </h4>
                <form action="">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control p-3 border-0"
                      placeholder="Your Email Address"
                    />
                    <button className="btn btn-primary">Sign Up</button>
                  </div>
                </form>
                <h6 className="text-primary text-uppercase mt-4 mb-3">
                  Follow Us
                </h6>
                <div className="d-flex">
                  <Link
                    className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                    to=""
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link
                    className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                    to=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>

                  <Link
                    className="btn btn-lg btn-primary btn-lg-square rounded-circle"
                    to=""
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-6 text-center text-md-start"></div>
              <div className="col-md-6 text-center text-md-end">
                <p className="mb-0">
                  Designed by{" "}
                  <Link className="text-primary" to="">
                    MEDINOVA Group
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
