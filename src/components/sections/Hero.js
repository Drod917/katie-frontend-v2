import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-images">
        <div className="img-wrapper hero-1">
          <StaticImage src="../../content/images/hero1.jpg" alt="hero1" />
        </div>
        <StaticImage className="hero-2" height={500} width={500} objectFit="contain" quality={100} src="../../content/images/hero2.jpg" alt="hero1" />
        <div className="hero-circle" />
        <StaticImage className="hero-3" src="../../content/images/hero3.jpg" alt="hero1" />
      </div>
      <div className="hero-heading">
        <h1 className="title">BEAUTY SALON</h1>
        <h1 className="sub-title">Treatments & Masks</h1>
      </div>
    </div>
  )
}

export default Hero