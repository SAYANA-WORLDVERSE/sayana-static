import React, { Fragment, useState } from "react";
import heroimg from "../assets/about-hero.png";
import "../Style/Portfolio.css";
import { Tabs, Tab } from "@mui/material";
import portfolio from "../assets/about-us.png";

const Portfolio = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <section className="contact-hero">
        <div className="container-fluid hero-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="hero-content">
                  <h3 className="title">Portfolio </h3>
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
            <Tab label="All" className="tab" />
            <Tab label="Web" className="tab" />
            <Tab label="App" className="tab" />
            <Tab label="Graphics Design" className="tab" />
          </Tabs>

          <div hidden={value !== 0}>
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
          <div hidden={value !== 1}>
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
