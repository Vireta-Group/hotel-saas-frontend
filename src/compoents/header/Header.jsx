import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import './Header.css'; // Optional: for custom styles
// import "../../../material/assets/css/app.min.css";

const Header = () => {
  return (
    <div className="d-flex">
      {/* LOGO */}
      <div className="navbar-brand-box horizontal-logo">
        <a href="index.html" className="logo logo-dark">
          <span className="logo-sm">
            <img src="assets/images/logo-sm.png" alt="Logo Small" height="22" />
          </span>
          <span className="logo-lg">
            <img
              src="assets/images/logo-dark.png"
              alt="Logo Dark"
              height="17"
            />
          </span>
        </a>

        <a href="index.html" className="logo logo-light">
          <span className="logo-sm">
            <img src="assets/images/logo-sm.png" alt="Logo Small" height="22" />
          </span>
          <span className="logo-lg">
            <img
              src="assets/images/logo-light.png"
              alt="Logo Light"
              height="17"
            />
          </span>
        </a>
      </div>

      {/* Hamburger Button */}
      <button
        type="button"
        className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger shadow-none"
        id="topnav-hamburger-icon"
      >
        <span className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* App Search */}
      <form className="app-search d-none d-md-block">
        <div className="position-relative">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            autoComplete="off"
            id="search-options"
          />
          <span className="mdi mdi-magnify search-widget-icon"></span>
          <span
            className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
            id="search-close-options"
          ></span>
        </div>

        <div className="dropdown-menu dropdown-menu-lg" id="search-dropdown">
          <div data-simplebar style={{ maxHeight: "320px" }}>
            {/* Recent Searches */}
            <div className="dropdown-header">
              <h6 className="text-overflow text-muted mb-0 text-uppercase">
                Recent Searches
              </h6>
            </div>
            <div className="dropdown-item bg-transparent text-wrap">
              <a
                href="index.html"
                className="btn btn-soft-secondary btn-sm rounded-pill"
              >
                how to setup <i className="mdi mdi-magnify ms-1"></i>
              </a>
              <a
                href="index.html"
                className="btn btn-soft-secondary btn-sm rounded-pill"
              >
                buttons <i className="mdi mdi-magnify ms-1"></i>
              </a>
            </div>

            {/* Pages */}
            <div className="dropdown-header mt-2">
              <h6 className="text-overflow text-muted mb-1 text-uppercase">
                Pages
              </h6>
            </div>
            <a href="#" className="dropdown-item notify-item">
              <i className="ri-bubble-chart-line align-middle fs-18 text-muted me-2"></i>
              <span>Analytics Dashboard</span>
            </a>
            <a href="#" className="dropdown-item notify-item">
              <i className="ri-lifebuoy-line align-middle fs-18 text-muted me-2"></i>
              <span>Help Center</span>
            </a>
            <a href="#" className="dropdown-item notify-item">
              <i className="ri-user-settings-line align-middle fs-18 text-muted me-2"></i>
              <span>My account settings</span>
            </a>

            {/* Members */}
            <div className="dropdown-header mt-2">
              <h6 className="text-overflow text-muted mb-2 text-uppercase">
                Members
              </h6>
            </div>
            <div className="notification-list">
              {[
                {
                  name: "Angela Bernier",
                  role: "Manager",
                  img: "avatar-2.jpg",
                },
                {
                  name: "David Grasso",
                  role: "Web Designer",
                  img: "avatar-3.jpg",
                },
                {
                  name: "Mike Bunch",
                  role: "React Developer",
                  img: "avatar-5.jpg",
                },
              ].map((user, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="dropdown-item notify-item py-2"
                >
                  <div className="d-flex">
                    <img
                      src={`assets/images/users/${user.img}`}
                      className="me-3 rounded-circle avatar-xs"
                      alt={`${user.name}`}
                    />
                    <div className="flex-grow-1">
                      <h6 className="m-0">{user.name}</h6>
                      <span className="fs-11 mb-0 text-muted">{user.role}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="text-center pt-3 pb-1">
            <a
              href="pages-search-results.html"
              className="btn btn-primary btn-sm"
            >
              View All Results <i className="ri-arrow-right-line ms-1"></i>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;
