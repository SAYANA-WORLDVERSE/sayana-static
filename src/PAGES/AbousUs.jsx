import React, { Fragment } from "react";
import "../Style/HeroSection.css";
import heroimg from "../assets/hero-image.png";
import question from "../assets/question.png";
import "../style/About.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

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
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };

  return (
    <Fragment>
      <Header title="About Us" link="About Us" />
      <section className="contact-hero">
        <div className="container-fluid hero-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="hero-content">
                  <h3 className="main-title">About Us</h3>
                  <p className="para-content">
                    Four years ago, fueled by a passion for creativity and a
                    vision for the digital future, SayanaWorldVerse came into
                    existence. Founded by the dynamic duo, Muralidhar Sayana and
                    Gangadhar Sayana, our journey has been nothing short of an
                    exciting adventure.
                  </p>
                  <p className="para-content">
                    <b>Our Mission : </b> At Sayana Worldverse, our mission is
                    to empower businesses with cutting-edge custom software
                    solutions. We strive to create innovative and tailored
                    products that propel our clients to the forefront of their
                    industries.
                  </p>
                  <p className="para-content">
                    <b>Our Vision : </b> Our vision is to be a beacon of
                    creativity and technology, providing top-notch custom
                    software development services. We envision a future where
                    businesses thrive through seamlessly integrated digital
                    solutions that enhance efficiency and improve user
                    experiences.
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
            SayanaWorldVerse is our visionary CEO, Muralidhar Sayna. With a
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
              We believe in simplicity and transparency. Our approach is rooted
              in plain English – no tech jargon, just clear communication. Here,
              innovation is not just a buzzword; it's a way of life. Every
              project is a canvas, and we paint it with passion, precision, and
              a touch of SayanaWorldVerse magic.
            </p>
            <p className="ex-para">
              Join us on this digital expedition, where we blend creativity and
              technology to redefine possibilities. Your journey to digital
              excellence starts here. Welcome to SayanaWorldVerse – Where Your
              Ideas Take Flight!
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

            <p className="main-paracontent ">
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
                    Autoplay={true}
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
        <div className="container-fluid">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={4}
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
                  <p className="name mb-0">N.Gayathri</p>
                  <p className="designation mb-0">COO</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
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
