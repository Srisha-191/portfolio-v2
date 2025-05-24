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
<<<<<<< HEAD
    
      <p>You can also reach me directly at: 
      <a href="mailto:srishashanmugam808@gmail.com">srishashanmugam808@gmail.com</a>
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Your Email"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          value={form.message}
          placeholder="Your Message"
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
=======
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
>>>>>>> 5babef09d89ceb2e6c2c1f0995fd6f0f4bf64f55
      </form>
    </div>
  );
}

export default Contact;
