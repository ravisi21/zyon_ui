import React, { useState } from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import TermsConditions from './TermsConditions';
import CancellationRefund from './CancellationRefund';
import { FaTimes } from 'react-icons/fa';

const MODAL_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    component: <PrivacyPolicy />,
  },
  terms: {
    title: 'Terms & Conditions',
    component: <TermsConditions />,
  },
  refund: {
    title: 'Cancellation & Refund',
    component: <CancellationRefund />,
  },
};

const Footer = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (type, e) => {
    e.preventDefault();
    setOpenModal(type);
  };

  const handleClose = () => setOpenModal(null);

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
              <li><a href="/privacy-policy" onClick={e => handleOpen('privacy', e)} className="text-gray-300 hover:text-green-400 transition">Privacy Policy</a></li>
              <li><a href="/terms-conditions" onClick={e => handleOpen('terms', e)} className="text-gray-300 hover:text-green-400 transition">Terms & Conditions</a></li>
              <li><a href="/cancellation-refund" onClick={e => handleOpen('refund', e)} className="text-gray-300 hover:text-green-400 transition">Cancellation & Refund</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-400 mb-2">Contact</h4>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-300 hover:text-green-400 transition">Contact Us:</a></li>
              <li><a href="mailto:contact@zyontrader.com" className="text-green-400 hover:underline">contact@zyontrader.com</a></li>
              <li><a href="tel:+918240772762" className="text-green-400 hover:underline">+91-8240772762</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>&copy; 2024 ZyonTrader. All rights reserved.</p>
        </div>
      </div>

      {/* Modal Popup */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">{MODAL_CONTENT[openModal].title}</h2>
              <button onClick={handleClose} className="text-gray-400 hover:text-gray-700 p-2"><FaTimes className="text-xl" /></button>
            </div>
            <div className="p-6 text-gray-900">
              {MODAL_CONTENT[openModal].component}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer; 