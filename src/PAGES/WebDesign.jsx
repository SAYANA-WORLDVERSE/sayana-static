import React, { Fragment } from "react";
import "../Style/Services.css";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web2 from "../assets/web2.png";
import web1 from "../assets/web1.png";
import laptop from "../assets/adithya.png";
import soudha from "../assets/soudha.png";
import srinivasa from "../assets/srinivasa.png";
import ortho from "../assets/ortho.png";
import haripriya from "../assets/haripriya-project.png";
import meshler from "../assets/meshler.png";
import care from "../assets/careofcareers.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import bootstrap from "../assets/bootstrap.png";
import mui from "../assets/mui.png";
import react from "../assets/React.png";
import node from "../assets/nodejs.png";
import express from "../assets/expressjs.png";
import mongo from "../assets/mongo.png";
import sql from "../assets/sql.png";
import php from "../assets/php.png";
import next from "../assets/nexts.webp";
import { Helmet } from "react-helmet-async";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const WebDesign = () => {
  const breakpoint = {
    310: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1030: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };
  return (
    <Fragment>
      <Helmet>
        <link rel="canonical" href="/webdesign" />
      </Helmet>
      <section className="contact-hero">
        <div className="container-fluid hero-section">
          <div className="container">
            <div className="row p-md-5">
              <div className="col-md-12 d-flex align-items-center justify-content-center">
                <div className="hero-content text-center">
                  <h1 className="services-title">Web Design & Development</h1>
                  <p className="services-para-content">
                    The world of web design and development is one of the most
                    rapidly changing ones . Designers and developers have a kind
                    of symbiotic relationship in creating custom software
                    solutions, which enables the best software development firm
                    to implement the most advanced technologies and software
                    consulting services in the most visually attractive and
                    convenient for use websites. The fields of user experience
                    (UX) and interface design (UI) outscore the traditional
                    approaches, increasing performance quality and
                    responsiveness of websites provided by IT solutions in
                    Hyderabad.
                  </p>
                </div>
              </div>
            </div>

            <div className="row p-md-5 mt-5 justify-content-center align-items-center ">
              <div className="col-md-6  d-flex justify-content-center ">
                <img src={web3} alt="" className="web-img" />
              </div>
              <div className="col-md-6 mt-3">
                <h1 className="services-title">Web Design</h1>
                <p className="ex-para">
                  Web Design in Hyderabad is a creative process that focuses on
                  developing aesthetic, high-quality, and comprehensive
                  websites, and Sayana Worldverse is a firm that undoubtedly
                  provides some of the best web design services. Our web design
                  approach is highly active and involves combining creativity
                  and active implementation to develop the best designs around.
                  We work with the current technologies and even develop our
                  software to integrate web design software proactively. We have
                  the best experts in web design available in every aspect of
                  the web business, from graphic designers who create stunning
                  landing pages to logo designers, and much more. We are
                  continually striving to improve and meet our customers’
                  expectations in all circumstances makes us one of the top web
                  design companies in Hyderabad.
                </p>
              </div>
            </div>
            <div className="row p-md-5 mt-5 justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title">Web Development</h1>
                <p className="ex-para">
                  Web development is a complicated chain of processes aimed at
                  creating and maintaining web resources. It includes front-end
                  and back-end work to maintain a digital culture on the
                  internet. We seek to provide web development using the best
                  proven technologies and web development tools, which include
                  several languages like HTML, CSS, and Javascript to create
                  dynamic and responsive websites. Our staff is qualified and
                  apply the latest programming languages, software frameworks,
                  and web development frameworks in providing solutions. We
                  manage custom software integration to ensure efficient and
                  dynamic web applications are integrated and implemented. The
                  market is currently occupied by many other software vendors,
                  but we try to maintain our core innovative solutions to ensure
                  we remain competitive in web development.
                </p>
              </div>
              <div className="col-md-6  mt-3  d-flex justify-content-center ">
                <img src={web4} alt="" className="web-img" />
              </div>
            </div>

            <div className="row p-md-5 mt-5 justify-content-center align-items-center">
              <div className="col-md-6   d-flex justify-content-center ">
                <img src={web2} alt="" className="web-img" />
              </div>
              <div className="col-md-6 mt-3">
                <h1 className="services-title">Software Development</h1>
                <p className="ex-para">
                  Software Development is a well-structured method to create,
                  encode, test, and maintains custom software. The purpose is to
                  develop high-quality software that satisfies our client’s
                  demand. As the most favorable software development firm in
                  Hyderabad, our software development tactics encompass
                  synergistic implementation of futuristic technologies and IT
                  solutions with a wide variation in programming languages,
                  frameworks, and tools. We are proficient in software
                  exploitation evolution, ensuring a scalable and reliable
                  solution with the most recent evolution in software
                  technology. Our accomplished and qualified crew ensures
                  excellent quality custom software at any time. We focus on
                  user experience and software application method in our
                  software development life cycle . Moreover, we concentrate on
                  software application safety and performance.
                </p>
              </div>
            </div>

            <div className="row p-md-5">
              <div className="col-md-12 d-flex align-items-center justify-content-center">
                <div className="hero-content text-center">
                  <h1 className="services-title">How We Do It ?</h1>
                  <p className="services-para-content">
                  Our multidisciplinary approach blends technical prowess, tailored strategies, and cutting-edge technologies to deliver user-centric, scalable solutions. We prioritize long-term partnerships, collaboration, and continuous adaptation to drive client success.
                  </p>
                </div>
              </div>
            </div>
            <div className="row p-md-5">
              <div className="col-md-6">
                <div class="accordion" id="accordianWeb">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <div
                        class="accordion-button collapsed "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Discovery
                      </div>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordianWeb"
                    >
                      <div class="accordion-body">
                        <p>
                          Start by sharing your ideas and goals with us. We'll
                          listen, understand your needs, and lay the groundwork
                          for success.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <div
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Planning
                      </div>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordianWeb"
                    >
                      <div class="accordion-body">
                        <p>
                          Collaborate with our team to create a customized plan.
                          We'll define milestones, set a timeline, and ensure a
                          clear path forward.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="accordion" id="accordianWeb2">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <div
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseWebTwo"
                        aria-expanded="false"
                        aria-controls="collapseWebTwo"
                      >
                        Development and Design
                      </div>
                    </h2>
                    <div
                      id="collapseWebTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordianWeb2"
                    >
                      <div class="accordion-body">
                        <p>
                          {" "}
                          Watch as we turn your ideas into reality. Whether it's
                          custom software, web design, app development, or more,
                          our experts get to work.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <div
                        class="accordion-button collapsed "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseweb"
                        aria-expanded="false"
                        aria-controls="collapseweb"
                      >
                        Receive Ongoing Support
                      </div>
                    </h2>
                    <div
                      id="collapseweb"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordianWeb2"
                    >
                      <div class="accordion-body">
                        <p>
                          Once your project is complete, we're still here for
                          you. From delivery to ongoing support, we're committed
                          to your success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section>
              <div className="container about-us-content  mt-5 p-5">
                <h1 className="title about">
                  <span className="color-title">Technologies We Use</span>
                </h1>
              </div>
            </section>

            <div className=" d-flex flex-wrap tools-container">
              <div className=" tools-card d-flex flex-column ">
                <img src={html} alt="" />
                <p className="ex-para">HTML</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={css} alt="" />
                <p className="ex-para">CSS</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={javascript} alt="" />
                <p className="ex-para">Java Script</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={bootstrap} alt="" />
                <p className="ex-para">Bootstrap</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={mui} alt="" />
                <p className="ex-para">Material UI</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={react} alt="" />
                <p className="ex-para">React JS</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={next} alt="" className="next" />
                <p className="ex-para">Next JS</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={node} alt="" />
                <p className="ex-para">Node JS</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={express} alt="" />
                <p className="ex-para">Express JS</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={mongo} alt="" />
                <p className="ex-para">Mongo DB</p>
              </div>

              <div className=" tools-card d-flex flex-column ">
                <img src={php} alt="" />
                <p className="ex-para">PHP</p>
              </div>
            </div>

            <section>
              <div className="container about-us-content  mt-5 p-5">
                <h1 className="title about">
                  <span className="color-title">Our Projects</span>
                </h1>
              </div>
            </section>
          </div>
          <section className="our-Project">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={10}
              slidesPerView={4}
              breakpoints={breakpoint}
              loop={true}
              autoplay={{
                delay: 10,
              }}
              speed={2500}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className=" portfolio-card">
                  <div className="portfolio-card-details">
                    <img src={laptop} alt="" className="port-img" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" portfolio-card">
                  <div className="portfolio-card-details">
                    <img src={soudha} alt="" className="port-img" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" portfolio-card">
                  <div className="portfolio-card-details">
                    <img src={srinivasa} alt="" className="port-img" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" portfolio-card">
                  <div className="portfolio-card-details">
                    <img src={ortho} alt="" className="port-img" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" portfolio-card">
                  <div className="portfolio-card-details">
                    <img src={haripriya} alt="" className="port-img" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" portfolio-card">
                  <div className="portfolio-card-details">
                    <img src={meshler} alt="" className="port-img" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" portfolio-card">
                  <div className="portfolio-card-details">
                    <img src={care} alt="" className="port-img" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>

          <div className="container mt-5">
            <section className="mt-5">
              <div className="container ">
                <div className="news-letter  d-md-flex align-items-center justify-content-between">
                  <div className="col-md-6 news-content">
                    <p className="news-para">
                      Lets Create a Measurable Impact On
                    </p>
                    <h1 className="news-title">Your Bussiness </h1>
                    <button className="subscribe-btn">Design A Quote</button>
                  </div>
                  <div className="col-md-6 right-col d-flex justify-content-center">
                    <img src={web1} alt="" className="web1" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WebDesign;
