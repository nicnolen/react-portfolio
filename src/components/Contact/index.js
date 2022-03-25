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
  
  return (  );
}

export default ContactForm;