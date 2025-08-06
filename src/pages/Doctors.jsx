import React from 'react';

const Doctors = ({ doctors = [], onBookAppointment }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{doctor.name}</h3>
            <p className="text-gray-600 mb-2">{doctor.specialty}</p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-400">★</span>
              <span className="ml-1">{doctor.rating}</span>
              <span className="mx-2 text-gray-300">•</span>
              <span>{doctor.experience} years exp.</span>
            </div>
            <button
              onClick={() => onBookAppointment(doctor)}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;