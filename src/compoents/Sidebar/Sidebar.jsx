import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons/faHotel";
import { forwardRef } from "react";
import "../../style/sidebar/sidebar.css";

const Sidebar = forwardRef((props, ref) => {
  return (
    <div className="sidebar position-fixed" id="sidebar" ref={ref}>
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
        </ul>
      </div>
    </div>
  );
});

export default Sidebar;
