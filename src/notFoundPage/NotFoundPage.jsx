import React, { useState, useEffect } from 'react';
import '../style/NotFoundPage/NotFoundPage.css';
import errorgif from '../assets/images/gif.gif'; 


const NotFoundPage = ({ errorCode = "404", errorMessages = [] }) => {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // if errorMessages is empty, use a default message
    const messages = errorMessages.length > 0 ? errorMessages : [
      `${errorCode}: The page has left the building.`
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setErrorMessage(randomMessage);
  }, [errorCode, errorMessages]);

  return (
    <div className="error-page-container">
      <div className="container d-flex flex-column align-items-center justify-content-center text-center py-5 px-3">
        <img
          src={errorgif}
          alt={`${errorCode} Not Found`}
          className="error-image img-fluid mb-4"
        />
        <h2 className="error-text">
          <span className="text-danger">Ohh.....</span> {errorMessage}
        </h2>
        <a href="/" className="btn btn-dark mt-4 px-4 py-2">Back To Home</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
