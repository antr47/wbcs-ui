import React, { Component } from "react";
import Services from "../../layouts/components/Services";
import Appointment from "../../layouts/components/Appointment";
class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <>
        <Services />
      </>
    );
  }
}
export default Service;
