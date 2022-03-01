import React from 'react';
import PropTypes from 'prop-types';

import AnimateIn from '../utils/AnimateIn';

import './ServiceCard.scss';

const ServiceCard = ({ title, description, icon, modalFunc, ...restProps }) => {
  return (
    <AnimateIn>
      <div className="service-card">
        <div className="card-wrapper">
            <div style={{marginTop: '3em', 
                         marginBottom: '1em',
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                         alignContent: 'center',
                         justifyContent: 'center'}}>
              <div className="circle-icon">
                {icon}
              </div>
              <h1>{title}</h1>
              <div
                style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'}}>
                <p>{description}</p>
              </div>
            </div>

            <div className="more-info">
                {/* eslint-disable-next-line */}
                <h1 onClick={() => modalFunc(title)}>MORE</h1>
            </div>
        </div>
      </div>
    </AnimateIn>
  )
}

ServiceCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default ServiceCard