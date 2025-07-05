// components/Header.jsx
import React from "react";

function Header({
  isSidebarOpen,
  toggleSidebar,
  isDarkMode,
  toggleDarkMode,
  isProfileDropdownOpen,
  setIsProfileDropdownOpen,
  profileDropdownRef,
}) {
  return (
    <header className="navbar navbar-expand-lg custom-header">
      <div className="container-fluid">
        {/* Mobile Sidebar Toggle Button */}
        <button
          id="sidebarToggle"
          className="navbar-toggler d-lg-none me-3"
          type="button"
          onClick={toggleSidebar}
          aria-controls="sidebar"
          aria-expanded={isSidebarOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop Search Bar */}
        <div className="position-relative d-none d-lg-block w-25 search-input-group">
          <i className="fas fa-search"></i>
          <input type="text" className="form-control" placeholder="Search..." />
        </div>

        <div className="d-flex align-items-center ms-auto">
          {/* Flag Icon */}
          <div className="nav-item me-4 header-icon">
            <i className="fas fa-flag"></i>
          </div>
          {/* Grid Icon */}
          <div className="nav-item me-4 header-icon">
            <i className="fas fa-th"></i>
          </div>
          {/* Notifications */}
          <div className="nav-item dropdown me-4">
            <a
              className="nav-link position-relative header-icon p-0"
              href="#"
              id="navbarDropdownNotifications"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bell"></i>
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.65rem" }}
              >
                3 <span className="visually-hidden">unread messages</span>
              </span>
            </a>
            {/* Notification Dropdown Content - Placeholder */}
          </div>
          {/* Dark Mode Toggle */}
          <div
            className="nav-item me-4 header-icon"
            onClick={toggleDarkMode}
            style={{ cursor: "pointer" }}
          >
            <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"}></i>
          </div>
          {/* Profile Dropdown */}
          <div className="nav-item dropdown" ref={profileDropdownRef}>
            <button
              className="btn d-flex align-items-center p-0"
              type="button"
              id="profileDropdown"
              data-bs-toggle="dropdown"
              aria-expanded={isProfileDropdownOpen}
              onClick={() => setIsProfileDropdownOpen((prev) => !prev)}
            >
              <img
                src="https://placehold.co/36x36/cccccc/333333?text=AA"
                alt="Profile"
                className="profile-img me-2"
              />
              <div className="d-none d-md-block text-end lh-sm">
                <div className="profile-name">Anna Adame</div>
                <div className="profile-title">Founder</div>
              </div>
            </button>
            {isProfileDropdownOpen && (
              <ul
                className={`dropdown-menu dropdown-menu-end ${
                  isDarkMode ? "dropdown-menu-dark" : ""
                }`}
                aria-labelledby="profileDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user me-2"></i>Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-cog me-2"></i>Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-sign-out-alt me-2"></i>Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
