import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="d-flex flex-column min-vh-100 justify-content-center">
      <Row className="text-center">
        <Col md={{ span: 6, offset: 3 }} className="p-4">
          <div className="error-template">
            <h1 className="display-1 text-danger">404</h1>
            <h2 className="display-4">Page Not Found</h2>
            <div className="error-details mb-4">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </div>
            <div className=" d-flex flex-column gap-3 justify-content-center">
              <Button 
                variant="primary" 
                size="lg" 
                className="me-3"
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
              <Button 
                variant="outline-primary" 
                size="lg"
                onClick={() => navigate('/')}
              >
                Go to Homepage
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;