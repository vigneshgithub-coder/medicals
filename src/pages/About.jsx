import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          Welcome to our medical center, where your health is our top priority. Our team of experienced healthcare 
          professionals is dedicated to providing the highest quality care in a comfortable and friendly environment.
        </p>
        <p>
          With state-of-the-art facilities and a patient-centered approach, we offer a wide range of medical services 
          to meet all your healthcare needs.
        </p>
      </div>
    </div>
  );
};

export default About;