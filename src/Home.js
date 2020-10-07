import React, { useState } from 'react';
import './App.css';
import Header from './Header'
import Hero from './Hero';
import Listings from './Listings';
import Residential from './Residential';
import Commercial from './Commercial';
import Choices from './Choices';
import InquiryForm from './InquiryForm';
import Property from './Property';
import City from './City';
import Footer from './Footer';
import BottomFooter from './BottomFooter';
import { residentialData } from './data/residentialData';
import { commercialData } from './data/commercialData';
import { propertyData } from './data/propertyData';
import { cityData } from './data/cityData';




export default () => {
  const [state, setState] = useState({
    residentialData,
    commercialData,
    propertyData,
    cityData
  })
  return (
  <>
  <Header />
  <Hero />
  <Listings />
  <Residential residentialData={state.residentialData}/>
  <Commercial commercialData={state.commercialData}/>
  <Choices />
  <InquiryForm />
  <Property propertyData={state.propertyData}/>
  <City cityData={state.cityData} />
  <Footer />
  <BottomFooter />
  </>
  )
}
