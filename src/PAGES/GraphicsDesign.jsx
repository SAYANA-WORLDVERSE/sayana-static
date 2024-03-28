import React, { Fragment } from "react";
import "../Style/Services.css";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web2 from "../assets/web2.png";
import web1 from "../assets/web1.png";
import { photos2 } from "../COMPONENTS/Photo";
import ps from "../assets/photoshop.png";
import ai from "../assets/illustrator.png";
import ae from "../assets/after-effects.png";
import figma from "../assets/figma.png";
import canva from "../assets/canva.png";
import procreate from "../assets/procreate.png";
import sketch from "../assets/sketch.png";
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

const GraphicsDesign = () => {
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
        <link rel="canonical" href="/graphicsdesign" />
      </Helmet>
      <section className="contact-hero">
        <div className="container-fluid hero-section">
          <div className="container">
            <div className="row p-md-5">
              <div className="col-md-12 d-flex align-items-center justify-content-center">
                <div className="hero-content text-center">
                  <h1 className="services-title">Graphics Design</h1>
                  <p className="services-para-content">
                    Graphic Design is the creation of visual products to convey
                    ideas and information. Initially, graphic design was
                    two-dimensional, but recent developments such as motion
                    graphics and 3D models have brought graphic design to life.
                    Hyderabad-based, our company specializes in cutting-edge
                    graphic design. Our firm is exceptional at including
                    cutting-edge graphics technologies in 3D rendering, motion
                    graphics, professional graphic illustration, and creativity.
                    Our experts discuss strategies and ideas with clients to
                    provide the best solution for brands and generate visual
                    items. Our graphic style is one of the finest available:
                    simultaneously appealing and informational. Our work is more
                    than static designs; we also create motion graphics.
                  </p>
                </div>
              </div>
            </div>

            <div className="row p-md-5 mt-5 justify-content-center align-items-center ">
              <div className="col-md-6  d-flex justify-content-center ">
                <img src={web3} alt="" className="web-img" />
              </div>
              <div className="col-md-6 mt-3">
                <h1 className="services-title"> UI/UX Design</h1>
                <p className="ex-para">
                  User Interface (UI) & User Experience (UX) Design designing is
                  a creative of developing intuitive, visually attractive and
                  user-friendly digital interfaces. The advent of new technology
                  and increased usage like responsive designs, gesture-based
                  interactions, advanced prototyping tools have made it more
                  virginal and user-focused. In Hyderabad, our company is
                  committed to delivering leading UI/UX design to our customers
                  and making use of all these technologies. As a team of
                  professional UI/UX designers, researchers, and developers, we
                  consider the needs of our customers’ users, customers, persona
                  and potential users, behaviors, and preferences. We are proud
                  of our ability to create visually appealing user interfaces
                  suitable for all devices and platform users in the handheld
                  today.
                </p>
              </div>
            </div>
            <div className="row p-md-5 mt-5 justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title">Logo Design</h1>
                <p className="ex-para">
                  Logo Designing is a popular art of designing a visual mark or
                  symbol that expresses a brand’s identity and value. However,
                  several new technologies, such as vector graphics software,
                  color theory algorithms, and trend analysis tools, have made
                  it more data-driven and adaptive. Our company, located in
                  Hyderabad, is experienced in delivering and deploying
                  futuristic technologies to create more impactful logos. Our
                  services engage a competent team of graphic designers and
                  branding experts who collaborates with the client to capture
                  their brand’s essence, target audience, and Market
                  positioning. Our offered services are tailored mainly to have
                  your desired logo, attractive, timeless, versatile, and
                  memorable. Additionally, we also utilize graphic designs based
                  on vectors, the symbolism of color psychology , and cultural
                  trends to evoke a response from your targeted audience .
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
                <h1 className="services-title">Brochure Design</h1>
                <p className="ex-para">
                  Brochure Design includes the process of creating both visually
                  appealing and informative printed materials to communicate a
                  company’s products, services, or brand identity. Recent
                  advances in technology such as print-on-demand services,
                  augmented reality integration, and advanced layout software
                  make brochure design more dynamic and engaging than ever
                  before. As a Hyderabad-based company, we specialize in
                  providing brochure design that takes full advantage of these
                  cutting-edge technologies. Our team of graphic designers,
                  copywriters, and print professionals will help you convey your
                  message most effectively. We pride ourselves on our many years
                  of experience as a brochure design company and our ability to
                  offer our customers an extraordinarily beautiful, effective,
                  and highly informative brochure.
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
              <div className="container about-us-content  mt-5 p-5">
                <h1 className="title about">
                  <span className="color-title">Tools We Use</span>
                </h1>
              </div>
            </section>

            <div className=" d-flex flex-wrap tools-container">
              <div className=" tools-card d-flex flex-column ">
                <img src={ps} alt="" />
                <p className="ex-para">Adobe Photoshop</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={ai} alt="" />
                <p className="ex-para">Adobe Illustrator</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={ae} alt="" />
                <p className="ex-para">Adobe After Effects</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={figma} alt="" />
                <p className="ex-para">Figma</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={procreate} alt="" />
                <p className="ex-para">Procreate</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={canva} alt="" />
                <p className="ex-para">Canva</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={sketch} alt="" />
                <p className="ex-para">Sketch</p>
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
            >
              {photos2.map((photos, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className=" portfolio-card">
                      <div className="portfolio-card-details">
                        <img src={photos.src} alt="" className="port-img" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
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

export default GraphicsDesign;
