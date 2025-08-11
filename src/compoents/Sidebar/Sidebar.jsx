import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { forwardRef, useState } from "react";
import "../../style/sidebar/sidebar.css";

const Sidebar = forwardRef((props, ref) => {
  const [expandedSections, setExpandedSections] = useState({
    management: false,
    employee: false,
    inventory: false,
    settings: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const menuSections = [
    {
      title: "Dashboard",
      icon: "bi-house-door",
      to: "/",
      singleItem: true,
    },
    {
      title: "Management",
      icon: "bi-clipboard-data",
      items: [
        { to: "/earn-category-form", icon: "bi-cash", label: "Earn Category" },
        {
          to: "/SearchingRegistrate",
          icon: "bi-search",
          label: "Searching Registrate",
        },
        {
          to: "/userInformation",
          icon: "bi-person-lines-fill",
          label: "User Info",
        },
        { to: "/walkin", icon: "bi-person-plus-fill", label: "Walk-In" },
        {
          to: "/registration",
          icon: "bi-pencil-square",
          label: "Registration",
        },
      ],
    },
    {
      title: "Employee",
      icon: "bi-people-fill",
      items: [
        {
          to: "/employee-profile",
          icon: "bi-person-circle",
          label: "Employee Profile",
        },
        {
          to: "/employJobRole",
          icon: "bi-briefcase-fill",
          label: "Employee Job Role",
        },
        {
          to: "/employee-job-profile",
          icon: "bi-person-workspace",
          label: "Employee Job Profile",
        },
        { to: "/search-leave", icon: "bi-search", label: "Search Leave" },
        {
          to: "/leave-detail/1",
          icon: "bi-file-earmark-text",
          label: "Leave Detail",
        },
        {
          to: "/admin-leave-control",
          icon: "bi-shield-lock",
          label: "Admin Leave Control",
        },
        {
          to: "/job-role-attendance",
          icon: "bi-calendar-check",
          label: "Job Role Attendance",
        },
      ],
    },
    {
      title: "Inventory",
      icon: "bi-boxes",
      items: [
        { to: "/room-inventory", icon: "bi-box", label: "Room Inventory" },
        {
          to: "/asset-management",
          icon: "bi-hdd-stack",
          label: "Asset Management",
        },
        { to: "/office-asset", icon: "bi-pc-display", label: "Office Asset" },
        { to: "/add-room", icon: "bi-plus-square-fill", label: "Add Room" },
        { to: "/all-rooms", icon: "bi-list-ul", label: "All Rooms" },
      ],
    },
    {
      title: "Settings",
      icon: "bi-gear-fill",
      items: [
        {
          to: "/setting-and-configure-form",
          icon: "bi-gear-fill",
          label: "System Settings",
        },
        {
          to: "/hotel-profile",
          icon: "bi-building-fill",
          label: "Hotel Profile",
        },
        {
          to: "/exepenceCategorey",
          icon: "bi-tags-fill",
          label: "Expense Category",
        },
        { to: "/bank", icon: "bi-bank2", label: "Bank" },
      ],
    },
  ];

  return (
    <div className="sidebar position-fixed" id="sidebar" ref={ref}>
      <div className="sidebar-nav">
        <div className="logo">
          <h2>
            <FontAwesomeIcon icon={faHotel} style={{ fontSize: "22px" }} />
            <span className="ms-2">VELZON</span>
          </h2>
        </div>

        {menuSections.map((section) => (
          <div key={section.title} className="nav-section">
            {section.singleItem ? (
              <NavLink
                to={section.to}
                className={({ isActive }) =>
                  `sidebar ${isActive ? "active" : ""}`
                }
              >
                <i className={`bi ${section.icon} sidebar-icon`}></i>
                <span>{section.title}</span>
              </NavLink>
            ) : (
              <>
                <div
                  className={`sidebar ${
                    expandedSections[section.title.toLowerCase()]
                      ? "active"
                      : ""
                  }`}
                  onClick={() => toggleSection(section.title.toLowerCase())}
                >
                  <i className={`bi ${section.icon} sidebar-icon`}></i>
                  <span>{section.title}</span>
                  <FontAwesomeIcon
                    icon={
                      expandedSections[section.title.toLowerCase()]
                        ? faChevronUp
                        : faChevronDown
                    }
                    className="collapse-icon ms-auto"
                  />
                </div>
                {expandedSections[section.title.toLowerCase()] && (
                  <div className="submenu">
                    {section.items.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                          `sidebar submenu-item ${isActive ? "active" : ""}`
                        }
                      >
                        <i className={`bi ${item.icon} sidebar-icon`}></i>
                        <span>{item.label}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Sidebar;
