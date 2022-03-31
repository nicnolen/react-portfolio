import { send } from 'emailjs-com';
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

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
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch(err => {
        console.log('FAILED...', err);
      });
  };
  // if (!errorMessage) {
  //   console.info('Form', toSend);
  //   return true;
  // } else {
  //   console.error(errorMessage);
  //   return false;
  // }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="from_name">From:</label>
          <input
            type="text"
            name="from_name"
            value={from_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="to_name">To:</label>
          <input
            type="text"
            name="to_name"
            value={to_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Reply To:</label>
          <input
            type="text"
            name="reply_to"
            value={reply_to}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            value={message}
            onChange={handleChange}
          />
          {errorMessage && (
            <div>
              <p className="errorText">{errorMessage}</p>
            </div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
