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

const DigitalMarketing = () => {
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
                  <h1 className="services-title">Digital Marketing</h1>
                  <p className="services-para-content">
                    Sayana Worldverse employs AI-driven analytics, SEO
                    algorithms, and programmatic advertising in our Digital
                    Marketing strategies. Leveraging machine learning,
                    data-driven insights, and CRM integrations, we optimize
                    campaigns across platforms. Our approach focuses on
                    ROI-driven tactics, real-time analytics, and personalized
                    content delivery to enhance engagement and conversions
                    effectively.
                  </p>
                </div>
              </div>
            </div>

            <div className="row p-md-5 mt-5 justify-content-center align-items-center ">
              <div className="col-md-6  d-flex justify-content-center ">
                <img src={web3} alt="" className="web-img" />
              </div>
              <div className="col-md-6 mt-3">
                <h1 className="services-title">Social Media Optimization</h1>
                <p className="ex-para">
                  Sayana Worldverse enhances brand visibility through Social
                  Media Optimization (SMO). Utilizing algorithms, engagement
                  analytics, and content strategy, we tailor campaigns for
                  platforms like Facebook, Instagram, and Twitter. By leveraging
                  user behavior insights, hashtags, and multimedia content, we
                  amplify reach, foster community engagement, and drive targeted
                  interactions.
                </p>
              </div>
            </div>
            <div className="row p-md-5 mt-5 justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title">Social media marketing</h1>
                <p className="ex-para">
                  Sayana Worldverse harnesses social media algorithms,
                  influencer partnerships, and data analytics in our Social
                  Media Marketing strategies. Utilizing AI tools, targeted
                  advertising, and engagement metrics, we amplify brand
                  visibility and audience engagement across platforms. Our
                  approach emphasizes content optimization, community building,
                  and ROI-centric campaigns for impactful digital presence.
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
                <h1 className="services-title">SEO</h1>
                <p className="ex-para">
                  At Sayana Worldverse, we optimize SEO strategies using
                  semantic search, SERP analytics, and algorithmic updates.
                  Employing keyword research, on-page/off-page optimization, and
                  mobile responsiveness, we enhance organic visibility. Our SEO
                  approach integrates technical audits, backlink strategies, and
                  content optimization to drive sustainable rankings and
                  maximize online presence.
                </p>
              </div>
            </div>

            <div className="row p-md-5 mt-5 justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title">Search Engine Marketing</h1>
                <p className="ex-para">
                  Sayana Worldverse excels in Search Engine Marketing (SEM) by
                  utilizing PPC algorithms, keyword optimization, and A/B
                  testing methodologies. Leveraging Google Ads, Bing Ads, and
                  remarketing strategies, we maximize visibility and
                  conversions. Our SEM approach emphasizes data analytics, bid
                  management, and targeted ad placements to drive qualified
                  traffic and ROI.
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
                <h1 className="services-title"> Pay-Per Click</h1>
                <p className="ex-para">
                  Sayana Worldverse excels in Pay-Per-Click strategies,
                  leveraging platforms like Google Ads and Bing Ads. Utilizing
                  advanced bidding strategies, keyword optimization, and
                  conversion tracking, we drive targeted traffic and maximize
                  ROI. Our data-driven approach and continuous campaign
                  refinement ensure optimal ad placements and cost-effective
                  results for your business.
                </p>
              </div>
            </div>

            <div className="row p-md-5 mt-5 justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title">Branding Services</h1>
                <p className="ex-para">
                  Sayana Worldverse crafts compelling Branding Services tailored
                  to resonate with your target audience. Utilizing market
                  research, visual identity design, and storytelling, we
                  establish a distinct brand voice and presence. Our approach
                  emphasizes consistency, emotional connection, and strategic
                  positioning to foster brand loyalty and market
                  differentiation.
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
                <h1 className="services-title"> Content Marketing Services</h1>
                <p className="ex-para">
                  Harnessing data-driven insights and innovative storytelling
                  techniques, our Content Marketing Services prioritize SEO
                  optimization and multi-channel distribution strategies. By
                  creating compelling, value-driven content, we aim to enhance
                  audience engagement, establish brand authority, and foster
                  lasting customer relationships through authentic narratives
                  and targeted messaging.
                </p>
              </div>
            </div>

            <div className="row p-md-5 mt-5 justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title"> Email Marketing Services</h1>
                <p className="ex-para">
                  Utilizing targeted segmentation, personalized content, and
                  automation tools, our Email Marketing Services optimize
                  engagement and conversion rates. Incorporating A/B testing,
                  analytics-driven strategies, and GDPR compliance, we craft
                  impactful campaigns. Our approach focuses on delivering
                  tailored messages, enhancing brand loyalty, and maximizing ROI
                  through effective email communication.
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
                  <span className="color-title">Tools We Use</span>
                </h1>
              </div>
            </section>

            <div className=" d-flex flex-wrap tools-container">
              <div className=" tools-card d-flex flex-column ">
                <img src={meta} alt="" />
                <p className="ex-para">Facebook Ads</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={google} alt="" />
                <p className="ex-para">Google Ads</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={analytics} alt="" />
                <p className="ex-para">Google Analytics</p>
              </div>

              <div className=" tools-card d-flex flex-column ">
                <img src={procreate} alt="" />
                <p className="ex-para">Procreate</p>
              </div>
              <div className=" tools-card d-flex flex-column ">
                <img src={canva} alt="" />
                <p className="ex-para">Canva</p>
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

export default DigitalMarketing;
