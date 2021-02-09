import React from 'react';
import './commercial.scss'

export default ({ commercialData }) => (
    <section className="commerical-section">
      <div className="commercial">
      <div className="commercial-text-container">
        <h1 className="commercial-header">Commercial</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt</p>
      </div>
        {commercialData.map((commercial, index) => {
          return (
            <div className="commericial-image-container" key={index}>
              {console.log(commercial.image)}
              <div className="commercial-image" style={{background: `url(${commercial.image}) no-repeat`}}>
                <h3>{commercial.properties}</h3>
                <h2>{commercial.propertyType}</h2>
              </div>
            </div>
          )
        })}
      </div>
    </section>
)
