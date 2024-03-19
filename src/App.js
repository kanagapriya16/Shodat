import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import PlatformPage from "./Components/PlatformPage/PlatformPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<PlatformPage />} />
          {/* Add more routes for additional pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
