import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { changeSystemLanguage } from "../../../store/actions/appActions";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // if we are using arrow function binding is not required
    //  this.onImageChange = this.onImageChange.bind(this);
  }

  componentDidMount() {}
  handleChangeLanguage = (language) => {
    this.props.changeAppLanguage(language);
  };
  render() {
    const { language } = this.props;
    return (
      <div className="container-fluid sticky-top bg-white shadow-sm position-fixed">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <Link to={"/"} exact="true" className="navbar-brand">
              <h1 className="m-0 text-uppercase text-primary">
                <i className="fa fa-clinic-medical me-2"></i>Medihufi
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
                  <FormattedMessage id="header.home" />
                </NavLink>
                <NavLink exact="true" to="/about" className="nav-item nav-link">
                  <FormattedMessage id="header.about" />
                </NavLink>

                <NavLink
                  exact="true"
                  to="/contact"
                  className="nav-item nav-link"
                >
                  <FormattedMessage id="header.contact" />
                </NavLink>
              </div>
              <div className="header-languages">
                <span
                  className={
                    language === "en"
                      ? "header-language lang-action"
                      : "header-language"
                  }
                  // className="header-language action"
                  onClick={() => this.handleChangeLanguage("en")}
                >
                  EN
                </span>
                <span
                  className={
                    language === "vi"
                      ? "header-language lang-action"
                      : "header-language"
                  }
                  onClick={() => this.handleChangeLanguage("vi")}
                >
                  VI
                </span>
              </div>
            </div>
          </nav>
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
  return {
    changeAppLanguage: (language) => dispatch(changeSystemLanguage(language)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
