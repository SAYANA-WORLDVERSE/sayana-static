import React, { Fragment, useState } from "react";
import HeroSection from "../COMPONENTS/HeroSection";
import "../Style/Home.css";
import bulb from "../assets/bulb.png";
import service from "../assets/service.png";
import handShake from "../assets/hand-shake.png";
import chevrondown from "../assets/chevron-down.png";
import aboutUs from "../assets/about-us.png";
import cube2 from "../assets/cube2.png";
import Slider from "react-slick";
import laptop from "../assets/laptop.png";
import mobile from "../assets/mobile.png";
import doll from "../assets/doll-sleep.png";
import seo from "../assets/seo.png";
import rocket from "../assets/rocket.png";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import ring from "../assets/ring.gif";
import testmonial from "../assets/testmonial.png";
import Rating from "@mui/material/Rating";
import aditya from "../assets/aditya.png";
import hpe from "../assets/hpe.png";
import care from "../assets/care.png";
import orth from "../assets/orth.png";
import boy from "../assets/boy.png";
import circle from "../assets/circle.png";

const Home = () => {
  const [activeItem, setactiveItem] = useState(false);
  const [activeItem1, setactiveItem1] = useState(false);
  const [activeItem2, setactiveItem2] = useState(false);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const properties = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
  };
  return (
    <Fragment>
      <HeroSection />
      <section className="help-you">
        <div className="sub-heading text-center">
          <h3>How we can help you</h3>
          <p>We are dedicated to serve. you best IT services</p>
        </div>
        <div className="container d-flex gap-4">
          <div className="col-md-4">
            <div className="accordians">
              <div
                className={` ${
                  activeItem ? "accordions-item-active" : "accordions-item"
                }`}
                onMouseEnter={() => setactiveItem(true)}
                onMouseLeave={() => setactiveItem()}
              >
                <div className="accordions-title d-flex align-items-center justify-content-between">
                  <div className="bulb-background">
                    <img src={bulb} alt="icons" />
                  </div>
                  <p
                    className={`titles mt-0 mb-0 ${activeItem ? "active" : ""}`}
                  >
                    Services Designs
                  </p>
                  <img src={chevrondown} alt="" />
                </div>
                <div
                  className={`accordion-contents ${activeItem ? "active" : ""}`}
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam, saepe!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="accordians">
              <div
                className={` ${
                  activeItem1 ? "accordions-item-active" : "accordions-item"
                }`}
                onMouseEnter={() => setactiveItem1(true)}
                onMouseLeave={() => setactiveItem1()}
              >
                <div className="accordions-title d-flex align-items-center justify-content-between">
                  <div className="bulb-background">
                    <img src={service} alt="icons" />
                  </div>
                  <p
                    className={`titles mt-0 mb-0 ${
                      activeItem1 ? "active" : ""
                    }`}
                  >
                    Services Technology
                  </p>
                  <img src={chevrondown} alt="" />
                </div>
                <div
                  className={`accordion-contents ${
                    activeItem1 ? "active" : ""
                  }`}
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam, saepe!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="accordians">
              <div
                className={` ${
                  activeItem2 ? "accordions-item-active" : "accordions-item"
                }`}
                onMouseEnter={() => setactiveItem2(true)}
                onMouseLeave={() => setactiveItem2()}
              >
                <div className="accordions-title d-flex align-items-center justify-content-between">
                  <div className="bulb-background">
                    <img src={handShake} alt="icons" />
                  </div>
                  <p
                    className={`titles mt-0 mb-0 ${
                      activeItem2 ? "active" : ""
                    }`}
                  >
                    Services Bussiness
                  </p>
                  <img src={chevrondown} alt="" />
                </div>
                <div
                  className={`accordion-contents ${
                    activeItem2 ? "active" : ""
                  }`}
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam, saepe!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view-all d-flex justify-content-center m-5">
          <button>View All</button>
        </div>
      </section>

      <section className="help-you d-flex justify-content-center">
        <div className="sub-heading text-center col-md-6">
          <h3>You Solution: Choose Sayana</h3>
          <p>
            We are are an enterprise software developmentcompany that is
            Inspired by the lutureedicatedto serve youbest IT services
          </p>
        </div>
      </section>

      <section>
        <div className="container about-us mt-5 bg-white">
          <div className="row p-5 align-items-center">
            <div className="col-md-6 d-flex align-items-center">
              <div className="hero-content">
                <p className="sub-title">
                  The power of emerging tech for top-notch Android app
                  development services
                </p>
                <p className="para-content">
                  As your digital enablement partner, we apply our talent-first
                  approach to accelerate your digital journey, helping you
                  unleash your potential and unlock unseen opportunities.
                </p>
                <button>About Us</button>
                <img src={cube2} alt="" className="cube2" />
                <img src={cube2} alt="" className="cube3" />
              </div>
            </div>
            <div className="col-md-6">
              <img src={aboutUs} alt="" className="abt-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="help-you d-flex justify-content-center">
        <div className="sub-heading text-center col-md-6 m-5">
          <h3>Latest projects</h3>
          <p>
            We are are an enterprise software developmentcompany that is
            Inspired by the lutureedicatedto serve youbest IT services
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="project-slider">
            <Slider {...settings}>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="slider-header">
                    <img src={laptop} alt="" />
                  </div>
                  <h5>
                    Copy AI-powered self-service BI and big data platform for
                    the world leading retailer
                  </h5>
                  <p>
                    We are are an enterprise software developmentcompany that is
                    inspired bythe futureedicatedto serve youbest IT services
                  </p>
                </div>
              </div>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="slider-header">
                    <img src={mobile} alt="" />
                  </div>
                  <h5>
                    Copy AI-powered self-service BI and big data platform for
                    the world leading retailer
                  </h5>
                  <p>
                    We are are an enterprise software developmentcompany that is
                    inspired bythe futureedicatedto serve youbest IT services
                  </p>
                </div>
              </div>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="slider-header">
                    <img src={laptop} alt="" />
                  </div>
                  <h5>
                    Copy AI-powered self-service BI and big data platform for
                    the world leading retailer
                  </h5>
                  <p>
                    We are are an enterprise software developmentcompany that is
                    inspired bythe futureedicatedto serve youbest IT services
                  </p>
                </div>
              </div>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="slider-header">
                    <img src={laptop} alt="" />
                  </div>
                  <h5>
                    Copy AI-powered self-service BI and big data platform for
                    the world leading retailer
                  </h5>
                  <p>
                    We are are an enterprise software developmentcompany that is
                    inspired bythe futureedicatedto serve youbest IT services
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section>
        <div className="container about-us mt-5 bg-white">
          <div className="row p-5 align-items-center">
            <div className="col-md-6 d-flex align-items-center">
              <div className="hero-content">
                <p className="career-title">Unleash your career potential:</p>
                <p className="career-para">Join us on the path to success.</p>
                <p className="career-content">
                  Randstad Digital is helping leading brands to accelerate their
                  digital enablement, and this presents exciting opportunities
                  for tech talent to join our team.
                </p>
                <button className="apply">Apply Now</button>
              </div>
            </div>
            <div className="col-md-6">
              <img src={doll} alt="" className="abt-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="help-you d-flex justify-content-center">
        <div className="sub-heading text-center col-md-6 m-5">
          <h3>Our Solution Blog</h3>
          <p>
            We are are an enterprise software developmentcompany that is
            Inspired by the lutureedicatedto serve youbest IT services
          </p>
        </div>
      </section>

      <section className="d-flex justify-content-center align-items-center">
        <div className="col-md-10 d-flex ">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="cards">
              <img src={seo} alt="" />

              <div className="cards__content">
                <p className="cards__title">Card Title</p>
                <p className="cards__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div className="cards">
              <img src={rocket} alt="" />

              <div className="cards__content">
                <p className="cards__title">Card Title</p>
                <p className="cards__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="view-all d-flex justify-content-center m-5">
        <button>View All</button>
      </div>

      <section className="help-you d-flex justify-content-center">
        <div className="sub-heading text-center col-md-6 m-5">
          <h3>Today to schedule a discussion,</h3>
          <p>
            We are an enterprise software developmentcompany that is Inspired by
            the lutureedicatedto serve youbest IT services
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-card">
                <div className="ring-icon">
                  <img src={ring} alt="" className="ring" />
                </div>
                <div className="phone-icons">
                  <FiPhoneCall />
                </div>
                <div className="card-content d-flex flex-column justify-items-center align-items-center gap-3">
                  <p>questions or remarks? Just write us a messagel</p>
                  <div className="list">
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <FiPhoneCall />
                      </div>
                      <p className="card-number mt-0 ">123-456-7890</p>
                    </div>
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <AiOutlineMail />
                      </div>
                      <p className="card-number mt-0 ">sayana123@gmail.com</p>
                    </div>
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <CiLocationOn />
                      </div>
                      <p className="card-number mt-0 ">
                        Madhapur,Hyderabad, Telangana
                        <br /> 500072
                      </p>
                    </div>
                  </div>
                  <button>Call Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card">
                <div className="ring-icon">
                  <img src={ring} alt="" className="ring" />
                </div>
                <div className="phone-icons">
                  <FiPhoneCall />
                </div>
                <div className="card-content d-flex flex-column justify-items-center align-items-center gap-3">
                  <p>questions or remarks? Just write us a messagel</p>
                  <div className="list">
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <FiPhoneCall />
                      </div>
                      <p className="card-number mt-0 ">123-456-7890</p>
                    </div>
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <AiOutlineMail />
                      </div>
                      <p className="card-number mt-0 ">sayana123@gmail.com</p>
                    </div>
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <CiLocationOn />
                      </div>
                      <p className="card-number mt-0 ">
                        Madhapur,Hyderabad, Telangana
                        <br /> 500072
                      </p>
                    </div>
                  </div>
                  <button>Call Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card">
                <div className="ring-icon">
                  <img src={ring} alt="" className="ring" />
                </div>
                <div className="phone-icons">
                  <FiPhoneCall />
                </div>
                <div className="card-content d-flex flex-column justify-items-center align-items-center gap-3">
                  <p>questions or remarks? Just write us a messagel</p>
                  <div className="list">
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <FiPhoneCall />
                      </div>
                      <p className="card-number mt-0 ">123-456-7890</p>
                    </div>
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <AiOutlineMail />
                      </div>
                      <p className="card-number mt-0 ">sayana123@gmail.com</p>
                    </div>
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <CiLocationOn />
                      </div>
                      <p className="card-number mt-0 ">
                        Madhapur,Hyderabad, Telangana
                        <br /> 500072
                      </p>
                    </div>
                  </div>
                  <button>Call Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="help-you d-flex justify-content-center">
        <div className="sub-heading text-center col-md-6 m-5">
          <h3>Testimonials</h3>
          <p>
            We are an enterprise software developmentcompany that is Inspired by
            the lutureedicatedto serve youbest IT services
          </p>
        </div>
      </section>

      <section className="testmonials">
        <div className="container">
          <Slider {...properties}>
            <div className="testmonial-items ">
              <div className="testmonial-header  d-flex align-items-center gap-3">
                <img src={testmonial} alt="" className="testmonial-img" />
                <div className="test-monial-title">
                  <p className="name mb-0">Bandan</p>
                  <p className="email mb-0">Bandan@test.com</p>
                  <Rating name="read-only" value={5} readOnly />
                </div>
              </div>
              <div className="testmonial-content">
                <blockquote>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro aperiam qui suscipit architecto nisi doloremque eius.
                  Non dolore quisquam tenetur.
                </blockquote>
              </div>
            </div>
            <div className="testmonial-items ">
              <div className="testmonial-header d-flex align-items-center gap-3">
                <img src={testmonial} alt="" className="testmonial-img" />
                <div className="test-monial-title">
                  <p className="name mb-0">Bandan</p>
                  <p className="email mb-0">Bandan@test.com</p>
                  <Rating name="read-only" value={5} readOnly />
                </div>
              </div>
              <div className="testmonial-content">
                <blockquote>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro aperiam qui suscipit architecto nisi doloremque eius.
                  Non dolore quisquam tenetur.
                </blockquote>
              </div>
            </div>
            <div className="testmonial-items ">
              <div className="testmonial-header d-flex align-items-center gap-3">
                <img src={testmonial} alt="" className="testmonial-img" />
                <div className="test-monial-title">
                  <p className="name mb-0">Bandan</p>
                  <p className="email mb-0">Bandan@test.com</p>
                  <Rating name="read-only" value={5} readOnly />
                </div>
              </div>
              <div className="testmonial-content">
                <blockquote>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro aperiam qui suscipit architecto nisi doloremque eius.
                  Non dolore quisquam tenetur.
                </blockquote>
              </div>
            </div>
            <div className="testmonial-items ">
              <div className="testmonial-header d-flex align-items-center gap-3">
                <img src={testmonial} alt="" className="testmonial-img" />
                <div className="test-monial-title">
                  <p className="name mb-0">Bandan</p>
                  <p className="email mb-0">Bandan@test.com</p>
                  <Rating name="read-only" value={5} readOnly />
                </div>
              </div>
              <div className="testmonial-content">
                <blockquote>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro aperiam qui suscipit architecto nisi doloremque eius.
                  Non dolore quisquam tenetur.
                </blockquote>
              </div>
            </div>
            <div className="testmonial-items ">
              <div className="testmonial-header d-flex align-items-center gap-3">
                <img src={testmonial} alt="" className="testmonial-img" />
                <div className="test-monial-title">
                  <p className="name mb-0">Bandan</p>
                  <p className="email mb-0">Bandan@test.com</p>
                  <Rating name="read-only" value={5} readOnly />
                </div>
              </div>
              <div className="testmonial-content">
                <blockquote>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro aperiam qui suscipit architecto nisi doloremque eius.
                  Non dolore quisquam tenetur.
                </blockquote>
              </div>
            </div>
            <div className="testmonial-items ">
              <div className="testmonial-header d-flex align-items-center gap-3">
                <img src={testmonial} alt="" className="testmonial-img" />
                <div className="test-monial-title">
                  <p className="name mb-0">Bandan</p>
                  <p className="email mb-0">Bandan@test.com</p>
                  <Rating name="read-only" value={5} readOnly />
                </div>
              </div>
              <div className="testmonial-content">
                <blockquote>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro aperiam qui suscipit architecto nisi doloremque eius.
                  Non dolore quisquam tenetur.
                </blockquote>
              </div>
            </div>
            <div className="testmonial-items ">
              <div className="testmonial-header d-flex align-items-center gap-3">
                <img src={testmonial} alt="" className="testmonial-img" />
                <div className="test-monial-title">
                  <p className="name mb-0">Bandan</p>
                  <p className="email mb-0">Bandan@test.com</p>
                  <Rating name="read-only" value={5} readOnly />
                </div>
              </div>
              <div className="testmonial-content">
                <blockquote>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro aperiam qui suscipit architecto nisi doloremque eius.
                  Non dolore quisquam tenetur.
                </blockquote>
              </div>
            </div>
            <div className="testmonial-items ">
              <div className="testmonial-header d-flex align-items-center gap-3">
                <img src={testmonial} alt="" className="testmonial-img" />
                <div className="test-monial-title">
                  <p className="name mb-0">Bandan</p>
                  <p className="email mb-0">Bandan@test.com</p>
                  <Rating name="read-only" value={5} readOnly />
                </div>
              </div>
              <div className="testmonial-content">
                <blockquote>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro aperiam qui suscipit architecto nisi doloremque eius.
                  Non dolore quisquam tenetur.
                </blockquote>
              </div>
            </div>
            <div className="testmonial-items ">
              <div className="testmonial-header d-flex align-items-center gap-3">
                <img src={testmonial} alt="" className="testmonial-img" />
                <div className="test-monial-title">
                  <p className="name mb-0">Bandan</p>
                  <p className="email mb-0">Bandan@test.com</p>
                  <Rating name="read-only" value={5} readOnly />
                </div>
              </div>
              <div className="testmonial-content">
                <blockquote>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro aperiam qui suscipit architecto nisi doloremque eius.
                  Non dolore quisquam tenetur.
                </blockquote>
              </div>
            </div>
            <div className="testmonial-items ">
              <div className="testmonial-header d-flex align-items-center gap-3">
                <img src={testmonial} alt="" className="testmonial-img" />
                <div className="test-monial-title">
                  <p className="name mb-0">Bandan</p>
                  <p className="email mb-0">Bandan@test.com</p>
                  <Rating name="read-only" value={5} readOnly />
                </div>
              </div>
              <div className="testmonial-content">
                <blockquote>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro aperiam qui suscipit architecto nisi doloremque eius.
                  Non dolore quisquam tenetur.
                </blockquote>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section className="help-you d-flex justify-content-center">
        <div className="sub-heading text-center col-md-6 m-5">
          <h3>Our clients</h3>
          <p>
            We are an enterprise software developmentcompany that is Inspired by
            the lutureedicatedto serve youbest IT services
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="project-slider">
            <Slider {...settings}>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="partner-header">
                    <img src={aditya} alt="" />
                  </div>
                </div>
              </div>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="partner-header">
                    <img src={hpe} alt="" />
                  </div>
                </div>
              </div>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="partner-header">
                    <img src={orth} alt="" />
                  </div>
                </div>
              </div>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="partner-header">
                    <img src={care} alt="" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="p-5">
        <div className="container p-5">
          <div className="news-letter d-flex  justify-content-between">
            <div className="left-col col-md-6">
              <img src={boy} alt="" className="boy-img" />
              <img src={circle} alt="" className="circle-img" />
            </div>
            <div className="right-col col-md-6 d-flex flex-column justify-content-center">
              <h2>Subscribe to our</h2>
              <h5>Newsletter!</h5>
              <p>Subscribe to our newsletter and stay updated.</p>
              <div className="form-group">
              <input type="text"  className="news-input"/>
              <button className="subscribe">Subscribe</button>

            </div>
            </div>
            
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
