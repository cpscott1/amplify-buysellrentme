import React from 'react';
import './property.scss';

export default ({ propertyData }) => (
  <section className="property-section">
    <div className="property-main">
      <h1 className="property-header">Check Our Selection of Finest Properties</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      <div className="property-col-1">
        <div className="property-image-1">
          <h3>Featured</h3>
        </div>
        <div className="property-image-1">
          <h3>Featured</h3>
        </div>
        <div className="property-image-1">
          <h3>Featured</h3>
        </div>
      </div>
      <div className="property-col-2">
        <div className="property-image-1">
          <h3>Featured</h3>
        </div>
        <div className="property-image-1">
          <h3>Featured</h3>
        </div>
        <div className="property-image-1">
          <h3>Featured</h3>
        </div>
      </div>
      {propertyData.map((property, index) => {
        return (
          <div key={index}>
            <div className="property-image" style={{background: `url(${property.image}) no-repeat`}}>
              <h3>{property.title}</h3>
            </div>
          </div>
        )
      })}
    </div>
  </section>
)
