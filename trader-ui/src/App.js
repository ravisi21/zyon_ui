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

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route - trading terminal */}
        <Route path="/trader" element={<TraderContent />} />

         {/* Home route */}
         <Route path="/" element={<Home />} />

         {/* Catch all - redirect to trading terminal */}
         <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
