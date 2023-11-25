import React, { useState } from 'react';
import './Register.css'; 
import emailjs from 'emailjs-com'; 

const Register = () => {
  const [registrationForm, setRegistrationForm] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    selectedRole: '',
  });

  const handleFullNameChange = (event) => {
    setRegistrationForm({ ...registrationForm, fullName: event.target.value });
  };

  const handleEmailChange = (event) => {
    setRegistrationForm({ ...registrationForm, email: event.target.value });
  };

  const handlePhoneNumberChange = (event) => {
    setRegistrationForm({ ...registrationForm, phoneNumber: event.target.value });
  };

  const handleRoleChange = (event) => {
    setRegistrationForm({ ...registrationForm, selectedRole: event.target.value });
  };

  const handleRegistrationSubmit = () => {
    // Handle registration form submission logic here
    console.log('Registration form submitted:', registrationForm);

    // Set up the template parameters for the Email.js template
    const templateParams = {
      full_name: registrationForm.fullName,
      email: registrationForm.email,
      phone_number: registrationForm.phoneNumber,
      selected_role: registrationForm.selectedRole,
    };

    // Send the registration form data via Email.js
    emailjs
      .send(
        'service_0a9q5ba',      
        'template_7i82c7g',     
        templateParams,
        '-wSsqeKF7GNz6sOJ7'         
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
        },
        (error) => {
          console.error('Error sending email:', error);
        }
      );

    alert('Email sent');
  };

  return (
    <div className="register-container">
      <div className="roles-section">
        <h2>Volunteer Roles</h2>
        <div className="role">
          <img src="/images/volunteer.jpg" alt="Role 1" />
          <p>    Join our Adopt Campaign and be a part of the life-changing journey of giving a loving home to a pet in need. By participating in this campaign, you contribute to the joy of adoption, creating happy moments for both pets and their new families. Spread the word, share our mission, and help us connect deserving pets with loving homes. Every adoption makes a difference in the lives of these wonderful animals. Together, let's make a lasting impact and create forever homes!
</p>
        </div>
        <div className="role">
          <img src="/images/sponsor.jpg" alt="Role 2" />
          <p>As a sponsor, you become a vital pillar of support by providing financial assistance to help care for our pets. By committing to a monthly contribution, you ensure that a specified number of dogs receive the necessary care, including food, medical attention, and a comfortable living environment. Your generosity directly impacts the well-being of these furry companions, allowing us to maintain a high standard of care and improve their quality of life. Join us in making a lasting difference in the lives of our four-legged friends through your ongoing financial support.
</p>
        </div>
      </div>

      <div className="registration-form">
        <h2>Volunteer Registration</h2>
        <form>
          <label>
            Full Name:
            <input type="text" value={registrationForm.fullName} onChange={handleFullNameChange} />
          </label>
          <label>
            Email:
            <input type="email" value={registrationForm.email} onChange={handleEmailChange} />
          </label>
          <label>
            Phone Number:
            <input type="text" value={registrationForm.phoneNumber} onChange={handlePhoneNumberChange} />
          </label>
          <label>
            Select Role:
            <select value={registrationForm.selectedRole} onChange={handleRoleChange}>
              <option value="">Select a Role</option>
              <option value="volunteer">Volunteer</option>
              <option value="role2">Monetary Support</option>
            </select>
          </label>
          <button type="button" onClick={handleRegistrationSubmit}>
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;