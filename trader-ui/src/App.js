import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import TraderContent from './components/TraderContent';
import Home from './components/Home/HomeContent';
import './App.css';
import 'antd/dist/reset.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Debug component to show current route
function DebugRoute() {
  const location = useLocation();
  console.log('Current route:', location.pathname);
  console.log('Current hash:', window.location.hash);
  return null;
}

function App() {
  return (
    <Router>
      <DebugRoute />
      <Routes>
        {/* Default route - trading terminal */}
        <Route path="/" element={<TraderContent />} />
        
        {/* Home route */}
        <Route path="/home" element={<Home />} />
        
        {/* Catch all - redirect to trading terminal */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      <ToastContainer
        icon
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
      />
    </Router>
  );
}

export default App;
