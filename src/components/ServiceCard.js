import React from 'react';
import PropTypes from 'prop-types';

import './ServiceCard.scss';

const ServiceCard = ({ title, description, modalFunc, ...restProps }) => {
  return (
    <div className="service-card">
        <div className="card-wrapper">
            <div className="circle-icon" />
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="more-info">
                {/* eslint-disable-next-line */}
                <h1 onClick={() => modalFunc(title)}>MORE</h1>
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