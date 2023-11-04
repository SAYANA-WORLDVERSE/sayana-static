import React, { Fragment } from 'react';
import '../Style/HeroSection.css';
import heroimg from '../assets/hero-image.png';
import cubeImage from '../assets/cubepng.png'

const HeroSection = () => {
  return <Fragment>

    <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="hero-content">
                        <h3 className='title'>Next-gen enterprise</h3>
                        <h4 className='sub-title'>Software development <br/> company</h4>
                        <p className='para-content'>As your digital enablement partner, we apply our talent-first approach to accelerate your digital journey, helping you unleash your potential and unlock unseen opportunities.</p>
                        <button>Approach</button>
                        <img src={cubeImage} alt="cube-logo" className='cube-logo'/>
                    </div>

                </div>
                <div className="col-md-6">
                    <img src={heroimg} alt="" className='hero-img'/>
                    

                </div>
            </div>
        </div>





    </div>





  </Fragment>
}

export default HeroSection