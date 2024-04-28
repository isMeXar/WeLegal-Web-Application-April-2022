import React from 'react';
import './contact.css';

import shape from './img/bg_shape.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faMobileScreenButton, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="contact_t">Stay In Touch</h2>
      <p className="contact_p">Please fill out the following form and we will get back to you shortly,do not hesitate to contact us with any questions.</p>
      <div className="contact-ctn">
        <div className="our-contact">
          <div className="ctn">
            <FontAwesomeIcon className="icon_l" icon={faEnvelope} />
            <h5>E-mail</h5>
            <p>contact-us@welegal.ma</p>
          </div>
          <div className="ctn">
            <FontAwesomeIcon className="icon_l" icon={faMobileScreenButton} />
            <h5>Phone</h5>
            <p>0610-877828</p>
          </div>
          <div className="ctn">
            <FontAwesomeIcon className="icon_l" icon={faLocationDot} />
            <h5>Adress</h5>
            <p>27 Random place<br />random street, Agadir </p>
          </div>
        </div>

        <div className="contact-us">
          <div className="lname">
            <h3>Last Name</h3>
            <label className="form ctn_label" htmlfor="lname">
              <input type="text" id="lname" name="blank" placeholder="" />
            </label>
          </div>
          <div className="fname">
            <h3>First Name</h3>
            <label htmlfor="fname" className="form ctn_label">
              <input type="text" id="fname" name="fname" placeholder="" />
            </label>
          </div>
          <div className="c">
            <h3>City</h3>
            <label htmlfor="city" className="form ctn_label">
              <input type="text" id="city" name="city" placeholder="" />
            </label>
          </div>
          <div className="email">
            <h3>E-mail</h3>
            <label htmlfor="e-mail" className="form ctn_label">
              <input type="text" id="email" name="email" placeholder="" />
            </label>
          </div>
          <div className="phone">
            <h3>Phone</h3>
            <label htmlfor="phone" className="form ctn_label">
              <input type="text" id="phone" name="phone" placeholder="" />
            </label>
          </div>
          <div className="message">
            <h3>Message</h3>
            <label htmlfor="txt" className="form ctn_label">
              <textarea id="txt" type="text" placeholder=""></textarea>
            </label>
          </div>
          <button className="send-btn">
            <svg width="277" height="62">
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stop-color="#FF8282" />
                  <stop offset="100%" stop-color="#E178ED" />
                </linearGradient>
              </defs>
              <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
            </svg>
            {/* <span>Voir mes réalisations</span> */}
            <span>Send Message
            <FontAwesomeIcon className="send_i" icon={faPaperPlane} /></span>
          </button>
        </div>

        
      </div>
      {/* <img src={shape} className='bg_shape'/> */}
    </div>
  )
}
export default Contact;