import { Button, Col, Form, Row } from "react-bootstrap";

export default function EarningForm() {
  return (
    <div className="container mt-4">
      <Form>
        <div className="card mb-4">
          <h3 className="card-header fw-bold">Earning Form</h3>
          <div className="card-body">
            <Form.Group as={Row} controlId="Card" className="mb-3">
              <Form.Label column sm={2}>
                Date :
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="date" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Category Name :
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  placeholder="Enter category name"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Total Earning :
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="number"
                  placeholder="Enter total earning"
                  required
                />
              </Col>
            </Form.Group>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
