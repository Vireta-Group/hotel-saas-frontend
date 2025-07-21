import React, { useState, useEffect } from "react";
import { FaSearch, FaCheck, FaTimes, FaEye, FaSort } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

const LeaveDetailList = () => {
  // State management
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Mock data - replace with API call
  useEffect(() => {
    const mockData = [
      {
        id: 1,
        eid: "EMP001",
        name: "Md Siam",
        department: "Engineering",
        leaveType: "Sick",
        reason: "Fever and cold",
        fromDate: "2023-07-10",
        toDate: "2023-07-12",
        totalDays: 3,
        status: "Pending",
        appliedOn: "2023-07-05",
      },
      {
        id: 2,
        eid: "EMP002",
        name: "Rahul Sharma",
        department: "Marketing",
        leaveType: "Casual",
        reason: "Family function",
        fromDate: "2023-07-15",
        toDate: "2023-07-16",
        totalDays: 2,
        status: "Approved",
        appliedOn: "2023-07-10",
      },
      {
        id: 3,
        eid: "EMP003",
        name: "Priya Patel",
        department: "HR",
        leaveType: "Paid",
        reason: "Vacation",
        fromDate: "2023-07-20",
        toDate: "2023-07-25",
        totalDays: 6,
        status: "Rejected",
        appliedOn: "2023-07-12",
      },
    ];
    setLeaveRequests(mockData);
    setFilteredRequests(mockData);
  }, []);

  // Search functionality
  useEffect(() => {
    const results = leaveRequests.filter(
      (request) =>
        request.eid.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.leaveType.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRequests(results);
    setCurrentPage(1);
  }, [searchTerm, leaveRequests]);

  // Sorting functionality
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredRequests].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });
    setFilteredRequests(sortedData);
  };

  // Pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRequests.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Action handlers
  const handleApprove = (id) => {
    setLeaveRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: "Approved" } : req))
    );
  };

  const handleReject = (id) => {
    setLeaveRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: "Rejected" } : req))
    );
  };

  const openDetails = (request) => {
    setSelectedRequest(request);
    setShowModal(true);
  };

  // Status badge component
  const StatusBadge = ({ status }) => {
    let className = "";
    switch (status) {
      case "Approved":
        className = "bg-success";
        break;
      case "Pending":
        className = "bg-warning";
        break;
      case "Rejected":
        className = "bg-danger";
        break;
      default:
        className = "bg-secondary";
    }
    return <span className={`badge ${className}`}>{status}</span>;
  };

  return (
    <div className="container py-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Employee Leave Management</h5>
        </div>

        <div className="card-body">
          {/* Search Bar */}
          <div className="input-group mb-4">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search by EID, Name, Department or Leave Type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th onClick={() => handleSort("eid")}>
                    EID <FaSort className="ms-1" />
                  </th>
                  <th onClick={() => handleSort("name")}>
                    Name <FaSort className="ms-1" />
                  </th>
                  <th
                    className="d-none d-md-table-cell"
                    onClick={() => handleSort("department")}
                  >
                    Department <FaSort className="ms-1" />
                  </th>
                  <th
                    className="d-none d-sm-table-cell"
                    onClick={() => handleSort("leaveType")}
                  >
                    Leave Type <FaSort className="ms-1" />
                  </th>
                  <th className="d-none d-lg-table-cell">Reason</th>
                  <th onClick={() => handleSort("fromDate")}>
                    From <FaSort className="ms-1" />
                  </th>
                  <th
                    className="d-none d-sm-table-cell"
                    onClick={() => handleSort("toDate")}
                  >
                    To <FaSort className="ms-1" />
                  </th>
                  <th className="d-none d-md-table-cell">Days</th>
                  <th onClick={() => handleSort("status")}>
                    Status <FaSort className="ms-1" />
                  </th>
                  <th
                    className="d-none d-md-table-cell"
                    onClick={() => handleSort("appliedOn")}
                  >
                    Applied On <FaSort className="ms-1" />
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((request) => (
                    <tr key={request.id}>
                      <td>{request.eid}</td>
                      <td>{request.name}</td>
                      <td className="d-none d-md-table-cell">
                        {request.department}
                      </td>
                      <td className="d-none d-sm-table-cell">
                        <span className="badge bg-info">
                          {request.leaveType}
                        </span>
                      </td>
                      <td
                        className="d-none d-lg-table-cell text-truncate"
                        style={{ maxWidth: "150px" }}
                      >
                        {request.reason}
                      </td>
                      <td>{request.fromDate}</td>
                      <td className="d-none d-sm-table-cell">
                        {request.toDate}
                      </td>
                      <td className="d-none d-md-table-cell">
                        {request.totalDays}
                      </td>
                      <td>
                        <StatusBadge status={request.status} />
                      </td>
                      <td className="d-none d-md-table-cell">
                        {request.appliedOn}
                      </td>
                      <td>
                        <div className="d-flex gap-1">
                          {request.status === "Pending" && (
                            <>
                              <Button
                                variant="success"
                                size="sm"
                                className="d-none d-md-inline-block"
                                onClick={() => handleApprove(request.id)}
                              >
                                <FaCheck />
                              </Button>
                              <Button
                                variant="danger"
                                size="sm"
                                className="d-none d-md-inline-block"
                                onClick={() => handleReject(request.id)}
                              >
                                <FaTimes />
                              </Button>
                            </>
                          )}
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => openDetails(request)}
                          >
                            <FaEye />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="11" className="text-center py-4">
                      No leave requests found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="d-flex justify-content-between">
              <div>
                Showing{" "}
                {Math.min(indexOfFirstItem + 1, filteredRequests.length)} to{" "}
                {Math.min(indexOfLastItem, filteredRequests.length)} of{" "}
                {filteredRequests.length} entries
              </div>
              <ul className="pagination">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  >
                    Previous
                  </button>
                </li>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <li
                      key={page}
                      className={`page-item ${
                        currentPage === page ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    </li>
                  )
                )}

                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>

      {/* Details Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        {selectedRequest && (
          <>
            <Modal.Header closeButton className="bg-primary text-white">
              <Modal.Title>
                Leave Details - {selectedRequest.name} ({selectedRequest.eid})
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row mb-3">
                <div className="col-md-6">
                  <p>
                    <strong>Department:</strong> {selectedRequest.department}
                  </p>
                  <p>
                    <strong>Leave Type:</strong>
                    <span className="badge bg-info ms-2">
                      {selectedRequest.leaveType}
                    </span>
                  </p>
                  <p>
                    <strong>Status:</strong>
                    <StatusBadge status={selectedRequest.status} />
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    <strong>From Date:</strong> {selectedRequest.fromDate}
                  </p>
                  <p>
                    <strong>To Date:</strong> {selectedRequest.toDate}
                  </p>
                  <p>
                    <strong>Total Days:</strong> {selectedRequest.totalDays}
                  </p>
                </div>
              </div>

              <div className="mb-3">
                <p>
                  <strong>Reason:</strong>
                </p>
                <p>{selectedRequest.reason}</p>
              </div>

              <div className="mb-3">
                <p>
                  <strong>Applied On:</strong> {selectedRequest.appliedOn}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              {selectedRequest.status === "Pending" && (
                <>
                  <Button
                    variant="success"
                    onClick={() => {
                      handleApprove(selectedRequest.id);
                      setShowModal(false);
                    }}
                  >
                    <FaCheck className="me-1" /> Approve
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleReject(selectedRequest.id);
                      setShowModal(false);
                    }}
                  >
                    <FaTimes className="me-1" /> Reject
                  </Button>
                </>
              )}
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default LeaveDetailList;
