// Pet.js

import React from 'react';
import './Pet.css'; // Import the styling

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

  return (
    <div className="pet-container">
      <h2>Available Pets</h2>
      <ul>
        {petsData.map((pet, index) => (
          <li key={index}>
            <img src={pet.imageUrl} alt={pet.name} className="pet-image" />
            <div>
              <strong>Name:</strong> {pet.name}, <strong>Age:</strong> {pet.age} years
              <br />
              <strong>Breed:</strong> {pet.breed}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pet;
