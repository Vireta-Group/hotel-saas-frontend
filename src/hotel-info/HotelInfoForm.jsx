import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const HotelInfoForm = () => {
  return (
    <Container className="mt-4">
      <h4 className="mb-4">Hotel Information</h4>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Logo</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Hotel Name<span className="text-danger">*</span></Form.Label>
          <Form.Control type="text" placeholder="Enter hotel name" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email<span className="text-danger">*</span></Form.Label>
          <Form.Control type="email" placeholder="demo@email.com" disabled />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter phone number" />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter address" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Country" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Facebook</Form.Label>
          <Form.Control type="text" placeholder="Facebook profile URL" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>LinkedIn</Form.Label>
          <Form.Control type="text" placeholder="LinkedIn profile URL" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Skype</Form.Label>
          <Form.Control type="text" placeholder="Skype ID" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Website</Form.Label>
          <Form.Control type="text" placeholder="Hotel website URL" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Star Rating</Form.Label>
          <Form.Select>
            <option>Select rating</option>
            <option>1 Star</option>
            <option>2 Stars</option>
            <option>3 Stars</option>
            <option>4 Stars</option>
            <option>5 Stars</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email Signature</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter email signature" />
        </Form.Group>

        <Button variant="primary" type="submit">Save</Button>
      </Form>
    </Container>
  );
};

export default HotelInfoForm;
