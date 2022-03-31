import { send } from 'emailjs-com';
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../assets/css/Contact.css';

function ContactForm() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const { from_name, to_name, message, reply_to } = toSend;

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
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="from_name" className="pr-2">From:</label>
          <input
            type="text"
            name="from_name"
            value={from_name}
            onChange={handleChange}
            className="mb-2"
          />
        </div>
        <div>
          <label htmlFor="to_name">To:</label>
          <input
            type="text"
            name="to_name"
            value={to_name}
            onChange={handleChange}
            className="mb-2"
          />
        </div>
        <div>
          <label htmlFor="email">Reply To:</label>
          <input
            type="text"
            name="reply_to"
            value={reply_to}
            onChange={handleChange}
            className="mb-2"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            value={message}
            onChange={handleChange}
            className="mb-2"
          />
          {errorMessage && (
            <div>
              <p className="errorText">{errorMessage}</p>
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-info">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
