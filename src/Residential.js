import React from 'react';
import './residential.scss'

export default ({ residentialData }) => (
  <section className="residential-section">
    <div className="residential">
      <h1 className="residential-header">Residential</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt</p>
      {residentialData.map((residential, index) => {
        return (
          <div key={index}>
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
