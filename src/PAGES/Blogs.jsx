import React, { Fragment, } from "react";

import Header from "../COMPONENTS/Header";
import { useNavigate } from "react-router";
import { data } from "../data/blog";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const Navigate = useNavigate();
  console.log(data)

  
  return (
    <Fragment>
       <Helmet>
        <link rel="canonical" href="/blog" />
      </Helmet>
      
      <Header title="Blogs" link="Blog" />

      <section className="about-us mt-1">
        <div className="container about-us-content col-md-8 p-2">
          <h3 className="main-title">Our Solutions is Blog</h3>

          <p className="main-paracontent ">
            Our #1 resource for marketing tips, trends, and strategy to help you
            build a successful business.
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="bloglist__main row">
              <div className="list col-md-8">
                {data.map((item)=>{
                  return (
                    <div
                    className="blog-box-2 row"
                    key={item.id}
                    onClick={() => Navigate(`/blogdetails/${item.id}`)}
                  >
                    <div className="image col-md-4 ">
                 
                        <img
                          src={item.image}
                          alt="bg-img"
                        />
                      
                    </div>
  
                    <div className="content p-3 col-md-8 ">
                      <p className="color-title">
                    {item.title}
                      </p>
                      <p>
                      {item.description.slice(0,144)+"..."}
                      </p>
                      <div className="meta ">
                        <p>{item.date}</p>
                      </div>
                    </div>
                  </div>

                  )
                })}
               
              
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
                <a href="#"> Secrets of tiktok Marketing</a>
                    </li>
                    <li>
                  <a href="#">Strategies for tiktok Marketing</a> 
                    </li>
                    <li>
                      <a href="#">Why tiktok isn't safe</a>
                    </li>
                
                  </ul>
                </div>
                {/* <div className="widget-sidebar recent">
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
                </div> */}

<div className="widget-sidebar tag">
                <h5 className="color-title mb-3">Popular Tags</h5>
                <ul>
                  <li>
                    <a href="#">Digital Marketing</a>
                  </li>
                  <li>
                    <a href="#">Social Media</a>
                  </li>
                  <li>
                    <a href="#">Tech</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">TikTok</a>
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
