import React, { useState, useEffect } from "react";
import { FaCalendarPlus, FaUser, FaHistory } from "react-icons/fa";
import RequestLeaveModal from "../../../compoents/requesModal/requesModal";
import { useParams } from "react-router";

const LeaveDetail = () => {
  const { employeeId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [employee, setEmployee] = useState(null);
  const [leaveHistory, setLeaveHistory] = useState([]);
  const [leaveSummary, setLeaveSummary] = useState({
    total: 20,
    used: 8,
    remaining: 12,
  });

  useEffect(() => {
    // Fetch employee data and leave history (mock data)
    setEmployee({
      id: employeeId,
      name: "Md Siam",
    });

    // Multiple leave history (same employee)
    setLeaveHistory([
      {
        id: 1,
        reason: "Sick leave",
        startDate: "2023-07-10",
        endDate: "2023-07-12",
        totalDays: 3,
        type: "Sick",
        status: "completed",
        requestedOn: "2023-07-05",
      },
      {
        id: 2,
        reason: "Family emergency",
        startDate: "2023-08-15",
        endDate: "2023-08-16",
        totalDays: 2,
        type: "Casual",
        status: "completed",
        requestedOn: "2023-08-10",
      },
      {
        id: 3,
        reason: "Travel",
        startDate: "2023-09-20",
        endDate: "2023-09-22",
        totalDays: 3,
        type: "Personal",
        status: "pending",
        requestedOn: "2023-09-18",
      },
    ]);
  }, [employeeId]);

  // Responsive table columns
  // const visibleColumns = ["reason", "startDate", "endDate", "status"];
  // const hiddenColumns = ["totalDays", "type", "requestedOn", "note", "action"];

  return (
    <div className="container py-4">
      {employee && (
        <>
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-info text-white">
              <h5 className="mb-0 d-flex align-items-center">
                <FaUser className="me-2" />
                {employee.name} (EID: {employee.id})
              </h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="mb-3 mb-md-0">
                  <h6 className="text-primary">
                    Total Leave: {leaveSummary.total}
                  </h6>
                  <h6 className="text-success">
                    Remaining: {leaveSummary.remaining}
                  </h6>
                  <h6 className="text-danger">Used: {leaveSummary.used}</h6>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => setShowModal(true)}
                >
                  <FaCalendarPlus className="me-2" />
                  Request Leave
                </button>
              </div>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-header bg-secondary text-white">
              <h5 className="mb-0 d-flex align-items-center">
                <FaHistory className="me-2" />
                Leave History
              </h5>
            </div>
            <div className="card-body">
              {/* tap Accordion View */}
              <div className="table-responsive d-none d-md-block">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Reason</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th className="d-none d-md-table-cell">Total Days</th>
                      <th className="d-none d-md-table-cell">Type</th>
                      <th>Status</th>
                      <th className="d-none d-lg-table-cell">Requested On</th>

                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaveHistory.map((leave) => (
                      <tr key={leave.id}>
                        <td>{leave.reason}</td>
                        <td>{leave.startDate}</td>
                        <td>{leave.endDate}</td>
                        <td className="d-none d-md-table-cell">
                          {leave.totalDays}
                        </td>
                        <td className="d-none d-md-table-cell">
                          <span
                            className={`badge ${
                              leave.type === "Sick"
                                ? "bg-danger"
                                : leave.type === "Casual"
                                ? "bg-primary"
                                : "bg-success"
                            }`}
                          >
                            {leave.type}
                          </span>
                        </td>
                        <td>
                          <span
                            className={`badge ${
                              leave.status === "Approved"
                                ? "bg-success"
                                : leave.status === "Pending"
                                ? "bg-warning"
                                : "bg-danger"
                            }`}
                          >
                            {leave.status}
                          </span>
                        </td>
                        <td className="d-none d-lg-table-cell">
                          {leave.requestedOn}
                        </td>

                        <td>
                          <button className="btn btn-sm btn-outline-primary">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Accordion View */}
              <div className="d-md-none mt-3">
                {leaveHistory.map((leave) => (
                  <div key={leave.id} className="card mb-2">
                    <div className="card-body">
                      <h6>{leave.reason}</h6>
                      <p className="mb-1">
                        <strong>Dates:</strong> {leave.startDate} to{" "}
                        {leave.endDate}
                      </p>
                      <p className="mb-1">
                        <strong>Status:</strong>
                        <span
                          className={`badge ms-1 ${
                            leave.status === "Approved"
                              ? "bg-success"
                              : leave.status === "Pending"
                              ? "bg-warning"
                              : "bg-danger"
                          }`}
                        >
                          {leave.status}
                        </span>
                      </p>
                      <div className="mt-2">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          data-bs-toggle="collapse"
                          data-bs-target={`#details-${leave.id}`}
                        >
                          More Details
                        </button>
                        <div
                          className="collapse mt-2"
                          id={`details-${leave.id}`}
                        >
                          <p className="mb-1">
                            <strong>Type:</strong> {leave.type}
                          </p>
                          <p className="mb-1">
                            <strong>Days:</strong> {leave.totalDays}
                          </p>
                          <p className="mb-1">
                            <strong>Requested:</strong> {leave.requestedOn}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <RequestLeaveModal
            show={showModal}
            handleClose={() => setShowModal(false)}
          />
        </>
      )}
    </div>
  );
};

export default LeaveDetail;
