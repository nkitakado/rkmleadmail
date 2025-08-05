import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function SendEmail() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_3ixmy95', 'template_g4zalij', form.current, 'rs6IZ2bC5rC21cUCd')
      .then((result) => {
          alert('Email sent!');
      }, (error) => {
          alert('Failed: ' + error.text);
      });
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Name" required />
      <input type="email" name="user_email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Send</button>
    </form>
  );
}