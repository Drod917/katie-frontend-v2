import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-images">
        <StaticImage style={{width: '60%'}} quality={100} src="../../content/images/hero1.jpg" alt="hero1" />
        <div className="hero-circle" />
        <div className="hero-image-stack">
          <StaticImage 
            quality={100}
            style={{height: '350px'}}
            className="hero-2"
            objectFit="cover" 
            src="../../content/images/hero2.jpg"
            alt="hero2" />
          <StaticImage quality={100} className="hero-3" src="../../content/images/hero3.jpg" alt="hero3" />
        </div>
      </div>
      <div className="hero-heading">
        <h1 className="title">BEAUTY SALON</h1>
        <h1 className="sub-title">Treatments & Masks</h1>
      </div>
    </div>
  )
}

export default Hero