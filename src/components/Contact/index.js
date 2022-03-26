import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

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
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  // Handle submit function
  const handleSubmit = e => {
    e.preventDefault();

    if (!errorMessage) {
      console.info('Form', formState);
      return true;
    } else {
      console.error(errorMessage);
      return false;
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor='email'>Email Address:</label>
          <input
            type='email'
            name='email'
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea
            name='message'
            rows='5'
            defaultValue={message}
            onBlur={handleChange}
          />
          {errorMessage && (
            <div>
              <p className='errorText'>{errorMessage}</p>
            </div>
          )}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
