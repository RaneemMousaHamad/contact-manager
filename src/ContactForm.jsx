import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [contacts, setContacts] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // for not lose the states

    //we need to collect the state in an object then add it to an contact array
    const newContact = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
    };
    //push the new Contact Array
    setContacts([...contacts, newContact]); //we take a copy of the contacts array and add the new array contact, so the React understand that there's new state , virtual DOM
    console.log(newContact);

    // Clear the form
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="contact-form-container">
      <h2 className="form-header">Add New Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="form-input"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Contact
        </button>
      </form>

      <div className="contact-list-section">
        <h3>Contacts</h3>
        <ul>
          {contacts.map((contact, index) => {
            return (
              <li>
                {contact.name} - {contact.email}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ContactForm;
