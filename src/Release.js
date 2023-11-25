import React, { useState } from 'react';
import './Release.css'; 
import emailjs from 'emailjs-com'; 


const Release = () => {
  const [releaseForm, setReleaseForm] = useState({
    ownerName: '',
    phoneNumber: '',
    petName: '',
    petBreed: '',
    healthCondition: '',
    age: '',
  });

  const handleOwnerNameChange = (event) => {
    setReleaseForm({ ...releaseForm, ownerName: event.target.value });
  };

  const handlePhoneNumberChange = (event) => {
    setReleaseForm({ ...releaseForm, phoneNumber: event.target.value });
  };

  const handlePetNameChange = (event) => {
    setReleaseForm({ ...releaseForm, petName: event.target.value });
  };

  const handlePetBreedChange = (event) => {
    setReleaseForm({ ...releaseForm, petBreed: event.target.value });
  };

  const handleHealthConditionChange = (event) => {
    setReleaseForm({ ...releaseForm, healthCondition: event.target.value });
  };

  const handleAgeChange = (event) => {
    setReleaseForm({ ...releaseForm, age: event.target.value });
  };

  // Handle submit condition
  const handleReleaseSubmit = () => {
    alert("Form Submitted")

    const templateParams = {
        owner_name: releaseForm.ownerName,
        phone_number: releaseForm.phoneNumber,
        pet_name: releaseForm.petName,
        pet_breed: releaseForm.petBreed,
        health_condition: releaseForm.healthCondition,
        age: releaseForm.age,
      };
  
      // Send the release form data via Email.js
      emailjs
        .send(
            'service_ofv7qnr',
            'template_4jndpq2', 
            templateParams,
            'RkFnTscLYBZXMxWw0'
        )
        .then(
          (response) => {
            console.log('Email sent successfully:', response);
          },
          (error) => {
            console.error('Error sending email:', error);
          }
        );
  
  };

  
  return (
    <div className="release-container">
      <div className="release-info">
      <h2>Release Information</h2>
        <p>
        When choosing to release your pet, it indicates a conscientious decision acknowledging that, due to various circumstances, you may no longer be capable of providing the necessary care and attention your pet deserves.
        </p>
        <p>
        At Pet Heaven, we understand that circumstances can change, and we appreciate your commitment to ensuring the well-being of your pet. By releasing your pet to us, you can trust that our experienced and compassionate volunteer team will diligently care for your pet, ensuring their health, happiness, and overall welfare.
        </p>
        <p>
        We welcome any contribution you may wish to make to support our ongoing efforts to provide quality care for pets in transition. Your generosity allows us to continue offering a safe and nurturing environment for animals awaiting their forever homes.
        </p>
        <p>
        It's important to note that finding a new, qualified owner is our top priority. We work tirelessly to match pets with individuals or families who can provide a loving and secure environment. If a suitable match is found, your pet will be seamlessly transitioned into their new home.
        </p>
        <p>
        To respect the privacy and confidentiality of all parties involved, the identity of the new owner will be kept strictly confidential. We prioritize the well-being of both pets and adopters and aim to create a positive and supportive experience for everyone involved in the rehoming process.
</p>

      </div>

      <div className="release-form">
        <h2>Release Form</h2>
        <form>
          <label>
            Owner Name:
            <input type="text" value={releaseForm.ownerName} onChange={handleOwnerNameChange} />
          </label>
          <label>
            Phone Number:
            <input type="text" value={releaseForm.phoneNumber} onChange={handlePhoneNumberChange} />
          </label>
          <label>
            Pet Name:
            <input type="text" value={releaseForm.petName} onChange={handlePetNameChange} />
          </label>
          <label>
            Pet Breed:
            <input type="text" value={releaseForm.petBreed} onChange={handlePetBreedChange} />
          </label>
          <label>
            Health Condition:
            <input
              type="text"
              value={releaseForm.healthCondition}
              onChange={handleHealthConditionChange}
            />
          </label>
          <label>
            Age:
            <input type="text" value={releaseForm.age} onChange={handleAgeChange} />
          </label>
          <button type="button" onClick={handleReleaseSubmit}>
            Submit Release
          </button>
        </form>
      </div>
    </div>
  );
};

export default Release;
