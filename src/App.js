import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroBanner />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Servicii" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
