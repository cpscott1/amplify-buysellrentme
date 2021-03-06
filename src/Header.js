import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './header.scss';
import logo from './assets/Vector.png';

export default () => (
  <header className="App-header">
    <button>
      <FontAwesomeIcon className="menu-icon" icon={faBars} />
    </button>
    <img src={logo} alt="logo" className="logo" />
    <nav className="header-nav">
      <a href="/">Home</a>
      <a>Buy</a>
      <a href="/sell">Sell</a>
      <a>Rent</a>
      <a className="agent" href="#">Agent Locator</a>
      <a>Mortgage</a>
      <h3>(800) 987 6543</h3>
      <button>Create a listing</button>
    </nav>
  </header>
)
