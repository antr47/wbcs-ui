import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Home from "../../../pages/Home";
import Contact from "../../../pages/Contact";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // if we are using arrow function binding is not required
    //  this.onImageChange = this.onImageChange.bind(this);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container-fluid sticky-top bg-white shadow-sm position-fixed">
        <div class="container">
          <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <Link to={"/"} class="navbar-brand">
              <h1 class="m-0 text-uppercase text-primary">
                <i class="fa fa-clinic-medical me-2"></i>Medinova
              </h1>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav ms-auto py-0">
                <NavLink exact to="/" className="nav-item nav-link">
                  Home
                </NavLink>
                <NavLink exact to="/about" className="nav-item nav-link">
                  About
                </NavLink>

                <NavLink exact to="/services" className="nav-item nav-link">
                  Services
                </NavLink>
                <NavLink exact to="/contact" className="nav-item nav-link">
                  Contact
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default Navbar;
