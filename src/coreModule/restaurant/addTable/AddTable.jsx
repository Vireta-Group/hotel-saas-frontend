import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTableForm = () => {
  const [formData, setFormData] = useState({
    tableNumber: "",
    tableSets: "",
    tableType: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Table added successfully!");
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center min-vh-100 bg-light px-3"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={8} lg={9}>
          <div
            className="mx-auto rounded-4 shadow-lg"
            style={{
              width: "100%",
              maxWidth: "700px",
              padding: "2.5rem",
              background: "linear-gradient(135deg, #f9fafd, #e1f0ff)",
              boxShadow: "0 4px 15px rgba(13, 110, 253, 0.2)",
            }}
          >
            <h3
              className="text-center mb-5 fw-bold text-primary"
              style={{ letterSpacing: "1.2px" }}
            >
              Add New Table
            </h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4" controlId="tableType">
                <Form.Label className="fw-semibold text-secondary text-uppercase">
                  Table Type
                </Form.Label>
                <Form.Select
                  name="tableType"
                  value={formData.tableType}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select Table Type --</option>
                  <option value="Indoor">Indoor</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="VIP">VIP</option>
                  <option value="Family">Family</option>
                  <option value="Couple">Couple</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4" controlId="tableNumber">
                <Form.Label className="fw-semibold text-secondary text-uppercase">
                  Table Number
                </Form.Label>
                <Form.Control
                  type="text"
                  name="tableNumber"
                  value={formData.tableNumber}
                  onChange={handleChange}
                  placeholder="Enter Table Number"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="tableSets">
                <Form.Label className="fw-semibold text-secondary text-uppercase">
                  Table Sets
                </Form.Label>
                <Form.Control
                  type="number"
                  name="tableSets"
                  value={formData.tableSets}
                  onChange={handleChange}
                  placeholder="Enter number of seats"
                  required
                />
              </Form.Group>

              <div className="d-grid mt-4">
                <Button
                  type="submit"
                  size="lg"
                  style={{
                    background: "#0d6efd",
                    border: "none",
                    fontWeight: "600",
                  }}
                >
                  Add Table
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <ToastContainer position="top-right" />
    </Container>
  );
};

export default AddTableForm;
