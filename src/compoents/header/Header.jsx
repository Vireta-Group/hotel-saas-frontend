import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../../style/header/header.css";

function Header({ toggleHandler }) {
  return (
    <header className="flex ">

      <i className="uil uil-bars" id="menu-icon">
        <FontAwesomeIcon
          onClick={toggleHandler}
          icon={faBars}
          style={{ cursor: "pointer", marginRight: "10px" }}
        />
      </i>

      <a href="#">hotel.logo</a>

      <div className="admin-box flex">
        <img src="images/user.jpg" width="30px" height="30px" alt="DP"/>
        <div>
          <h4>user.name</h4>
          <small>user.role</small>
        </div>
      </div>

    </header>
  );
}

export default Header;
