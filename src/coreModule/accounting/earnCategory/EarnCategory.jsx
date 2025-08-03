import { Button, Col, Form, Row } from "react-bootstrap";

export default function EarnCategory() {
  return (
    <div className="container mt-4">
      <h2 className="display-6 mb-4">Earn Category</h2>
      <Form>
        <div className="card m-5">
          <h3 className="card-header fw-bold">Earn Category Form </h3>
          <div className="card-body">
            {/* Category Name */}
            <Form.Group as={Row} controlId="categoryName" className="mb-3">
              <Form.Label column sm={3}>
                Category Name :
              </Form.Label>
              <Col sm={7}>
                <Form.Control type="text" placeholder="Enter Category Name" required />
              </Col>
            </Form.Group>
            {/* Category Status */}
            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column sm={3}>
                Category Status :
              </Form.Label>
              <Col sm={7}>
                <div className="d-flex gap-4 align-items-center">
                  <Form.Check
                    type="radio"
                    label="Asset"
                    name="categoryStatus"
                  />
                  <Form.Check
                    type="radio"
                    label="Not Asset"
                    name="categoryStatus"
                  ></Form.Check>
                </div>
              </Col>
            </Form.Group>
            {/* Category Description */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Category Description :
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Category Description"
                  required
                />
              </Col>
            </Form.Group>
          </div>
           
        </div>
        <Button type="submit" variant="primary" className="mx-5">Submit</Button>
      </Form>
    </div>
  );
}
