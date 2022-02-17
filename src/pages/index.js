import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import ExtraInfo from '../components/sections/ExtraInfo';
import Contact from '../components/sections/Contact';
import SEO from '../components/SEO';

const IndexPage = () => {
  return (
    <Layout>
      {/* eslint-disable-next-line */}
      <SEO />
      <Hero />
      <Services />
      {/* Blog */}
      <ExtraInfo />
      {/* Blog2 */}
      {/* Hero2 */}
      <Contact />
      <Footer/>
    </Layout>
  )
}

export default IndexPage
