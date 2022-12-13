import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
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
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <Link to={"/"} exact="true" className="navbar-brand">
              <h1 className="m-0 text-uppercase text-primary">
                <i className="fa fa-clinic-medical me-2"></i>Medinova
              </h1>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <NavLink exact="true" to="/" className="nav-item nav-link">
                  Home
                </NavLink>
                <NavLink exact="true" to="/about" className="nav-item nav-link">
                  About
                </NavLink>

                <NavLink
                  exact="true"
                  to="/contact"
                  className="nav-item nav-link"
                >
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
