// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AddNewRoom from './Pages/AddNewRoom/AddNewRoom';
// // import RoomTypes from './Pages/RoomTypes/RoomTypes';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <RoomTypes></RoomTypes> */}
//     <AddNewRoom></AddNewRoom>

//   </StrictMode>,
// )


// main.jsx বা index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
