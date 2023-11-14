import React, { Fragment } from 'react';
import '../Style/HeroSection.css';
import heroimg from '../assets/hero-image.png';
import wave from '../assets/wave-hero.png'
import {useTheme} from './Context'

const HeroSection = () => {
    const {isDark}=useTheme()
  return <Fragment>

    <div className="container-fluid hero-section">
        <div className="container">

            <div className="row hero">
            <img src={wave} alt=""  className='wave-hero'/>

                <div className="col-md-6 d-flex align-items-center">
                    <div className="hero-content" data-aos="fade-right">
                        <h1 className={`title ${isDark ? 'dark-theme':'light-theme'}`}>Next-gen <span className='linear-text'>Enter Prise</span></h1>
                        <h4 className='sub-title'>Software development <br/> company</h4>
                        <p className='para-content'>As your digital enablement partner, we apply our talent-first approach to accelerate your digital journey, helping you unleash your potential and unlock unseen opportunities.</p>
                        <button>Approach</button>
                    </div>

                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={heroimg} alt="" className='hero-img' data-aos="fade-left"/>
                    

                </div>
            </div>
        </div>





    </div>





  </Fragment>
}

export default HeroSection