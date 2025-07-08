import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons/faHotel";

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
            <i className="bi bi-person-fill"></i>
            <span className="ms-2">User Management</span>
          </li>
          <li>
            <i className="bi bi-building-fill"></i>
            <span className="ms-2">Hotel Profile</span>
          </li>
          <li>
            <i className="bi bi-door-open-fill"></i>
            <span className="ms-2">Room Management</span>
          </li>
          <li>
            <i className="bi bi-person-fill"></i>
            <span className="ms-2">User Management</span>
          </li>
          <li>
            <i className="bi bi-building-fill"></i>
            <span className="ms-2">Hotel Profile</span>
          </li>
          <li>
            <i className="bi bi-door-open-fill"></i>
            <span className="ms-2">Room Management</span>
          </li>
          <li>
            <i className="bi bi-journal-bookmark-fill"></i>
            <span className="ms-2">Booking Management</span>
          </li>
          <li>
            <i className="bi bi-people-fill"></i>
            <span className="ms-2">Guest Management</span>
          </li>
          <li>
            <i className="bi bi-arrow-left-right"></i>
            <span className="ms-2">Check-In / Check-Out</span>
          </li>
          <li>
            <i className="bi bi-briefcase-fill"></i>
            <span className="ms-2">HRM & Payroll</span>
          </li>
          <li>
            <i className="bi bi-cup-hot-fill"></i>
            <span className="ms-2">Restaurant POS</span>
          </li>
          <li>
            <i className="bi bi-box-seam-fill"></i>
            <span className="ms-2">Inventory & Suppliers</span>
          </li>
          <li>
            <i className="bi bi-house-fill"></i>
            <span className="ms-2">Housekeeping Management</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
