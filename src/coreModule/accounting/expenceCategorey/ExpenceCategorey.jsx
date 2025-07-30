//mahbub....................................

import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap';

const ExpenseCategory = () => {
  const [formData, setFormData] = useState({
    categoryName: '',
    status: 'assets',
    categoryDescription: '',
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
    console.log('Submitted Data:', formData);
    // এখানে Firestore বা অন্য কোথাও ডেটা পাঠানো যেতে পারে
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Card className="shadow-lg rounded-4 border-0">
            <Card.Body className="p-4">
              <h2 className="text-center text-primary mb-4">
                Add Expense Category
              </h2>

              <Form onSubmit={handleSubmit}>
                {/* Category Name */}
                <Form.Group className="mb-3" controlId="categoryName">
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="categoryName"
                    value={formData.categoryName}
                    onChange={handleChange}
                    placeholder="Enter Catergorey Name"
                    required
                  />
                </Form.Group>

                {/* Status */}
                <Form.Group className="mb-3" controlId="status">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="assets">Assets</option>
                    <option value="not assets">Not Assets</option>
                  </Form.Select>
                </Form.Group>

                {/* Description */}
                <Form.Group className="mb-4" controlId="categoryDescription">
                  <Form.Label>Category Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="categoryDescription"
                    value={formData.categoryDescription}
                    onChange={handleChange}
                    placeholder="Write a short description about the category..."
                  />
                </Form.Group>

                <div className="text-center">
                  <Button type="submit" variant="primary" className="px-4 py-2">
                    Save    
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ExpenseCategory;
