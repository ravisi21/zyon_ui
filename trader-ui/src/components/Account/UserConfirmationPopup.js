import React, { useState } from 'react';
import { sendConfirmationEmail } from '../../api/apis';
import { FaTimes, FaEnvelope } from 'react-icons/fa';

const Spinner = () => (
  <svg className="animate-spin h-5 w-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
  </svg>
);

const UserConfirmationPopup = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleResend = async () => {
    setLoading(true);
    setMessage('');
    setError('');
    try {
      await sendConfirmationEmail();
      setMessage('Confirmation email resent! Please check your inbox.');
    } catch (e) {
      setError('Could not send the confirmation email. Please try again.')
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 font-family-roboto">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 w-full max-w-md p-0 relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-xl px-6 py-3 text-lg font-bold text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">
              <FaEnvelope />
            </div>
            <span>Confirm Your Email</span>
          </div>
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Success/Error Messages */}
        {message && (
          <div className="text-green-600 bg-green-50 border border-green-200 rounded mt-6 mx-8 mb-2 px-4 py-2 text-center text-lg">
            {message}
          </div>
        )}
        {error && (
          <div className="text-red-600 bg-red-50 border border-red-200 rounded mt-6 mx-8 mb-2 px-4 py-2 text-center text-lg">
            {error}
          </div>
        )}

        {/* Content */}
        <div className="px-8 py-6">
          <div className="text-gray-700 text-center mb-6 space-y-3">
            <p>
              You need to confirm your email address for this account.
            </p>
            <p>
              Please check your registered email account for the confirmation instructions.
            </p>
            <p>
              If you haven't received an email, you can resend it by clicking the button below.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleResend}
              disabled={loading}
              className="flex-1 border-2 border-blue-600 text-blue-600 rounded py-2 font-semibold hover:bg-blue-500 hover:text-white transition flex items-center justify-center"
            >
              {loading && <Spinner />}
              {loading ? 'Resending...' : 'Resend Email'}
            </button>
            <button
              onClick={handleClose}
              className="flex-1 border-2 border-blue-600 text-blue-600 rounded py-2 font-semibold hover:bg-blue-500 hover:text-white transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserConfirmationPopup; 