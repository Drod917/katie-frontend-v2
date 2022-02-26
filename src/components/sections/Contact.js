import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import './Contact.scss';

const Contact = props => {
  return (
    <div className="bg-colored" id="/contact">
      <div className="content-wrapper">
        <div className="col-wrapper">
          <StaticImage 
            placeholder='blurred'
            quality={100}
            src="../../content/images/hero1.jpg"
            alt="contact image"
          />
          <div className="contact-form-wrapper">
            <div className="contact-form">
              <h1>contact form</h1>
              <input type="text" name="contactName" placeholder="Enter your Name"/>
              <input type="text" name="contactEmail" placeholder="Enter a valid email address" />
              <textarea placeholder="Enter your message" />
              <input type="button" value="Submit" onClick={()=> (console.log('test'))}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact