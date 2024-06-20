import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie"; // Import useCookies from react-cookie
import Navbar from "./components/Navbar";
import HomeLayout from "./pages/HomeLayout";
// import HeroBanner from "./components/HeroBanner";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
// import TurnCar from "./components/TurnCar";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
import NoPage from "./pages/NoPage";
// import CookieConsent from "./components/CookieConsent"; // Import CookieConsent component

function App() {
  // const [cookies] = useCookies(["cookieConsent"]);

  return (
    <Router>
      <div>
        {/* {!cookies.cookieConsent && <CookieConsent />} */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Servicii" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} />{" "} */}
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
