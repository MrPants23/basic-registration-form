import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value});
  }
  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value});
  }
  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value});
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
        <input
          value={values.firstName}
          onChange={handleFirstNameInputChange}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !valid ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
          value={values.lastName}
          onChange={handleLastNameInputChange}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !valid ? <span id="last-name-error">Please enter a last name</span> : null}
        <input
          value={values.email}
          onChange={handleEmailInputChange}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !valid ? <span id="email-error">Please enter an email address</span> : null }
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
