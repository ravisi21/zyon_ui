import React, { useState, useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { signup } from '../../api/apis';
import { userStore, setShowHomeUserLogin } from '../../store/userStore';
import { FaTimes } from 'react-icons/fa';

const Spinner = () => (
  <svg className="animate-spin h-5 w-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
  </svg>
);

const UserSignupPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Check if user data exists and prepopulate fields
  useEffect(() => {
    if (userStore.user && userStore.user.userId) {
      // User data exists, prepopulate fields
      if (userStore.user.userName) setEmail(userStore.user.userName);
      if (userStore.user.name) setFullName(userStore.user.name);
      if (userStore.user.phoneNumber) setPhone(userStore.user.phoneNumber);
      if (userStore.user.address1) setAddress(userStore.user.address1);
      if (userStore.user.address3) setState(userStore.user.address3);
      if (userStore.user.zip) setZip(userStore.user.zip);
    }
  }, [userStore.user]);

  // Check if user data exists to determine if email should be editable
  const hasExistingUserData = userStore.user && userStore.user.userId;
  const isEmailEditable = !hasExistingUserData;

  if (!isOpen) return null;

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setFieldErrors({});

    // Only validate password and confirm password match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    
    try {
      // Prepare signup data object
      const signupData = {
        userName: email,
        password: password,
        name: fullName,
        address1: address,
        address3: state, // State
        zip: zip,
        phoneNumber: phone
      };

      // Call signup API
      const res = await signup(signupData);
      
      if (res.status) {
        // Signup successful
        handleClose();
      } else {
        setError(res.errorMessage || 'Signup failed. Please try again');
      }
      
    } catch (err) {
      // Check if the error has a data property with signupErrors
      if (err.data && err.data.signupErrors && err.data.signupErrors.hasError) {
        const signupErrors = err.data.signupErrors;
        const newFieldErrors = {};
        
        // Map API field errors to form fields
        if (signupErrors.userName) newFieldErrors.email = signupErrors.userName;
        if (signupErrors.password) newFieldErrors.password = signupErrors.password;
        if (signupErrors.name) newFieldErrors.fullName = signupErrors.name;
        if (signupErrors.address3) newFieldErrors.state = signupErrors.address3;
        if (signupErrors.phoneNumber) newFieldErrors.phone = signupErrors.phoneNumber;
        if (signupErrors.zip) newFieldErrors.zip = signupErrors.zip;

        setFieldErrors(newFieldErrors);
        setError(err.message || 'Please fix the errors below');
      } else {
        setError(err.message || 'Signup failed. Please try again');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      userStore.setShowHomeUserSignup(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 font-family-roboto">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 w-full max-w-md p-0 relative max-h-[90vh] overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-xl px-6 py-3 text-lg font-bold text-white flex items-center justify-between sticky top-0">
          <span>Sign Up To Trade</span>
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
        
        {/* Error message */}
        {error && (
          <div className="text-red-600 bg-red-50 border border-red-200 rounded mt-4 mx-8 mb-2 px-4 py-2 text-center text-sm font-semibold">
            {error}
          </div>
        )}
        
        {/* Form */}
        <form className="flex flex-col gap-2 px-8 py-2 flex-1 overflow-y-auto" onSubmit={handleSignup}>
          <label className="text-gray-700 text-sm font-bold mt-2" htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            className={`rounded bg-gray-50 border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 ${fieldErrors.fullName ? 'border-red-500' : ''}`}
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            autoComplete="name"
            disabled={loading}
            required
          />
          {fieldErrors.fullName && (
            <p className="text-red-500 text-xs mt-0.5 mb-0.5">{fieldErrors.fullName}</p>
          )}

          <label className="text-gray-700 text-sm font-bold mt-2" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={`rounded bg-gray-50 border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 ${fieldErrors.email ? 'border-red-500' : ''} ${!isEmailEditable ? 'opacity-60 cursor-not-allowed' : ''}`}
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus={isEmailEditable}
            autoComplete="email"
            disabled={loading || !isEmailEditable}
            required
          />
          {fieldErrors.email && (
            <p className="text-red-500 text-xs mt-0.5 mb-0.5">{fieldErrors.email}</p>
          )}
          
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-gray-700 text-sm font-bold mt-2" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className={`rounded bg-gray-50 border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 w-full ${fieldErrors.password ? 'border-red-500' : ''}`}
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="new-password"
                disabled={loading}
                required
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm font-bold mt-2" htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                className="rounded bg-gray-50 border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 w-full"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
                disabled={loading}
                required
              />
            </div>
          </div>
          {fieldErrors.password && (
            <p className="text-red-500 text-xs mt-0.5 mb-0.5">{fieldErrors.password}</p>
          )}
          
          <label className="text-gray-700 text-sm font-bold mt-2" htmlFor="address">Address (Optional)</label>
          <input
            id="address"
            type="text"
            className="rounded bg-gray-50 border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-blue-500"
            value={address}
            onChange={e => setAddress(e.target.value)}
            autoComplete="street-address"
            disabled={loading}
          />
          
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-gray-700 text-sm font-bold mt-2" htmlFor="state">State</label>
              <input
                id="state"
                type="text"
                className={`rounded bg-gray-50 border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 w-full ${fieldErrors.state ? 'border-red-500' : ''}`}
                value={state}
                onChange={e => setState(e.target.value)}
                autoComplete="address-level1"
                disabled={loading}
                required
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm font-bold mt-2" htmlFor="zip">ZIP Code</label>
              <input
                id="zip"
                type="text"
                className={`rounded bg-gray-50 border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 w-full ${fieldErrors.zip ? 'border-red-500' : ''}`}
                value={zip}
                onChange={e => setZip(e.target.value)}
                autoComplete="postal-code"
                disabled={loading}
                required
              />
            </div>
          </div>
          {fieldErrors.state && (
            <p className="text-red-500 text-xs mt-0.5 mb-0.5">{fieldErrors.state}</p>
          )}
          {fieldErrors.zip && (
            <p className="text-red-500 text-xs mt-0.5 mb-0.5">{fieldErrors.zip}</p>
          )}
          
          <label className="text-gray-700 text-sm font-bold mt-2" htmlFor="phone">Phone Number</label>
          <div className="relative">
            <input
              id="phone"
              type="tel"
              className={`rounded bg-gray-50 border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 ${fieldErrors.phone ? 'border-red-500' : ''} pl-12`}
              value={phone}
              onChange={e => setPhone(e.target.value)}
              autoComplete="tel"
              disabled={loading}
              required
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-600">
              +91
            </div>
          </div>
          {fieldErrors.phone && (
            <p className="text-red-500 text-xs mt-0.5 mb-0.5">{fieldErrors.phone}</p>
          )}
          
          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="flex-1 border-2 border-blue-600 text-blue-600 rounded py-2 font-semibold hover:bg-blue-500 hover:text-white transition flex items-center justify-center"
              disabled={loading}
            >
              {loading && <Spinner />}
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => setShowHomeUserLogin(true)}
              className="flex-1 border-2 border-blue-600 text-blue-600 rounded py-2 font-semibold hover:bg-blue-500 hover:text-white transition"
              disabled={loading}
            >
              Login
            </button>
          </div>
          
          <div className="flex items-center my-2">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          
          <div className="flex items-center justify-center">
            <GoogleOAuthProvider clientId="805608009371-kejkesbrfh7k05a5te73nju1o7d1ka51.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={credentialResponse => {
                  if (credentialResponse.credential) {
                    setLoading(true);
                    // Handle Google sign-in for signup
                    console.log('Google sign-in for signup:', credentialResponse.credential);
                  } else {
                    setError('Google sign-in failed');
                  }
                }}
                onError={() => {
                  setError('Google sign-in failed');
                }}
                theme="outline"
                size="large"
              />
            </GoogleOAuthProvider>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSignupPopup; 