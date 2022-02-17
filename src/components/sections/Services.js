import React from 'react';
import ServiceCard from '../ServiceCard';

import './Services.scss';

const Services = props => {
  return (
    <div className="services">
      <div className="service-card-collection">
        <ServiceCard 
          title="Manicures"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        />
        <ServiceCard 
          title="Massage"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        />
        <ServiceCard 
          title="Facials"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        />
        <ServiceCard 
          title="Hydrotherapy"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        />
      </div>
    </div>
  )
}


export default Services