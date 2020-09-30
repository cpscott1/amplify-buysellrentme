import React from 'react';
import './inquiry.scss'

export default () => (
  <section className="inquiry-form">
    <h2>Real Estate Inquiry Form</h2>
    <h3>Design custom lead forms that integrate with the BuySellRentMe CRM</h3>
    <form>
      <div className="inquiry-type">
        <label>Inquiry Type</label>
        <select name="select">
          <option>Select</option>
        </select>
      </div>
      <div className="information">
        <label>Information</label>
        <select name="I'm a">
          <option>I'm a</option>
        </select>
        <div className="names">
          <input type='text' name='first-name' placeholder='First Name' />
          <input type='text' name='last-name' placeholder='Last Name' />
        </div>
        <input type='email' name='email' placeholder='email' />
      </div>
      <div className="location">
        <label>Location</label>
        <div className="zip">
          <select name="Select">
            <option>Select</option>
          </select>
          <input type='text' name="zip-code" placeholder='Zip Code' />
        </div>
      </div>
      <div className="property">
        <label>Property</label>
        <select name="Select Type">
          <option>Select Type</option>
        </select>
        <div className="price">
          <input type='text' name="max-price" placeholder='Max Price' />
          <input type="text" name="min-size" placeholder="Minimum size" />
        </div>
        <div className="property-number">
          <input type="text" name="bed-number" placeholder="No of Beds" />
          <input type="text" name="bath-number" placeholder="No of Baths" />
        </div>
      </div>
      <div className="consent-text">
        <span>GDPR Agreement</span>
        <div className="consent-check">
          <input type="checkbox" />
          <span>I consent to having this website store my submitted information</span>
        </div>
      </div>
      <div className="button-container">
        <button>Submit</button>
      </div>
    </form>
  </section>
)
