import React, { useState } from 'react';
import axios from 'axios';
import './register.css'; // Import your CSS file for styling

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://reqres.in/api/register', { email, password });
      // Assuming your backend sends back a token upon successful Register
      const token = response.data.token;
      console.log(response.data.id);
      console.log(response.data.token);
      // You can then store the token in localStorage or sessionStorage
      localStorage.setItem('token', token);
      // Redirect the user or do something else upon successful Register
      console.log('Registration successful');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default Register;
