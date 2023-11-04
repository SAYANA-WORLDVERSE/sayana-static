import React, { Fragment } from "react";
import "../Style/Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
const Navbar = () => {
  return (
    <Fragment>
      <div className="container-fluid navbar">
        <div className="container">
          <div className="row w-100">
            <div className="logo col-md-2 col-sm-6">
              <img src={logo} alt="logo" />
            </div>
            <div className="col-md-8 ">
              <nav>
                <ul className="nav-list mt-0 mb-0">
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
            <div className="col-md-2 col-sm-6 d-flex align-items-center justify-content-center">
              <ul className=" mt-0 mb-0 social-nav">
                <li className="social-icons">
                  <Link to="#">
                    <AiOutlineTwitter />
                  </Link>
                </li>
                <li className="social-icons">
                  <Link to="#">
                    <AiFillYoutube />
                  </Link>
                </li>
                <li className="social-icons">
                  <Link to="#">
                    <BiLogoLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
