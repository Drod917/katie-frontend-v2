import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';

import './sections/Services.scss';
import './ServiceModalAdditional.scss';

const ServiceModalAdditional = ({ title, setIsOpen }) => {

  return (
    <>
        <div className={"service-modal-background open-modal"} />
        <div className={"service-modal open-modal"}>
            <div style={{
                display: 'grid',
                height: '100%',
                gridTemplateColumns: '1fr 1fr 1fr',
                border: '0.15em solid #212529',
                padding: '1em',
                margin: '2em'
            }}>
                <div className='modal-title-additional'>
                    <h1>Additional Services</h1>
                </div>
                <div className="close-modal">
                    <svg viewBox="0 0 1024 1024"
                        fill="none" xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setIsOpen(false)}
                        >
                        <path d="M512 64C264.6 64 64 264.6 64 512C64 759.4 264.6 960 512 960C759.4 960 960 759.4 960 512C960 264.6 759.4 64 512 64ZM677.4 682.2L611.4 681.9L512 563.4L412.7 681.8L346.6 682.1C342.2 682.1 338.6 678.6 338.6 674.1C338.6 672.2 339.3 670.4 340.5 668.9L470.6 513.9L340.5 359C339.292 357.534 338.621 355.699 338.6 353.8C338.6 349.4 342.2 345.8 346.6 345.8L412.7 346.1L512 464.6L611.3 346.2L677.3 345.9C681.7 345.9 685.3 349.4 685.3 353.9C685.3 355.8 684.6 357.6 683.4 359.1L553.5 514L683.5 669C684.7 670.5 685.4 672.3 685.4 674.2C685.4 678.6 681.8 682.2 677.4 682.2Z" fill="black"/>
                    </svg>
                </div>
                    
                <div className="modal-content-additional">
                    <div className="modal-service-title-additional">
                        <h1>Hair</h1>
                        <div className='modal-service-item-additional'>
                            <p>Blowdry</p>
                            <p>$30</p>
                        </div>
                        <div className='modal-service-item-additional'>
                            <p>Iron Work</p>
                            <p>$20</p>
                        </div>
                        <div className='modal-service-item-additional'>
                            <p>Updo</p>
                            <p>$55</p>
                        </div>
                    </div>

                    <div className="modal-service-title-additional">
                        <h1>Waxing</h1>
                        <div className='modal-service-item-additional'>
                            <p>Eyebrows</p>
                            <p>$30</p>
                        </div>
                        <div className='modal-service-item-extra'>
                            <p>Complimentary Eyebrow Tint</p>
                        </div>
                        <div className='modal-service-item-additional'>
                            <p>Lip</p>
                            <p>$10</p>
                        </div>
                        <div className='modal-service-item-additional'>
                            <p>Chin</p>
                            <p>$10</p>
                        </div>
                        <div className='modal-service-item-additional'>
                            <p>Sideburns</p>
                            <p>$20</p>
                        </div>
                        <div className='modal-service-item-additional'>
                            <p>Full Face</p>
                            <p>$40</p>
                        </div>
                    </div>

                    <div className="modal-service-title-additional">
                        <h1>Extensions</h1>
                        <div className='modal-service-item-additional'>
                            <p>Consultation</p>
                            <p>$25</p>
                        </div>
                        <div className='modal-service-item-additional'>
                            <p>Application</p>
                            <p>$30/pack</p>
                        </div>
                        <div className='modal-service-item-extra'>
                            <p>Tape Fee 50c/ea</p>
                        </div>
                        <div className='modal-service-item-extra'>
                            <p>Complimentary Haircut w/ Application</p>
                        </div>
                        <div className='modal-service-item-additional'>
                            <p>Removal</p>
                            <p>$55</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

ServiceModalAdditional.propTypes = {
    isActive: PropTypes.bool
}

ServiceModalAdditional.defaultProps = {
    isActive: false
}

export default ServiceModalAdditional