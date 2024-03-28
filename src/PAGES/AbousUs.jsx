import React, { Fragment } from "react";
import "../Style/HeroSection.css";
import heroimg from "../assets/hero-image.png";
import question from "../assets/question.png";
import "../style/About.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import team from "../assets/team.jpg";
import Header from "../COMPONENTS/Header";

const AboutUs = () => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    518: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1030: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  };

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
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };

  return (
    <Fragment>
      <Helmet>
        <link rel="canonical" href="/about" />
      </Helmet>
      <Header title="About Us" link="About Us" />
      <section className="contact-hero">
        <div className="container-fluid hero-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="hero-content">
                  <h3 className="main-title">About Us</h3>
                  <p className="para-content">
                    Sayana Worldverse is a leading digital transformation
                    consultant based in Hyderabad, India. Our team comprises
                    professionals from diverse disciplines who specialize in the
                    latest web and mobile app development, e-commerce,
                    full-service software, and comprehensive digital marketing
                    strategies. Our experts leverage cutting-edge technologies,
                    such as artificial intelligence and machine learning, data
                    analysis, to create innovative, user-focused apps and
                    solutions that empower businesses in the digital landscape.
                    At Sayana Worldverse, we are committed to delivering
                    high-quality solutions, excellent customer service, and
                    ongoing development. Our dedicated team aims to provide
                    consumers with exceptional digital experiences that aid them
                    in developing their skills online.
                  </p>
                  <p className="para-content">
                    <b>Our Mission : </b>Our mission is to be the most flexible,
                    innovative, creative, and cooperative digital and software
                    development services provider, offering flexible and
                    affordable solutions while simultaneously being the most
                    recognized creativity and technology leader in the custom
                    software development sector. We are dedicated to delivering
                    a diverse range of exceptional & groundbreaking results.
                  </p>
                  <p className="para-content">
                    <b>Our Vision : </b> We envision Sayana Worldverse as the
                    world’s preeminent digital transformation partner, leading
                    the future of design and experiment development by
                    developing a Learning-lot culture across the organization.
                    Our goal is to make a strong change in services and
                    experience growth with our clients, with a guaranteed future
                    of their competitiveness in a competitive market.
                  </p>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img src={heroimg} alt="" className="hero-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="About-us">
        <div className="container">
          <p className=" career-para">
            <b> Meet Our CEO </b>: Muralidhar Sayna At the helm of
            SayanaWorldVerse is our visionary CEO, Muralidhar Sayana. With a
            profound understanding of the digital landscape, Muralidhar leads
            our team towards new horizons, setting the pace for innovation and
            excellence.
          </p>
        </div>

        <div className="container mt-5 d-md-flex  align-items-center">
          <div className="col-md-6  ">
            <img src={question} alt="" className="boy-setting" />
          </div>
          <div className="col-md-6">
            <h1 className="excellence">Why Choose SayanaWorldVerse ?</h1>
            <p className="ex-para">
              <b>Expertise:</b> Our extensive experience and specialized
              knowledge in custom software development, web and app design ,
              product development, digital marketing, graphic design, among
              other key areas.
            </p>
            <p className="ex-para">
              <b> Innovation: </b>The process is well-researched, knowing what
              innovative methodologies to rely on in order to offer you a unique
              solution and so forth.
            </p>
            <p className="ex-para">
              <b>Client-Centric Approach:</b> We always focus on understanding
              what your needs are, what your vision, goals, and objectives are,
              so that each solution is designed with accuracy for your business
              strategy.
            </p>
            <p className="ex-para">
              <b>Reliability:</b> We ensure reliability, transparency, and
              consistency and timeliness of delivery, amongst other things of
              course.
            </p>

            <p className="ex-para">
              <b>Quality Assurance:</b> Our commitment to quality assurance,
              always ensuring that our solutions adhere to the highest quality
              standards, continuous monitoring, and improvement to achieve
              optimal performance in terms of reliability.
            </p>
          </div>
        </div>

        <section className="">
          <div className="container mt-5">
            <div className="news-letter  d-md-flex align-items-center">
              <div className="col-md-6 news-content">
                <h2 className="news-title">We Live By Powerful </h2>
                <p className="news-para">
                  Subscribe To Our Newsletter and Stay Updated
                </p>
              </div>
              <div className="col-md-6 right-col"></div>
            </div>
          </div>
        </section>

        <section>
          <div className="container about-us-content  mt-5 p-2">
            <h1 className="title about mb-4">
              <span className="color-title">Our History</span>
            </h1>

            <p className="main-paracontent text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              adipisci quisquam nam ullam, cupiditate eum voluptatum deleniti
              dignissimos doloribus culpa repellendus, obcaecati architecto
              dolore consequuntur deserunt a debitis molestias? Veniam?
            </p>
          </div>
        </section>
      </section>

      <section className="roadmap s2">
        <div className="shape"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="roadmap__main s1">
                <div className="swiper roadmap-swiper">
                  <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    breakpoints={breakpoints}
                    slidesPerView={5}
                    autoPlay={true}
                    scrollbar={{ draggable: true }}
                  >
                    <SwiperSlide>
                      <div className="roadmap-box">
                        <div className="time">February 01, 2022</div>
                        <div className="content">
                          <h5 className="title">Idea Generation</h5>
                          <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis diam enim, scelerisque sit amet diam ut,
                            molestie ultrices nisi. Suspendisse in ipsum ante.
                            Ut rhoncus ligula dictum gravida.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="roadmap-box">
                          <div className="time">February 01, 2022</div>
                          <div className="content">
                            <h5 className="title">Initial Release</h5>
                            <p className="text">
                              Quisque ornare massa congue est cursus molestie.
                              Suspendisse commodo enim turpis
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="roadmap-box">
                          <div className="time">February 01, 2022</div>
                          <div className="content">
                            <h5 className="title">Design & Development</h5>
                            <p className="text">
                              Nulla id dolor dignissim lectus semper
                              sollicitudin at vitae magna. Aliquam non arcu
                              iaculis, auctor eros eget, fermentum lorem. In hac
                              habitasse platea dictumst. Maecenas varius ligula
                              a volutpat ornare
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="roadmap-box">
                          <div className="time">February 01, 2022</div>
                          <div className="content">
                            <h5 className="title">Result & Final Report</h5>
                            <p className="text">
                              Curabitur malesuada enim odio, nec gravida urna
                              fermentum vitae. Maecenas euismod, risus a
                              interdum rhoncus, ante mauris volutpat nisi, sit
                              amet dignissim ex lorem vel nibh
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="roadmap-box">
                        <div className="time">February 01, 2022</div>
                        <div className="content">
                          <h5 className="title">Idea Generation</h5>
                          <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis diam enim, scelerisque sit amet diam ut,
                            molestie ultrices nisi. Suspendisse in ipsum ante.
                            Ut rhoncus ligula dictum gravida.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="swiper-slide">
                        <div className="roadmap-box">
                          <div className="time">February 01, 2022</div>
                          <div className="content">
                            <h5 className="title">Initial Release</h5>
                            <p className="text">
                              Quisque ornare massa congue est cursus molestie.
                              Suspendisse commodo enim turpis
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="swiper-slide">
                        <div className="roadmap-box">
                          <div className="time">February 01, 2022</div>
                          <div className="content">
                            <h5 className="title">Design & Development</h5>
                            <p className="text">
                              Nulla id dolor dignissim lectus semper
                              sollicitudin at vitae magna. Aliquam non arcu
                              iaculis, auctor eros eget, fermentum lorem. In hac
                              habitasse platea dictumst. Maecenas varius ligula
                              a volutpat ornare
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="roadmap-box">
                          <div className="time">February 01, 2022</div>
                          <div className="content">
                            <h5 className="title">Result & Final Report</h5>
                            <p className="text">
                              Curabitur malesuada enim odio, nec gravida urna
                              fermentum vitae. Maecenas euismod, risus a
                              interdum rhoncus, ante mauris volutpat nisi, sit
                              amet dignissim ex lorem vel nibh
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="roadmap-box">
                        <div className="time">February 01, 2022</div>
                        <div className="content">
                          <h5 className="title">Idea Generation</h5>
                          <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis diam enim, scelerisque sit amet diam ut,
                            molestie ultrices nisi. Suspendisse in ipsum ante.
                            Ut rhoncus ligula dictum gravida.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="swiper-slide">
                        <div className="roadmap-box">
                          <div className="time">February 01, 2022</div>
                          <div className="content">
                            <h5 className="title">Initial Release</h5>
                            <p className="text">
                              Quisque ornare massa congue est cursus molestie.
                              Suspendisse commodo enim turpis
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="swiper-slide">
                        <div className="roadmap-box">
                          <div className="time">February 01, 2022</div>
                          <div className="content">
                            <h5 className="title">Design & Development</h5>
                            <p className="text">
                              Nulla id dolor dignissim lectus semper
                              sollicitudin at vitae magna. Aliquam non arcu
                              iaculis, auctor eros eget, fermentum lorem. In hac
                              habitasse platea dictumst. Maecenas varius ligula
                              a volutpat ornare
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="roadmap-box">
                          <div className="time">February 01, 2022</div>
                          <div className="content">
                            <h5 className="title">Result & Final Report</h5>
                            <p className="text">
                              Curabitur malesuada enim odio, nec gravida urna
                              fermentum vitae. Maecenas euismod, risus a
                              interdum rhoncus, ante mauris volutpat nisi, sit
                              amet dignissim ex lorem vel nibh
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="roadmap-box">
                        <div className="time">February 01, 2022</div>
                        <div className="content">
                          <h5 className="title">Idea Generation</h5>
                          <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis diam enim, scelerisque sit amet diam ut,
                            molestie ultrices nisi. Suspendisse in ipsum ante.
                            Ut rhoncus ligula dictum gravida.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="swiper-slide">
                        <div className="roadmap-box">
                          <div className="time">February 01, 2022</div>
                          <div className="content">
                            <h5 className="title">Initial Release</h5>
                            <p className="text">
                              Quisque ornare massa congue est cursus molestie.
                              Suspendisse commodo enim turpis
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="swiper-slide">
                        <div className="roadmap-box">
                          <div className="time">February 01, 2022</div>
                          <div className="content">
                            <h5 className="title">Design & Development</h5>
                            <p className="text">
                              Nulla id dolor dignissim lectus semper
                              sollicitudin at vitae magna. Aliquam non arcu
                              iaculis, auctor eros eget, fermentum lorem. In hac
                              habitasse platea dictumst. Maecenas varius ligula
                              a volutpat ornare
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="roadmap-box">
                          <div className="time">February 01, 2022</div>
                          <div className="content">
                            <h5 className="title">Result & Final Report</h5>
                            <p className="text">
                              Curabitur malesuada enim odio, nec gravida urna
                              fermentum vitae. Maecenas euismod, risus a
                              interdum rhoncus, ante mauris volutpat nisi, sit
                              amet dignissim ex lorem vel nibh
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="roadmap-box">
                        <div className="time">February 01, 2022</div>
                        <div className="content">
                          <h5 className="title">Idea Generation</h5>
                          <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis diam enim, scelerisque sit amet diam ut,
                            molestie ultrices nisi. Suspendisse in ipsum ante.
                            Ut rhoncus ligula dictum gravida.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="swiper-slide">
                        <div className="roadmap-box">
                          <div className="time">February 01, 2022</div>
                          <div className="content">
                            <h5 className="title">Initial Release</h5>
                            <p className="text">
                              Quisque ornare massa congue est cursus molestie.
                              Suspendisse commodo enim turpis
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="swiper-slide">
                        <div className="roadmap-box">
                          <div className="time">February 01, 2022</div>
                          <div className="content">
                            <h5 className="title">Design & Development</h5>
                            <p className="text">
                              Nulla id dolor dignissim lectus semper
                              sollicitudin at vitae magna. Aliquam non arcu
                              iaculis, auctor eros eget, fermentum lorem. In hac
                              habitasse platea dictumst. Maecenas varius ligula
                              a volutpat ornare
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="roadmap-box">
                          <div className="time">February 01, 2022</div>
                          <div className="content">
                            <h5 className="title">Result & Final Report</h5>
                            <p className="text">
                              Curabitur malesuada enim odio, nec gravida urna
                              fermentum vitae. Maecenas euismod, risus a
                              interdum rhoncus, ante mauris volutpat nisi, sit
                              amet dignissim ex lorem vel nibh
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-team">
        <div className=" about-us-content  mt-3 p-2">
          <h1 className="title client mb-4">
            <span className="color-title">Our Team</span>
          </h1>
        </div>
        <div className="container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={breakpoint}
            navigation={true}
          >
            <SwiperSlide>
              <div className="team-card d-flex justify-content-center">
                <img src={team} alt="" />
                <div className="team-content">
                  <p className="name mb-0"> Gangadhara Rao Sayana</p>
                  <p className="designation mb-0">Founder & CEO</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-card d-flex justify-content-center">
                <img src={team} alt="" />
                <div className="team-content">
                  <p className="name mb-0">Muralidhar Sayana</p>
                  <p className="designation mb-0">Co-Founder & CEO</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-card d-flex justify-content-center">
                <img src={team} alt="" />
                <div className="team-content">
                  <p className="name mb-0">N. Gayathri</p>
                  <p className="designation mb-0">COO</p>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="team-card d-flex justify-content-center">
                <img src={team} alt="" />
                <div className="team-content">
                  <p className="name mb-0"> Solman Raju</p>
                  <p className="designation mb-0">Team Lead</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-card d-flex justify-content-center">
                <img src={team} alt="" />
                <div className="team-content">
                  <p className="name mb-0">Bandan Pradhan</p>
                  <p className="designation mb-0">Front-end Developer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-card d-flex justify-content-center">
                <img src={team} alt="" />
                <div className="team-content">
                  <p className="name mb-0">MD Shariff</p>
                  <p className="designation mb-0">Front-end Developer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-card d-flex justify-content-center">
                <img src={team} alt="" />
                <div className="team-content">
                  <p className="name mb-0">Hi, i'm Bandan</p>
                  <p className="designation mb-0">Front-end Developer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-card d-flex justify-content-center">
                <img src={team} alt="" />
                <div className="team-content">
                  <p className="name mb-0">Hi, i'm Bandan</p>
                  <p className="designation mb-0">Front-end Developer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-card d-flex justify-content-center">
                <img src={team} alt="" />
                <div className="team-content">
                  <p className="name mb-0">Hi, i'm Bandan</p>
                  <p className="designation mb-0">Front-end Developer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-card d-flex justify-content-center">
                <img src={team} alt="" />
                <div className="team-content">
                  <p className="name mb-0">Hi, i'm Bandan</p>
                  <p className="designation mb-0">Front-end Developer</p>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </section>

      {/* <section className="our-vision">
        <div className=" about-us-content  mt-5 p-2">
          <h1 className="title client mb-4">
            <span className="color-title">Our Vision</span>
          </h1>
        </div>

        <div className="container">
          <div className="row justify-content-around">
            <div className="client-card col-md-3  ">
              <div className="client-card-content">
                <p className="client-review ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat neque modi necessitatibus molestiae nesciunt at
                  asperiores vitae aspernatur rem cum.
                </p>
              </div>
            </div>
            <div className="client-card  col-md-3 ">
              <div className="client-card-content">
                <p className="client-review">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat neque modi necessitatibus molestiae nesciunt at
                  asperiores vitae aspernatur rem cum.
                </p>
              </div>
            </div>
            <div className="client-card  col-md-3  ">
              <div className="client-card-content">
                <p className="client-review">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat neque modi necessitatibus molestiae nesciunt at
                  asperiores vitae aspernatur rem cum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Fragment>
  );
};

export default AboutUs;
