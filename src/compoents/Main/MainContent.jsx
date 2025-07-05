// components/MainContent.jsx
import React from "react";

function MainContent({ isSidebarOpen }) {
  return (
    <div
      id="mainContent"
      className={`flex-grow-1 d-flex flex-column min-vh-100 ${
        isSidebarOpen ? "" : "main-content-shifted"
      }`}
      style={{ transition: "margin-left 0.3s ease-in-out" }}
    >
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
    </div>
  );
}

export default MainContent;
