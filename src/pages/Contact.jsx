import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <div className="space-y-4">
          <p>📞 (123) 456-7890</p>
          <p>✉️ info@medicals.com</p>
          <p>🏢 123 Medical Center Drive, Health City, HC 12345</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;