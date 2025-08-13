import { StrictMode, use } from "react";
import { createRoot } from "react-dom/client";
import "./style/veriable/veriable.css";
import "./index.css";

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
