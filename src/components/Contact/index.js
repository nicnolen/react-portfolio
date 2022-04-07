import { send } from 'emailjs-com';
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../assets/css/Contact.css';

function ContactForm() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'nicnolen@ymail.com',
    message: '',
    name: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, from_name, to_name, message } = toSend;

  // Handle change function
  const handleChange = e => {
    // validate email
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Invalid email format!');
      } else {
        setErrorMessage('');
      }
    } else {
      // error message for blank elements
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required!`);
      } else {
        setErrorMessage('');
      }
    }
    // if there are no error messages
    if (!errorMessage) {
      // update the formState value for the name property
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    }
  };

  // Handle submit function
  const handleSubmit = e => {
    e.preventDefault();
    send('service_k06hlfp', 'template_iq5w2c2', toSend, 'Rau85KwJyF-kPthpC')
      .then(response => {
        console.info('SUCCESS!', response.status, response.text);
      })
      .catch(err => {
        console.error('FAILED...', err);
      });
  };

  return (
    <section className="container" style={{ maxWidth: '660px' }}>
      <h2 className="top-title mt-5 mb-3">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ width: '75%', margin: '0 auto' }}>
          <label htmlFor="to_name">To:</label>
          <input
            type="text"
            name="to_name"
            defaultValue={to_name}
            onBlur={handleChange}
            className="mb-2"
          />
        </div>
        <div style={{ width: '75%', margin: '0 auto' }}>
          <label htmlFor="from_name" className="pr-2">
            From:
          </label>
          <input
            type="text"
            name="from_name"
            defaultValue={from_name}
            onBlur={handleChange}
            className="mb-2"
          />
        </div>
        <div style={{ width: '75%', margin: '0 auto' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
            className="mb-2"
          />
        </div>
        <div style={{ width: '75%', margin: '0 auto' }}>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
            className="mb-2"
          />
          {errorMessage && (
            <div className="error">
              <p className="errorText">{errorMessage}</p>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-info mb-5"
          style={{ width: '75%', margin: '0 auto' }}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
