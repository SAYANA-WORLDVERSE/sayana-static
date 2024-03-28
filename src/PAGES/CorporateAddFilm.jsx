import React, { Fragment } from "react";
import "../Style/Services.css";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web2 from "../assets/web2.png";
import web1 from "../assets/web1.png";
import { photos } from "../COMPONENTS/Photo";
import meta from "../assets/meta.png";
import google from "../assets/google-ads.png";
import analytics from "../assets/google.png";
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

const Corporate = () => {
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
        <link rel="canonical" href="/digitalmarketing" />
      </Helmet>
      <section className="contact-hero">
        <div className="container-fluid hero-section">
          <div className="container">
            <div className="row p-md-5">
              <div className="col-md-12 d-flex align-items-center justify-content-center">
                <div className="hero-content text-center">
                  <h1 className="services-title">Corporate Ad Films</h1>
                  <p className="services-para-content">
                    Corporate Ad Films are promotional videos made to advertise
                    the products or services of a company, or to communicate the
                    brand of a company. Due to the development of certain types
                    of technologies such as high-resolution cameras,
                    sophisticated video editing software, and visually realistic
                    effects, corporate ad films have become more interactive and
                    effective. Our company located in Hyderabad is specialized
                    in creating the most interesting corporate ad films that
                    utilize cutting-edge technologies. Our team of experienced
                    videographers, editors, and animators cooperate with
                    clients, understand the message they wish to communicate,
                    and develop an interesting visual story that is appealing to
                    the target audience. Our high-quality and visually appealing
                    ad films help the clients to share the message and connect
                    with the audience emotionally.
                  </p>
                </div>
              </div>
            </div>

            <div className="row p-md-5 mt-5 justify-content-center align-items-center ">
              <div className="col-md-6  d-flex justify-content-center ">
                <img src={web3} alt="" className="web-img" />
              </div>
              <div className="col-md-6 mt-3">
                <h1 className="services-title">Corporate videos</h1>
                <p className="ex-para">
                  Corporate videos are a vital mode of communication for
                  businesses to get their messages across, present their
                  products or services, and communicate their company culture
                  and values . Corporate videos have also continued to become
                  more immersive and data-driven with the use of new
                  technologies like 4K video, virtual reality , or VR, and video
                  analytics. For our company, we have started doing corporate
                  videos in Hyderabad . We specialize in making impactful videos
                  for businesses that harness such technologies. Our team is
                  made up of competent videographers, editors, and motion
                  graphic designers who know how to respond to a customer’s
                  unique story-telling requirements.
                </p>
              </div>
            </div>
            <div className="row p-md-5 mt-5 justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title">Commercial Advertisement</h1>
                <p className="ex-para">
                  Commercial Advertisements are advertising materials aimed at
                  promoting products, services or brands to consumers.
                  Commercial advertisements have become increasingly more
                  personalized and data driven with the emergence of new
                  technologies such as programmatic advertising, interactive
                  video ads, and advanced targeting algorithms. This is an ad
                  for a company from Hyderabad. We create powerful commercial
                  advertisements that harness the latest technological
                  advancements. Our creative strategists, copywriters and
                  digital marketing experts work intimately with clients to
                  develop a deep understanding of their target audience and
                  create ad campaigns that connect with every demographic. Our
                  ad campaigns are designed to grab the viewer’s attention and
                  drive real outcomes through modern targeting and analytics.
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
                <h1 className="services-title">Product Demonstration</h1>
                <p className="ex-para">
                  A product demonstration is a visual presentation meant to
                  illustrate the features, advantages, and operations of a
                  product or service. Thanks to the advancement of cutting-edge
                  technologies such as augmented reality , electric 3D models,
                  and live-streaming channels, this is now even more immersive
                  and engaging. In Hyderabad, our company is a product
                  exhibition specialist. Our videographer, animation, and
                  subject matter team works together with a customer to produce
                  the most exciting product experiments. We develop an
                  interactive presentation based on the client’s products unique
                  selling characteristics, which it reflects in a refreshing
                  manner. We take great pride get not only in educating
                  potential clients but also in enchanting them. We integrate AR
                  experiences, interactive 3D templates, and live streaming
                  features in a single product demonstration seamless.
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
                  <span className="color-title">Our Projects</span>
                </h1>
              </div>
            </section>
          </div>
          <section className="our-Project">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={0}
              slidesPerView={4}
              breakpoints={breakpoint}
              // loop={true}
              autoplay={{
                delay: 1000,
              }}
              speed={2000}
            >
              {photos.map((photos, index) => {
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

export default Corporate;
