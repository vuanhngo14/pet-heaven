// Pet.js

import React, { useState } from 'react';
import './Pet.css'; // Import the styling
import emailjs from 'emailjs-com';


const Pet = () => {
  const petsData = [
    { name: 'Buddy', age: 3, breed: 'Dog', imageUrl: '/images/dog1.jpg' },
    { name: 'Milo', age: 2, breed: 'Cat', imageUrl: '/images/cat1.jpg' },
    { name: 'Charlie', age: 4, breed: 'Dog', imageUrl: '/images/dog2.jpg' },
    { name: 'Luna', age: 1, breed: 'Cat', imageUrl: '/images/cat2.jpg' },
    { name: 'Max', age: 2, breed: 'Rabbit', imageUrl: '/images/rabbit1.jpg' },
    { name: 'Daisy', age: 3, breed: 'Dog', imageUrl: '/images/dog3.jpg' },
    { name: 'Oliver', age: 2, breed: 'Cat', imageUrl: '/images/cat3.jpg' },
    { name: 'Snowball', age: 1, breed: 'Rabbit', imageUrl: '/images/rabbit2.jpg' },
    { name: 'Rocky', age: 2, breed: 'Dog', imageUrl: '/images/dog4.jpg' },
    { name: 'Whiskers', age: 3, breed: 'Cat', imageUrl: '/images/cat4.jpg' },
    { name: 'Coco', age: 1, breed: 'Rabbit', imageUrl: '/images/rabbit3.jpg' },
    { name: 'Bella', age: 4, breed: 'Dog', imageUrl: '/images/dog5.jpg' },
    { name: 'Smokey', age: 2, breed: 'Cat', imageUrl: '/images/cat5.jpg' },
    { name: 'Thumper', age: 1, breed: 'Rabbit', imageUrl: '/images/rabbit4.jpg' },
    { name: 'Bailey', age: 3, breed: 'Dog', imageUrl: '/images/dog6.jpg' },
    { name: 'Lily', age: 2, breed: 'Cat', imageUrl: '/images/cat6.jpg' },
    { name: 'Hopper', age: 1, breed: 'Rabbit', imageUrl: '/images/rabbit5.jpg' }

  ];

  const [adoptionForm, setAdoptionForm] = useState({
    name: '',
    selectedPet: null,
  });

  const handleNameChange = (event) => {
    setAdoptionForm({ ...adoptionForm, name: event.target.value });
  };

  const handleContactChange = (event) => {
    setAdoptionForm({ ...adoptionForm, contact: event.target.value });
  };

  const handlePetSelection = (pet) => {
    setAdoptionForm({ ...adoptionForm, selectedPet: pet });
  };

  const handleAdoptionSubmit = () => {
    
    console.log('Adoption form submitted:', adoptionForm);
    
    const templateParams = {
      from_name: adoptionForm.name,
      contact_number: adoptionForm.contact,
      pet_name: adoptionForm.selectedPet.name,
    }

    emailjs
    .send(
      'service_ofv7qnr',
      'template_ocx47sd', 
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

    alert("Email sent")
    
  };

  

  const handlePetPhotoClick = (pet) => {
    handlePetSelection(pet);
  };

  return (
    <div className="pet-container">
      <h2>Available Pets</h2>
      <ul>
        {petsData.map((pet, index) => (
          <li key={index}>
            <img
              src={pet.imageUrl}
              alt={pet.name}
              className="pet-image"
              onClick={() => handlePetPhotoClick(pet)}
            />
            <div>
              <strong>Name:</strong> {pet.name}, <strong>Age:</strong> {pet.age} years
              <br />
              <strong>Breed:</strong> {pet.breed}
            </div>
          </li>
        ))}
      </ul>

      {adoptionForm.selectedPet && (
        <div className="adoption-form">
          <h2>Adoption Form</h2>
          <form>
            <label>
              Your Name:
              <input id='name' type="text" value={adoptionForm.name} onChange={handleNameChange} />
            </label>
            <label>
              Contact Number: 
              <input id='contact' type="text" value={adoptionForm.contact} onChange={handleContactChange} />
            </label>
            <label>
              Pet to Adopt:
              <input id='petName' type="text" value={adoptionForm.selectedPet.name} disabled />
            </label>
            <button type="button" onClick={handleAdoptionSubmit}>
              Submit Adoption
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Pet;
