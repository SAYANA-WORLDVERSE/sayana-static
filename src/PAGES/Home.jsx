import React, { Fragment,lazy } from "react";

import HeroSection from "../COMPONENTS/HeroSection";
import Slider from "react-slick";

import "../Style/Home.css";
import gradiant from "../assets/gradiant-1.png";
import computer from "../assets/computer.png";
import mobile from "../assets/mobile.png";
import rocket from "../assets/rocket.png";
import Rating from "@mui/material/Rating";

import pen from "../assets/pen.png";
import laptop from "../assets/laptop-png.png";
import web2 from "../assets/web-2.png";
import boy from "../assets/boy-setting.png";
import question from "../assets/question.png";
import designComputer from "../assets/design-computer.png";
import seo from "../assets/seo.png";
import rocket2 from "../assets/kite.png";
import note from "../assets/note.png";
import video from "../assets/video.png";
import phone from "../assets/phone.png";
import dev from "../assets/setting-assets.png";

import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import client1 from "../assets/Layer01.png";
import client2 from "../assets/Layer02.png";
import client3 from "../assets/Layer03.png";
import client4 from "../assets/Layer04.png";
import client5 from "../assets/Layer05.png";
import testmonial from "../assets/testmonial.jpg";
import newsRocket from "../assets/new-rocket.png";
import partner1 from "../assets/partner-1.png";
import partner2 from "../assets/partner-2.png";
import partner3 from "../assets/partner-3.png";
import partner4 from "../assets/partner-4.png";
import partner5 from "../assets/partner-5.png";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


import { useTheme } from "../COMPONENTS/Context";

const Home = () => {

  const {isDark}=useTheme();

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,

        }
      }
    ]
  };

  const setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,

        }
      },
    ]
  };
  return (
    <Fragment>
      <HeroSection />

      <section className="about-us">
        <div className="container about-us-content col-md-8 ">
          <h1 className="main-title ">
            Next-Gen <span className="linear-text">EnterPrice</span>
          </h1>
          <p className="main-sub-heading">Software development company</p>
          <p className="main-paracontent ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores
            molestiae quaerat incidunt dolorem, deserunt libero quas recusandae
            cupiditate totam.
          </p>
          <button>Contact Us</button>
        </div>
      </section>

      <section>
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <div className="crafted-solution">
            <p>Crafted Solutions Real Results</p>
          </div>

          <div className="services d-flex justify-content-center flex-column align-items-center">
            <img src={gradiant} alt="" className="gradiant-bg" />
            <div className="bg-inner">
              <img src={computer} alt="" className="computer" />
              <img src={mobile} alt="" className="mobile" data-aos="fade-right" />
              <img src={rocket} alt="" className="rocket" data-aos="fade-right"/>
              <img src={dev} alt="" className="setting" data-aos="fade-top" />
              <img src={pen} alt="" className="pen" data-aos="fade-left"/>
              <img src={laptop} alt="" className="laptop" data-aos="fade-left"/>
            </div>
            <p className="learn-more mt-5">
            Delevering Unparalleled Services Tailored to Your Unique Need
          </p>
          <button>Learn More</button>
          </div>

         
        </div>
      </section>

      <section className="digital-excellence d-flex align-items-center flex-column">
        <img src={web2} alt="" className="digital-wave" />
        <div className="container mt-1 d-md-flex  align-items-center justify-content-between">
          <div className="col-md-6  ">
            <img src={boy} alt="" className="boy-setting" />
          </div>
          <div className="col-md-4">
            <h1 className="excellence">
              Decades <br /> in Digital
              <br />
              Excellence
            </h1>
            <p className="ex-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse
              aliquid possimus, sapiente ipsa explicabo.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="container mt-1 d-md-flex  align-items-center">
          <div className="col-md-6">
            <h1 className="excellence">Why Choose Us</h1>
            <p className="ex-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse
              aliquid possimus, sapiente ipsa explicabo.
            </p>
            <button>Read More</button>
          </div>

          <div className="col-md-6  ">
            <img src={question} alt="" className="boy-setting" />
          </div>
        </div>

        <div className="container mt-5">
          <div className="row justify-content-evenly">
            <div className="cards col-md-2 p-2">
              <p className="number mb-0 ">
              <VisibilitySensor>
                {({ isVisible }) => (
                  <CountUp
                    start={0}
                    end={5}
                    duration={40}
                    
                    isVisible={isVisible}
                  />
                )}
              </VisibilitySensor> <span>+</span>
                </p>
              <p className="cards-text">Years of Experience</p>
            </div>
            <div className="cards col-md-2 p-2">
              <p className="number mb-0 "> <VisibilitySensor>
                {({ isVisible }) => (
                  <CountUp
                    start={0}
                    end={50}
                    duration={30}
                    
                    isVisible={isVisible}
                  />
                )}
              </VisibilitySensor> <span>+</span> </p>
              <p className="cards-text">Projects</p>
            </div>
            <div className="cards col-md-2 p-2">
              <p className="number mb-0 ">
              <VisibilitySensor>
                {({ isVisible }) => (
                  <CountUp
                    start={0}
                    end={60}
                    duration={30}
                   
                    isVisible={isVisible}
                  />
                )}
              </VisibilitySensor> <span>+</span>
              </p>
              <p className="cards-text">Satisfied Clients</p>
            </div>
            <div className="cards col-md-2 p-2">
              <p className="number mb-0 ">

              <VisibilitySensor>
                {({ isVisible }) => (
                  <CountUp
                    start={0}
                    end={99}
                    duration={30}
                  
                    isVisible={isVisible}
                  />
                )}
              </VisibilitySensor> <span>%</span>
              </p>
              <p className="cards-text"> Clients Satisfication</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us mt-5">
        <div className="container about-us-content col-md-8 ">
          <h1 className="main-title">
            <span className="linear-text">Streamedlined Processes</span>
          </h1>
          <h1 className="title">
            <span className="color-title">Maximum Impact</span>
          </h1>
          <p className="main-paracontent ">
            Three Steps to Transform Your Digital Aspirations Into Tragible
            Outcomes
          </p>
        </div>
      </section>

      <section className="mt-5">
        <div className="container d-md-flex  align-items-center justify-content-between">
          <div className="col-md-6  ">
            <img src={designComputer} alt="" className="boy-setting" />
          </div>
          <div className="col-md-4 d-flex flex-column gap-3 " >
           <div className="implements d-flex  align-items-center gap-3" data-aos="fade-left">
            <div className="num">
              <span>1</span>
            </div>
            <div className="text">
              <h4 className="mb-0">Implement</h4>
              <p>Turn Vidion Into Reality</p>
            </div>

           </div>
           <div className="implements d-flex  align-items-center gap-3" data-aos="fade-left">
            <div className="num">
              <span>2</span>
            </div>
            <div className="text">
              <h4 className="mb-0">Implement</h4>
              <p>Turn Vidion Into Reality</p>
            </div>

           </div>
           <div className="implements d-flex  align-items-center gap-3" data-aos="fade-left">
            <div className="num">
              <span>3</span>
            </div>
            <div className="text">
              <h4 className="mb-0">Implement</h4>
              <p>Turn Vidion Into Reality</p>
            </div>

           </div>
           <div className="implements d-flex  align-items-center gap-3" data-aos="fade-left">
            <div className="num">
              <span>4</span>
            </div>
            <div className="text">
              <h4 className="mb-0">Implement</h4>
              <p>Turn Vidion Into Reality</p>
            </div>

           </div>
          </div>
        </div>
      </section>

      <section className="about-us mt-5 py-md-5">
        <div className="container about-us-content col-md-8 ">
          <h1 className="main-title">
            <span className="linear-text">Our Solutions is Blog</span>
          </h1>

          <p className="main-paracontent ">
            Three Steps to Transform Your Digital Aspirations Into Tragible
            Outcomes
          </p>
        </div>

        <div className="container">
          <section className="d-flex  flex-column justify-content-center align-items-center mt-5 ">
            <div className="col-md-12  d-md-flex justify-content-center blog-container">
              <div className="col-md-3 col-sm-12 ">
                <div className="blog-cards">
                  <img src={seo} alt="" />

                  <div className="blog-cards_content">
                    <p className="blog-cards__title">Card Title</p>
                    <p className="blog-cards__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center">
                <div className="blog-cards">
                  <img src={rocket2} alt="" />

                  <div className="blog-cards_content">
                    <p className="blog-cards__title">Card Title</p>
                    <p className="blog-cards__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center">
                <div className="blog-cards">
                  <img src={rocket2} alt="" />

                  <div className="blog-cards_content">
                    <p className="blog-cards__title">Card Title</p>
                    <p className="blog-cards__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
              </div>
             
            </div>
            <div>
            <button className="mt-5">View All</button>

            </div>
          </section>
        </div>
      </section>

      <section>
        <div className="container about-us-content col-md-10  py-5">
          <h1 className="main-title">
            <span className="linear-text">Today To Schedule a discussion</span>
          </h1>

          <p className="main-paracontent ">
            Three Steps to Transform Your Digital Aspirations Into Tragible
            Outcomes
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-card">
                <div className="ring-icon">
                  <img src={phone} alt="" className="ring" />
                </div>

                <div className="card-content d-flex flex-column justify-items-center align-items-center gap-3">
                  <p className="text-center">questions or remarks? Just write us a messagel</p>
                  <div className="list">
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <FiPhoneCall />
                      </div>
                      <p className="card-number mt-0 ">123-456-7890</p>
                    </div>
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <AiOutlineMail />
                      </div>
                      <p className="card-number mt-0 ">sayana123@gmail.com</p>
                    </div>
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <CiLocationOn />
                      </div>
                      <p className="card-number mt-0 ">
                        Madhapur,Hyderabad, Telangana
                        <br /> 500072
                      </p>
                    </div>
                  </div>
                  <button>Call Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card">
                <div className="ring-icon">
                  <img src={note} alt="" className="ring" />
                </div>

                <div className="card-content d-flex flex-column justify-items-center align-items-center gap-3">
                  <p className="text-center">questions or remarks? Just write us a messagel</p>
                  <div className="list">
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <FiPhoneCall />
                      </div>
                      <p className="card-number mt-0 ">123-456-7890</p>
                    </div>
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <AiOutlineMail />
                      </div>
                      <p className="card-number mt-0 ">sayana123@gmail.com</p>
                    </div>
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <CiLocationOn />
                      </div>
                      <p className="card-number mt-0 ">
                        Madhapur,Hyderabad, Telangana
                        <br /> 500072
                      </p>
                    </div>
                  </div>
                  <button>Call Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card">
                <div className="ring-icon">
                  <img src={video} alt="" className="ring" />
                </div>

                <div className="card-content d-flex flex-column justify-items-center align-items-center gap-3">
                  <p className="text-center">questions or remarks? Just write us a messagel</p>
                  <div className="list">
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <FiPhoneCall />
                      </div>
                      <p className="card-number mt-0 ">123-456-7890</p>
                    </div>
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <AiOutlineMail />
                      </div>
                      <p className="card-number mt-0 ">sayana123@gmail.com</p>
                    </div>
                    <div className="number d-flex align-items-center gap-2">
                      <div className="icons">
                        <CiLocationOn />
                      </div>
                      <p className="card-number mt-0 ">
                        Madhapur,Hyderabad, Telangana
                        <br /> 500072
                      </p>
                    </div>
                  </div>
                  <button>Call Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" about-us-content   p-5">
          <h1 className="client">
            <span className="client-title">Clients We Worked With</span>
          </h1>

          <p className="main-paracontent ">
            Three Steps to Transform Your Digital Aspirations Into Tragible
            Outcomes
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="project-slider">
            <Slider {...settings}>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="partner-header">
                    <img src={isDark? client1 :partner1} alt="" />
                  </div>
                </div>
              </div>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="partner-header">
                    <img src={isDark? client2 :partner2} alt="" />
                  </div>
                </div>
              </div>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="partner-header">
                    <img src={isDark? client3 :partner3} alt="" />
                  </div>
                </div>
              </div>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="partner-header">
                    <img src={isDark? client4 :partner4} alt="" />
                  </div>
                </div>
              </div>
              <div className="slider-items p-4">
                <div className="slider-inner">
                  <div className="partner-header">
                    <img src={isDark? client5 :partner5} alt="" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section>
        <div className=" about-us-content  mt-5 py-5">
          <h4 className=" clients">
            <span className="client-title">Our Spaciality</span>
          </h4>
          <h5 className=" mt-1">
            <span className="">What Clients Say About Us</span>
          </h5>
        </div>
      </section>

      <section>
        <div className="container">
          <Slider {...setting}>
            <div className="client-card">
              <div className="client-card-content">
                <img src={testmonial} alt="" className="test-monial" />
                <p className="client-name">Bandan</p>
                <p className="client-company">CEO,AGENCY</p>
                <p className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </p>
                <p className="client-review">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat neque modi necessitatibus molestiae nesciunt at
                  asperiores vitae aspernatur rem cum.
                </p>
              </div>
            </div>
            <div className="client-card">
              <div className="client-card-content">
                <img src={testmonial} alt="" className="test-monial" />
                <p className="client-name">Bandan</p>
                <p className="client-company">CEO,AGENCY</p>
                <p className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </p>
                <p className="client-review">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat neque modi necessitatibus molestiae nesciunt at
                  asperiores vitae aspernatur rem cum.
                </p>
              </div>
            </div>
            <div className="client-card">
              <div className="client-card-content">
                <img src={testmonial} alt="" className="test-monial" />
                <p className="client-name">Bandan</p>
                <p className="client-company">CEO,AGENCY</p>
                <p className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </p>
                <p className="client-review">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat neque modi necessitatibus molestiae nesciunt at
                  asperiores vitae aspernatur rem cum.
                </p>
              </div>
            </div>
            <div className="client-card">
              <div className="client-card-content">
                <img src={testmonial} alt="" className="test-monial" />
                <p className="client-name">Bandan</p>
                <p className="client-company">CEO,AGENCY</p>
                <p className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </p>
                <p className="client-review">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat neque modi necessitatibus molestiae nesciunt at
                  asperiores vitae aspernatur rem cum.
                </p>
              </div>
            </div>
            <div className="client-card">
              <div className="client-card-content">
                <img src={testmonial} alt="" className="test-monial" />
                <p className="client-name">Bandan</p>
                <p className="client-company">CEO,AGENCY</p>
                <p className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </p>
                <p className="client-review">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat neque modi necessitatibus molestiae nesciunt at
                  asperiores vitae aspernatur rem cum.
                </p>
              </div>
            </div>
            <div className="client-card">
              <div className="client-card-content">
                <img src={testmonial} alt="" className="test-monial" />
                <p className="client-name">Bandan</p>
                <p className="client-company">CEO,AGENCY</p>
                <p className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </p>
                <p className="client-review">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat neque modi necessitatibus molestiae nesciunt at
                  asperiores vitae aspernatur rem cum.
                </p>
              </div>
            </div>
            <div className="client-card">
              <div className="client-card-content">
                <img src={testmonial} alt="" className="test-monial" />
                <p className="client-name">Bandan</p>
                <p className="client-company">CEO,AGENCY</p>
                <p className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </p>
                <p className="client-review">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat neque modi necessitatibus molestiae nesciunt at
                  asperiores vitae aspernatur rem cum.
                </p>
              </div>
            </div>
            <div className="client-card">
              <div className="client-card-content">
                <img src={testmonial} alt="" className="test-monial" />
                <p className="client-name">Bandan</p>
                <p className="client-company">CEO,AGENCY</p>
                <p className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </p>
                <p className="client-review">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat neque modi necessitatibus molestiae nesciunt at
                  asperiores vitae aspernatur rem cum.
                </p>
              </div>
            </div>
            <div className="client-card">
              <div className="client-card-content">
                <img src={testmonial} alt="" className="test-monial" />
                <p className="client-name">Bandan</p>
                <p className="client-company">CEO,AGENCY</p>
                <p className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </p>
                <p className="client-review">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat neque modi necessitatibus molestiae nesciunt at
                  asperiores vitae aspernatur rem cum.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section className="news">
        <div className="container ">
          <div className="news-letter  d-md-flex align-items-center">
            <div className="col-md-6 news-content">
              <h2 className="news-title">News Letter</h2>
              <p className="news-para">
                Subscribe To Our Newsletter and Stay Updated
              </p>
              <div className="form-group">
                <input type="text" className="news-input" placeholder="Enter Your Email" />
                <button className="subscribe-btn">Subscribe</button>
              </div>
            </div>
            <div className="col-md-6 right-col">
            
                <img src={newsRocket} alt="" className="news-rocket"/>
               
  
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
