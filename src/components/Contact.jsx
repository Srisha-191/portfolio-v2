import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'srishashanmugam808@gmail',
      'template_qdt23u9',
      form.current,
      'ZXpWVCS5eYLJDW2ya'
    ).then(
      (result) => {
        alert('Message sent!');
        console.log(result.text);
      },
      (error) => {
        alert('Failed to send message.');
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
