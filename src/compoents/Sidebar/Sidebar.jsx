import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons/faHotel";
import "../../style/sidebar/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar" id="sidebar">
      <div className="logo">
        <h2>
          <i className="uil uil-apple-alt">
            <FontAwesomeIcon icon={faHotel} style={{ fontSize: "22px" }} />
          </i>
          VELZON
        </h2>
      </div>

      <div className="sidebar-menu">
        <ul className="p-0">
          <li>
            <i className="bi bi-building-fill"></i>
            <span className="ms-2">Hotel Profile</span>
          </li>
          <li>
            <i className="bi bi-building-fill"></i>
            <span className="ms-2">asset management</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
