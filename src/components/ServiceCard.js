import React from 'react';
import PropTypes from 'prop-types';

import './ServiceCard.scss';

const ServiceCard = ({ title, description, ...restProps }) => {
  return (
    <div className="service-card">
        <div className="content-wrapper">
            <div className="circle-icon" />
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="more-info">
                <h1>MORE</h1>
            </div>
        </div>
    </div>
  )
}

ServiceCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default ServiceCard