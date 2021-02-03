import React from 'react';
import './listing.scss'


export default () => (
  <section className="listing-section">
    <form className="listing">
      <div className="listing-form">
        <label htmlFor="lookingFor">LOOKING FOR</label>
        <input
          name="lookingFor"
          placeholder="Property Type"
        />
      </div>
      <div className="listing-form">
        <label htmlFor="location">LOCATION</label>
        <input
          name="location"
          placeholder="All Cities"
        />
      </div>
      <div className="listing-form">
        <label htmlFor="propertySize">PROPERTY SIZE</label>
        <input
          name="propertySize"
          placeholder="Bedrooms"
        />
      </div>
      <div className="listing-form">
        <label htmlFor="yourBudget">YOUR BUDGET</label>
        <input
          name="yourBudget"
          placeholder="Max. Price"
        />
      </div>
      <div className="button-container"><button className="listing-search">Search</button></div>
    </form>
    <h1>Discover Our Featured Listings</h1>
    <p className="listing-text">Lorem ipsum dolor sit amet, consectetur <br /> adipisic edut</p>
    <div className="featured-listing">
      <div className="listing-img">
        <span className="address">Address</span>
      </div>
      <div className="bottom-info">
        <span>$1000 / month</span>
        <span>location</span>
      </div>
    </div>
  </section>
);
