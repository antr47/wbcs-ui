import React, { Component } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // if we are using arrow function binding is not required
    //  this.onImageChange = this.onImageChange.bind(this);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Topbar />
        <Navbar />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
export default DefaultLayout;
