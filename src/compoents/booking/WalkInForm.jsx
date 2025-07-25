import { Container, Form, Row, Col, Badge, Button } from "react-bootstrap";

const WalkInBookingForm = () => {
  return (
    <Container fluid className="p-4 bg-light">
      {/* Header Row: Walk-in Booking & Status */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Walk-in Booking</h3>
        <div>
          <span className="fw-bold">Status: </span>
          <Badge bg="warning" text="dark">
            Pending
          </Badge>
        </div>
      </div>

      <h4 className="mb-3 small">Name in English</h4>
      {/* Main Form */}
      <Form>
        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="guestName">
              <Form.Label>Guest Name *</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="mobileNumber">
              <Form.Label>Mobile Number *</Form.Label>
              <Form.Control type="text" placeholder="01XXXXXXXXX" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="nidNumber">
              <Form.Label>National ID Number *</Form.Label>
              <Form.Control type="text" placeholder="17-digit NID number" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Full Address *</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Enter detailed address"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dob">
          <Form.Label>Date of Birth *</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        {/* Booking Info */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="mb-0">Booking Info</h6> {/* smaller title */}
        </div>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Group controlId="roomNumber">
              <Form.Label>Room Number *</Form.Label>
              <Form.Control type="text" placeholder="Enter room number" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="bookingDate">
              <Form.Label>Booking Date *</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="nights">
              <Form.Label>Number of Nights *</Form.Label>
              <Form.Control type="number" placeholder="e.g., 2" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="price">
              <Form.Label>Price (BDT) *</Form.Label>
              <Form.Control type="text" placeholder="Enter price" />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default WalkInBookingForm;
