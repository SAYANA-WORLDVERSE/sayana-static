import React, { Fragment } from "react";
import HeroSection from "../COMPONENTS/HeroSection";
import "../Style/Home.css";
import gradiant from "../assets/gradiant-1.png";
import computer from "../assets/computer.png";
import mobile from "../assets/mobile.png";
import rocket from "../assets/rocket.png";
import setting from "../assets/setting-assets.png";
import pen from "../assets/pen.png";
import laptop from "../assets/laptop-png.png";
import web2 from "../assets/web-2.png";
import boy from "../assets/boy-setting.png";
import question from "../assets/question.png";
import designComputer from "../assets/design-computer.png";
import seo from "../assets/seo.png";
import rocket2 from "../assets/kite.png";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />

      <section className="about-us">
        <div className="container about-us-content col-md-8 ">
          <h1 className="main-heading">
            Next-Gen <span className="color-title">EnterPrice</span>
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

          <div className="services d-flex justify-content-center align-items-center">
            <img src={gradiant} alt="" className="gradiant-bg" />
            <div className="bg-inner">
              <img src={computer} alt="" className="computer" />
              <img src={mobile} alt="" className="mobile" />
              <img src={rocket} alt="" className="rocket" />
              <img src={setting} alt="" className="setting" />
              <img src={pen} alt="" className="pen" />
              <img src={laptop} alt="" className="laptop" />
            </div>
          </div>

          <p className="learn-more">
            Delevering Unparalleled Services Tailored to Your Unique Need
          </p>
          <button>Learn More</button>
        </div>
      </section>

      <section className="digital-excellence d-flex align-items-center flex-column">
        <img src={web2} alt="" className="digital-wave" />
        <div className="container d-md-flex  align-items-center justify-content-between">
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
        <div className="container d-md-flex  align-items-center">
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
                  5+
                </p>
                <p className="cards-text">Years of Experience</p>
              </div>
              <div className="cards col-md-2 p-2">
                <p className="number mb-0 ">
                  50+
                </p>
                <p className="cards-text">Projects</p>
              </div>
              <div className="cards col-md-2 p-2">
                <p className="number mb-0 ">
                  60+
                </p>
                <p className="cards-text">Satisfied Clients</p>
              </div>
              <div className="cards col-md-2 p-2">
                <p className="number mb-0 ">
                  99%
                </p>
                <p className="cards-text"> Clients Satisfication</p>
              </div>
            
            
          </div>
        </div>
      </section>

      <section className="about-us mt-5">
        <div className="container about-us-content col-md-8 ">
          <h1 className="main-heading">
            <span className="color-title">Streamedlined Processes</span>
          </h1>
          <h1 className="main-heading">
             <span className="color-title">Maximum Impact</span>
          </h1>
          <p className="main-paracontent ">
         Three Steps to Transform Your Digital Aspirations Into Tragible Outcomes
          </p>
        </div>
      </section>

      <section className="mt-5">
       
        <div className="container d-md-flex  align-items-center justify-content-between">
          <div className="col-md-6  ">
            <img src={designComputer} alt="" className="boy-setting" />
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
       
      </section>

      <section className="about-us mt-5">
        <div className="container about-us-content col-md-8 ">
          <h1 className="main-heading">
            <span className="color-title">Our Solutions is Blog</span>
          </h1>
        
          <p className="main-paracontent ">
         Three Steps to Transform Your Digital Aspirations Into Tragible Outcomes
          </p>
        </div>

        <div className="container">

           <section className="d-flex justify-content-center align-items-center">
        <div className="col-md-10 d-flex ">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="blog-cards">
              <img src={seo} alt="" />

              <div className="blog-cards_content">
                <p className="blog-cards__title">Card Title</p>
                <p className="blog-cards__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div className="blog-cards">
              <img src={rocket2} alt="" />

              <div className="blog-cards_content">
                <p className="blog-cards__title">Card Title</p>
                <p className="blog-cards__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


        </div>
      </section>

      <section>
      <div className="container about-us-content col-md-8 ">
          <h1 className="main-heading">
            <span className="color-title">Today To Schedule a discussion</span>
          </h1>
        
          <p className="main-paracontent ">
         Three Steps to Transform Your Digital Aspirations Into Tragible Outcomes
          </p>
        </div>
      </section>
      

      

      
    </Fragment>
  );
};

export default Home;
