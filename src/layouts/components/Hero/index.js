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
      <div class="container-fluid bg-primary py-5 mb-5 hero-header">
        <div class="container py-5">
          <div class="row justify-content-start">
            <div class="col-lg-8 text-center text-lg-start">
              <h5
                class="d-inline-block text-primary text-uppercase border-bottom border-5"
                // style="border-color: rgba(256, 256, 256, .3) !important;"
              >
                Welcome To Medinova
              </h5>
              <h1 class="display-1 text-white mb-md-4">
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
