import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import logo from './assets/logo.png';
import './header.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>
          <FontAwesomeIcon className="menu-icon" icon={faBars} />
        </button>
        <img src={logo} alt="logo" className="logo" />
      </header>
    </div>
  );
}

export default App;
