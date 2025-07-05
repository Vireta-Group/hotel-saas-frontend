// components/Sidebar.jsx
import React from "react";

function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  openMenus,
  toggleSubmenu,
}) {
  return (
    <nav
      id="sidebar"
      className={`flex-column custom-sidebar ${isSidebarOpen ? "active" : ""}`}
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
  );
}

export default Sidebar;
