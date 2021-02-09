import React from 'react';
import './choice.scss';

export default () => (
  <section className="choice-section">
    <div className="choice-container">
      <div className="col-1">
        <div className="choice">
          <h2 className="choice-header">Why BuySellRentMe is The <br /> Perfect choice?</h2>
        </div>
        <div className="choice">
          <h2 className="choice-number">01.</h2>
          <h3 className="choice-header">Suitable For Agents and <br /> Agencies</h3>
          <p className="choice-text">Never miss a sale! It's never been easier to turn <br /> leads into real customers</p>
        </div>
      </div>
      <div className="col-2">
        <div className="choice">
          <h2 className="choice-number">02.</h2>
          <h3 className="choice-header">Design Custom Leads Capture <br />Forms</h3>
          <p className="choice-text">Keep track of your leads without having to pay for <br /> an external CRM</p>
        </div>
        <div className="choice">
          <h2 className="choice-number">03.</h2>
          <h3 className="choice-header">Highly Customizable Theme</h3>
          <p className="choice-text">Customize your webiste according to your <br /> expectactions and requirements</p>
        </div>
      </div>
      <div className="inquiry-form">
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
              <input className="first-name" type='text' name='first-name' placeholder='First Name' />
              <input type='text' name='last-name' placeholder='Last Name' />
            </div>
            <input className="email" type='email' name='email' placeholder='email' />
          </div>
          <div className="location">
            <label>Location</label>
            <div className="zip">
              <select className="zip-select" name="Select">
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
              <input className="max-price" type='text' name="max-price" placeholder='Max Price' />
              <input type="text" name="min-size" placeholder="Minimum size" />
            </div>
            <div className="property-number">
              <input className="bed-number" type="text" name="bed-number" placeholder="No of Beds" />
              <input type="text" name="bath-number" placeholder="No of Baths" />
            </div>
          </div>
          <div className="consent-text">
            <span className="consent-agreement">GDPR Agreement</span>
            <div className="consent-check">
              <input type="checkbox" />
              <span className="span-consent">I consent to having this website store my submitted information</span>
            </div>
          </div>
          <div className="button-container">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>
)
