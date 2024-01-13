import React, { Fragment } from "react";
import seo from "../assets/seo.png";
import rocket2 from "../assets/kite.png";
import Header from "../COMPONENTS/Header";
import { useNavigate } from "react-router";

const Blogs = () => {
  const Navigate = useNavigate();
  return (
    <Fragment>
      <Header title="Blogs" link="Blog" />

      <section className="about-us mt-1">
        <div className="container about-us-content col-md-8 p-2">
          <h3 className="main-title">Our Solutions is Blog</h3>

          <p className="main-paracontent ">
          Our #1 resource for marketing tips, trends, and strategy to help you build a successful business.
          </p>
        </div>

        

        <div className="container">
          <div className="row">
            <div className="bloglist__main row">
              <div className="list col-md-8">
                <div
                  className="blog-box-2 row"
                  onClick={() => Navigate("/blogdetails")}
                >
                  <div className="image col-md-4 ">
                    <a href="blog-details.html">
                      <img
                        src="https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/blog-detail.9df446ba0172b70b0ad4.png"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="content p-3 col-md-8 ">
                    
                    <p className="color-title">
                      What is the difference between Traditional marketing and
                      Digital marketing
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis eaque libero cupiditate magnam, at, ducimus quia
                      perferendis, voluptatem dicta harum obcaecati esse neque?
                      Deserunt sint reiciendis eum et aspernatur. Commodi!
                    </p>
                    <div className="meta ">
                      <p>February 18, 2022</p>
                    </div>
                  </div>
                </div>
                <div
                  className="blog-box-2 row"
                  onClick={() => Navigate("/blogdetails")}
                >
                  <div className="image col-md-4 ">
                    <a href="blog-details.html">
                      <img
                        src="https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/blog-detail.9df446ba0172b70b0ad4.png"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="content p-3 col-md-8 ">
                  
                    <p className="color-title">
                      What are the core elements in digital marketing Online
                      marketing
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis eaque libero cupiditate magnam, at, ducimus quia
                      perferendis, voluptatem dicta harum obcaecati esse neque?
                      Deserunt sint reiciendis eum et aspernatur. Commodi!
                    </p>
                    <div className="meta ">
                      <p>February 18, 2022</p>
                    </div>
                  </div>
                </div>
                <div
                  className="blog-box-2 row"
                  onClick={() => Navigate("/blogdetails")}
                >
                  <div className="image col-md-4 ">
                    <a href="blog-details.html">
                      <img
                        src="https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/blog-detail.9df446ba0172b70b0ad4.png"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="content p-3 col-md-8 ">
                   
                    <p className="color-title">
                      Why does your brand require a strong social media presence
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis eaque libero cupiditate magnam, at, ducimus quia
                      perferendis, voluptatem dicta harum obcaecati esse neque?
                      Deserunt sint reiciendis eum et aspernatur. Commodi!
                    </p>
                    <div className="meta ">
                      <p>February 18, 2022</p>
                    </div>
                  </div>
                </div>
                <div
                  className="blog-box-2 row"
                  onClick={() => Navigate("/blogdetails")}
                >
                  <div className="image col-md-4 ">
                    <a href="blog-details.html">
                      <img
                        src="https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/blog-detail.9df446ba0172b70b0ad4.png"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="content p-3 col-md-8 ">
                  
                    <p className="color-title">
                      Driving customer engagement with personalized online
                      marketing strategies In the
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis eaque libero cupiditate magnam, at, ducimus quia
                      perferendis, voluptatem dicta harum obcaecati esse neque?
                      Deserunt sint reiciendis eum et aspernatur. Commodi!
                    </p>
                    <div className="meta ">
                      <p>February 18, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar col-md-4">
                <form action="#" className="widget-search">
                  <input
                    type="text"
                    placeholder="Search item here..."
                    required=""
                  />
                </form>

                <div className="widget-sidebar category">
                  <h5 className="color-title mb-3">Categories</h5>
                  <ul className="flex-column">
                    <li>
                      <a href="">Cryptocurrency (18)</a>
                    </li>
                    <li>
                      <a href="">Block Chain (57)</a>
                    </li>
                    <li>
                      <a href="">Bit Coin (5)</a>
                    </li>
                    <li>
                      <a href="">Eatherium (9)</a>
                    </li>
                    <li>
                      <a href="">Buy Sale (3)</a>
                    </li>
                    <li>
                      <a href="">Online Trading (81)</a>
                    </li>
                    <li>
                      <a href="">Crypto Trade (42)</a>  
                    </li>
                  </ul>
                </div>
                <div className="widget-sidebar recent">
                  <h5 className="color-title mb-3">Related Posts</h5>
                  <ul className="flex-column">
                    <li>
                      <div className="image">
                        <a href="#">
                          <img
                            src="https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/blog-01.716e7f2897c8ca081374.png"
                            alt=""
                          />
                        </a>
                      </div>

                      <div className="content">
                        <div className="meta ">
                          <a href="blog-details.html">February 18, 2022</a>
                        </div>
                        <p className="mb-0">
                          Meme NFTs - The new way to make money?
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="image">
                        <a href="#">
                          <img
                            src="https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/blog-01.716e7f2897c8ca081374.png"
                            alt=""
                          />
                        </a>
                      </div>

                      <div className="content">
                        <div className="meta ">
                          <a href="blog-details.html">February 18, 2022</a>
                        </div>
                        <p className="mb-0">
                          Meme NFTs - The new way to make money?
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <a href="#">
                          <img
                            src="https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/blog-01.716e7f2897c8ca081374.png"
                            alt=""
                          />
                        </a>
                      </div>

                      <div className="content">
                        <div className="meta ">
                          <a href="blog-details.html">February 18, 2022</a>
                        </div>
                        <p className="mb-0">
                          Meme NFTs - The new way to make money?
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <a href="#">
                          <img
                            src="https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/blog-01.716e7f2897c8ca081374.png"
                            alt=""
                          />
                        </a>
                      </div>

                      <div className="content">
                        <div className="meta ">
                          <a href="blog-details.html">February 18, 2022</a>
                        </div>
                        <p className="mb-0">
                          Meme NFTs - The new way to make money?
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="widget-sidebar tag">
                  <h5 className="color-title mb-3">Popular Tags</h5>
                  <ul>
                    <li>
                      <a href="#">NFTs</a>
                    </li>
                    <li>
                      <a href="#">Blockchain</a>
                    </li>
                    <li>
                      <a href="#">Coin</a>
                    </li>
                    <li>
                      <a href="#">ICO</a>
                    </li>
                    <li>
                      <a href="#">cryptocurrency</a>
                    </li>
                    <li>
                      <a href="#">Token</a>
                    </li>
                  </ul>
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
