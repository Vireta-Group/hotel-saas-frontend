import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../../style/header/header.css";

function Header({ toggleHandler }) {
  return (
    <header className="flex">
      <ul className="nav">
        <li tabindex="0" >
          <i className="uil uil-bars" id="menu-icon" onClick={toggleHandler}>
            <FontAwesomeIcon icon={faBars} style={{ cursor: "pointer" }} />
          </i>
        </li>

        <li tabindex="0">LOGO</li>

        <li className="admin-box flex" tabindex="0">
          <img src="../../assets/images/favicon.png" width="30px" height="30px" alt="User" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
