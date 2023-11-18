// MobileFrameCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Style/Portfolio.css';
import mobileFrame from "../assets/mobile-frame.png"

const MobileFrameCarousel = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true,
    
  };

  return (
    <div className="mobile-frame-carousel-container">
      <div className="mobile-frame">
        <img src={mobileFrame} alt="" className='mobile-img'/>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image.src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    
    </div>
  );
};

export default MobileFrameCarousel;
