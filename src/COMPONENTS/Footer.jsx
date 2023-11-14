import React, { Fragment } from "react";
import "../Style/Footer.css";
import logo from "../assets/logo.webp";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoGmail, BiSolidPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
          <div className="footer-top w-100 d-md-flex justify-content-between  ">
            <div className="col-md-2 footer-col">
              <img src={logo} alt="" className="footer-logo" />
              <p className="footer-para">
                As your digital enablement partner, we apply our talent-first
                approach to accelerate your digital journey.
              </p>
              <div className="footer-title d-flex flex-column">
                <ul className="footer-list social-icons m-0 justify-content-start gap-3 p-0">
                  <li>
                    <BsFacebook />
                  </li>
                  <li>
                    <BsInstagram />
                  </li>
                  <li>
                    <BsTwitter />
                  </li>
                  <li>
                    <BsYoutube />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9 col-sm-12 d-md-flex flex-wrap justify-content-between mt-sm-2">
              <div className="col-md-2 col-sm-6">
                <div className="footer-title d-flex flex-column">
                  <h4>Quick Links</h4>
                  <ul className="footer-list flex-column p-0 mb-0">
                    <Link>
                      <li>Company </li>
                    </Link>
                    <Link>
                      <li>About us </li>
                    </Link>
                    <Link>
                      <li>Portfolio</li>
                    </Link>
                    <Link>
                      <li>Blogs</li>
                    </Link>
                    <Link>
                      <li>Careers</li>
                    </Link>
                    <Link>
                      <li> Contact Us</li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-title d-flex flex-column">
                  <h4>Services</h4>
                  <ul className="footer-list flex-column p-0 mb-0">
                    <Link>
                      <li>Web Design & Development </li>
                    </Link>
                    <Link>
                      <li>Application Development</li>
                    </Link>
                    <Link>
                      <li>Product Development</li>
                    </Link>
                    <Link>
                      <li>Digital Marketing</li>
                    </Link>
                    <Link>
                      <li>Graphics Design</li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="footer-title d-flex flex-column">
                  <h4>Learn</h4>
                  <ul className="footer-list flex-column p-0 mb-0">
                    <li>Web Design & Development </li>
                    <li>Application Development</li>
                    <li>Product Development</li>
                    <li>Digital Marketing</li>
                    <li>Graphics Design</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-title d--flex flex-column">
                  <h4>Our Location</h4>
                  <ul className="footer-list flex-column p-0 mb-0">
                    <li>
                      <FaLocationDot />{" "}
                      <span>
                        C9RM+9HJ Abhi's Ganga, Vittal Rao Nagar, Madhapur,
                        Hyderabad, Telangana 500081
                      </span>
                    </li>
                    <li>
                      <BiSolidPhoneCall /> <span> +91-5724173925</span>
                    </li>
                    <li>
                      <BiLogoGmail /> <span> Test@gmail.com</span>
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
