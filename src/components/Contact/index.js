import React from 'react';
import { validateEmail } from '../../utils/helpers'

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
  }
  return (  );
}

export default ContactForm;