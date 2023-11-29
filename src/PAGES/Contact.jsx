import React, { Fragment,useRef,useState } from "react";
import "../Style/Contact.css";
import heroimg from "../assets/contact-hero.png";
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import call from "../assets/call.png";
import Header from "../COMPONENTS/Header";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';



const Contact = () => {
const [buttonText,setButtonText]=useState("Submit")
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Submiting...")


    emailjs.sendForm('service_yqbwuyq', 'template_y5rxgv9', form.current, 'Jx4iBaGzWieX0UanH')
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Form Submitted Successfully!",
          text: "Thank you for submitting the form.",
        });
          form.current.reset()
          setButtonText("Submit")
      }, (error) => {
          console.log(error);
      });
  };
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
      <section className="contact-form py-2 ">
        <div className="container ">
          <h1 className=" linear-text text-center m-3">How Can We Help?</h1>

          <div className="row contactus-form py-md-5 p-sm-4">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1 className="contact-title text-sm-center">Contact Information</h1>
              <div className="contact-details">
                <div className="location d-flex align-items-center ">
                  <img src={location} alt="" className="contact-icons" />
                  <p className="contact-para">
                    
                    C9RM+9HJ Abhi's Ganga,
                    <br /> Vittal Rao Nagar, Madhapur, <br />
                    Hyderabad, Telangana 500081
                  </p>
                </div>
                <div className="location d-flex align-items-center ">
                  <img src={call} alt="" className="contact-icons" />
                  <p className="contact-para">
                 
                    +91-8096826999, <br />
                   
                  </p>
                </div>
                <div className="location d-flex align-items-center ">
                  <img src={mail} alt="" className="contact-icons" />
                  <p className="contact-para"> info@sayanaworldverse.com, <br/>support@sayanaworldverse.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-6   ">
              <form class="row g-3" ref={form} onSubmit={sendEmail}>
                <div class="col-md-6">
                  <label  class="form-label">
                    Full Name
                  </label>
                  <input type="text" className="form-control" placeholder="Full Name" name="user_name" required/>
                </div>
                <div class="col-md-6">
                  <label  class="form-label">
                   Mobile
                  </label>
                  <input
                    type="number"
                    className="form-control spinner"
                    placeholder="Mobile"
                    name="user_mobile"
                    required
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
                    name="user_email"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputAddress2" class="form-label">
                 Services
                  </label>
                  <select id="inputState" class="form-select" name="position" required>
                    <option selected>Choose...</option>
                    <option value="Web Design & Development">Web Design & Development</option>
                    <option value="Application Development">Application Development</option>
                    <option value="Product Development">Product Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Graphics Designing">Graphics Designing</option>
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
                    name="subject"
                    required
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
                    name="message"
                  ></textarea>
                </div>
               

               

                <div class="col-12">
                  <button type="submit " className="float-end">{buttonText}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2 mt-5 ">
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
