import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import './Contact.scss';

const Contact = props => {
  return (
    <div className="bg-colored">
      <div className="content-wrapper">
        <StaticImage 
          quality={100}
          style={{marginTop: '3em', height: '422px'}}
          imgStyle={{clipPath: 'unset', height: '422px'}}
          src="../../content/images/hero1.jpg"
          alt="contact image"
        />
        <div className="contact-form-wrapper">
          <div className="contact-form">
            <h1>contact form</h1>
            <input type="text" name="contactName" placeHolder="Enter your Name"/>
            <input type="text" name="contactEmail" placeHolder="Enter a valid email address" />
            <textarea placeHolder="Enter your message" />
            <input type="button" value="Submit" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact