import React from 'react';
import './commercial.scss'

export default ({ commercialData }) => (
    <section className="commerical-section">
      <div className="commercial">
        <h1 className="commerical-header">Commercial</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt</p>
        {commercialData.map((commercial, index) => {
          return (
            <div key={index}>
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
