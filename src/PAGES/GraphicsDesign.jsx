import React, { Fragment } from "react";
import "../Style/Services.css";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web2 from "../assets/web2.png";
import web1 from "../assets/web1.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

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
      <section className="contact-hero">
        <div className="container-fluid hero-section">
          <div className="container">
            <div className="row p-md-5">
              <div className="col-md-12 d-flex align-items-center justify-content-center">
                <div className="hero-content text-center">
                  <h1 className="services-title">Graphics Design</h1>
                  <p className="services-para-content">
                    As your digital enablement partner, we apply our
                    talent-first approach to accelerate your digital journey,
                    helping you unleash your potential and unlock unseen
                    opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="row p-md-5 mt-5 justify-content-center align-items-center ">
              <div className="col-md-6  d-flex justify-content-center ">
                <img src={web3} alt="" className="web-img" />
              </div>
              <div className="col-md-6 mt-3">
                <h1 className="services-title">Web Design</h1>
                <p className="ex-para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  suscipit deleniti ad distinctio nisi non pariatur magnam
                  labore laudantium vero officia unde, enim ullam nesciunt
                  consequatur assumenda maiores animi consequuntur.
                </p>
              </div>
            </div>
            <div className="row p-md-5 mt-5 justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="services-title">Web Development</h1>
                <p className="ex-para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  suscipit deleniti ad distinctio nisi non pariatur magnam
                  labore laudantium vero officia unde, enim ullam nesciunt
                  consequatur assumenda maiores animi consequuntur.
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
                <h1 className="services-title">
                  Software
                  <br /> Development
                </h1>
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
                    As your digital enablement partner, we apply our
                    talent-first approach to accelerate your digital journey,
                    helping you unleash your potential and unlock unseen
                    opportunities.
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
                        UI & UX Designer & Developer
                      </div>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordianWeb"
                    >
                      <div class="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid voluptatibus, quasi blanditiis, dolores,
                        repellat ipsa modi sequi dolorem cupiditate iure nobis
                        quisquam vel atque vero magni omnis provident
                        consequuntur corrupti!
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
                        PHP Developer
                      </div>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordianWeb"
                    >
                      <div class="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim dolorem numquam dignissimos animi sunt deleniti
                        dolorum delectus ducimus quis a, dolore, eligendi quod
                        ea velit?
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <div
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Developer HTML & CSS
                      </div>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordianWeb"
                    >
                      <div class="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio sint mollitia cum, molestiae alias quidem
                        tenetur commodi voluptate deserunt velit quas culpa
                        illum quos esse.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="accordion" id="accordianWeb2">
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
                        UI & UX Designer & Developer
                      </div>
                    </h2>
                    <div
                      id="collapseweb"
                      class="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordianWeb2"
                    >
                      <div class="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid voluptatibus, quasi blanditiis, dolores,
                        repellat ipsa modi sequi dolorem cupiditate iure nobis
                        quisquam vel atque vero magni omnis provident
                        consequuntur corrupti!
                      </div>
                    </div>
                  </div>
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
                        PHP Developer
                      </div>
                    </h2>
                    <div
                      id="collapseWebTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordianWeb2"
                    >
                      <div class="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim dolorem numquam dignissimos animi sunt deleniti
                        dolorum delectus ducimus quis a, dolore, eligendi quod
                        ea velit?
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <div
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseWebThree"
                        aria-expanded="false"
                        aria-controls="collapseWebThree"
                      >
                        PHP Developer
                      </div>
                    </h2>
                    <div
                      id="collapseWebThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordianWeb2"
                    >
                      <div class="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim dolorem numquam dignissimos animi sunt deleniti
                        dolorum delectus ducimus quis a, dolore, eligendi quod
                        ea velit?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section>
              <div className="container about-us-content  mt-5 p-5">
                <h1 className="main-heading about">
                  <span className="color-title">Tools We Use</span>
                </h1>
              </div>
            </section>

            <div className=" d-flex flex-wrap tools-container">
              <div className=" tools-card"></div>
              <div className=" tools-card"></div>
              <div className=" tools-card"></div>
              <div className=" tools-card"></div>
              <div className=" tools-card"></div>
              <div className=" tools-card"></div>
              <div className=" tools-card"></div>
              <div className=" tools-card"></div>
              <div className=" tools-card"></div>
              <div className=" tools-card"></div>
            </div>

            <section>
              <div className="container about-us-content  mt-5 p-5">
                <h1 className="main-heading about">
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
            <div className=" row col-md-12 p-md-5">
              <div class="accordion row col-md-12" id="accordianServices">
                <div class="accordion-item col-md-6">
                  <h2 class="accordion-header" id="headingServicesOne">
                    <div
                      class="accordion-button collapsed "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseServicesOne"
                      aria-expanded="false"
                      aria-controls="collapseServicesOne"
                    >
                      Services Design
                    </div>
                  </h2>
                  <div
                    id="collapseServicesOne"
                    class="accordion-collapse collapse "
                    aria-labelledby="headingServicesOne"
                    data-bs-parent="#accordianServices"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid voluptatibus, quasi blanditiis, dolores, repellat
                      ipsa modi sequi dolorem cupiditate iure nobis quisquam vel
                      atque vero magni omnis provident consequuntur corrupti!
                    </div>
                  </div>
                </div>
                <div class="accordion-item col-md-6">
                  <h2 class="accordion-header" id="headingServicesTwo">
                    <div
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseServicesTwo"
                      aria-expanded="false"
                      aria-controls="collapseServicesTwo"
                    >
                      Services Design
                    </div>
                  </h2>
                  <div
                    id="collapseServicesTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingServicesTwo"
                    data-bs-parent="#accordianServices"
                  >
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Enim dolorem numquam dignissimos animi sunt deleniti
                      dolorum delectus ducimus quis a, dolore, eligendi quod ea
                      velit?
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
