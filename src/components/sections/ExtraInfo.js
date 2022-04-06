import React from 'react';
// import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image';

import AnimateIn from '../../utils/AnimateIn';

import './ExtraInfo.scss';

const ExtraInfo = props => {
  return (
    <>
      <div className="content-wrapper">
        <div className='extra-info'>
          <AnimateIn>
            <StaticImage 
              width={1000}
              style={{minHeight: '300px'}}
              placeholder='blurred'
              className="welcome-hero" 
              quality={100} 
              src="../../content/images/extra-info-hero.jpg" 
              alt="extra info hero" />
          </AnimateIn>
          <div className='welcome-blurb'>
            <div className='welcome-blurb-content'>
              <AnimateIn>
                <h1>Welcome!</h1>
                <p>Self care is an important part of your mental and physical well-being. My goal is to uplift your spirits, and your style. When you look good, you feel good.</p>
              </AnimateIn>
            </div>
          </div>
          
          <AnimateIn>
            <div className="business-partners">
              <h1>RPM</h1>
              <StaticImage 
                  placeholder='blurred'
                  quality={100} 
                  objectFit="contain"
                  src="../../content/images/electric-brand.png" 
                  alt="extra info blurb 2" 
                  imgStyle={{
                    filter: 'invert(100%)',
                    clipPath: 'unset'
                }}/>
            </div>
          </AnimateIn>

          <div className="extra-info-blurb-wrapper">
            <div className="extra-info-blurb">
              <AnimateIn>
                <h1>The Mission</h1>
                <p>When you sit in my chair, we work together to reach your desired look. Your vision is my priority. My skills of cut and color are used to compliment your best assets.</p>
              </AnimateIn>
              <StaticImage 
                placeholder='blurred'
                quality={100} 
                objectFit="contain"
                height={222} 
                width={222} 
                id="blurb-img-1" 
                src="../../content/images/mission.jpg" 
                alt="extra info blurb 1"/>
            </div>
            
            <div className="extra-info-blurb flipped" id="/about">
              <StaticImage 
                placeholder='blurred'
                quality={100} 
                objectFit="contain" 
                height={222} 
                width={222} 
                src="../../content/images/katie.jpg" 
                alt="extra info blurb 2"/>
              <AnimateIn>
                <div>
                  <h1>About Me</h1>
                  <p>Graduating in 2005 from Paul Mitchell The School, I set out on a journey to make my clients feel beautiful inside and out. With 17 years of experience, I've trained extensively with companies such as Bumble and bumble in New York and Living Proof in Boston. After working at some of the best salons in Central Florida, I decided to open my own studio to deliver a personalized 1 on 1 experience with my clients.</p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-colored">
        <div className="content-wrapper">
          <AnimateIn>
            <div className="extra-info-2" id="/shop">
              {/* <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <a href="https://shop.saloninteractive.com/store/KBHAIR/product/39667/43118">
                      <StaticImage 
                        placeholder='blurred'
                        className="d-block w-100" 
                        quality={100} 
                        aspectRatio={1}
                        objectFit="cover" 
                        src="../../content/images/Dry-Finish-Texture-Spray.png" 
                        alt="extra info blurb 1" /> 
                    </a>
                  </div>
                  <div class="carousel-item">
                    <a href="https://shop.saloninteractive.com/store/KBHAIR/product/27272/30723">
                      <StaticImage 
                        placeholder='blurred'
                        className="d-block w-100" 
                        quality={100} 
                        aspectRatio={1}
                        objectFit="cover" 
                        src="../../content/images/Detangle-LeaveIn-Spray.jpg" 
                        alt="extra info blurb 2" /> 
                    </a>
                  </div>
                  <div class="carousel-item">
                    <a href="https://shop.saloninteractive.com/store/KBHAIR/product/15926/19384">
                      <StaticImage 
                        placeholder='blurred'
                        className="d-block w-100" 
                        quality={100} 
                        aspectRatio={1}
                        objectFit="cover" 
                        src="../../content/images/Deep-Clean-Shampoo-300ml.jpg" 
                        alt="extra info blurb 3" /> 
                    </a>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div className="extra-info-2-blurb-wrapper">
                <a href="https://shop.saloninteractive.com/store/KBHAIR/product_categories?group=1">
                  <h1>Browse Shop</h1>
                </a>
                <p>Support small businesses and buy directly from my shop!</p>
              </div> */}
            </div>
          </AnimateIn>
        </div>
      </div>

      <div className="content-wrapper">
        <AnimateIn>
          <div className="extra-info-end">
            <StaticImage 
              placeholder='blurred'
              quality={100} 
              objectFit="contain" 
              height={315} 
              width={315} 
              src="../../content/images/extra-info-blurb-5.jpg" 
              alt="extra info blurb 5" />
            <div className='extra-info-end-blurb-wrapper'>
              <div className='vertical-line' />
              <h1>the good ritual.</h1>
            </div>
          </div>
        </AnimateIn>
      </div>
    </>
  )
}

// ExtraInfo.propTypes = {}

export default ExtraInfo