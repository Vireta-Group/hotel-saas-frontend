import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Withdraw = () => {
  const [formData, setFormData] = useState({
    bankName: '',
    accountNumber: '',
    checkNumber: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Withdraw Request:', formData);
    // এখানে API call বা অন্য লজিক দিতে পারো
  };

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Form onSubmit={handleSubmit} className="p-4 shadow bg-light rounded" style={{ width: '100%', maxWidth: '500px' }}>
        <h3 className="text-center mb-4">Withdraw Form</h3>

        <Form.Group className="mb-3" controlId="bankName">
          <Form.Label>Bank Name</Form.Label>
          <Form.Control
            type="text"
            name="bankName"
            placeholder="Enter bank name"
            value={formData.bankName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="accountNumber">
          <Form.Label>Account Number</Form.Label>
          <Form.Control
            type="text"
            name="accountNumber"
            placeholder="Enter account number"
            value={formData.accountNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="checkNumber">
          <Form.Label>Check Number</Form.Label>
          <Form.Control
            type="text"
            name="checkNumber"
            placeholder="Enter check number"
            value={formData.checkNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100">
          Withdraw
        </Button>
      </Form>
    </Container>
  );
};

export default Withdraw;
