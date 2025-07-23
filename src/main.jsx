<<<<<<< HEAD
<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
=======
=======
>>>>>>> 1ec8137b4ebe2b39e7b13395054e8ae926b49d0d
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./style/veriable/veriable.css";
import App from "./App";
// main.jsx or main.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // includes Popper
// Font Awesome setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

// font
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
<<<<<<< HEAD
>>>>>>> d098403091fc44dd67dc79347cbd03e90b237302
=======
>>>>>>> 1ec8137b4ebe2b39e7b13395054e8ae926b49d0d
