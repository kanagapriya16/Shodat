import React from "react";
import Home from "./Components/HomePage/Home";
import PlatfromPage from "./Components/PlatformPage/PlatfromPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <PlatfromPage /> */}
      <Footer />
    </div>
  );
}

export default App;
