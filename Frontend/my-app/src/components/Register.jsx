import React from 'react';
import Alert from '../components/Alert';
import extractErrorMessage from '../utils/extractErrorMessage';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../services/api';
import '../css/Register.css';


function Register() {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [type, setType] = useState("success")
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    gender: '',
    age: '',
    company_name: '',
    linkedin_profile_link: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(formData);
      setAlertMessage('Registration successful!');
      setShowAlert(true);
      setType("success")
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (error) {
      const msg = extractErrorMessage(error);
      setAlertMessage(msg);
      setShowAlert(true);
      setType("error")
    }
  };

  return (
    <div className="register-container">
      {showAlert && (
        <Alert
          message={alertMessage}
          type={type}
          duration={3000}
          onClose={() => setShowAlert(false)}
        />
      )}

      <form onSubmit={handleSubmit} className="register-form">
        <h2 className="register-title">Create Account</h2>

        <div className="register-row">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            required
            className="register-input"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            required
            className="register-input"
          />
        </div>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          className="register-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="register-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="register-input"
        />
        <input
          type="tel"
          name="phone_number"
          placeholder="Phone Number"
          value={formData.phone_number}
          onChange={handleChange}
          required
          className="register-input"
        />

        <div className="register-row">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="register-select"
          >
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            type="number"
            name="age"
            placeholder="Age"
            min="0"
            max="120"
            value={formData.age}
            onChange={handleChange}
            required
            className="register-input"
          />
        </div>

        <input
          type="text"
          name="company_name"
          placeholder="Company Name"
          value={formData.company_name}
          onChange={handleChange}
          required
          className="register-input"
        />

        <input
          type="url"
          name="linkedin_profile_link"
          placeholder="LinkedIn Profile Link (optional)"
          value={formData.linkedin_profile_link}
          onChange={handleChange}
          className="register-input"
        />

        <button type="submit" className="register-button">
          Create Account
        </button>
        
        <p className="register-login-link">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
        <Link to="/" className="back-to-home">← Back to Home</Link>
      </form>
    </div>
  );
}

export default Register;
