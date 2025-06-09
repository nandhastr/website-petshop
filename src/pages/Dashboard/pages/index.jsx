import React from 'react'
import Navbar from '../../../components/layouts/Navbar/Navbar';
import Hero from '../../../components/common/Hero';
import About from '../../About';
import Services from '../../Services';
import Product from '../../Product';
import SpecialOffer from '../../SpecialOffer';
import Pricing from '../../pricingPlan';
import Team from '../../Team';
import Testimonial from '../../Testimonial';
import Blog from '../../Blog';
import Footer from '../../../components/layouts/Footer';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Product />
      <SpecialOffer />
      <Pricing />
      <Team />
      <Testimonial />
      <Blog />
      <Footer/>
    </>
  )
}

export default Dashboard;
