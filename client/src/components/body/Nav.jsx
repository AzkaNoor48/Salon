import React from "react";
import { Link, withRouter } from "react-router-dom";
function Nav() {
  return (
    <>
      <link rel="stylesheet" href="assets/css/scrolling-nav.css" />
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-white fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            Lavish<span>Looks</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="ti-menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/signup">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/payment">
                  Payment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default withRouter(Nav);
