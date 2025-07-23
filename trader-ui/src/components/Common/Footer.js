import React from 'react';
 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">ZyonTrader</h3>
            <p className="text-gray-300">Professional trading platform for serious investors.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-400 mb-2">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-gray-300 hover:text-green-400 transition">Privacy Policy</a></li>
              <li><a href="/terms-conditions" className="text-gray-300 hover:text-green-400 transition">Terms & Conditions</a></li>
              <li><a href="/cancellation-refund" className="text-gray-300 hover:text-green-400 transition">Cancellation & Refund</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-400 mb-2">Contact</h4>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-300 hover:text-green-400 transition">Contact Us</a></li>
              <li className="text-gray-300">contact@zyontrader.com</li>
              <li className="text-gray-300">+91-8240772762</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>&copy; 2024 ZyonTrader. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 