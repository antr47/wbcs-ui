import React, { Component } from "react";
class Contact extends Component {
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
      <div className="container-fluid pt-5 mt-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "500px" }}
          >
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
              Any Questions?
            </h5>
            <h1 className="display-4 mt-5">Please Feel Free To Contact Us</h1>
          </div>
          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div
                className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                style={{ height: "200px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                  style={{
                    width: "100px",
                    height: "70px",
                    transform: "rotate(-15deg)",
                  }}
                >
                  <i
                    className="fa fa-2x fa-location-arrow text-white"
                    style={{ transform: "rotate(15deg)" }}
                  ></i>
                </div>
                <h6 className="mb-0">
                  140 Le Trong Tan, Tay Thanh, Tan Phu, HCMC
                </h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                style={{ height: "200px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                  style={{
                    width: "100px",
                    height: "70px",
                    transform: "rotate(-15deg)",
                  }}
                >
                  <i
                    className="fa fa-2x fa-phone text-white"
                    style={{ transform: "rotate(15deg)" }}
                  ></i>
                </div>
                <h6 className="mb-0">0283 8163 318</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                style={{ height: "200px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                  style={{
                    width: "100px",
                    height: "70px",
                    transform: "rotate(-15deg)",
                  }}
                >
                  <i
                    className="fa fa-2x fa-envelope-open text-white"
                    style={{ transform: "rotate(15deg)" }}
                  ></i>
                </div>
                <h6 className="mb-0">infor@hufi.edu.vn</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
