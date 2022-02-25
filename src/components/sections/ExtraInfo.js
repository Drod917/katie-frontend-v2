import React from 'react';
// import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image';

import './ExtraInfo.scss';

const ExtraInfo = props => {
  return (
    <>
      <div className="content-wrapper">
        <div className='extra-info'>
          <StaticImage 
            width={1000}
            style={{minHeight: '300px'}}
            placeholder='blurred'
            className="welcome-hero" 
            quality={100} 
            src="../../content/images/extra-info-hero.jpg" 
            alt="extra info hero" />
          <div className='welcome-blurb'>
            <div className='welcome-blurb-content'>
              <h1>Welcome!</h1>
              <p>New season, new wardrobe. As the temperatures continue to rise, have your style follow suit and revamp your racks with fresh, elevated summer looks.</p>
            </div>
          </div>
          <div className="extra-info-blurb-wrapper">
            <div className="extra-info-blurb">
              <h1>Eyebrow Tinting</h1>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <StaticImage 
                placeholder='blurred'
                quality={100} 
                objectFit="contain"
                height={222} 
                width={222} 
                id="blurb-img-1" 
                src="../../content/images/extra-info-blurb-1.jpg" 
                alt="extra info blurb 1" />
            </div>
            <div className="extra-info-blurb flipped">
              <StaticImage 
                placeholder='blurred'
                quality={100} 
                objectFit="contain" 
                height={222} 
                width={222} 
                src="../../content/images/extra-info-blurb-2.jpg" 
                alt="extra info blurb 2" />
              <div>
                <h1>Facials</h1>
                <p>Aliquam ut porttitor leo a. Augue interdum velit euismod in. Suscipit adipiscing bibendum est ultricies. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Tempus iaculis urna id volutpat lacus. Tortor at auctor urna nunc id cursus metus aliquam. Adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-colored">
        <div className="content-wrapper">
          <div className="extra-info-2">
            <StaticImage 
              placeholder='blurred'
              className="square-img" 
              quality={100} 
              objectFit="cover" 
              src="../../content/images/extra-info-blurb-3.jpg" 
              alt="extra info blurb 3" />
            <div className="extra-info-2-blurb-wrapper">
              <StaticImage 
                placeholder='blurred'
                quality={100} 
                objectFit="contain" 
                height={250} 
                width={250} 
                src="../../content/images/extra-info-blurb-4.jpg" 
                alt="extra info blurb 4" />
              <h1>Home skin care</h1>
              <p>Vel fringilla est ullamcorper eget nulla facilisi. Nibh cras pulvinar mattis nunc. Massa id neque aliquam vestibulum morbi blandit. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Id ornare arcu odio ut sem.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-wrapper">
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
      </div>
    </>
  )
}

// ExtraInfo.propTypes = {}

export default ExtraInfo