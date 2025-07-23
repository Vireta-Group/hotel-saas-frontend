import React, { useState } from "react";
import {
  Table,
  Modal,
  Button,
  Card,
  Badge,
  ProgressBar,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import {
  FaCheck,
  FaTimes,
  FaEdit,
  FaInfoCircle,
  FaUser,
  FaCalendarAlt,
  FaHistory,
} from "react-icons/fa";

const AdminLeaveManagement = () => {
  // Sample data
  const [employees, setEmployees] = useState([
    {
      id: 1,
      eid: "EMP-001",
      name: "John Doe",
      designation: "Senior Developer",
      department: "Engineering",
      photo: null,
      totalLeave: 20,
      totalSpendLeave: 8,
      leaveRequests: [
        {
          id: 101,
          from: "2023-06-10",
          to: "2023-06-15",
          days: 5,
          reason: "Family vacation",
          appliedDate: "2023-05-25",
          type: "withPay",
          status: "pending",
          approvedBy: null,
          rejectedBy: null,
        },
        {
          id: 102,
          from: "2023-04-01",
          to: "2023-04-03",
          days: 2,
          reason: "Medical leave",
          appliedDate: "2023-03-20",
          type: "withPay",
          status: "approved",
          approvedBy: "Admin User",
          rejectedBy: null,
        },
      ],
    },
    {
      id: 2,
      eid: "EMP-002",
      name: "Jane Smith",
      designation: "HR Manager",
      department: "Human Resources",
      photo: null,
      totalLeave: 22,
      totalSpendLeave: 15,
      leaveRequests: [
        {
          id: 201,
          from: "2023-06-20",
          to: "2023-06-25",
          days: 5,
          reason: "Training program",
          appliedDate: "2023-06-01",
          type: "withPay",
          status: "pending",
          approvedBy: null,
          rejectedBy: null,
        },
      ],
    },
  ]);

  // State for modals and selected items
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showActionModal, setShowActionModal] = useState(false);
  const [modalType, setModalType] = useState(""); // 'approve', 'reject', or 'edit'
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Form data
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    type: "withPay",
    reason: "",
  });

  // Open employee details
  const handleShowDetails = (employee, request = null) => {
    setSelectedEmployee(employee);
    setSelectedRequest(request || employee.leaveRequests[0]);
    setShowDetailsModal(true);
  };

  // Open action modal (approve/reject/edit)
  const handleShowActionModal = (type, employee, request) => {
    setModalType(type);
    setSelectedEmployee(employee);
    setSelectedRequest(request);
    setFormData({
      from: request.from,
      to: request.to,
      type: request.type,
      reason: request.reason,
    });
    setShowActionModal(true);
  };

  // Handle form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit action (approve/reject/edit)
  const handleActionSubmit = () => {
    const updatedEmployees = employees.map((emp) => {
      if (emp.id === selectedEmployee.id) {
        const updatedRequests = emp.leaveRequests.map((req) => {
          if (req.id === selectedRequest.id) {
            if (modalType === "approve") {
              return {
                ...req,
                status: "approved",
                approvedBy: "Admin User", // Replace with actual admin name
                rejectedBy: null,
                from: formData.from,
                to: formData.to,
                type: formData.type,
              };
            } else if (modalType === "reject") {
              return {
                ...req,
                status: "rejected",
                rejectedBy: "Admin User", // Replace with actual admin name
                approvedBy: null,
                reason: formData.reason,
              };
            } else if (modalType === "edit") {
              return {
                ...req,
                from: formData.from,
                to: formData.to,
                type: formData.type,
                reason: formData.reason,
              };
            }
          }
          return req;
        });
        return { ...emp, leaveRequests: updatedRequests };
      }
      return emp;
    });

    setEmployees(updatedEmployees);
    setShowActionModal(false);
  };

  // Calculate total days between two dates
  const calculateDays = (from, to) => {
    const fromDate = new Date(from);
    const toDate = new Date(to);
    return Math.ceil((toDate - fromDate) / (1000 * 60 * 60 * 24)) + 1;
  };

  return (
    <div className="container-fluid py-4">
      {/* All Employees Leave List */}
      <h2 className="mb-4">
        <FaCalendarAlt className="me-2" />
        All Employees Leave Requests
      </h2>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>EID</th>
            <th>Status</th>
            <th>Actions</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Requested From</th>
            <th>To</th>
            <th>Total Days</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {employees.flatMap((employee) =>
            employee.leaveRequests.map((request) => (
              <tr
                key={`${employee.id}-${request.id}`}
                onClick={() => handleShowDetails(employee, request)}
                style={{ cursor: "pointer" }}
              >
                <td>{employee.eid}</td>
                <td>
                  {request.status === "approved" && (
                    <Badge bg="success">Approved</Badge>
                  )}
                  {request.status === "rejected" && (
                    <Badge bg="danger">Rejected</Badge>
                  )}
                  {request.status === "pending" && (
                    <Badge bg="warning">Pending</Badge>
                  )}
                </td>
                <td onClick={(e) => e.stopPropagation()}>
                  <Button
                    variant="info"
                    size="sm"
                    onClick={() => handleShowDetails(employee, request)}
                  >
                    <FaInfoCircle /> View
                  </Button>
                </td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.department}</td>
                <td>{request.from}</td>
                <td>{request.to}</td>
                <td>{request.days}</td>
                <td>{request.reason}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {/* Employee Details Modal */}
      <Modal
        show={showDetailsModal}
        onHide={() => setShowDetailsModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FaUser className="me-2" />
            {selectedEmployee?.name}'s Leave Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEmployee && selectedRequest && (
            <>
              {/* 1. Employee Info Card */}
              <Card className="mb-4">
                <Card.Body>
                  <Row>
                    <Col md={8}>
                      <h4>{selectedEmployee.name}</h4>
                      <p className="mb-1">
                        <strong>EID:</strong> {selectedEmployee.eid}
                      </p>
                      <p className="mb-1">
                        <strong>Designation:</strong>{" "}
                        {selectedEmployee.designation}
                      </p>
                      <p className="mb-0">
                        <strong>Department:</strong>{" "}
                        {selectedEmployee.department}
                      </p>
                    </Col>
                    <Col md={4} className="text-end">
                      <div
                        className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "80px", height: "80px" }}
                      >
                        <FaUser size={40} className="text-secondary" />
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              {/* 2. Leave Statistics Summary */}
              <Card className="mb-4">
                <Card.Body>
                  <h5 className="mb-3">Leave Summary</h5>
                  <Row>
                    <Col md={4}>
                      <div className="text-center">
                        <h6>Total Leave</h6>
                        <h4>{selectedEmployee.totalLeave}</h4>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="text-center">
                        <h6>Spent Leave</h6>
                        <h4>{selectedEmployee.totalSpendLeave}</h4>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="text-center">
                        <h6>Remaining</h6>
                        <h4>
                          {selectedEmployee.totalLeave -
                            selectedEmployee.totalSpendLeave}
                        </h4>
                      </div>
                    </Col>
                  </Row>
                  <ProgressBar
                    now={
                      (selectedEmployee.totalSpendLeave /
                        selectedEmployee.totalLeave) *
                      100
                    }
                    variant="info"
                    className="mt-3"
                    label={`${Math.round(
                      (selectedEmployee.totalSpendLeave /
                        selectedEmployee.totalLeave) *
                        100
                    )}%`}
                  />
                </Card.Body>
              </Card>

              {/* 3. Current Leave Request Details */}
              <Card className="mb-4">
                <Card.Body>
                  <h5 className="mb-3">Current Request</h5>
                  <Row>
                    <Col md={6}>
                      <p>
                        <strong>From:</strong> {selectedRequest.from}
                      </p>
                      <p>
                        <strong>To:</strong> {selectedRequest.to}
                      </p>
                      <p>
                        <strong>Total Days:</strong> {selectedRequest.days}
                      </p>
                    </Col>
                    <Col md={6}>
                      <p>
                        <strong>Reason:</strong> {selectedRequest.reason}
                      </p>
                      <p>
                        <strong>Applied On:</strong>{" "}
                        {selectedRequest.appliedDate}
                      </p>
                      <p>
                        <strong>Status:</strong>{" "}
                        {selectedRequest.status === "approved" && (
                          <Badge bg="success">Approved</Badge>
                        )}
                        {selectedRequest.status === "rejected" && (
                          <Badge bg="danger">Rejected</Badge>
                        )}
                        {selectedRequest.status === "pending" && (
                          <Badge bg="warning">Pending</Badge>
                        )}
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              {/* 4. Admin Action Buttons */}
              {selectedRequest.status === "pending" ? (
                <div className="d-flex gap-2 mb-4">
                  <Button
                    variant="success"
                    onClick={() =>
                      handleShowActionModal(
                        "approve",
                        selectedEmployee,
                        selectedRequest
                      )
                    }
                  >
                    <FaCheck /> Approve
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() =>
                      handleShowActionModal(
                        "reject",
                        selectedEmployee,
                        selectedRequest
                      )
                    }
                  >
                    <FaTimes /> Reject
                  </Button>
                </div>
              ) : (
                <div className="d-flex gap-2 mb-4">
                  <Button
                    variant="primary"
                    onClick={() =>
                      handleShowActionModal(
                        "edit",
                        selectedEmployee,
                        selectedRequest
                      )
                    }
                  >
                    <FaEdit /> Edit
                  </Button>
                  {selectedRequest.status === "approved" && (
                    <Button
                      variant="danger"
                      onClick={() =>
                        handleShowActionModal(
                          "reject",
                          selectedEmployee,
                          selectedRequest
                        )
                      }
                    >
                      <FaTimes /> Change to Reject
                    </Button>
                  )}
                  {selectedRequest.status === "rejected" && (
                    <Button
                      variant="success"
                      onClick={() =>
                        handleShowActionModal(
                          "approve",
                          selectedEmployee,
                          selectedRequest
                        )
                      }
                    >
                      <FaCheck /> Change to Approve
                    </Button>
                  )}
                </div>
              )}

              {/* 5. Leave History Table */}
              <h5 className="mb-3">
                <FaHistory className="me-2" />
                Leave History
              </h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Days</th>
                    <th>Type</th>
                    <th>Reason</th>
                    <th>Status</th>
                    <th>Action By</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedEmployee.leaveRequests.map((request) => (
                    <tr key={request.id}>
                      <td>{request.from}</td>
                      <td>{request.to}</td>
                      <td>{request.days}</td>
                      <td>
                        {request.type === "withPay"
                          ? "With Pay"
                          : "Without Pay"}
                      </td>
                      <td>{request.reason}</td>
                      <td>
                        {request.status === "approved" && (
                          <Badge bg="success">Approved</Badge>
                        )}
                        {request.status === "rejected" && (
                          <Badge bg="danger">Rejected</Badge>
                        )}
                        {request.status === "pending" && (
                          <Badge bg="warning">Pending</Badge>
                        )}
                      </td>
                      <td>{request.approvedBy || request.rejectedBy || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowDetailsModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Action Modal (Approve/Reject/Edit) */}
      <Modal
        show={showActionModal}
        onHide={() => setShowActionModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "approve" && "Approve Leave Request"}
            {modalType === "reject" && "Reject Leave Request"}
            {modalType === "edit" && "Edit Leave Request"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {modalType !== "reject" && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>From Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="from"
                    value={formData.from}
                    onChange={handleFormChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>To Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="to"
                    value={formData.to}
                    onChange={handleFormChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Leave Type</Form.Label>
                  <Form.Select
                    name="type"
                    value={formData.type}
                    onChange={handleFormChange}
                  >
                    <option value="withPay">With Pay</option>
                    <option value="withoutPay">Without Pay</option>
                  </Form.Select>
                </Form.Group>
              </>
            )}
            <Form.Group className="mb-3">
              <Form.Label>
                {modalType === "reject"
                  ? "Reason for Rejection"
                  : "Reason for Leave"}
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="reason"
                value={formData.reason}
                onChange={handleFormChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowActionModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleActionSubmit}>
            {modalType === "approve" && "Approve"}
            {modalType === "reject" && "Reject"}
            {modalType === "edit" && "Save Changes"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminLeaveManagement;
