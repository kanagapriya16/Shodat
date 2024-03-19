import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import PlatformPage from "./Components/PlatformPage/PlatformPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Abput } from "./Components/Abput";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/about" element={<Abput />} />
          {/* Add more routes for additional pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
