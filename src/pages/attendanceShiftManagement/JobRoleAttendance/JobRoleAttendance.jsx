// src/pages/attendanceAndShiftManagement/jobRolAttendance/jobRolAttendance.jsx
import React, { useState, useEffect } from "react";
import { Form, Table, Button, Modal } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

const JobRoleAttendance = () => {
  // State for search form
  const [eid, setEid] = useState("");
  const [monthYear, setMonthYear] = useState("");

  // State for attendance data
  const [attendanceData, setAttendanceData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock data with employee IDs
  const mockData = [
    {
      employeeId: "E001",
      date: "2025-07-01",
      checkIn: "09:05",
      checkOut: "18:05",
    },
    {
      employeeId: "E002",
      date: "2025-07-02",
      checkIn: "09:15",
      checkOut: "17:55",
    },
    {
      employeeId: "E003",
      date: "2025-07-03",
      checkIn: "08:45",
      checkOut: "17:30",
    },
    {
      employeeId: "E004",
      date: "2025-07-01",
      checkIn: "09:00",
      checkOut: "17:30",
    },
    {
      employeeId: "E005",
      date: "2025-07-02",
      checkIn: "09:10",
      checkOut: "18:15",
    },
  ];

  // Initialize with sample data
  useEffect(() => {
    // In real app, this would be an API call
    const dataWithHours = mockData.map((record) => ({
      ...record,
      totalHours: calculateHours(record.checkIn, record.checkOut),
    }));
    setAttendanceData(dataWithHours);
  }, []);

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!eid.trim() && !monthYear.trim()) {
      alert("Please enter at least Employee ID or Month & Year");
      return setLoading(false);
    }

    const trimmedEid = eid.trim().toLowerCase();
    const searchMonth = monthYear.trim(); // format: 2025-07

    const results = attendanceData.filter((record) => {
      const recordMonth = record.date.slice(0, 7); // YYYY-MM
      const matchEid = trimmedEid
        ? record.employeeId.toLowerCase() === trimmedEid
        : true;
      const matchMonth = searchMonth ? recordMonth === searchMonth : true;
      return matchEid && matchMonth;
    });

    setFilteredData(results);
    setLoading(false);
  };

  // Calculate hours between check-in/out
  const calculateHours = (start, end) => {
    const [startHour, startMin] = start.split(":").map(Number);
    const [endHour, endMin] = end.split(":").map(Number);

    const totalMinutes = endHour * 60 + endMin - (startHour * 60 + startMin);

    if (totalMinutes < 0) return "0h 0min"; // Handle negative values

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}h ${minutes}min`;
  };

  // Handle opening edit modal
  const handleEdit = (record) => {
    setCurrentRecord({ ...record });
    setShowModal(true);
  };

  // Handle saving edited times
  const handleSave = () => {
    // Update record in filtered data
    const updatedData = filteredData.map((item) =>
      item.date === currentRecord.date ? currentRecord : item
    );

    // Recalculate hours
    const finalData = updatedData.map((item) => ({
      ...item,
      totalHours: calculateHours(item.checkIn, item.checkOut),
    }));

    setFilteredData(finalData);
    setShowModal(false);
  };

  // Handle time change in modal
  const handleTimeChange = (field, value) => {
    const updatedRecord = {
      ...currentRecord,
      [field]: value,
      totalHours: calculateHours(
        field === "checkIn" ? value : currentRecord.checkIn,
        field === "checkOut" ? value : currentRecord.checkOut
      ),
    };

    setCurrentRecord(updatedRecord);
  };

  return (
    <div className="container p-4">
      <h2 className="mb-4">Job Role Attendance Report</h2>

      {/* Search Form */}
      <Form onSubmit={handleSearch} className="mb-4 p-3 border rounded">
        <div className="row g-3 align-items-end">
          <div className="col-md-4">
            <Form.Group controlId="eid">
              <Form.Label>Employee ID (EID)</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g. E123"
                value={eid}
                onChange={(e) => setEid(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="col-md-4">
            <Form.Group controlId="monthYear">
              <Form.Label>Month & Year</Form.Label>
              <Form.Control
                type="month"
                value={monthYear}
                onChange={(e) => setMonthYear(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="col-md-4 d-flex">
            <Button
              variant="primary"
              type="submit"
              className="me-2"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </Button>
          </div>
        </div>
      </Form>

      {/* Attendance Table */}
      <div className="table-responsive">
        <Table
          striped
          bordered
          hover
          className="align-middle text-nowrap"
          style={{ fontSize: "14px", minWidth: "700px" }}
        >
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Date</th>
              <th>Check-in Time</th>
              <th>Check-out Time</th>
              <th>Total Hours</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((record, index) => (
                <tr key={index}>
                  <td>{record.employeeId}</td>
                  <td>{record.date}</td>
                  <td>{formatTime(record.checkIn)}</td>
                  <td>{formatTime(record.checkOut)}</td>
                  <td>{record.totalHours}</td>
                  <td>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => handleEdit(record)}
                    >
                      <FaEdit /> Edit
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  {loading
                    ? "Loading data..."
                    : "No records found. Please search using EID and Month-Year"}
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Attendance Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Employee ID : {currentRecord?.employeeId}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date : {currentRecord?.date}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Check-in Time</Form.Label>
              <Form.Control
                type="time"
                value={currentRecord?.checkIn || ""}
                onChange={(e) => handleTimeChange("checkIn", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Check-out Time</Form.Label>
              <Form.Control
                type="time"
                value={currentRecord?.checkOut || ""}
                onChange={(e) => handleTimeChange("checkOut", e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Total Hours : {currentRecord?.totalHours || ""}
              </Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

// Helper function to format time (HH:MM → hh:mm AM/PM)
const formatTime = (timeStr) => {
  if (!timeStr) return "--:--";

  const [hours, minutes] = timeStr.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;

  return `${hours12}:${minutes.toString().padStart(2, "0")} ${period}`;
};

export default JobRoleAttendance;
