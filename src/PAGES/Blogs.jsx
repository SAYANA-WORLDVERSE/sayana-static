import React, { Fragment } from "react";
import seo from "../assets/seo.png";
import rocket2 from "../assets/kite.png";
import Header from "../COMPONENTS/Header";
import { useNavigate } from "react-router";

const Blogs = () => {
  const Navigate=useNavigate();
  return (
    <Fragment>
      <Header title="Blogs" link="Blog" />

      <section className="about-us mt-1">
        <div className="container about-us-content col-md-8 p-5">
          <h1 className="title">
            <span className="color-title">Our Solutions is Blog</span>
          </h1>

          <p className="main-paracontent ">
            Three Steps to Transform Your Digital Aspirations Into Tragible
            Outcomes
          </p>
        </div>

        <div className="container">
          <div className="col-md-12   justify-content-center blog-container">
            <div className="col-md-3 d-flex justify-content-center " onClick={()=>Navigate("/blogdetails")}>
              <div className="blog-cards" >
                <img src={seo} alt="" />

                <div className="blog-cards_content">
                  <p className="blog-cards__title">Card Title</p>
                  <p className="blog-cards__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center ">
              <div className="blog-cards">
                <img src={seo} alt="" />

                <div className="blog-cards_content">
                  <p className="blog-cards__title">Card Title</p>
                  <p className="blog-cards__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center ">
              <div className="blog-cards">
                <img src={seo} alt="" />

                <div className="blog-cards_content">
                  <p className="blog-cards__title">Card Title</p>
                  <p className="blog-cards__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </Fragment>
  );
};

export default Blogs;
