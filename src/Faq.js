import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BottomFooter from './BottomFooter';
import './hero.scss'
import './faq.scss'

export default () => (
  <>
  <Header />
  <section className="contact-hero-container">
    <div className="hero-section">
      <h1>Frequently Asked Questions</h1>
    </div>
  </section>
  <h2 className="question-header">Question About Selling</h2>
  <div className="sell-questions">
    <h3 className="sell-header">Can a home depreiciate in value?</h3>
    <p className="sell-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet massa mi, sed ornare dui ullamcorper non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec orci ac lorem tempor ultricies. Pellentesque pulvinar nisl pulvinar ex tincidunt, eu gravida lacus auctor. Maecenas finibus eros pharetra, tempus tortor sit amet, faucibus sapien. Donec non nulla posuere, malesuada urna quis, ornare lectus. Nunc gravida, sapien non laoreet consectetur, sem ligula consequat ex, sit amet sodales velit dui a ipsum. Mauris aliquet metus nec dui porttitor, non mattis ex accumsan. Duis gravida diam est, ac molestie erat porta sit amet. Vivamus tortor mauris, aliquet condimentum elit porttitor, consequat malesuada nibh. Duis nec vestibulum nisi, eget dignissim ex</p>
    <h3 className="sell-header">Is older home as good a value as a new home?</h3>
    <h3 className="sell-header">What is a broker?</h3>
    <h3 className="sell-header">Can I pay my own taxes and insurance?</h3>
    <h3 className="sell-header loan-process">How long does the loan process take?</h3>
  </div>
  <h2 className="question-header">Question About Renting</h2>
  <div className="sell-questions renting">
    <h3 className="sell-header">Can a home depreiciate in value?</h3>
    <p className="sell-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet massa mi, sed ornare dui ullamcorper non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec orci ac lorem tempor ultricies. Pellentesque pulvinar nisl pulvinar ex tincidunt, eu gravida lacus auctor. Maecenas finibus eros pharetra, tempus tortor sit amet, faucibus sapien. Donec non nulla posuere, malesuada urna quis, ornare lectus. Nunc gravida, sapien non laoreet consectetur, sem ligula consequat ex, sit amet sodales velit dui a ipsum. Mauris aliquet metus nec dui porttitor, non mattis ex accumsan. Duis gravida diam est, ac molestie erat porta sit amet. Vivamus tortor mauris, aliquet condimentum elit porttitor, consequat malesuada nibh. Duis nec vestibulum nisi, eget dignissim ex</p>
    <h3 className="sell-header">Is older home as good a value as a new home?</h3>
    <h3 className="sell-header">What is a broker?</h3>
    <h3 className="sell-header">Can I pay my own taxes and insurance?</h3>
    <h3 className="sell-header loan-process">How long does the loan process take?</h3>
  </div>
  <Footer />
  <BottomFooter />
  </>
);
