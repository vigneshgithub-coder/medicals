import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ onBookAppointment, doctors = [] }) => {
  // Services Data
  const services = [
    {
      name: 'General Medicine',
      description: 'Comprehensive healthcare for adults and children',
      icon: '👨‍⚕️'
    },
    {
      name: 'Cardiology',
      description: 'Expert heart care and treatment',
      icon: '❤️'
    },
    {
      name: 'Dermatology',
      description: 'Skin care and treatment',
      icon: '🤚'
    },
    {
      name: 'Pediatrics',
      description: 'Specialized care for children',
      icon: '👶'
    }
  ];

  // Doctors Data
  const demoDoctors = [
    {
      _id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      experience: 12,
      rating: 4.8,
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      available: ['Mon', 'Wed', 'Fri'],
      timings: '9:00 AM - 5:00 PM'
    },
    {
      _id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      experience: 8,
      rating: 4.7,
      image: 'https://randomuser.me/api/portraits/men/42.jpg',
      available: ['Tue', 'Thu', 'Sat'],
      timings: '10:00 AM - 6:00 PM'
    },
    {
      _id: 3,
      name: 'Dr. Emily Wilson',
      specialty: 'Pediatrician',
      experience: 10,
      rating: 4.9,
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      available: ['Mon', 'Wed', 'Sat'],
      timings: '9:00 AM - 4:00 PM'
    },
    {
      _id: 4,
      name: 'Dr. Robert Taylor',
      specialty: 'Orthopedic Surgeon',
      experience: 15,
      rating: 4.8,
      image: 'https://randomuser.me/api/portraits/men/63.jpg',
      available: ['Tue', 'Thu', 'Fri'],
      timings: '11:00 AM - 7:00 PM'
    }
  ];

  // Reviews Data
  const reviews = [
    {
      id: 1,
      name: 'John D.',
      rating: 5,
      comment: 'Excellent service! The doctors are very professional and caring. The clinic is clean and well-maintained.',
      date: '2 weeks ago',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Sarah M.',
      rating: 4,
      comment: 'Had a great experience. The staff was friendly and the doctor took the time to explain everything clearly.',
      date: '3 weeks ago',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Robert K.',
      rating: 5,
      comment: 'Very professional team. The online booking system is convenient and the doctors are top-notch.',
      date: '1 month ago',
      image: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    {
      id: 4,
      name: 'Emma L.',
      rating: 5,
      comment: 'The best medical care I\'ve ever received. Highly recommend Apploclinic to everyone!',
      date: '2 weeks ago',
      image: 'https://randomuser.me/api/portraits/women/63.jpg'
    }
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 mb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Health, Our Priority</h1>
          <p className="text-xl mb-6">Professional healthcare services for you and your family at Apploclinic</p>
          <button 
            onClick={() => onBookAppointment(demoDoctors[0])}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 text-lg"
          >
            Book an Appointment
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Our Expert Doctors</h2>
          <Link to="/doctors" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            View All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {demoDoctors.map((doctor) => (
            <div key={doctor._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                <p className="text-blue-600 mb-2">{doctor.specialty}</p>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1">{doctor.rating}</span>
                  <span className="mx-2">•</span>
                  <span>{doctor.experience} years exp</span>
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  <p>Available: {doctor.available.join(', ')}</p>
                  <p>Timings: {doctor.timings}</p>
                </div>
                <button
                  onClick={() => onBookAppointment(doctor)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="flex items-center">
                    <div className="mr-2">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"{review.comment}"</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            Leave a Review
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;