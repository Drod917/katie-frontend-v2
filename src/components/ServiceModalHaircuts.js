import React from 'react'
import PropTypes from 'prop-types'

import './ServiceModalHaircuts.scss'

const ServiceModalHaircuts = ({ title, setIsOpen }) => {

  return (
    <>
        <div className={"service-modal-background open-modal"} />
        <div className={"service-modal open-modal"}>
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
                <div className="close-modal-haircuts">
                    <svg viewBox="0 0 1024 1024"
                        fill="none" xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setIsOpen(false)}
                        >
                        <path d="M512 64C264.6 64 64 264.6 64 512C64 759.4 264.6 960 512 960C759.4 960 960 759.4 960 512C960 264.6 759.4 64 512 64ZM677.4 682.2L611.4 681.9L512 563.4L412.7 681.8L346.6 682.1C342.2 682.1 338.6 678.6 338.6 674.1C338.6 672.2 339.3 670.4 340.5 668.9L470.6 513.9L340.5 359C339.292 357.534 338.621 355.699 338.6 353.8C338.6 349.4 342.2 345.8 346.6 345.8L412.7 346.1L512 464.6L611.3 346.2L677.3 345.9C681.7 345.9 685.3 349.4 685.3 353.9C685.3 355.8 684.6 357.6 683.4 359.1L553.5 514L683.5 669C684.7 670.5 685.4 672.3 685.4 674.2C685.4 678.6 681.8 682.2 677.4 682.2Z" fill="black"/>
                    </svg>
                </div>
                    
                <div className="modal-content-haircuts">
                    <div className="modal-service-title">
                        <h1>Woman</h1>
                        <div className='modal-service-item'>
                            <p>Precision & Texture Cut</p>
                            <p>$68</p>
                        </div>
                        <div className='modal-service-item-extra'>
                            <p>Complimentary Blowdry</p>
                        </div>

                        <div className='modal-service-item'>
                            <p>Bang Trim</p>
                            <p>$15</p>
                        </div>
                    </div>
                </div>

                <div className="modal-content-haircuts">
                    <div className="modal-service-title">
                        <h1>Men</h1>
                        <div className='modal-service-item'>
                            <p>Haircut</p>
                            <p>$30</p>
                        </div>
                        <div className='modal-service-item'>
                            <p>Beard Trim</p>
                            <p>$10</p>
                        </div>
                    </div>
                </div>

                <div className="modal-content-haircuts">
                    <div className="modal-service-title">
                        <h1>Kids <span>(12 & under)</span></h1>
                        <div className='modal-service-item'>
                            <p>Girls</p>
                            <p>$30</p>
                        </div>
                        <div className='modal-service-item'>
                            <p>Boys</p>
                            <p>$25</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

ServiceModalHaircuts.propTypes = {
    isActive: PropTypes.bool
}

ServiceModalHaircuts.defaultProps = {
    isActive: false
}

export default ServiceModalHaircuts