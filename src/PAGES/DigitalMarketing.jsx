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
                    Digital Marketing is the way to market products, services,
                    the brand through digital channels and platforms. Modern
                    technologies like artificial intelligence, machine learning,
                    and analytics have made digital marketing far more targeted,
                    personalized, and data-driven than before. We are in the
                    business of providing digital marketing solutions from
                    Hyderabad and specializing in using these innovative
                    technologies to deliver the best results. We have a team of
                    highly skilled marketers, data analysts, and technology
                    professionals who work closely with your business to
                    understand your business objectives and audience and the
                    market. We develop data-driven digital marketing campaigns
                    to not just reach your audience but deliver results. When we
                    say we are leveraging AI technologies for audience
                    targeting, predictive analytics, and personalized messaging
                    to our client’s digital .
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
                  SMO or Social Media Optimization is the process of optimizing
                  content and online presence for higher visibility, reach, and
                  engagement on different social media platforms. Increasing
                  demand for innovative technologies, including social media
                  analytics applications, influencer marketing platforms, and
                  AI-optimized content, have made SMO more data-driven and
                  targeted. The most incredible SMO services are combining these
                  new technologies . We are the most suitable company for you to
                  engage in your city, situated in Hyderabad . Our social media
                  experts, writers, and data analysts collaborate to learn about
                  our clients’ target consumers, market sectors, and marketing
                  objectives . We are constantly working to develop unique SMO
                  strategies that not only increase brand recognition but also
                  lead to considerable increases in traffic and conversion.
                </p>
              </div>
            </div>
            <div className="row p-md-5 mt-5 justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title">Social media marketing</h1>
                <p className="ex-para">
                  Social Media Marketing is the use of social media platforms to
                  market a product, service, or brand and interact actively with
                  one’s customers and target audiences. As businesses have
                  access and options to new technologies such as social media
                  automation tools, live streaming, and artificial
                  intelligence-based audience targeting features, SMM becomes
                  more efficient, interactive, and data-driven. We serve the
                  clients in our Hyderabad-based company with SMM campaigns,
                  which are attuned to the innovative technologies that drive
                  social media. We include a team of experienced social media
                  strategists, data analysts, and content creators to develop a
                  unique brand voice for our clients. Our SMM campaigns are
                  designed to provide highly engaging content that not only
                  increases brand awareness but also helps to build meaningful
                  connections between businesses and their audiences.
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
                  SEO stands for Search Engine Optimization, which is the
                  practice of optimizing websites and content to rank higher on
                  search engine results pages, thereby increasing visibility and
                  organic traffic. Today, as new technologies such as voice
                  search and artificial intelligence and machine learning
                  algorithms have evolved. We are a company based in Hyderabad,
                  known for providing state-of-the-art SEO services that take
                  advantage of these groundbreaking technologies. We are not
                  only determined to make our SEO clients happy, but we are also
                  determined to please them by creating a meaningful and
                  transparent approach that complicates profit strategies to not
                  only affect your website’s rankings but also run to give your
                  customers an unforgettable experience optimized by voice
                  search and artificial intelligence.
                </p>
              </div>
            </div>

            <div className="row p-md-5 mt-5 justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title">Search Engine Marketing</h1>
                <p className="ex-para">
                  SEM stands for Search Engine Marketing . It is a practice of
                  advertising a website or any online content using paid
                  advertisements on search engines such as Google, Bing, Yahoo
                  etc. Over these years , SEM has been evolved massively with
                  new technologies such as machine learning, automation, and
                  innovative bidding strategies. Thus, SEM has become more
                  data-driven, efficient, and targeted. Our company based in
                  Hyderabad has established a reputation for delivering unique
                  SEM solutions powered by the latest technologies. Our team
                  consisting of SEM experts team up with data analysts and
                  digital marketing to producer closely analyze the client’s
                  data to deliver optimal SEM services. We provide Data-driven
                  SEM, we not only look to drive relevant traffic to our client
                  but the best is return on investment.
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
                  Pay-Per-Click is an online advertising model in which
                  advertisers pay a fee every time one of their ads is clicked.
                  Over the years, new technologies have been introduced, such as
                  machine learning algorithms, automated bid strategies, and
                  advanced audience targeting tools, that have made PPC
                  advertising more accurate, efficient, and data-driven. Our
                  company is a leading provider of state-of-the-art PPC
                  solutions in Hyderabad . We have a team of skilled PPC
                  specialists, data analysts, and digital marketing
                  professionals with a wealth of expertise and expertise working
                  with clients to understand their marketing aims, target
                  demographic, and business market. We excel at creating PPC
                  campaigns that are not only highly successful at attracting
                  targeted clicks but but excellently focused on return on ad
                  spend
                </p>
              </div>
            </div>

            <div className="row p-md-5 mt-5 justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title">Branding Services</h1>
                <p className="ex-para">
                  Branding Services are about strategically developing and
                  promoting the distinctly unique identity, values, and
                  personality of a company. Due to the fact that it has become
                  more immersive, interactive, and data-driven due to new
                  technological developments such as augmented and virtual
                  reality. Our company in Hyderabad that offers the most
                  cutting-edge branding solutions. Our company is comprised with
                  some of the industry’s most skilled brand strategists,
                  designers, and marketing experts. We begin by understanding
                  the clients’ business goals and then move on to know the
                  customers’ personas and finally their competitors. We develop
                  emotionally engaging experiences that resonate with consumers
                  and produce meaningful outcomes for our clients. We do that by
                  integrating technological developments such as AR/VR for
                  interactive branding experiences, sophisticated data analytics
                  Network especially for knowledge about your audience, and
                  developing a cohesive brand story.
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
                  Content marketing services are creating and sharing valuable
                  information to attract and engage a particular audience. With
                  advanced technology like AI-powered content generation,
                  interactive story formats, and intelligent analytics, content
                  marketing has become more specific, engaging, and
                  information-driven. We are our company in Hyderabad, about
                  offering the best content marketing services using new and
                  innovative technologies. Our team consists of creative writers
                  to data analysts and from highly skilled content strategists.
                  We collect all business goals, target audiences, the latest
                  trend happenings in the industry from the client. Our mission
                  is to dispense high-quality, relevant, and proper time
                  narratives that educate, entertain and inspire through our
                  compelling content marketing campaign. Our content is
                  high-quality press releases, tech updates and business blogs.
                </p>
              </div>
            </div>

            <div className="row p-md-5 mt-5 justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title"> Email Marketing Services</h1>
                <p className="ex-para">
                  Email Marketing Services refer to the strategic use of email
                  campaigns to promote products, services, or brands, and hence,
                  interact with your target audience. This form of marketing has
                  evolved with the new-age technologies such as AI-powered
                  personalization, automation tools, and advanced analytics
                  becoming more tailored, efficient, and data-driven. Our
                  company in Hyderabad offers cutting-edge email marketing
                  solutions for your business. We have a team of experienced
                  email marketers, copywriters, and data analysts to work with
                  your company in unison to understand the messaging, target
                  demographics and campaign objective. We take pride in
                  developing highly engaging email campaigns that capture the
                  recipient’s attention and show results in measurable gains.
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
