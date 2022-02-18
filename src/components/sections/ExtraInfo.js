import React from 'react';
// import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image';

import './ExtraInfo.scss';

const ExtraInfo = props => {
  return (
    <div className='extra-info'>
      <StaticImage src="../../content/images/extra-info-hero.jpg" alt="extra info hero" />
      <div className='welcome-blurb'>
        <div className='welcome-blurb-content'>
          <h1>Welcome!</h1>
          <p>New season, new wardrobe. As the temperatures continue to rise, have your style follow suit and revamp your racks with fresh, elevated summer looks.</p>
        </div>
      </div>
    </div>
  )
}

// ExtraInfo.propTypes = {}

export default ExtraInfo