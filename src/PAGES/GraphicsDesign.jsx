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
                    Our Graphics Design services blend creativity with strategic
                    thinking, producing visually captivating and brand-aligned
                    assets. Utilizing industry-leading software and design
                    principles, we craft compelling logos, visuals, and
                    marketing collateral. Our approach emphasizes aesthetic
                    appeal, functionality, and alignment with client objectives
                    to enhance brand recognition and engagement.
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
                  Our UI/UX Design services prioritize intuitive interfaces and
                  user-centric experiences. Leveraging industry best practices,
                  wireframing, and prototyping tools, we create seamless
                  interactions. Our approach focuses on balancing aesthetics
                  with functionality, ensuring optimal user engagement,
                  accessibility, and satisfaction across digital platforms.
                </p>
              </div>
            </div>
            <div className="row p-md-5 mt-5 justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title">Logo Design</h1>
                <p className="ex-para">
                  Craft a distinctive and impactful logo with our expert design
                  services. Our team meticulously captures your brand's essence,
                  values, and vision to create a memorable and versatile logo
                  that resonates with your target audience. By blending
                  creativity, strategic thinking, and design expertise, we
                  deliver a logo that not only stands out but also reinforces
                  brand identity, fosters recognition, and establishes a strong
                  foundation for cohesive brand communication across various
                  platforms.
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  suscipit deleniti ad distinctio nisi non pariatur magnam
                  labore laudantium vero officia unde, enim ullam nesciunt
                  consequatur assumenda maiores animi consequuntur.
                </p>
              </div>
            </div>

            <div className="row p-md-5">
              <div className="col-md-12 d-flex align-items-center justify-content-center">
                <div className="hero-content text-center">
                  <h1 className="services-title">How We Do It ?</h1>
                  <p className="services-para-content">
                    Our expert brochure design services aim to convey your
                    brand's story and offerings effectively. By combining
                    compelling visuals with concise content, we create
                    informative and engaging brochures that resonate with your
                    target audience. Whether it's promoting products, services,
                    or events, our designs capture attention, drive engagement,
                    and encourage readers to take action, enhancing brand
                    visibility and fostering meaningful connections.
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
