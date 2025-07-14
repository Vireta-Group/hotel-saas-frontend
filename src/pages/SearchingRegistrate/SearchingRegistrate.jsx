import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function SearchingRegistrate () {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', padding: '20px' }}
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5} className="border rounded-3 p-4 shadow bg-white">
          <h4 className="text-center mb-3">Searching for   Registrate<br></br> user</h4>
          <Form>
            <Form.Group controlId="nid" className="mb-3">
              <Form.Label>NID Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Your NID Number" />
            </Form.Group>

            <Form.Group controlId="dob" className="mb-3">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group controlId="mobile" className="mb-4">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Mobile Number" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchingRegistrate;
