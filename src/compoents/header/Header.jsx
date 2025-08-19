import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { forwardRef } from "react";

import "../../style/header/header.css";

const Header = forwardRef(({ toggleHandler }, ref) => {
  return (
    <header className="main-content flex" ref={ref}>
      <ul className="nav">
        <li className="hamburger-icon" tabIndex="0" onClick={toggleHandler}>
          <i className="uil uil-bars" id="menu-icon">
            <FontAwesomeIcon icon={faBars} style={{ cursor: "pointer" }} />
          </i>
        </li>

        <li tabIndex="0">LOGO</li>

        <li className="admin-box flex" tabIndex="0">
          <img
            src="../../assets/images/favicon.png"
            width="30px"
            height="30px"
            alt="User"
          />
        </li>
      </ul>
    </header>
  );
});

export default Header;
