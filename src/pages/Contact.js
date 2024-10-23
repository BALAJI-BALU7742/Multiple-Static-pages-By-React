import React, { useState } from 'react';
import './Contact.css'; // Import CSS for styling

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && message) {
      alert('Form submitted');
      // Reset fields after submission
      setEmail('');
      setMessage('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <i className="fas fa-envelope icon"></i> info@example.com
        <i className="fas fa-phone icon"></i> +123 456 7890
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea-field"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
