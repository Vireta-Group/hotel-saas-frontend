import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons/faHotel";
import { forwardRef } from "react";

const Sidebar = forwardRef((props, ref) => {
  return (
    <div className="sidebar" id="sidebar" ref={ref}>
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
            <i className="bi bi-person-fill"></i>
            <span className="ms-2">User Management</span>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Sidebar;
