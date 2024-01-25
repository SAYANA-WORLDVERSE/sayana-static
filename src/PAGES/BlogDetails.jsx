import React, { Fragment } from "react";
import { useParams } from "react-router";
import "../Style/BlogDetails.css";
import Header from "../COMPONENTS/Header";
import { data } from "../data/blog";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = data.find((data) => data.id == id);
  return (
    <Fragment>
      <Header title="Blogs Details" link="Blogdetails" />
      <section className="bloglist mt-4">
        <div className="container">
          <div className="row bloglist__main">
            <div className=" col-md-8 list details">
              <h4 className="color-title ">{blog.title}</h4>
              <p>{blog.date}</p>

              <div className="content-d">
                <div className="main">
                  <p className="boild">{blog.description}</p>
                  <div className="image">
                    <img src={blog.image} alt="" />
                  </div>
                  {blog.blogdetails.map((data, index) => {
                    return (
                      <div key={index}>
                        <h4 className="mt-3 color-title">{data.sub_title}</h4>

                        <p className="mb-15">{data.sub_description}</p>
                      
                      </div>
                    );
                  })}

                  <div className="bottom ">
                  
                    <p>by :{blog.author}</p>
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
      </section>
    </Fragment>
  );
};

export default BlogDetails;
