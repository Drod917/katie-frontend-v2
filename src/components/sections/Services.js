import React from 'react';
import ServiceCard from '../ServiceCard';
import { useState } from 'react';
import ServiceModalHaircuts from '../ServiceModalHaircuts';
import ServiceModalColor from '../ServiceModalColor';
import ServiceModalTreatments from '../ServiceModalTreatments';
import ServiceModalAdditional from '../ServiceModalAdditional';


import CuttingIcon from '../../content/images/scissors.svg';
import ColoringIcon from '../../content/images/coloring.svg';
import TreatmentsIcon from '../../content/images/treatments.svg';
import AdditionalServicesIcon from '../../content/images/additional_services.svg';

import AnimateIn from '../../utils/AnimateIn';

import './Services.scss';

const Services = props => {
  // const [activeModal, openModal] = useState('');
  const [isOpen, setIsOpen] = useState('');

  return (
    <div className="bg-colored">
      <div className="content-wrapper">
        <div className="services" id="/services">
          <div className="service-card-collection">
            <AnimateIn>
              <ServiceCard 
                title="Haircuts"
                description="Mens, Womans and Kids haircuts. Precision cutting, Texture cutting..."
                icon={<CuttingIcon/>}
                setModalOpen={setIsOpen}
              />
            </AnimateIn>
            <AnimateIn>
              <ServiceCard 
                title="Color"
                description="Root retouch, foils, balyage, fantasy color, grey blending..."
                icon={<ColoringIcon/>}
                setModalOpen={setIsOpen}
              />
            </AnimateIn>
            <AnimateIn>
              <ServiceCard 
                title="Treatments"
                description="Deep conditioning, Keratin Complex, Brazilian Blowouts, Olaplex..."
                icon={<TreatmentsIcon/>}
                setModalOpen={setIsOpen}
              />
            </AnimateIn>
            <AnimateIn>
              <ServiceCard 
                title="Additional Services"
                description="Style, Extensions, Facial Waxing"
                icon={<AdditionalServicesIcon/>}
                setModalOpen={setIsOpen}
              />
            </AnimateIn>
          </div>
          
          {isOpen === 'Haircuts' && <ServiceModalHaircuts setIsOpen={setIsOpen}/>}
          {isOpen === 'Color' && <ServiceModalColor setIsOpen={setIsOpen}/>}
          {isOpen === 'Treatments' && <ServiceModalTreatments setIsOpen={setIsOpen}/>}
          {isOpen === 'Additional Services' && <ServiceModalAdditional setIsOpen={setIsOpen}/>}

          {/* <div className={activeModal === 'Haircuts' ? "service-modal-background open-modal" : "service-modal-background"} />
          <div className={activeModal === 'Haircuts' ? "service-modal open-modal" : "service-modal"}>
            <div style={{
              display: 'grid',
              height: '100%',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridTemplateRows: '0.5fr 1fr 1fr 1fr',
              border: '0.15em solid #212529',
              padding: '1em',
              margin: '2em'
            }}>
              <div className='modal-title'>
                <h1>Haircuts</h1>
              </div>
              <div className="close-modal">
                <svg viewBox="0 0 1024 1024"
                  fill="none" xmlns="http://www.w3.org/2000/svg"
                  onClick={() => openModal('')}
                  >
                  <path d="M512 64C264.6 64 64 264.6 64 512C64 759.4 264.6 960 512 960C759.4 960 960 759.4 960 512C960 264.6 759.4 64 512 64ZM677.4 682.2L611.4 681.9L512 563.4L412.7 681.8L346.6 682.1C342.2 682.1 338.6 678.6 338.6 674.1C338.6 672.2 339.3 670.4 340.5 668.9L470.6 513.9L340.5 359C339.292 357.534 338.621 355.699 338.6 353.8C338.6 349.4 342.2 345.8 346.6 345.8L412.7 346.1L512 464.6L611.3 346.2L677.3 345.9C681.7 345.9 685.3 349.4 685.3 353.9C685.3 355.8 684.6 357.6 683.4 359.1L553.5 514L683.5 669C684.7 670.5 685.4 672.3 685.4 674.2C685.4 678.6 681.8 682.2 677.4 682.2Z" fill="black"/>
                </svg>
              </div>
              
              <div className="modal-content">
                <div className="modal-service-title">
                <h1>Woman</h1>
                  <div className='modal-service-item'>
                    <p>Clipper Cut</p>
                    <p>$90</p>
                  </div>
                  <div className='modal-service-item'>
                    <p>Precision Cut</p>
                    <p>$80</p>
                  </div>
                  <div className='modal-service-item'>
                    <p>Texture Cut</p>
                    <p>$70</p>
                  </div>
                </div>
              </div>

              <div className="modal-content">
                <div className="modal-service-title">
                <h1>Men</h1>
                  <div className='modal-service-item'>
                    <p>Haircut</p>
                    <div className='service-item-price'>
                      <p>$35</p>
                    </div>
                  </div>
                  <div className='modal-service-item'>
                    <p>Trim</p>
                    <p>$25</p>
                  </div>
                </div>
              </div>

              <div className="modal-content">
                <div className="modal-service-title">
                <h1>Children</h1>
                  <div className='modal-service-item'>
                    <p>Girls</p>
                    <p>$35</p>
                  </div>
                  <div className='modal-service-item'>
                    <p>Boys</p>
                    <p>$25</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
{/*           
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
          </div> */} 
        </div>
      </div>
    </div>
  )
}


export default Services