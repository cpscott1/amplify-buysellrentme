import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import logo from './assets/logo.png';
import './header.scss';
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


function App() {
  const [state, setState] = useState({
    residentialData,
    commercialData,
    propertyData,
    cityData
  })
  console.log(state.residentialData)
  return (
    <div className="App">
      <header className="App-header">
        <button>
          <FontAwesomeIcon className="menu-icon" icon={faBars} />
        </button>
        <img src={logo} alt="logo" className="logo" />
      </header>
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
    </div>
  );
}

export default App;
