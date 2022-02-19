import React from 'react'
import Helmet from 'react-helmet';

const SEO = props => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@400;700&family=Raleway:ital,wght@0,400;0,500;0,700;1,300&display=swap" rel="stylesheet" /> 
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Helmet>
  )
}

export default SEO