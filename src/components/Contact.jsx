import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
  
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>
  You can also reach me directly at:
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
        >

        </textarea>
      
        <button type="submit">
          Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
