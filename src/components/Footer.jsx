// In src/components/Footer.jsx
<footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Apploclinic</h3>
        <p className="text-gray-400">
          Your trusted healthcare provider offering comprehensive medical services with care and compassion.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
          <li><Link to="/doctors" className="text-gray-300 hover:text-white">Our Doctors</Link></li>
          <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
          <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
          <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Contact Us</h4>
        <address className="not-italic text-gray-300 space-y-2">
          <p>123 Health Street</p>
          <p>Medical District, City 10001</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@apploclinic.com</p>
        </address>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Opening Hours</h4>
        <ul className="space-y-2 text-gray-300">
          <li className="flex justify-between">
            <span>Monday - Friday</span>
            <span>8:00 AM - 8:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Saturday</span>
            <span>9:00 AM - 5:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Sunday</span>
            <span>Emergency Only</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
      <p>&copy; {new Date().getFullYear()} Apploclinic. All rights reserved.</p>
    </div>
  </div>
</footer>