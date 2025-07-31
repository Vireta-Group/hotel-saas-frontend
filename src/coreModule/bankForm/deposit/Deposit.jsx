import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { FaArrowLeft, FaArrowUp, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../../style/coreModule/bankFrom/deposit.css"; // CSS for styling the hero section

const DepositForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    date: "",
    bankName: "",
    accountNumber: "",
    slipeNumber: "",
    amount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Deposit submitted:", form);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="deposit-hero text-white text-center py-5">
        <FaArrowUp size={50} className="mb-3" />
        <h2>Deposit Money</h2>
        <p className="lead">
          Record your bank deposit transactions with slip details
        </p>
      </div>

      {/* Deposit Form */}
      <Container className="custom-form-container bg-light p-4 rounded shadow mt-5">
        <div className="text-center py-5   bg-light mb-4">
          <h4 className="fw-bold d-flex justify-content-center align-items-center gap-2 text-dark">
            <FaPlus className="text-primary" />
            Deposit Form
          </h4>
          <p className="text-muted mb-0">Fill in the deposit details below</p>
        </div>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Bank Name</Form.Label>
            <Form.Control
              type="text"
              name="bankName"
              placeholder="Enter bank name"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Account Number</Form.Label>
            <Form.Control
              type="text"
              name="accountNumber"
              placeholder="Enter account number"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Slip Number</Form.Label>
            <Form.Control
              type="text"
              name="slipeNumber"
              placeholder="Enter slip number"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              name="amount"
              placeholder="Enter amount"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="text-center mt-3">
            <Button
              type="submit"
              variant="success"
              className="d-flex align-items-center justify-content-center gap-2 mx-auto"
            >
              <FaArrowUp />
              deposit
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default DepositForm;
