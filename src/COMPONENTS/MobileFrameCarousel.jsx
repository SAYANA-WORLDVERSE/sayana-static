// MobileFrameCarousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/Portfolio.css";
import mobileFrame from "../assets/mobile_frame_svg.svg";

const MobileFrameCarousel = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    dragable: true,
  };

  return (
    <div className="banner_slider">
      <div id="frmae_slider" className="owl-carousel owl-theme">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div className="item" key={index}>
              <div className="slider_img">
                <img src={image.src} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="slider_frame">
        <img src={mobileFrame} alt="image" />
      </div>
    </div>
  );
};

export default MobileFrameCarousel;
