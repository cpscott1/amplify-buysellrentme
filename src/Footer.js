import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import './footer.scss';

export default () => (
  <section className="footer">
    <div className="discover">
      <h2>Discover Us</h2>
      <a>About Us</a>
      <a>Media Room</a>
      <a>FAQ</a>
      <a>Advertise with us</a>
      <a>Blog</a>
      <a>Terms & Policies</a>
    </div>
    <div className="contact">
      <Switch>
        <Route path="/contact" component={Contact} />
      </Switch>
      <Link to="/contact">Contact Us</Link>
      <p>Philadephia, PA 19145</p>
      <p>879 546 1349</p>
      <p>info@buysellrentme.com</p>
    </div>
  </section>
)
