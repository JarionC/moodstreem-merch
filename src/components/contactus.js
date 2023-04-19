import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import "../styles/contact.css";

export const ContactUs = () => {
  const form = useRef();
  const[formSuccess, setFormSuccess] = useState('form-pre-success');
  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm('contact_service', 'template_gqevcp2', form.current, 'zV25oqr3J3oxtj7Rz')
      .then((result) => {
          setFormSuccess('form-success');
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return(
    <div className="contact-container">
        <div className="contact-title">Contact Us</div>
        <div className="contact-form-container">
            <div className="contact-text">We would love to hear from you! Please reach out to us with any questions or suggestions you may have using the form below.</div>
            <form ref={form} onSubmit={(e) => sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
        <div className={formSuccess}>Success!</div>
    </div>
  );
};