import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './header.scss';
import logo from './assets/logo.png';

export default () => (
  <header className="App-header">
    <button>
      <FontAwesomeIcon className="menu-icon" icon={faBars} />
    </button>
    <img src={logo} alt="logo" className="logo" />
  </header>
)
