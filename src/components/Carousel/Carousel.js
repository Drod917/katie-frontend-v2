import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'

import LeftArrowIcon from '../../content/images/svg/left-arrow.svg';
import RightArrowIcon from '../../content/images/svg/right-arrow.svg';


import './Carousel.scss';

const Carousel = props => {
    const images = [
        <StaticImage
                placeholder='blurred'
                className='square-img'
                quality={100}
                objectFit='cover'
                src='../../content/images/Deep-Clean-Shampoo-300ml.jpg'
                alt='extra info blurb 3'/>,
        <StaticImage
                placeholder='blurred'
                className='square-img'
                quality={100}
                objectFit='cover'
                src='../../content/images/Detangle-LeaveIn-Spray.jpg'
                alt='extra info blurb 3'/>,
        <StaticImage
                placeholder='blurred'
                className='square-img'
                quality={100}
                objectFit='cover'
                src='../../content/images/Dry-Finish-Texture-Spray.png'
                alt='extra info blurb 3'/>,
    ]

    const [currImg, setCurrImg] = useState(0);

  return (
    <div className='carousel'>
        <div className='carousel-inner'>
            <div className='carousel-left' onClick={() => {
                currImg > 0 && setCurrImg(currImg - 1)
            }}>
                <LeftArrowIcon/>
            </div>
            <div className='carousel-center'>
                {images[currImg]}
            </div>
            <div className='carousel-right' onClick={() => {
                currImg < 2 && setCurrImg(currImg + 1)
            }}>
                <RightArrowIcon/>
            </div>
        </div>
    </div>
  )
}

Carousel.propTypes = {}

export default Carousel