import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import AnimateIn from '../../utils/AnimateIn';

import './Hero.scss';

const Hero = () => {
  return (
    <div className="content-wrapper">
      <div className="hero">
        <div className="hero-images">
          <StaticImage 
            placeholder='blurred'
            className="hero-1" 
            quality={100} 
            src="../../content/images/hero1.jpg" 
            alt="hero1" />
          <div className="hero-circle" />
          <div className="hero-image-stack">
            <StaticImage 
              objectFit='cover'
              placeholder='blurred'
              quality={100}
              style={{
                minWidth: '350px', 
                minHeight: '350px'}}
              className="hero-2"
              src="../../content/images/hero2.jpg"
              alt="hero2" />
            <StaticImage 
              placeholder='none'
              width={1200}
              quality={100}
              objectFit='contain'
              aspectRatio={1}
              imgStyle={{
                clipPath: 'unset',
                height: '50%',
                width: '50%',
                maxHeight: '350px',
                maxWidth: '350px',
                borderRadius: '50%',
                border: '1.5em solid white'}}
              className="hero-3" 
              src="../../content/images/hero3.jpg" 
              alt="hero3" />
          </div>
        </div>
        <AnimateIn>
          <div className="hero-heading">
            <h1 className="title">Katie Bostrom</h1>
            <h1 className="sub-title">Salon Services</h1>
          </div>
        </AnimateIn>
      </div>
    </div>
  )
}

export default Hero