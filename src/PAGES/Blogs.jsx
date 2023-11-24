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
        <div className="container about-us-content col-md-8 p-2">
          <h3 className="main-title">
           Our Solutions is Blog
          </h3>

          <p className="main-paracontent ">
            Three Steps to Transform Your Digital Aspirations Into Tragible
            Outcomes
          </p>
        </div>

        {/* <div className="container">
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
        </div> */}

<div className="container">
            <div className="row">
                <div className="bloglist__main">
                    <div className="list">
                        <div className="blog-box-2 row" onClick={()=>Navigate("/blogdetails")}>
                            <div className="image col-md-4 ">
                                <a href="blog-details.html">
                                <img
                      src="https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/blog-detail.9df446ba0172b70b0ad4.png"
                      alt=""
                    />
                                </a>
                            </div>

                            <div className="content p-3 col-md-8 ">
                                <div className="meta ">
                                    <p >
                                    February 18, 2022</p>
                                </div>
                                <p  className="color-title">What is the difference between Traditional marketing and Digital marketing</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque libero cupiditate magnam, at, ducimus quia perferendis, voluptatem dicta harum obcaecati esse neque? Deserunt sint reiciendis eum et aspernatur. Commodi!</p>
                            </div>
                        </div>
                        <div className="blog-box-2 row" onClick={()=>Navigate("/blogdetails")}>
                            <div className="image col-md-4 ">
                                <a href="blog-details.html">
                                <img
                      src="https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/blog-detail.9df446ba0172b70b0ad4.png"
                      alt=""
                    />
                                </a>
                            </div>

                            <div className="content p-3 col-md-8 ">
                                <div className="meta ">
                                    <p >
                                    February 18, 2022</p>
                                </div>
                                <p  className="color-title">What are the core elements in digital marketing Online marketing</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque libero cupiditate magnam, at, ducimus quia perferendis, voluptatem dicta harum obcaecati esse neque? Deserunt sint reiciendis eum et aspernatur. Commodi!</p>
                            </div>
                        </div>
                        <div className="blog-box-2 row" onClick={()=>Navigate("/blogdetails")}>
                            <div className="image col-md-4 ">
                                <a href="blog-details.html">
                                <img
                      src="https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/blog-detail.9df446ba0172b70b0ad4.png"
                      alt=""
                    />
                                </a>
                            </div>

                            <div className="content p-3 col-md-8 ">
                                <div className="meta ">
                                    <p >
                                    February 18, 2022</p>
                                </div>
                                <p  className="color-title">Why does your brand require a strong social media presence</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque libero cupiditate magnam, at, ducimus quia perferendis, voluptatem dicta harum obcaecati esse neque? Deserunt sint reiciendis eum et aspernatur. Commodi!</p>
                            </div>
                        </div>
                        <div className="blog-box-2 row" onClick={()=>Navigate("/blogdetails")}>
                            <div className="image col-md-4 ">
                                <a href="blog-details.html">
                                <img
                      src="https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/blog-detail.9df446ba0172b70b0ad4.png"
                      alt=""
                    />
                                </a>
                            </div>

                            <div className="content p-3 col-md-8 ">
                                <div className="meta ">
                                    <p >
                                    February 18, 2022</p>
                                </div>
                                <p  className="color-title">Driving customer engagement with personalized online marketing strategies In the</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque libero cupiditate magnam, at, ducimus quia perferendis, voluptatem dicta harum obcaecati esse neque? Deserunt sint reiciendis eum et aspernatur. Commodi!</p>
                            </div>
                        </div>
                      
                       
                       
                        

                    
                    </div>

                    
                </div>
            </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Blogs;
