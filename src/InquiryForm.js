import React from 'react';

export default () => (
  <section>
    <h2>Real Estate Inquiry Form</h2>
    <h3>Design custom lead forms that integrate with the BuySellRentMe CRM</h3>
    <form>
      <label>Inquiry Type</label>
      <select name="select">
        <option>Select</option>
      </select>
      <div>
        <label>Information</label>
        <select name="I'm a">
          <option>I'm a</option>
        </select>
        <input type='text' name='first-name' placeholder='First Name' />
        <input type='text' name='last-name' placeholder='Last Name' />
        <input type='email' name='email' placeholder='email' />
      </div>
      <div>
        <label>Location</label>
        <select name="Select">
          <option>Select</option>
        </select>
        <input type='text' name="zip-code" placeholder='Zip Code' />
      </div>
      <div>
        <label>Property</label>
        <select name="Select Type">
          <option>Select Type</option>
        </select>
        <input type='text' name="max-price" placeholder='Max Price' />
        <input type="text" name="min-size" placeholder="Minimum size" />
        <input type="text" name="bed-number" placeholder="No of Beds" />
        <input type="text" name="bath-number" placeholder="No of Baths" />
      </div>
      <div>
        <span>GDPR Agreement</span>
      </div>
    </form>
  </section>
)
