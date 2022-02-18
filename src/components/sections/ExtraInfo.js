import React from 'react';
// import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image';

import './ExtraInfo.scss';

const ExtraInfo = props => {
  return (
    <>
      <div className="content-wrapper">
        <div className='extra-info'>
          <StaticImage src="../../content/images/extra-info-hero.jpg" alt="extra info hero" />
          <div className='welcome-blurb'>
            <div className='welcome-blurb-content'>
              <h1>Welcome!</h1>
              <p>New season, new wardrobe. As the temperatures continue to rise, have your style follow suit and revamp your racks with fresh, elevated summer looks.</p>
            </div>
          </div>
          <div className="extra-info-blurb">
            <h1>Eyebrow Tinting</h1>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <StaticImage objectFit="contain" height={222} width={222} id="blurb-img-1" src="../../content/images/extra-info-blurb-1.jpg" alt="extra info blurb 1" />
          </div>
          <div className="extra-info-blurb">
            <StaticImage objectFit="contain" height={222} width={222} src="../../content/images/extra-info-blurb-2.jpg" alt="extra info blurb 2" />
            <h1>Facials</h1>
            <p>Aliquam ut porttitor leo a. Augue interdum velit euismod in. Suscipit adipiscing bibendum est ultricies. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Tempus iaculis urna id volutpat lacus. Tortor at auctor urna nunc id cursus metus aliquam. Adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
          </div>
        </div>
      </div>

      <div className="bg-colored">
        <div className="content-wrapper">
          EI2
        </div>
      </div>
    </>
  )
}

// ExtraInfo.propTypes = {}

export default ExtraInfo