import React, { Fragment, useState } from "react";
import "../Style/Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Fragment>
      <div className="container-fluid navbar">
        <div className="container h-sm-100">
          <div className="d-flex w-100 justify-content-md-center justify-content-sm-between align-items-center nav-bar-inner">
            <div className="logo col-md-2 col-sm-6">
              <img src={logo} alt="logo" />
            </div>
            <div className="col-md-10  d-flex align-items-center  col-sm-6 h-sm-100">
          
              <nav className="w-100">
              <div className={`mobile-menu ${mobileMenuOpen?'open':''}`} onClick={toggleMobileMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              
                <ul className={`nav-list mt-0 mb-0  ${mobileMenuOpen?'open':''}`}>
                  <li className="list-items">
                    <Link to="/" className="list-link">
                      Home
                    </Link>
                  </li>
                  <li className="list-items">
                    <Link to="/" className="list-link">
                      About Us
                    </Link>
                  </li>
                  <li className="list-items">
                    <Link to="/" className="list-link">
                      Services
                    </Link>
                  </li>
                  <li className="list-items">
                    <Link to="/" className="list-link">
                      Portfolio
                    </Link>
                  </li>
                  <li className="list-items">
                    <Link to="/" className="list-link">
                      Blogs
                    </Link>
                  </li>
                  <li className="list-items">
                    <Link to="/" className="list-link">
                      Career
                    </Link>
                  </li>
                  <li className="list-items">
                    <Link to="/" className="list-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
