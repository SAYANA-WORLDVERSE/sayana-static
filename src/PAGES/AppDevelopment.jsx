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
import php from "../assets/php.png";
import next from "../assets/nexts.webp";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <link rel="canonical" href="/applicationdevelopment" />
      </Helmet>
      <section className="contact-hero">
        <div className="container-fluid hero-section">
          <div className="container">
            <div className="row p-md-2">
              <div className="col-md-12 d-flex align-items-center justify-content-center">
                <div className="hero-content text-center">
                  <h1 className="services-title">Application Development</h1>
                  <p className="services-para-content text-center">
                    Application development is a dynamic process. It is the
                    process of resuscitating targeted software products to
                    confront particular business difficulties or satisfy
                    specified user needs through sophisticated equipment and
                    technology. The team makes every effort to make sure that
                    the Application Development tools, the professionals are
                    devoted to utilizing careful planning and quality of
                    implementation and maintenance. Profound technological
                    knowledge and a clear commitment to the application state
                    allow for creating solutions that suitably handle our
                    clients’ system landscapes by employing a wide range of
                    technologies. All application development operations here
                    are broad-based and enhanced.
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
                  Apps are software programs for smartphones, tablets, and other
                  mobile devices, and they are the most visible manifestation of
                  what a software firm does. There has been the emergence of new
                  technologies like cross-platform development frameworks and
                  Progressive Web Apps, which have made applications much more
                  affordable and open. The trends in mobile app development are
                  exciting since we are one of the best application companies in
                  Hyderabad. Our skilled developers combine cutting-edge
                  technology with suitable methodologies to produce the most
                  powerful app that will work on any platform or device for you.
                  As leaders in native app design, hybrid solutions, and PWAs,
                  we are developing mobile applications for any specific need
                  and providing a solution. To keep growing, stay ahead of
                  mobile app development trends.
                </p>
              </div>
            </div>
            <div className="row p-md-5  justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title">Web Application</h1>
                <p className="ex-para">
                  Web applications are software applications that users access
                  over the Internet using a web browser. Unlike mobile
                  applications, web applications work on a browser and can be
                  used with several devices such as computers, laptops, tablets
                  and smart phones. Today, PWAs are using advanced technology
                  and a new functional programming language called WebAssembly .
                  For our company based in Hyderabad, it is critical to develop
                  advanced web applications using the most modern web
                  technologies. Our well-trained developers are experienced in
                  using all the modern frameworks and libraries to create the
                  most responsive and highly-performing web applications. Our
                  role is collaboration . We are always ready to provide support
                  with the effective solution of complex business needs and/or
                  beautiful and user-friendly GUI so that our customers never
                  have any problems or difficulties.
                </p>
              </div>
              <div className="col-md-6  mt-3  d-flex justify-content-center ">
                <img src={web4} alt="" className="web-img" />
              </div>
            </div>

            <div className="row p-md-5  justify-content-center align-items-center">
              <div className="col-md-6">
                <img src={web4} alt="" className="web-img" />
              </div>
              <div className="col-md-6  mt-3   ">
                <h1 className="services-title">E- Commerce Solutions</h1>
                <p className="ex-para">
                  E-commerce solutions refer to the software platforms and
                  applications that enable online buying or selling of products
                  and services. The booming demand for digital shopping
                  experiences has seen a technological revolution shaping the
                  e-commerce sector. Headless commerce, progressive web apps ,
                  advanced payment gateways are but some of the innovations
                  fueling this rapid growth. Our Hyderabad-based company is at
                  the forefront of pioneering e-commerce development that
                  capitalizes on ground breaking new trends. We integrate our
                  solutions seamlessly with various payment methods, shipping
                  providers, and inventory management systems. Whether you want
                  a custom-built e-commerce solution or an extension to your
                  existing platform, we deliver a second to none shopping
                  experience that does not just touch your business needs but
                  surpasses all your expectations
                </p>
              </div>
            </div>

            <div className="row p-md-5">
              <div className="col-md-12 d-flex align-items-center justify-content-center">
                <div className="hero-content text-center">
                  <h1 className="services-title">How We Do It ?</h1>
                  <p className="services-para-content">
                    Our multidisciplinary approach blends technical prowess,
                    tailored strategies, and cutting-edge technologies to
                    deliver user-centric, scalable solutions. We prioritize
                    long-term partnerships, collaboration, and continuous
                    adaptation to drive client success.
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
                          {" "}
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
