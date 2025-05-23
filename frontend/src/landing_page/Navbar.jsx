import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/AuthContext.jsx";
function Navbar() {
  const { isLogged } = useContext(AuthContext);
  return (
    <>
      <nav
        style={{ backgroundColor: "white" }}
        className="navbar navbar-expand-lg border-bottom "
      >
        <div className="container p-2">
          <Link to="/" style={{ width: "55%" }}>
            {" "}
            <img style={{ width: "45%" }} src="media/images/logo.svg" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {}{" "}
                {!isLogged && (
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/login">
                      Login
                    </Link>
                  </li>
                )}
                {isLogged && (
                  <li className="nav-item">
                    <a className="nav-link" href="http://localhost:5173/">
                      Dashboard
                    </a>
                  </li>
                )}
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/support">
                    Support
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
