import React from 'react';
import ServiceCard from '../ServiceCard';
import { useState } from 'react';

import CuttingIcon from '../../content/images/scissors.svg';
import ColoringIcon from '../../content/images/coloring.svg';
import TreatmentsIcon from '../../content/images/treatments.svg';
import AdditionalServicesIcon from '../../content/images/additional_services.svg';

import './Services.scss';

const Services = props => {
  const [activeModal, openModal] = useState('');

  return (
    <div className="bg-colored">
      <div className="content-wrapper">
        <div className="services">
          <div className="service-card-collection">
            <ServiceCard 
              title="Haircuts"
              description="Mens, Womans and Childrens haircuts. Clipper cuts, Precision cutting, Texture cutting..."
              icon={<CuttingIcon/>}
              modalFunc={openModal}
            />
            <ServiceCard 
              title="Color"
              description="Single process, high/low lights, balyage, ombré, grey blending..."
              icon={<ColoringIcon/>}
              modalFunc={openModal}
            />
            <ServiceCard 
              title="Treatments"
              description="Deep conditioning, Keratin Complex, Brazilian Blowouts, Olaplex..."
              icon={<TreatmentsIcon/>}
              modalFunc={openModal}
            />
            <ServiceCard 
              title="Additional Services"
              description="Extensions, weddings, facial waxing, "
              icon={<AdditionalServicesIcon/>}
              modalFunc={openModal}
            />
          </div>

          <div className={activeModal === 'Haircuts' ? "service-modal-background open-modal" : "service-modal-background"} />
          <div className={activeModal === 'Haircuts' ? "service-modal open-modal" : "service-modal"}>
            <svg viewBox="0 0 1024 1024"
              fill="none" xmlns="http://www.w3.org/2000/svg"
              onClick={() => openModal('')}
              >
              <path d="M512 64C264.6 64 64 264.6 64 512C64 759.4 264.6 960 512 960C759.4 960 960 759.4 960 512C960 264.6 759.4 64 512 64ZM677.4 682.2L611.4 681.9L512 563.4L412.7 681.8L346.6 682.1C342.2 682.1 338.6 678.6 338.6 674.1C338.6 672.2 339.3 670.4 340.5 668.9L470.6 513.9L340.5 359C339.292 357.534 338.621 355.699 338.6 353.8C338.6 349.4 342.2 345.8 346.6 345.8L412.7 346.1L512 464.6L611.3 346.2L677.3 345.9C681.7 345.9 685.3 349.4 685.3 353.9C685.3 355.8 684.6 357.6 683.4 359.1L553.5 514L683.5 669C684.7 670.5 685.4 672.3 685.4 674.2C685.4 678.6 681.8 682.2 677.4 682.2Z" fill="black"/>
            </svg>
          </div>
          
          <div className={activeModal === 'Color' ? "service-modal-background open-modal" : "service-modal-background"} />
          <div className={activeModal === 'Color' ? "service-modal open-modal" : "service-modal"}>
            <svg viewBox="0 0 1024 1024"
              fill="none" xmlns="http://www.w3.org/2000/svg"
              onClick={() => openModal('')}
              >
              <path d="M512 64C264.6 64 64 264.6 64 512C64 759.4 264.6 960 512 960C759.4 960 960 759.4 960 512C960 264.6 759.4 64 512 64ZM677.4 682.2L611.4 681.9L512 563.4L412.7 681.8L346.6 682.1C342.2 682.1 338.6 678.6 338.6 674.1C338.6 672.2 339.3 670.4 340.5 668.9L470.6 513.9L340.5 359C339.292 357.534 338.621 355.699 338.6 353.8C338.6 349.4 342.2 345.8 346.6 345.8L412.7 346.1L512 464.6L611.3 346.2L677.3 345.9C681.7 345.9 685.3 349.4 685.3 353.9C685.3 355.8 684.6 357.6 683.4 359.1L553.5 514L683.5 669C684.7 670.5 685.4 672.3 685.4 674.2C685.4 678.6 681.8 682.2 677.4 682.2Z" fill="black"/>
            </svg>
          </div>
          
          <div className={activeModal === 'Treatments' ? "service-modal-background open-modal" : "service-modal-background"} />
          <div className={activeModal === 'Treatments' ? "service-modal open-modal" : "service-modal"}>
            <svg viewBox="0 0 1024 1024"
              fill="none" xmlns="http://www.w3.org/2000/svg"
              onClick={() => openModal('')}
              >
              <path d="M512 64C264.6 64 64 264.6 64 512C64 759.4 264.6 960 512 960C759.4 960 960 759.4 960 512C960 264.6 759.4 64 512 64ZM677.4 682.2L611.4 681.9L512 563.4L412.7 681.8L346.6 682.1C342.2 682.1 338.6 678.6 338.6 674.1C338.6 672.2 339.3 670.4 340.5 668.9L470.6 513.9L340.5 359C339.292 357.534 338.621 355.699 338.6 353.8C338.6 349.4 342.2 345.8 346.6 345.8L412.7 346.1L512 464.6L611.3 346.2L677.3 345.9C681.7 345.9 685.3 349.4 685.3 353.9C685.3 355.8 684.6 357.6 683.4 359.1L553.5 514L683.5 669C684.7 670.5 685.4 672.3 685.4 674.2C685.4 678.6 681.8 682.2 677.4 682.2Z" fill="black"/>
            </svg>
          </div>
          
          <div className={activeModal ==='Additional Services' ? "service-modal-background open-modal" : "service-modal-background"} />
          <div className={activeModal ==='Additional Services' ? "service-modal open-modal" : "service-modal"}>
            <svg viewBox="0 0 1024 1024"
              fill="none" xmlns="http://www.w3.org/2000/svg"
              onClick={() => openModal('')}
              >
              <path d="M512 64C264.6 64 64 264.6 64 512C64 759.4 264.6 960 512 960C759.4 960 960 759.4 960 512C960 264.6 759.4 64 512 64ZM677.4 682.2L611.4 681.9L512 563.4L412.7 681.8L346.6 682.1C342.2 682.1 338.6 678.6 338.6 674.1C338.6 672.2 339.3 670.4 340.5 668.9L470.6 513.9L340.5 359C339.292 357.534 338.621 355.699 338.6 353.8C338.6 349.4 342.2 345.8 346.6 345.8L412.7 346.1L512 464.6L611.3 346.2L677.3 345.9C681.7 345.9 685.3 349.4 685.3 353.9C685.3 355.8 684.6 357.6 683.4 359.1L553.5 514L683.5 669C684.7 670.5 685.4 672.3 685.4 674.2C685.4 678.6 681.8 682.2 677.4 682.2Z" fill="black"/>
            </svg>
          </div>
          
        </div>
      </div>
    </div>
  )
}


export default Services