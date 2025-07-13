import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../../style/header/header.css";

function Header({ toggleHandler }) {
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
