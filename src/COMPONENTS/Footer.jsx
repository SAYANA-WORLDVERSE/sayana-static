import React, { Fragment } from "react";
import "../Style/Footer.css";
import logo from "../assets/logo.png";
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs"

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
          <div className="footer-top w-100 d-flex">
            <div className="col-md-9 d-flex flex-wrap">
              <div className="col-md-2 footer-logo">
                <img src={logo} alt="" />
              </div>
              <div className="col-md-3">
                <div className="footer-title d-flex flex-column">
                  <h4>Learn More</h4>
                  <ul className="footer-list flex-column p-0 mb-0">
                    <li>About us </li>
                    <li>Press Relaases</li>
                    <li>Environment</li>
                    <li>Jobs</li>
                    <li> Privacy Policy</li>
                    <li> Contact Us</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-title d-flex flex-column">
                  <h4>Ticket & Booking</h4>
                  <ul className="footer-list flex-column p-0 mb-0">
                    <li>Lift Tickets </li>
                    <li>Season Passes</li>
                    <li>Vacation Packages</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-title d-flex flex-column">
                  <h4>Contact Us</h4>
                  <ul className="footer-list flex-column p-0 mb-0">
                    <li>Hotel Reservation: 123-456-7890</li>
                    <li>Ticket Office:  123-456-7890</li>
              
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
            <div className="footer-title d-flex flex-column">
                  <h4>Social</h4>
                  <ul className="footer-list  p-0 mb-0">
                    <li><BsFacebook/></li>
                    <li><BsInstagram/></li>
                    <li><BsTwitter/></li>
                    <li><BsYoutube/></li>
              
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
