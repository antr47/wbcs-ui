import React, { Component } from "react";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // if we are using arrow function binding is not required
    //  this.onImageChange = this.onImageChange.bind(this);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h5
                className="d-inline-block text-primary text-uppercase border-bottom border-5"
              >
                Welcome To Medinova
              </h5>
              <h1 className="display-1 text-white mb-md-4">
                Best Healthcare Solution For You
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Hero;
