import React from 'react';
import './cities.scss'

export default ({ cityData }) => (
    <section className="city-section">
      <div className="city">
        <div className="text-container">
          <h1 className="city-header">Explore Cities</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt</p>
        </div>
        {cityData.map((city, index) => {
          return (
            <div className="city-image-container" key={index}>
              {console.log(city.image)}
              <div className="city-image" style={{background: `url(${city.image}) no-repeat`}}>
                <h3>{city.properties}</h3>
                <h2>{city.region}</h2>
              </div>
            </div>
          )
        })}
      </div>
    </section>
)
