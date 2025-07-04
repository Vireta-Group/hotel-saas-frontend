import { useState, useEffect, useRef } from "react";

function Index() {
  // State for sidebar visibility on mobile (overlay)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // State for submenu collapses
  const [openMenus, setOpenMenus] = useState({
    apps: false,
    auth: false,
    pages: true, // 'Pages' is open by default in the screenshot
    baseUI: false,
    advanceUI: false,
    forms: false,
    tables: false,
    charts: false,
    multiLevel: false,
  });
  // State for profile dropdown
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  // New state for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Ref for the profile dropdown button to detect clicks outside
  const profileDropdownRef = useRef(null);

  // Function to toggle sidebar visibility (mobile and desktop behavior)
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Function to toggle submenu collapse
  const toggleSubmenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    // Add or remove 'dark-mode' class to body for global theme changes
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  // Effect to handle initial screen size and resize events for sidebar
  useEffect(() => {
    const checkScreenSize = () => {
      // On desktop, ensure sidebar is not in mobile-overlay state
      if (window.innerWidth > 991.98) {
        // Bootstrap's 'lg' breakpoint
        setIsSidebarOpen(false); // Sidebar should not be 'active' (overlay) on desktop
      }
    };

    checkScreenSize(); // Run on mount
    window.addEventListener("resize", checkScreenSize); // Add event listener for resize

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup on unmount
  }, []);

  // Effect to close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutsideSidebar = (event) => {
      const sidebarElement = document.getElementById("sidebar");
      const sidebarToggleButton = document.getElementById("sidebarToggle");

      const isClickInsideSidebar =
        sidebarElement && sidebarElement.contains(event.target);
      const isClickOnToggleButton =
        sidebarToggleButton && sidebarToggleButton.contains(event.target);

      // If on mobile, sidebar is open, and click is outside sidebar and not on the toggle button
      if (
        window.innerWidth <= 991.98 &&
        isSidebarOpen &&
        !isClickInsideSidebar &&
        !isClickOnToggleButton
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideSidebar);

    return () =>
      document.removeEventListener("mousedown", handleClickOutsideSidebar);
  }, [isSidebarOpen]);

  // Effect to close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutsideProfileDropdown = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideProfileDropdown);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutsideProfileDropdown
      );
  }, []);

  return (
    <div className="d-flex min-vh-100 overflow-hidden">
      {/* Sidebar */}
      <nav
        id="sidebar"
        className={`flex-column custom-sidebar ${
          isSidebarOpen ? "active" : ""
        }`}
      >
        <div
          className={`d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom sidebar-header`}
        >
          <a href="#" className="text-decoration-none velzon-brand">
            VELZON
          </a>
          <button
            id="sidebarCloseBtn"
            className="btn-close btn-close-white d-lg-none"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close Sidebar"
          ></button>
        </div>
        <div className="position-relative mb-3">
          <i className="fas fa-search position-absolute top-50 translate-middle-y"></i>
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
        <ul className="nav flex-column mb-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-tachometer-alt"></i>Dashboards
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => toggleSubmenu("apps")}
              aria-expanded={openMenus.apps}
              data-bs-toggle="collapse"
              href="#appsCollapse"
              role="button"
            >
              <i className="fas fa-th-large"></i>Apps
              <i
                className={`fas fa-chevron-right ms-auto chevron-transition ${
                  openMenus.apps ? "chevron-rotated" : ""
                }`}
              ></i>
            </a>
            <div
              className={`collapse ${openMenus.apps ? "show" : ""}`}
              id="appsCollapse"
            >
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Calendar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Chat
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-layer-group"></i>Layouts{" "}
              <span className="badge ms-auto hot-badge">Hot</span>
            </a>
          </li>

          <li className="nav-item menu-title">PAGES</li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => toggleSubmenu("auth")}
              aria-expanded={openMenus.auth}
              data-bs-toggle="collapse"
              href="#authCollapse"
              role="button"
            >
              <i className="fas fa-user-lock"></i>Authentication
              <i
                className={`fas fa-chevron-right ms-auto chevron-transition ${
                  openMenus.auth ? "chevron-rotated" : ""
                }`}
              ></i>
            </a>
            <div
              className={`collapse ${openMenus.auth ? "show" : ""}`}
              id="authCollapse"
            >
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sign In
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link active-sidebar-link`}
              onClick={() => toggleSubmenu("pages")}
              aria-expanded={openMenus.pages}
              data-bs-toggle="collapse"
              href="#pagesCollapse"
              role="button"
            >
              <i className="fas fa-file-alt"></i>Pages
              <i
                className={`fas fa-chevron-right ms-auto chevron-transition ${
                  openMenus.pages ? "chevron-rotated" : ""
                }`}
              ></i>
            </a>
            <div
              className={`collapse ${openMenus.pages ? "show" : ""}`}
              id="pagesCollapse"
            >
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active-sidebar-link" href="#">
                    Starter
                  </a>{" "}
                  {/* Nested active item */}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-globe"></i>Landing
            </a>
          </li>

          <li className="nav-item menu-title">COMPONENTS</li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => toggleSubmenu("baseUI")}
              aria-expanded={openMenus.baseUI}
              data-bs-toggle="collapse"
              href="#baseUICollapse"
              role="button"
            >
              <i className="fas fa-cube"></i>Base UI
              <i
                className={`fas fa-chevron-right ms-auto chevron-transition ${
                  openMenus.baseUI ? "chevron-rotated" : ""
                }`}
              ></i>
            </a>
            <div
              className={`collapse ${openMenus.baseUI ? "show" : ""}`}
              id="baseUICollapse"
            >
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Alerts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Buttons
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Cards
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => toggleSubmenu("advanceUI")}
              aria-expanded={openMenus.advanceUI}
              data-bs-toggle="collapse"
              href="#advanceUICollapse"
              role="button"
            >
              <i className="fas fa-bezier-curve"></i>Advance UI
              <i
                className={`fas fa-chevron-right ms-auto chevron-transition ${
                  openMenus.advanceUI ? "chevron-rotated" : ""
                }`}
              ></i>
            </a>
            <div
              className={`collapse ${openMenus.advanceUI ? "show" : ""}`}
              id="advanceUICollapse"
            >
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sweet Alerts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Range Slider
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-puzzle-piece"></i>Widgets
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => toggleSubmenu("forms")}
              aria-expanded={openMenus.forms}
              data-bs-toggle="collapse"
              href="#formsCollapse"
              role="button"
            >
              <i className="fas fa-edit"></i>Forms
              <i
                className={`fas fa-chevron-right ms-auto chevron-transition ${
                  openMenus.forms ? "chevron-rotated" : ""
                }`}
              ></i>
            </a>
            <div
              className={`collapse ${openMenus.forms ? "show" : ""}`}
              id="formsCollapse"
            >
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Elements
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Validation
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => toggleSubmenu("tables")}
              aria-expanded={openMenus.tables}
              data-bs-toggle="collapse"
              href="#tablesCollapse"
              role="button"
            >
              <i className="fas fa-table"></i>Tables
              <i
                className={`fas fa-chevron-right ms-auto chevron-transition ${
                  openMenus.tables ? "chevron-rotated" : ""
                }`}
              ></i>
            </a>
            <div
              className={`collapse ${openMenus.tables ? "show" : ""}`}
              id="tablesCollapse"
            >
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Basic Tables
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Data Tables
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => toggleSubmenu("charts")}
              aria-expanded={openMenus.charts}
              data-bs-toggle="collapse"
              href="#chartsCollapse"
              role="button"
            >
              <i className="fas fa-chart-bar"></i>Charts
              <i
                className={`fas fa-chevron-right ms-auto chevron-transition ${
                  openMenus.charts ? "chevron-rotated" : ""
                }`}
              ></i>
            </a>
            <div
              className={`collapse ${openMenus.charts ? "show" : ""}`}
              id="chartsCollapse"
            >
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Apex Charts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Chartjs
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-smile"></i>Icons
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-map-marker-alt"></i>Maps
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => toggleSubmenu("multiLevel")}
              aria-expanded={openMenus.multiLevel}
              data-bs-toggle="collapse"
              href="#multiLevelCollapse"
              role="button"
            >
              <i className="fas fa-sitemap"></i>Multi Level
              <i
                className={`fas fa-chevron-right ms-auto chevron-transition ${
                  openMenus.multiLevel ? "chevron-rotated" : ""
                }`}
              ></i>
            </a>
            <div
              className={`collapse ${openMenus.multiLevel ? "show" : ""}`}
              id="multiLevelCollapse"
            >
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Level 2.1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Level 2.2
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="mt-auto p-3 text-center custom-footer-text">
          2025 © Velzon.
        </div>
      </nav>

      {/* Main Content */}
      <div
        id="mainContent"
        className={`flex-grow-1 d-flex flex-column min-vh-100 ${
          isSidebarOpen ? "" : "main-content-shifted"
        }`}
        style={{ transition: "margin-left 0.3s ease-in-out" }}
      >
        {/* Header */}
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
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
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

        {/* Page Content */}
        <div className="p-4 flex-grow-1">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
            <h4 className="mb-2 mb-md-0 page-title">STARTER</h4>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <i className="fas fa-chevron-right"></i>Starter
                </li>
              </ol>
            </nav>
          </div>

          <div className="card content-card">
            <div className="card-body">
              {/* Your main content goes here */}
              <p className="content-paragraph">Welcome to the Starter page!</p>
            </div>
          </div>
        </div>

        {/* Footer for Design & Develop */}
        <footer className="custom-footer">
          Design & Develop by Themesbrand
        </footer>
      </div>

      {/* Floating Action Button */}
      <button className="fab-button">
        <i className="fas fa-comment-dots"></i>
      </button>
    </div>
  );
}

export default Index;
