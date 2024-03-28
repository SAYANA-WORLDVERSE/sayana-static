import React, { Fragment, useState, useEffect } from "react";
import "../Style/Navbar.css";
import logo from "../assets/logo.webp";
import whitelogo from "../assets/white-logo.png";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import ToggleButton from "./ToggleButton";
import { useTheme } from "./Context";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
const navigate=useNavigate();
  const { isDark } = useTheme();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Adjust this value based on when you want the navbar to become sticky
    const triggerPoint = 100;

    setIsSticky(scrollPosition > triggerPoint);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Fragment>
      <div
        className={`container-fluid navbar ${
          isDark ? "dark-theme" : "light-theme"
        }  ${isSticky ? "sticky" : ""}`}
      >
        <div className="container h-sm-100 nav-container">
          <div className="d-flex w-100 justify-content-md-between justify-content-sm-between align-items-center nav-bar-inner">
            <div className="logo " onClick={()=>navigate("/")}>
              <img src={isDark ? whitelogo:logo} alt="logo" />
            </div>
            <div className="d-flex col-10  ">
              <nav className="d-flex justify-content-md-between   w-100">
                <div
                  className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}
                  onClick={toggleMobileMenu}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <ul
                  className={`nav-list mt-0 mb-0 w-100  ${
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
                    <Link to="/" className="list-link">
                      Services{" "}
                      <span>
                        <BsChevronDown />
                      </span>
                    </Link>

                    <ul className="sub-menu p-0">
                      <li className="menu-item">
                        <Link to="/webdesign" onClick={toggleMobileMenu}>
                          Web Design & Development
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link
                          to="/applicationdevelopment"
                          onClick={toggleMobileMenu}
                        >
                          Application Development
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link
                          to="/productdevelopment"
                          onClick={toggleMobileMenu}
                        >
                          Product Development
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/digitalmarketing" onClick={toggleMobileMenu}>
                          Digital Marketing
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/graphicsdesign" onClick={toggleMobileMenu}>
                          Graphics Design
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/corporateaddfilms" onClick={toggleMobileMenu}>
                         Corporate Ads Film
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/prservices" onClick={toggleMobileMenu}>
                          PR Services
                        </Link>
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
              {/* <ToggleButton /> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
