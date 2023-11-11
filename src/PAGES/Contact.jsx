import React, { Fragment } from "react";
import "../Style/Contact.css";
import heroimg from "../assets/contact-hero.png";
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import call from "../assets/call.png";
import Header from "../COMPONENTS/Header";

const Contact = () => {
  return (
    <Fragment>
            <Header title="Contact Us" link="Contact Us" />

      <section className="contact-hero">
        <div className="container-fluid hero-section">
          <div className="container d-flex justify-content-center">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="hero-content">
                  <h3 className="title">
                    Contact Us
                  </h3>
                  <p className="para-content">
                    As your digital enablement partner, we apply our
                    talent-first approach to accelerate your digital journey,
                    helping you unleash your potential and unlock unseen
                    opportunities.
                  </p>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img src={heroimg} alt="" className="contact-heroimg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form py-5 mt-5">
        <div className="container ">
          <h1 className="excellence text-center m-5">How Can We Help?</h1>

          <div className="row contactus-form p-md-5 p-sm-3">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1 className="contact-title text-sm-center">Contact Information</h1>
              <div className="contact-details">
                <div className="location d-flex align-items-center ">
                  <img src={location} alt="" className="contact-icons" />
                  <p className="contact-para">
                    {" "}
                    C9RM+9HJ Abhi's Ganga,
                    <br /> Vittal Rao Nagar, Madhapur, <br />
                    Hyderabad, Telangana 500081
                  </p>
                </div>
                <div className="location d-flex align-items-center ">
                  <img src={call} alt="" className="contact-icons" />
                  <p className="contact-para">
                    {" "}
                    +91-5724173925, <br />
                    +91-5724173925
                  </p>
                </div>
                <div className="location d-flex align-items-center ">
                  <img src={mail} alt="" className="contact-icons" />
                  <p className="contact-para"> Test@Sayana.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-6   ">
              <form class="row g-3">
                <div class="col-md-6">
                  <label  class="form-label">
                    Full name
                  </label>
                  <input type="email" className="form-control" placeholder="Full Name" />
                </div>
                <div class="col-md-6">
                  <label  class="form-label">
                   Mobile
                  </label>
                  <input
                    type="number"
                    className="form-control spinner"
                    placeholder="Mobile"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputAddress" class="form-label">
                    Email
                  </label>
                  <input
                    type="mail"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputAddress2" class="form-label">
                 Services
                  </label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-12">
                  <label for="inputAddress" class="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>

                <div class="col-md-12">
                  <label for="inputAddress" class="form-label">
                    Message
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="message"
                    placeholder="Message"
                  ></textarea>
                </div>
               

               

                <div class="col-12">
                  <button type="submit " className="float-end">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 mt-5 ">
        <div className="container map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3919903695214!2d78.38136257597682!3d17.440942601258538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9397e1ea583b%3A0x306709daf631d7b4!2sSayana%20Worldverse!5e0!3m2!1sen!2sin!4v1699512629699!5m2!1sen!2sin"
            width="100%"
            height="550"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
