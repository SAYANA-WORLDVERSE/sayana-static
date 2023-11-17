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
import { Link } from "react-router-dom";
import hpe from "../assets/hpe.png";
import ImageCarousel from "../COMPONENTS/ImageCarousel";

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            dolorem perspiciatis numquam, voluptatum blanditiis pariatur ipsa
            dolore sed dolor facilis similique, obcaecati impedit saepe
            aspernatur. Nemo esse tempore pariatur vero culpa eos nam, expedita
            aliquam nesciunt beatae quaerat, quod enim reprehenderit tempora
            placeat ad perspiciatis, error similique dolor soluta ipsam!
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
                  <img src={laptop} alt="" className="port-img" />
                  <p>aditya multispeciality hospital</p>
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
                  <p>Sri Srinivassa Diognostics</p>
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
                  <p>Hari Priya Pojects</p>
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
                <Link className="card-button" to="https://hpesolutions.in/" target="_blank">
                  <FaLink />
                </Link>
              </div>
              <div className="col-md-3 portfolio-card">
                <div className="portfolio-card-details">
                  <img src={ortho} alt="" className="port-img" />
                  <p>Ortho360</p>
                </div>
                <Link className="card-button" to="https://ortho360.in/" target="_blank">
                  <FaLink />
                </Link>
              </div>
            </div>
          </div>
          <div hidden={value !== 1}>
            <div className="row col-md-12 portfolio-container py-5">
              <ImageCarousel/>
           
            </div>
          </div>
          <div hidden={value !== 2}>
            <div className="row col-md-12 portfolio-container py-5">
              <div class="col-md-3 portfolio-card">
                <div class="portfolio-card-inner">
                  <div class="portfolio-card-front">
                    <p>Project img</p>
                  </div>
                  <div class="portfolio-card-back">
                    <p>Project Description</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 portfolio-card">
                <div class="portfolio-card-inner">
                  <div class="portfolio-card-front">
                    <p>Project img</p>
                  </div>
                  <div class="portfolio-card-back">
                    <p>Project Description</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 portfolio-card">
                <div class="portfolio-card-inner">
                  <div class="portfolio-card-front">
                    <p>Project img</p>
                  </div>
                  <div class="portfolio-card-back">
                    <p>Project Description</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 portfolio-card">
                <div class="portfolio-card-inner">
                  <div class="portfolio-card-front">
                    <p>Project img</p>
                  </div>
                  <div class="portfolio-card-back">
                    <p>Project Description</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 portfolio-card">
                <div class="portfolio-card-inner">
                  <div class="portfolio-card-front">
                    <p>Project img</p>
                  </div>
                  <div class="portfolio-card-back">
                    <p>Project Description</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 portfolio-card">
                <div class="portfolio-card-inner">
                  <div class="portfolio-card-front">
                    <p>Project img</p>
                  </div>
                  <div class="portfolio-card-back">
                    <p>Project Description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div hidden={value !== 3}>
            <div className="row col-md-12 portfolio-container py-5">
              <div class="col-md-3 portfolio-card">
                <div class="portfolio-card-inner">
                  <div class="portfolio-card-front">
                    <p>Project img</p>
                  </div>
                  <div class="portfolio-card-back">
                    <p>Project Description</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 portfolio-card">
                <div class="portfolio-card-inner">
                  <div class="portfolio-card-front">
                    <p>Project img</p>
                  </div>
                  <div class="portfolio-card-back">
                    <p>Project Description</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 portfolio-card">
                <div class="portfolio-card-inner">
                  <div class="portfolio-card-front">
                    <p>Project img</p>
                  </div>
                  <div class="portfolio-card-back">
                    <p>Project Description</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 portfolio-card">
                <div class="portfolio-card-inner">
                  <div class="portfolio-card-front">
                    <p>Project img</p>
                  </div>
                  <div class="portfolio-card-back">
                    <p>Project Description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Portfolio;
