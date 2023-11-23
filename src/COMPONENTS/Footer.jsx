import React, { Fragment } from "react";
import "../Style/Footer.css";
import logo from "../assets/logo.webp";
import whitelogo from "../assets/white-logo.png";
import { useTheme } from "./Context";


import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoGmail, BiSolidPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  const {isDark}=useTheme();
  return (
    <Fragment>
      <footer>
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
          <div className="footer-top w-100 d-md-flex justify-content-between  ">
            <div className="col-md-2 footer-col">
              <img src={isDark ? whitelogo:logo} alt="" className="footer-logo" />
              <p className="footer-para">
                As your digital enablement partner, we apply our talent-first
                approach to accelerate your digital journey.
              </p>
              <div className="footer-title d-flex flex-column">
                <ul className="footer-list social-icons m-0 justify-content-start gap-3 p-0">
                  <li>
                    <Link to="https://www.facebook.com/people/Sayana-Worldverse/61552692923976/">
                      <BsFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/sayana_worldverse/">
                      <BsInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link>
                    <BsTwitter />

                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/company/sayana-worldverse-pvt-ltd/ ">
                      <BsLinkedin />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9 col-sm-12 d-md-flex flex-wrap justify-content-between mt-sm-2">
              <div className="col-md-3 col-sm-6">
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

              <div className="col-md-3 col-sm-6">
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

              <div className="col-md-3 col-sm-6">
                <div className="footer-title d--flex flex-column">
                  <h4>Our Location</h4>
                  <ul className="footer-list flex-column p-0 mb-0">
                    <li>
                      <FaLocationDot />
                      <span>
                        C9RM+9HJ Abhi's Ganga, Vittal Rao Nagar, Madhapur,
                        Hyderabad, Telangana 500081
                      </span>
                    </li>
                    <li>
                      <BiSolidPhoneCall /> <span> +91-8096826999</span>
                    </li>
                    <li className=" d-flex ">
                      <BiLogoGmail />{" "}
                      <span>
                        info@sayanaworldverse.com <br />
                        support@sayanaworldverse.com
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom w-100 d-flex justify-content-between">
            <p className="mb-0"> &#169; 2023 SAYANA | All Rights Reserved</p>
            <p className="mb-0"> Privacy Policy | Term & Condition</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
