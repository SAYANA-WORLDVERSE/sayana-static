import React, { Fragment, useState } from "react";
import heroimg from "../assets/about-hero.png";
import "../Style/Portfolio.css";
import { Tabs, Tab } from "@mui/material";
import { FaLink } from "react-icons/fa";
import Header from "../COMPONENTS/Header";
import laptop from "../assets/adithya.png";
import soudha from "../assets/soudha.png";
import srinivasa from "../assets/srinivasa.png";
import ortho from "../assets/ortho.png";
import haripriya from "../assets/haripriya-project.png";
import meshler from "../assets/meshler.png";
import care from "../assets/careofcareers.png";
import srivani from "../assets/srivani.png";
import forestedge from "../assets/forestedge.png";
import { Link } from "react-router-dom";
import hpe from "../assets/hpe.png";
import ImageCarousel from "../COMPONENTS/ImageCarousel";
import { frame } from "../COMPONENTS/Logo";
import { frame2 } from "../COMPONENTS/Logo";
import { frame3 } from "../COMPONENTS/Logo";
import { photos } from "../COMPONENTS/Photo";
import LogoCarousel from "../COMPONENTS/LogoCarousel";
import MobileFrameCarousel from "../COMPONENTS/MobileFrameCarousel";
const Portfolio = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <Header title="Portfolio" link="Portfolio" />

      <section className="contact-hero">
        <div className="container-fluid hero-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="hero-content">
                  <h3 className="main-title">Portfolio </h3>
                  <p className="para-content">
                    As your digital enablement partner, we apply our
                    talent-first approach to accelerate your digital journey,
                    helping you unleash your potential and unlock unseen
                    opportunities.
                  </p>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img src={heroimg} alt="" className="portfolio-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container py-5">
          <p className=" career-para">
            “Discover our diverse portfolio showcasing our expertise and
            commitment to excellence across various domains. Each project
            exemplifies our innovative approach, meticulous attention to detail,
            and dedication to delivering exceptional results. From branding
            solutions and website design to application development and digital
            marketing campaigns, explore our showcase to witness the
            transformative impact of our services. This will reflect our passion
            for creativity, technology, and collaboration, demonstrating how we
            help businesses thrive in today's competitive landscape.”
          </p>
        </div>

        <div className="container">
          <Tabs value={value} onChange={handleChange} className="tabs">
            <Tab label="Website" className="tab" />
            <Tab label="Digital Marketing" className="tab" />
            <Tab label="Graphics Design" className="tab" />
            <Tab label="Mobile App" className="tab" />
            <Tab label="UI & UX" className="tab" />
          </Tabs>

          <div hidden={value !== 0}>
            <div className="row col-md-12 portfolio-container py-5">
              <div className="col-md-3 portfolio-card">
                <div className="portfolio-card-details">
                  <img src={forestedge} alt="" className="port-img" />
                  <p className="text-center">Forest Edge</p>
                </div>
                <Link
                  className="card-button"
                  to="#"
                  target="_blank"
                >
                  <FaLink />
                </Link>
              </div>
              <div className="col-md-3 portfolio-card">
                <div className="portfolio-card-details">
                  <img src={srivani} alt="" className="port-img" />
                  <p className="text-center">Sri Vani</p>
                </div>
                <Link
                  className="card-button"
                  to=""
                  target="_blank"
                >
                  <FaLink />
                </Link>
              </div>
              <div className="col-md-3 portfolio-card">
                <div className="portfolio-card-details">
                  <img src={laptop} alt="" className="port-img" />
                  <p className="text-center">aditya multispeciality hospital</p>
                </div>
                <Link
                  className="card-button"
                  to="https://adityamultispecialityhospital.com/"
                  target="_blank"
                >
                  <FaLink />
                </Link>
              </div>
              <div className="col-md-3 portfolio-card">
                <div className="portfolio-card-details">
                  <img src={soudha} alt="" className="port-img" />
                  <p>Sri Soudha</p>
                </div>
                <button className="card-button">
                  <FaLink />
                </button>
                <Link className="card-button" to="https://srisoudha.com/">
                  <FaLink />
                </Link>
              </div>
              <div className="col-md-3 portfolio-card">
                <div className="portfolio-card-details">
                  <img src={srinivasa} alt="" className="port-img" />
                  <p>Sri Srinivasa Diagnostics</p>
                </div>
                <Link
                  className="card-button"
                  to="https://srisrinivasadiagnostics.com/"
                >
                  <FaLink />
                </Link>
              </div>
              <div className="col-md-3 portfolio-card">
                <div className="portfolio-card-details">
                  <img src={haripriya} alt="" className="port-img" />
                  <p>Hari Priya Projects</p>
                </div>
                <Link
                  className="card-button"
                  to="https://meshler.in/"
                  target="_blank"
                >
                  <FaLink />
                </Link>
              </div>
              <div className="col-md-3 portfolio-card">
                <div className="portfolio-card-details">
                  <img src={meshler} alt="" className="port-img" />
                  <p>Meshler</p>
                </div>
                <Link
                  className="card-button"
                  to="https://haripriyaprojects.in/"
                  target="_blank"
                >
                  <FaLink />
                </Link>
              </div>
              <div className="col-md-3 portfolio-card">
                <div className="portfolio-card-details">
                  <img src={care} alt="" className="port-img" />
                  <p>Care of Careers</p>
                </div>
                <Link
                  className="card-button"
                  to="https://careofcareers.com/"
                  target="_blank"
                >
                  <FaLink />
                </Link>
              </div>
              <div className="col-md-3 portfolio-card">
                <div className="portfolio-card-details">
                  <img src={hpe} alt="" className="port-img" />
                  <p>HPE SOLUTION</p>
                </div>
                <Link
                  className="card-button"
                  to="https://hpesolutions.in/"
                  target="_blank"
                >
                  <FaLink />
                </Link>
              </div>
              <div className="col-md-3 portfolio-card">
                <div className="portfolio-card-details">
                  <img src={ortho} alt="" className="port-img" />
                  <p>Ortho360</p>
                </div>
                <Link
                  className="card-button"
                  to="https://ortho360.in/"
                  target="_blank"
                >
                  <FaLink />
                </Link>
              </div>
            </div>
          </div>
          <div hidden={value !== 1}>
            <div className="row col-md-12 portfolio-container py-5">
              <ImageCarousel photos={photos} />
            </div>
          </div>
          <div hidden={value !== 2}>
            <div className=" col-md-12 portfolio-container py-5 logo-slide">
              <LogoCarousel />
            </div>
          </div>
          <div hidden={value !== 3}>
            <div className="  d-flex col-md-12 portfolio-container flex-wrap py-5">
              <div className="">
                <MobileFrameCarousel images={frame} />
              </div>
              <div className="">
                <MobileFrameCarousel images={frame2} />
              </div>
              <div className="">
                <MobileFrameCarousel images={frame3} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Portfolio;
