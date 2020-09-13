import React from 'react';
import './listing.scss'


export default () => (
  <section className="listing-section">
    <form>
      <div>
        <label htmlFor="lookingFor">LOOKING FOR</label>
        <input
          name="lookingFor"
          placeholder="Property Type"
        />
      </div>
      <div>
        <label htmlFor="location">LOCATION</label>
        <input
          name="location"
          placeholder="All Cities"
        />
      </div>
      <div>
        <label htmlFor="propertySize">PROPERTY SIZE</label>
        <input
          name="propertySize"
          placeholder="Bedrooms"
        />
      </div>
      <div>
        <label htmlFor="yourBudget">YOUR BUDGET</label>
        <input
          name="yourBudget"
          placeholder="Max. Price"
        />
      </div>
    </form>
  </section>
);
