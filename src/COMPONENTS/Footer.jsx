import React, { Fragment } from "react";
import "../Style/Footer.css";
import logo from "../assets/logo.png";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import {FaLocationDot} from "react-icons/fa6"

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
          <div className="footer-top w-100 d-flex justify-content-between">
          <div className="col-md-2 footer-logo">
                <img src={logo} alt="" className="footer-logo" />
                <p className="footer-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam a nam eius excepturi autem quae aliquam architecto
                  atque nostrum porro!
                </p>
                <div className="footer-title d-flex flex-column">
                  <ul className="footer-list  p-0 mb-0">
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
            <div className="col-md-9 d-flex  justify-content-between">
             
              <div className="col-md-2">
                <div className="footer-title d-flex flex-column">
                  <h4>Quick Links</h4>
                  <ul className="footer-list flex-column p-0 mb-0">
                    <li>Company </li>
                    <li>About us </li>
                    <li>Portfolio</li>
                    <li>Blogs</li>
                    <li>Careers</li>
                 
                    <li> Contact Us</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-title d-flex flex-column">
                  <h4>Services</h4>
                  <ul className="footer-list flex-column p-0 mb-0">
                    <li>Web Design & Development </li>
                    <li>Application Development</li>
                    <li>Product Development</li>
                    <li>Digital Marketing</li>
                    <li>Graphics Design</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
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
              <div className="col-md-3">
                <div className="footer-title d-flex flex-column">
                  <h4>Our Location</h4>
                  <ul className="footer-list flex-column p-0 mb-0">
                    <li><FaLocationDot/> <span>C9RM+9HJ Abhi's Ganga, Vittal Rao Nagar Rd, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500081</span></li>
                    <li>Season Passes</li>
                    <li>Vacation Packages</li>
                  </ul>
                </div>
              </div>
              
            </div>
         
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
