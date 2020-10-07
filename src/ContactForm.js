import React from 'react';
import './contact.scss'

export default () => (
  <section className="contact-section">
    <form className="contact-form">
      <span>If you are unable to locate the answers on our FAQ page or just have a general question, please use the form below to get in contact with us.</span>
      <div className="contact">
        <label>First Name</label>
        <input type="text" name="first-name" placeholder="first name" />
        <label>Last Name</label>
        <input type="text" name="last-name" placeholder="last name" />
        <label>Email</label>
        <input type="email" name="email" placeholder="email" />
      </div>
    </form>
  </section>
)
