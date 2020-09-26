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
      </div>
    </form>
  </section>
)
