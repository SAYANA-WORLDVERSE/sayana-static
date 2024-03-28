import React, { Fragment } from "react";
import "../Style/Services.css";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web2 from "../assets/web2.png";
import web1 from "../assets/web1.png";
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

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import team from "../assets/team.jpg";
import { Helmet } from "react-helmet-async";

const Productdevelopment = () => {
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
        <link rel="canonical" href="/productdevelopment" />
      </Helmet>
      <section className="contact-hero">
        <div className="container-fluid hero-section">
          <div className="container">
            <div className="row p-md-5">
              <div className="col-md-12 d-flex align-items-center justify-content-center">
                <div className="hero-content text-center">
                  <h1 className="services-title">Product Development</h1>
                  <p className="services-para-content">
                    Product development is an ever-changing procedure of
                    conceiving and designing new or redefined items that align
                    an end-to-end framework. By powering advanced implementation
                    technology and advanced tools, our methodology fully
                    integrates with software development’s finest procedures.
                    This state-of-the-art workflow enables flexibility and
                    performance at every stage of the product development
                    process. Utilizing a consumer-first attitude and
                    comprehensive market research, our product development and
                    design approaches within the marketing achieve unrivaled
                    results. We take pleasure in the ability to operate a
                    thorough product development workflow that evolves with the
                    market outright demands, ensuring our position as pioneers
                    in creating solutions designed to excel expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="row p-md-5 mt-5 justify-content-center align-items-center ">
              <div className="col-md-6  d-flex justify-content-center ">
                <img src={web3} alt="" className="web-img" />
              </div>
              <div className="col-md-6 mt-3">
                <h1 className="services-title">CRM</h1>
                <p className="ex-para">
                  CRM solutions stand for Customer Relationship Management
                  system that allows you to implement and manage relationships
                  with existing and potential clients. In the light of emerging
                  technologies such as clouds, AI/machine learning, and smart
                  analytics, current CRM systems have become more advanced and
                  intelligent. We are an IT company that is based in Hyderabad,
                  and we focus on developing CRM systems using cutting-edge
                  technology. Our organization has a team of well-versed
                  developers and business analysts who have the depth knowledge
                  and experience to listen to your requirements, understand your
                  business process, and create the solution that fits the very
                  idea of your imagination. We aim at creating highly
                  user-friendly and robust CRM systems at a scale to meet the
                  entities.
                </p>
              </div>
            </div>
            <div className="row p-md-5 mt-5 justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title">SAAS</h1>
                <p className="ex-para">
                  SaaS stands for software and is a method of software
                  dissemination in which a vendor licenses an application to
                  clients for usage through the subscription technique. A cloud
                  provider installs and maintains the software as a
                  client-authorized source. Due to the development of
                  technologies like SMA containers, units, and serverless
                  computing, SaaS platforms have grown more adaptable, scalable,
                  and adaptable to the growth of software. We are an IT
                  solutions company that is based in Hyderabad, is a company
                  that focuses on creating innovative SaaS software that employs
                  cutting-edge technologies. Our team employs agile software
                  design approaches and DevOps procedures that assure rapid
                  developing, deployment, and delivery of new features. Our
                  applications are built with the highest level of security,
                  functionality, and ease of use to enable our clients to use
                  sophisticated new versions and apps without any offline
                  installation or maintenance.
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
                <h1 className="services-title">Custom CRM</h1>
                <p className="ex-para">
                  Custom SaaS solutions are cloud-based applications developed
                  to match a business’s or organization’s specific needs. Making
                  custom SaaS applications has become simpler and more
                  productive in the last years, with the expansion of novel
                  technologies such as low-code/no-code platforms, headless
                  architectures, and AI-driven development. Our enterprise is
                  situated in Hyderabad, and we are experts in designing highly
                  custom-made SaaS solutions applying these cutting-edge
                  technologies . Our group of seasoned developers and business
                  professionals collaborates with our customers to create
                  exclusive SaaS applications that match the former’s current
                  designs and procedures. We strive to make scalable and
                  protected SaaS platform.
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
                <h1 className="title   about">
                  <span className="color-title">Our Projects</span>
                </h1>
              </div>
            </section>
          </div>
          <section className="our-Project">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={4}
              breakpoints={breakpoint}
              navigation={true}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="team-card d-flex justify-content-center"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card d-flex justify-content-center"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card d-flex justify-content-center"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card d-flex justify-content-center"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card d-flex justify-content-center"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card d-flex justify-content-center"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card d-flex justify-content-center"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="team-card d-flex justify-content-center"></div>
              </SwiperSlide>
            </Swiper>
          </section>

          <div className="container mt-5">
            <section className="">
              <div className="container mt-5">
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

export default Productdevelopment;
