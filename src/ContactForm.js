import React from 'react';
import './contact.scss'

export default () => (
  <section className="contact-section">
    <div className="contact">
      <form className="contact-form">
        <span className="contact-header">If you are unable to locate the answers on our FAQ <br />page or just have a general question, please use the <br/> form below to get in contact with us.</span>
          <div className="input-container">
            <label className="contact-label">First Name</label>
            <input className="contact-input" type="text" name="first-name" placeholder="first name" />
          </div>
          <div className="input-container">
            <label className="contact-label">Last Name</label>
            <input className="contact-input" type="text" name="last-name" placeholder="last name" />
          </div>
          <div className="input-container">
            <label className="contact-label">Email</label>
            <input className="contact-input" type="email" name="email" placeholder="email" />
          </div>
          <div className="input-container">
            <label className="contact-label">Message</label>
            <textarea />
          </div>
      </form>
    </div>
  </section>
)
