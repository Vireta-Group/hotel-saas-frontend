import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const EmployeJobroleProfile = () => {
  const [formData, setFormData] = useState({
    designation: '',
    salary: '',
    dutyTime: '',
    shift: '',
    monthlyLeave: '',
    offDay: '',
    eidHoliday: '',
    yearlyLeave: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <Container className="my-5">
      <div
        className="p-4 shadow rounded bg-light border"
        style={{ maxWidth: '900px', margin: '0 auto' }}
      >
        <h3 className="text-center mb-4 text-primary">Employee Job Role/Profile Form</h3>
        <Form onSubmit={handleSubmit}>
          <Row className="g-3">
            <Col md={6}>
              <Form.Group controlId="designation">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="salary">
                <Form.Label>Salary </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="dutyTime">
                <Form.Label>Duty Time</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. 9AM - 5PM"
                  name="dutyTime"
                  value={formData.dutyTime}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="shift">
                <Form.Label>Shift</Form.Label>
                <Form.Select
                  name="shift"
                  value={formData.shift}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Shift</option>
                  <option value="Morning">Morning</option>
                  <option value="Evening">Evening</option>
                  <option value="Night">Night</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="monthlyLeave">
                <Form.Label>Monthly Leave (Cuti)</Form.Label>
                <Form.Control
                  type="number"
                  name="monthlyLeave"
                  value={formData.monthlyLeave}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="offDay">
                <Form.Label>Off Day</Form.Label>
                <Form.Select
                  name="offDay"
                  value={formData.offDay}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Off Day</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="eidHoliday">
                <Form.Label>Eid Holiday (days)</Form.Label>
                <Form.Control
                  type="number"
                  name="eidHoliday"
                  value={formData.eidHoliday}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="yearlyLeave">
                <Form.Label>Yearly Leave</Form.Label>
                <Form.Control
                  type="number"
                  name="yearlyLeave"
                  value={formData.yearlyLeave}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <div className="text-center mt-4">
                <Button variant="primary" type="submit" className="px-5">
                  Submit Profile
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default EmployeJobroleProfile;
