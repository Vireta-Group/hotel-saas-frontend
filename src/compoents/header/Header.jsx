// components/Header.jsx
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  let sideBar = document.getElementById("sidebar");
  let mainContent = document.getElementById("main-content");

  const toggleHandler = () => {
    // console.log("he");
    sideBar.classList.toggle("toggleMenu");
    mainContent.classList.toggle("toggleContent");
  };

  return (
    <header className="flex">
      <h2>
        <i className="uil uil-bars" id="menu-icon">
          <FontAwesomeIcon
            onClick={toggleHandler}
            icon={faBars}
            style={{ cursor: "pointer", marginRight: "10px" }}
          />
        </i>
        Dashboard
      </h2>

      <div className="admin-box flex">
        <img src="images/user.jpg" width="30px" height="30px" />
        <div>
          <h4>Koushik Saha</h4>
          <small>Admin</small>
        </div>
      </div>
    </header>
  );
}

export default Header;
