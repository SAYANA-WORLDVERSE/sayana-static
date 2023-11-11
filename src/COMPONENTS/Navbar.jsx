import React, { Fragment, useState } from "react";
import "../Style/Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

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
                <div
                  className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}
                  onClick={toggleMobileMenu}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <ul
                  className={`nav-list mt-0 mb-0  ${
                    mobileMenuOpen ? "open" : ""
                  }`}
                >
                  <li className="list-items">
                    <Link
                      to="/"
                      className="list-link"
                      onClick={toggleMobileMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="list-items">
                    <Link
                      to="/about"
                      className="list-link"
                      onClick={toggleMobileMenu}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="list-items">
                    <Link
                      to="/"
                      className="list-link"
                   
                    >
                      Services <span><BsChevronDown/></span>
                    </Link>

                    <ul class="sub-menu p-0">
                      <li class="menu-item">
                        <Link to="/webdesign" onClick={toggleMobileMenu}>Web Design & Development</Link>
                      </li>
                      <li class="menu-item">
                        <Link to="/applicationdevelopment" onClick={toggleMobileMenu}>Application Development</Link>
                      </li>
                      <li class="menu-item">
                        <Link to="/productdevelopment" onClick={toggleMobileMenu}>Product Development</Link>
                      </li>
                      <li class="menu-item">
                        <Link to="/Digitalmarketing" onClick={toggleMobileMenu}>Digital Marketing</Link>
                      </li>
                      <li class="menu-item">
                        <Link to="/graphicsdesign" onClick={toggleMobileMenu}>Graphics Design</Link>
                      </li>
                     
                    </ul>
                  </li>
                  <li className="list-items">
                    <Link
                      to="/portfolio"
                      className="list-link"
                      onClick={toggleMobileMenu}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="list-items">
                    <Link
                      to="/blog"
                      className="list-link"
                      onClick={toggleMobileMenu}
                    >
                      Blogs
                    </Link>
                  </li>
                  <li className="list-items">
                    <Link
                      to="/career"
                      className="list-link"
                      onClick={toggleMobileMenu}
                    >
                      Career
                    </Link>
                  </li>
                  <li className="list-items">
                    <Link
                      to="/contact"
                      className="list-link"
                      onClick={toggleMobileMenu}
                    >
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
