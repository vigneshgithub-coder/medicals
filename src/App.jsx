import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Search, ShoppingCart, Heart, Menu, User, Pill as Pills, Stethoscope, ChevronFirst as FirstAid, Syringe } from 'lucide-react';
import axios from 'axios';
import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import AppointmentModal from './components/AppointmentModel';

const categories = [
  { name: 'Medicines', icon: Pills },
  { name: 'Medical Devices', icon: Stethoscope },
  { name: 'First Aid', icon: FirstAid },
  { name: 'Vaccines', icon: Syringe },
];

function App() {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('https://medicals-95rx.vercel.app/api/doctors');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setShowAppointmentModal(true);
  };

  const handleSubmitAppointment = async (appointmentData) => {
    try {
      if (!appointmentData.patientName || !appointmentData.phone || !appointmentData.appointmentDate) {
        alert('Please fill in all required fields');
        return;
      }

      await axios.post('https://medicals-95rx.vercel.app/api/appointments', {
        ...appointmentData,
        doctorId: selectedDoctor._id
      });
      
      setShowAppointmentModal(false);
      alert('Appointment booked successfully!');
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Failed to book appointment. Please try again.');
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Marquee Message */}
        <div className="bg-blue-100 py-2">
          <marquee className="text-blue-800 font-medium">
            Thanks for choosing Appoloclinic - Your trusted healthcare partner since 1990
          </marquee>
        </div>

        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden mr-4"
                >
                  <Menu className="h-6 w-6 text-gray-500" />
                </button>
                <h1 className="text-2xl font-bold text-blue-600">Appolo Clini</h1>
              </div>
              
              <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
                <div className="w-full relative">
                  <input
                    type="text"
                    placeholder="Search for medicines, devices..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Heart className="h-6 w-6 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <ShoppingCart className="h-6 w-6 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <User className="h-6 w-6 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</a>
              <a href="/doctors" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Doctors</a>
              <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</a>
              <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</a>
            </div>
          </div>
        )}

        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <div>
                  {/* Hero Section */}
                  <div className="bg-blue-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                      <div className="text-center">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                          Your Health, Our Priority
                        </h2>
                        <p className="mt-3 text-xl text-blue-100">
                          Get all your medical supplies delivered to your doorstep
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-2xl font-semibold mb-8">Our Services</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <div
                            key={category.name}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
                          >
                            <div className="flex flex-col items-center">
                              <Icon className="h-8 w-8 text-blue-600 mb-3" />
                              <span className="text-gray-900 font-medium">{category.name}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <Home onBookAppointment={handleBookAppointment} doctors={doctors} />
                </div>
              } 
            />
            <Route path="/about" element={<About />} />
            <Route 
              path="/doctors" 
              element={<Doctors doctors={doctors} onBookAppointment={handleBookAppointment} />} 
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Copyright Footer */}
        <footer className="bg-gray-800 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm">
              ©2025 Copyright Reserved - Web Epic Technologies Pvt
            </p>
          </div>
        </footer>

        <AppointmentModal
          isOpen={showAppointmentModal}
          onClose={() => setShowAppointmentModal(false)}
          doctor={selectedDoctor}
          onSubmit={handleSubmitAppointment}
        />

        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;