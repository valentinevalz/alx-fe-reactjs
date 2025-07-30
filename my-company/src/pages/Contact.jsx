// my-company/src/pages/Contact.jsx
import React, { useState } from 'react'; // Need useState to make the form remember what you type

function Contact() {
  // This helps our form remember the name, email, and message you type
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // When you type, this updates what the form remembers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // When you click the 'Send' button, this magic happens!
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the page from refreshing
    alert(`Thank you, ${formData.name}! Your message has been sent (not really, just a pretend message!).`); // Show a fun message
    // Here you would normally send the data to a server
    setFormData({ name: '', email: '', message: '' }); // Clear the form after sending
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff3e0', minHeight: 'calc(100vh - 100px)' }}>
      <h1 style={{ color: '#2c3e50' }}>Contact Us</h1>
      <p style={{ fontSize: '1.1em', color: '#34495e' }}>Have questions? Send us a message!</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ffcc80', borderRadius: '8px', backgroundColor: 'white' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          style={{ display: 'block', margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical' }}
        />
        <button
          type="submit"
          style={{ padding: '10px 15px', backgroundColor: '#ff9800', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', marginTop: '10px' }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
