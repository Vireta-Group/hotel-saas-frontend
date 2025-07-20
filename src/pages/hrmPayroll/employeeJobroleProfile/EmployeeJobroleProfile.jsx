import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function EmployeeJobroleProfile() {
  const [employeeId] = useState(`EMP${Date.now()}`);
  return (
    <div className="container mt-4">
      <h2 className="display-6 mb-4">Create Employee Job Role Profile</h2>
      <p className="text-muted mb-2">
        Fill out the employee's job details, duty hours, salary and leave
        settings.
      </p>
      {/* Form Start */}
      <Form>
        {/*Section 1: Basic Info */}
        <div className="card mb-4">
          <h3 className="card-header fw-bold">Basic Information</h3>
          <div className="card-body row g-3">
            <div className="col-md-6">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control type="text" value={employeeId} readOnly />
            </div>
            <div className="col-md-6">
              <Form.Label>Full Name*</Form.Label>
              <Form.Control required type="text" name="employeeName" />
            </div>
            <div className="col-md-6">
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" name="employeeEmail" required />
            </div>
            <div className="col-md-6">
              <Form.Label>Phone Number*</Form.Label>
              <Form.Control type="tel" name="phoneNumber" required />
            </div>
          </div>
        </div>
        {/* Section:2 Job Info */}
        <div className="card mb-4">
          <h3 className="card-header fw-bold"> Job Details</h3>
          <div className="card-body row g-3">
            <div className="col-md-6">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" required />
            </div>
            <div className="col-md-6">
              <Form.Label>Department</Form.Label>
              <Form.Select required>
                <option>Front Desk</option>
                <option>House Keeping</option>
                <option>Kitchen</option>
              </Form.Select>
            </div>
            <div className="col-md-6">
              <Form.Label>Shift</Form.Label>
              <Form.Select required>
                <option>Morning</option>
                <option>Evening</option>
                <option>Night</option>
              </Form.Select>
            </div>
            <div className="col-md-6">
              <Form.Label>Duty Time</Form.Label>
              <Form.Control
              required
                type="text"
                placeholder="e.g. 9:00 A.M - 6:00 P.M"
              />
            </div>
          </div>
        </div>
        {/* Section: Salary & Leave */}
        <div className="card mb-4">
          <h3 className="card-header fw-bold">Salary & Leave</h3>
          <div className="card-body row g-3">
            <div className="col-md-6">
              <Form.Label>Weekly Off Days</Form.Label>
              <Form.Control required type="text" placeholder="e.g. Friday, Saturday" />
            </div>
            <div className="col-md-6">
              <Form.Label>Yearly Leave</Form.Label>
              <Form.Control required type="number" />
            </div>
            <div className="col-md-6">
              <Form.Label>Eid Leave</Form.Label>
              <Form.Control required type="number" />
            </div>
          </div>
        </div>
        <Button variant="primary" type="submit" className="my-3">Submit</Button>
      </Form>
    </div>
  );
}
