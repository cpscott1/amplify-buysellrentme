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
import { residentialData } from './data/residentialData';
import { commercialData } from './data/commercialData';


function App() {
  const [state, setState] = useState({
    residentialData,
    commercialData
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
    </div>
  );
}

export default App;
