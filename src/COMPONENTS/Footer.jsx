import React, { Fragment } from "react";
import "../Style/Footer.css";
import logo from "../assets/logo.webp";
import whitelogo from "../assets/white-logo.png";
import { useTheme } from "./Context";

import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaMapMarkerAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

import { BiLogoGmail, BiSolidPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  const { isDark } = useTheme();
  return (
    <Fragment>
      <footer>
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
          <div className="footer-top w-100 d-md-flex justify-content-between  ">
            <div className="col-md-2 footer-col">
              <img
                src={isDark ? whitelogo : logo}
                alt=""
                className="footer-logo"
              />
              <p className="footer-para">
                Unlock Your Potential with Custom Software Solutions, Crafting
                Excellence in Web Design, App Design, Product Development, and
                Digital Marketing
              </p>
              <div className="footer-title d-flex flex-column">
                <ul className="footer-list social-icons m-0 justify-content-start gap-3 p-0">
                  <li>
                    <Link
                      to="https://www.facebook.com/people/Sayana-Worldverse/61552692923976/"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.instagram.com/sayana_worldverse/"
                      target="_blank"
                    >
                      <BsInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank">
                      <BsTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.linkedin.com/company/sayana-worldverse-pvt-ltd/ "
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://medium.com/@sayanaworldverse "
                      target="_blank"
                    >
                      <FaMedium />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9 col-sm-12 d-md-flex flex-wrap justify-content-between mt-sm-2">
              <div className="col-md-4 col-sm-6">
                <div className="footer-title d-flex flex-column">
                  <h4>Company</h4>
                  <ul className="footer-list flex-column p-0 mb-0">
                    <Link to="/">
                      <li>Home</li>
                    </Link>
                    <Link to="/about">
                      <li>About Us</li>
                    </Link>
                    <Link to="/blog">
                      <li> Blog</li>
                    </Link>
                    <Link to="/portfolio">
                      <li>Portfolio</li>
                    </Link>

                    <Link to="/career">
                      <li>Careers</li>
                    </Link>
                    <Link to="/contact">
                      <li> Contact Us</li>
                    </Link>
                  </ul>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="footer-title d-flex flex-column">
                  <h4>Services</h4>
                  <ul className="footer-list flex-column p-0 mb-0">
                    <Link to="/webdesign">
                      <li>Web Design & Development </li>
                    </Link>
                    <Link to="/applicationdevelopment">
                      <li>Application Development</li>
                    </Link>
                    <Link to="/productdevelopment">
                      <li>Product Development</li>
                    </Link>
                    <Link to="/Digitalmarketing">
                      <li>Digital Marketing</li>
                    </Link>
                    <Link to="/graphicsdesign">
                      <li>Graphics Design</li>
                    </Link>
                  </ul>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="footer-title d--flex flex-column">
                  <h4>Our Location</h4>
                  <ul className="footer-list flex-column p-0 mb-0 location">
                    <li className=" d-flex align-items-start gap-2">
                      <FaMapMarkerAlt className="location-icons" />
                      <span>
                        Abhi's Ganga, 1st Floor, Vittal Rao Nagar Rd, Madhapur,
                        Hyderabad, Telangana 500081
                      </span>
                    </li>
                    <li className=" d-flex align-items-center gap-2">
                      <BiSolidPhoneCall /> <span> +91-8019242343</span>
                    </li>
                    <li className=" d-flex align-items-first gap-2 ">
                      <BiLogoGmail className="mt-1" />
                      <span>
                        info@sayanaworldverse.com <br />{" "}
                        support@sayanaworldverse.com
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom w-100 d-flex justify-content-between">
            <p className="mb-0 text-black"> &#169; 2024 SAYANA | All Rights Reserved</p>
            <p className="mb-0">
              {" "}
              <Link to="/privacy-policy" className="text-black">Privacy Policy</Link> |{" "}
              <Link to="/term-and-condition" className="text-black">Term & Condition</Link>
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
