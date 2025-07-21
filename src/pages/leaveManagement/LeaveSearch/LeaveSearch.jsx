import React, { useState } from "react";
import { FaSearch, FaUser, FaEnvelope, FaHome } from "react-icons/fa";

const SearchLeave = () => {
  const [searchText, setSearchText] = useState("");

  const [results, setResults] = useState([]);

  const handleSearch2 = (e) => {
    e.preventDefault();

    // Sample mock data (you can replace this with real API response)
    const mockData = [
      {
        id: "EMP001",
        name: "Md Siam",
        email: "siam@email.com",
        phone: "01712345678",
        address: "Dhaka",
      },
      {
        id: "EMP002",
        name: "Tamim Iqbal",
        email: "tamim@email.com",
        phone: "01811223344",
        address: "Chittagong",
      },
    ];

    // Filter logic to match EID, Name, Email, or Phone
    const filtered = mockData.filter((emp) =>
      [emp.id, emp.name, emp.email, emp.phone].some((field) =>
        field.toLowerCase().includes(searchText.toLowerCase())
      )
    );

    setResults(filtered);
  };

  return (
    <div className="container py-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">
            <FaSearch className="me-2" />
            Search Employee
          </h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSearch2}>
            <div className="row g-12">
              <div className="col-md-12">
                <label className="form-label">EID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter EID, Name, Email, or Phone"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-3 text-end">
              <button type="submit" className="btn btn-primary">
                <FaSearch className="me-1" /> Search
              </button>
            </div>
          </form>

          {/* Search Results */}
          {results.length > 0 && (
            <div className="mt-4">
              <h5 className="mb-3">Search Results:</h5>
              {results.map((emp) => (
                <div key={emp.id} className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="mb-1">
                          <FaUser className="me-2 text-primary" />
                          {emp.name}{" "}
                          <small className="text-muted">(EID: {emp.id})</small>
                        </h6>
                        <p className="mb-1">
                          <FaEnvelope className="me-2 text-secondary" />
                          {emp.email}
                        </p>
                        <p className="mb-0">
                          <FaHome className="me-2 text-success" />
                          {emp.address}
                        </p>
                      </div>
                      <a
                        href={`/leave-detail/${emp.id}`}
                        className="btn btn-sm btn-outline-primary"
                      >
                        View Leave Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchLeave;
