import React, { useState } from "react";
import { FaCalendarAlt, FaTimes } from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";

const RequestLeaveModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    reason: "",
    type: "Casual",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.startDate) newErrors.startDate = "Start date is required";
    if (!formData.endDate) newErrors.endDate = "End date is required";
    if (new Date(formData.endDate) < new Date(formData.startDate)) {
      newErrors.endDate = "End date cannot be before start date";
    }
    if (!formData.reason) newErrors.reason = "Reason is required";
    if (formData.reason.length > 200) newErrors.reason = "Reason is too long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit logic here (API call)
      console.log("Leave request submitted:", formData);
      handleClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title>
          <FaCalendarAlt className="me-2" />
          Request New Leave
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>From Date</Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              isInvalid={!!errors.startDate}
            />
            <Form.Control.Feedback type="invalid">
              {errors.startDate}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>To Date</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              isInvalid={!!errors.endDate}
            />
            <Form.Control.Feedback type="invalid">
              {errors.endDate}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Reason</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              isInvalid={!!errors.reason}
            />
            <Form.Control.Feedback type="invalid">
              {errors.reason}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Leave Type</Form.Label>
            <Form.Select
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="Casual">Casual Leave</option>
              <option value="Sick">Sick Leave</option>
              <option value="Paid">Paid Leave</option>
              <option value="Unpaid">Unpaid Leave</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <FaTimes className="me-1" /> Cancel
          </Button>
          <Button variant="primary" type="submit">
            Submit Request
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default RequestLeaveModal;
