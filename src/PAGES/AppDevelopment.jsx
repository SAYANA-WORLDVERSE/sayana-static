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

const AppDevelopment = () => {
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
      <section className="contact-hero">
        <div className="container-fluid hero-section">
          <div className="container">
            <div className="row p-md-2">
              <div className="col-md-12 d-flex align-items-center justify-content-center">
                <div className="hero-content text-center">
                  <h1 className="services-title">Application Development</h1>
                  <p className="services-para-content">
                    Application Development at Sayana Worldverse embodies a
                    comprehensive approach to crafting bespoke software
                    solutions. Leveraging cutting-edge technologies and
                    methodologies like Python, Java, and C#, our expert team
                    ensures scalability, robustness, and optimal user
                    experience. Through agile frameworks, DevOps integration,
                    and continuous delivery, we deliver secure, efficient
                    applications tailored to align with your business
                    objectives.
                  </p>
                </div>
              </div>
            </div>

            <div className="row p-md-5  justify-content-center align-items-center ">
              <div className="col-md-6  d-flex justify-content-center ">
                <img src={web3} alt="" className="web-img" />
              </div>
              <div className="col-md-6 mt-3">
                <h1 className="services-title">Mobile Application</h1>
                <p className="ex-para">
                  Mobile Application Development at Sayana Worldverse employs
                  native and hybrid frameworks like React Native and Flutter.
                  Utilizing agile methodologies and API integrations, we
                  architect scalable, user-centric mobile solutions. Through
                  meticulous UI/UX design, performance optimization, and cloud
                  integration, we ensure seamless experiences across iOS,
                  Android, and cross-platform environments.
                </p>
              </div>
            </div>
            <div className="row p-md-5  justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title">Web Application</h1>
                <p className="ex-para">
                  In Web Application Development, Sayana Worldverse harnesses
                  technologies such as Node.js, Angular, and Django. Employing
                  MVC architectures and RESTful APIs, we craft scalable,
                  responsive web solutions. Through agile development practices,
                  database integration, and front-end optimization, we deliver
                  robust applications tailored for performance, security, and
                  user engagement across browsers.
                </p>
              </div>
              <div className="col-md-6  mt-3  d-flex justify-content-center ">
                <img src={web4} alt="" className="web-img" />
              </div>
            </div>

            <div className="row p-md-5  justify-content-center align-items-center">
              <div className="col-md-6   d-flex justify-content-center ">
                <img src={web2} alt="" className="web-img" />
              </div>
              <div className="col-md-6 mt-3">
                <h1 className="services-title">Web Development</h1>
                <p className="ex-para">
                  At Sayana Worldverse, Web Development leverages technologies
                  like HTML5, CSS3, JavaScript, and frameworks such as React and
                  Vue.js. Employing RESTful APIs and microservices architecture,
                  we architect scalable and interactive web solutions. Through
                  agile methodologies, CI/CD pipelines, and cloud deployments,
                  we ensure optimized performance, security, and user-centric
                  experiences
                </p>
              </div>
            </div>

            <div className="row p-md-5  justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title">E- Commerce Solutions</h1>
                <p className="ex-para">
                  At Sayana Worldverse, we specialize in E-Commerce Solutions
                  leveraging platforms like Magento, WooCommerce, and Shopify.
                  Employing secure payment gateways, API integrations, and cloud
                  hosting, we create scalable, user-friendly online storefronts.
                  Our approach emphasizes UI/UX design, inventory management,
                  and analytics to optimize sales, customer engagement, and
                  business growth.
                </p>
              </div>
              <div className="col-md-6  mt-3  d-flex justify-content-center ">
                <img src={web4} alt="" className="web-img" />
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
                        Once your project is complete, we're still here for you.
                        From delivery to ongoing support, we're committed to
                        your success.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section>
              <div className="container about-us-content   p-5">
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

export default AppDevelopment;
