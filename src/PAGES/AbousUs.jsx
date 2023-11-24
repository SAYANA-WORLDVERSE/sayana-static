import React, { Fragment } from "react";
import "../Style/HeroSection.css";
import heroimg from "../assets/hero-image.png";
import question from "../assets/question.png";
import "../style/About.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import team from "../assets/team.png";
import Header from "../COMPONENTS/Header";

const AboutUs = () => {
  const breakpoints = {
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
      <Header title="About Us" link="About Us" />
      <section className="contact-hero">
        <div className="container-fluid hero-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="hero-content">
                  <h3 className="main-title">About Us</h3>
                  <p className="para-content">
                    As your digital enablement partner, we apply our
                    talent-first approach to accelerate your digital journey,
                    helping you unleash your potential and unlock unseen
                    opportunities.
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
          {/* <p className=" career-para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            dolorem perspiciatis numquam, voluptatum blanditiis pariatur ipsa
            dolore sed dolor facilis similique, obcaecati impedit saepe
            aspernatur. Nemo esse tempore pariatur vero culpa eos nam, expedita
            aliquam nesciunt beatae quaerat, quod enim reprehenderit tempora
            placeat ad perspiciatis, error similique dolor soluta ipsam!
          </p> */}
        </div>

        <div className="container mt-5 d-md-flex  align-items-center">
          <div className="col-md-6  ">
            <img src={question} alt="" className="boy-setting" />
          </div>
          <div className="col-md-6">
            <h1 className="excellence">Wherever Your Work</h1>
            <p className="ex-para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              consectetur aut ducimus porro consequatur dolor, quos ipsum quasi
              debitis amet assumenda perspiciatis, sapiente cupiditate quaerat
              animi. Doloremque harum accusamus saepe neque quibusdam odit
              aperiam, officia veritatis voluptatibus provident iure quo
              sapiente? Odio quia alias magnam officia, earum dicta cupiditate
              eum.
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

      <section className="our-vision">
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
      </section>
    </Fragment>
  );
};

export default AboutUs;
