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
                    Harness our expertise in Web Design & Development to
                    architect scalable, responsive, and SEO-optimized digital
                    platforms. Leveraging front-end frameworks, back-end
                    integrations, and UI/UX principles, we deliver tailored
                    solutions that prioritize performance, security, and user
                    engagement. Transform your digital footprint with our
                    innovative IT-driven strategies and robust web solutions.
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
                  Our Web Design services prioritize responsive and
                  user-friendly interfaces. Leveraging modern design frameworks
                  and intuitive layouts, we ensure seamless navigation and
                  optimal user experiences across devices. By combining
                  aesthetics with functionality, we create engaging digital
                  environments that enhance your brand's online presence and
                  user engagement.
                </p>
              </div>
            </div>
            <div className="row p-md-5 mt-5 justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title">Web Development</h1>
                <p className="ex-para">
                  In our Web Development services, we employ agile
                  methodologies, API integrations, and cloud-based solutions.
                  Utilizing technologies like Node.js, React, and MongoDB, we
                  engineer scalable, secure, and efficient web applications.
                  Through meticulous coding practices and performance
                  optimization, we deliver robust solutions tailored to meet
                  your business objectives and user demands.
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
                  Our Software Development approach integrates DevOps practices,
                  microservices architecture, and containerization. Leveraging
                  languages like Python, Java, and cloud-native solutions, we
                  craft scalable, secure, and resilient software applications.
                  Through continuous integration and deployment, we ensure
                  optimized performance, adaptability, and alignment with
                  evolving business needs.
                </p>
              </div>
            </div>

            <div className="row p-md-5">
              <div className="col-md-12 d-flex align-items-center justify-content-center">
                <div className="hero-content text-center">
                  <h1 className="services-title">How We Do It ?</h1>
                  <p className="services-para-content">
                    We leverage a blend of expertise and innovation to deliver
                    exceptional results. By understanding client objectives,
                    conducting in-depth research, and employing strategic
                    methodologies, we tailor solutions to meet unique needs. Our
                    multidisciplinary approach combines creativity, technology,
                    and analytics to drive efficiency, engagement, and growth.
                    Through continuous learning and adaptability, we ensure
                    alignment with industry trends and client goals, fostering
                    long-term partnerships and success.
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
                      Once your project is complete, we're still here for you.
                        From delivery to ongoing support, we're committed to
                        your success.
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
