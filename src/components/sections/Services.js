import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import { useState } from 'react';
import ServiceModalHaircuts from '../ServiceModalHaircuts';
import ServiceModalColor from '../ServiceModalColor';
import ServiceModalTreatments from '../ServiceModalTreatments';
import ServiceModalAdditional from '../ServiceModalAdditional';


import CuttingIcon from '../../content/images/svg/scissors.svg';
import ColoringIcon from '../../content/images/svg/coloring.svg';
import TreatmentsIcon from '../../content/images/svg/treatments.svg';
import AdditionalServicesIcon from '../../content/images/svg/additional_services.svg';

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
        </div>
      </div>
    </div>
  )
}


export default Services