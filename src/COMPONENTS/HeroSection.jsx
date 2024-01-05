import React, { Fragment } from "react";
import "../Style/HeroSection.css";
import heroimg from "../assets/hero-image.png";
import wave from "../assets/wave-hero.png";
import { useTheme } from "./Context";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const { isDark } = useTheme();
  return (
    <Fragment>
      <div className="container-fluid hero-section">
        <div className="container">
          <div className="row hero">
            <img src={wave} alt="" className="wave-hero" />

            <div className="col-md-6 d-flex align-items-center">
              <div className="hero-content" data-aos="fade-right">
                <h1
                  className="main-title" 
                >
                  Welcome to{" "}
                  <span className="linear-text">Sayana Worldverse</span>
                </h1>
                <h3 className="sub-title">Your Partner in Innovation</h3>
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    " Web Design & Development",
                    500,
                    " Mobile App Development",
                    500,
                    " Product Development",
                    500,
                    " Digital Marketing",
                    500,
                    " Graphics Designing",
                    500,
                  ]}
                  speed={40}
                  repeat={Infinity}
                  cursor={true}
                  deletionSpeed={90}
                />
                <p className="para-content">
                  Unlock Your Potential with Custom Software Solutions, Crafting
                  Excellence in Web Design, App Design, Product Development, and
                  Digital Marketing.
                </p>
                <button>Get Started</button>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src={heroimg}
                alt=""
                className="hero-img"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSection;
