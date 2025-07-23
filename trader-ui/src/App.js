import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TraderContent from "./components/TraderContent";
import Home from "./components/Home/HomeContent";
import "antd/dist/reset.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Common/Footer";
import PrivacyPolicy from "./components/Common/PrivacyPolicy";
import TermsConditions from "./components/Common/TermsConditions";
import CancellationRefund from "./components/Common/CancellationRefund";
import Contact from "./components/Common/Contact";
import Header from "./components/Header/Header";
import AboutUs from "./components/Common/AboutUs";

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#333] flex flex-col">
      <Router>
        <Header />
        <div className="flex-1">
          <Routes>
            {/* Default route - trading terminal */}
            <Route path="/trader" element={<TraderContent />} />

            {/* Home route */}
            <Route path="/" element={<Home />} />

            {/* Legal and Contact pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/cancellation-refund" element={<CancellationRefund />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<Contact />} />

            {/* Catch all - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
