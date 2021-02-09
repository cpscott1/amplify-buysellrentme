import React from 'react';
import './residential.scss'

export default ({ residentialData }) => (
  <section className="residential-section">
    <div className="residential">
      <div className="text-container">
        <h1 className="residential-header">Residential</h1>
        <p className="residential-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt</p>
      </div>
      <div className="image-container-desktop">
        <div className="col-1">
          <div className="text-container">
            <h1 className="residential-header">Residential</h1>
            <p className="residential-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt</p>
          </div>
          <div className="residential-image-1">
            <h3>Box</h3>
            <h2>Villa</h2>
          </div>
        </div>
        <div className="col-2">
          <div className="residential-image-2">
            <h3>Box</h3>
            <h2>Villa</h2>
          </div>
        </div>
        <div className="col-3">
          <div className="residential-image-3">
            <h3>Box</h3>
            <h2>Villa</h2>
          </div>
          <div className="residential-image-4">
            <h3>Box</h3>
            <h2>Villa</h2>
          </div>
        </div>
      </div>
      {residentialData.map((residential, index) => {
        return (
          <div className="residential-image-container" key={index}>
            {console.log(residential.image)}
            <div className="residential-image" style={{background: `url(${residential.image})`}}>
              <h3>{residential.properties}</h3>
              <h2>{residential.propertyType}</h2>
            </div>
          </div>
        )
      })}
    </div>
  </section>
);
