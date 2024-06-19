import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "../styles/CookieConsent.css";

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookieConsentValue = cookies.cookieConsent;

    // Verificăm dacă cookie-ul există și este setat la false (reject)
    if (cookieConsentValue === false) {
      setShowPopup(false); // Nu afișa popup-ul dacă cookie-ul există și are valoarea false (reject)
    } else if (
      cookieConsentValue === undefined ||
      cookieConsentValue === null
    ) {
      setShowPopup(true); // Afișează popup-ul dacă cookie-ul nu există sau are valoarea null (nici acceptat, nici rejectat)
    }
  }, [cookies.cookieConsent]);

  const handleAccept = () => {
    setCookie("cookieConsent", true, { path: "/" });
    setShowPopup(false); // Ascunde popup-ul după acceptarea cookie-urilor
  };

  const handleReject = () => {
    setCookie("cookieConsent", false, { path: "/" });
    setShowPopup(false); // Ascunde popup-ul după respingerea cookie-urilor
  };

  if (!showPopup) {
    return null; // Returnează null dacă nu este afișat popup-ul
  }

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <p>
          We use cookies to enhance your user experience. By using our website,
          you agree to our use of cookies.{" "}
          <a href="/privacy-policy">Learn more.</a>
        </p>
        <div className="button-container">
          <button onClick={handleAccept}>Accept</button>
          <button onClick={handleReject}>Reject</button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
