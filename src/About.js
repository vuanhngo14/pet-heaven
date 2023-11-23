import React from 'react';

const About = () => {
  return (
    <main>

      <section className="hero">
        <h1>Welcome to Pet Heaven</h1>
        <p>Where every pet finds love and a forever home.</p>
      </section>

      <section className="organization-info">
        <div className="organization-image">
          <img src="" alt="Pet Heaven Organization" />
        </div>
        <div className="organization-text">
          <h2>Our Mission</h2>
          <p>
            Pet Heaven is a dedicated organization that rescues and cares for pets in need. We provide a loving and nurturing environment for abandoned, abused, or neglected animals.
          </p>
          <p>
            Our mission is to find loving homes for these animals, offering a second chance at happiness. We also welcome individuals who, for various reasons, are unable to care for their pets, providing a compassionate solution for rehoming.
          </p>
        </div>
      </section>

      <section className="organization-vision">
        <div className="vision-text">
          <h2>Our Vision</h2>
          <p>
            We envision a world where every pet is treated with love, respect, and kindness. A world where no pet is abandoned or mistreated, and every animal has a safe and caring home.
          </p>
        </div>
        <div className="vision-image">
          <img src="path_to_vision_image.jpg" alt="Pet Heaven Vision" />
        </div>
      </section>

      <section className="pet-images">
        <h2>Meet Our Pets</h2>
        <div className="pet-card">
          <img src="path_to_image1.jpg" alt="Pet 1" />
          <p>Pet 1 - Friendly and playful</p>
        </div>
        <div className="pet-card">
          <img src="path_to_image2.jpg" alt="Pet 2" />
          <p>Pet 2 - Sweet and cuddly</p>
        </div>
        <div className="pet-card">
          <img src="path_to_image3.jpg" alt="Pet 3" />
          <p>Pet 3 - Energetic and loving</p>
        </div>
      </section>

    </main>
  );
}

export default About;
