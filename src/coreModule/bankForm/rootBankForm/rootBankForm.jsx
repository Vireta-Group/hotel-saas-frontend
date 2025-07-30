import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaArrowUp, FaArrowDown, FaBuilding, FaWallet } from "react-icons/fa";
import "./rootBankForm.css";
import { useNavigate } from "react-router-dom";

const BankRootPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-center text-white py-5">
        <FaWallet size={50} className="mb-3" />
        <h2 className="fw-bold">Bank Transaction System</h2>
        <p>Manage your bank deposits and withdrawals efficiently</p>
      </div>

      {/* Cards Section */}
      <Container className="my-5">
        <Row className="g-4 justify-content-center">
          {/* Deposit */}
          <Col xs={12} md={6} lg={4}>
            <Card className="text-center shadow h-100">
              <Card.Body>
                <div className="icon-circle bg-light-green mb-3">
                  <FaArrowUp size={30} className="text-success" />
                </div>
                <Card.Title className="fw-bold">Deposit Money</Card.Title>
                <Card.Text>
                  Add money to your bank account with deposit slip details
                </Card.Text>
                <Button variant="success" onClick={() => navigate("/deposit")}>
                  <FaArrowUp className="me-2" />
                  Go to Deposit
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Withdraw */}
          <Col xs={12} md={6} lg={4}>
            <Card className="text-center shadow h-100">
              <Card.Body>
                <div className="icon-circle bg-light-red mb-3">
                  <FaArrowDown size={30} className="text-danger" />
                </div>
                <Card.Title className="fw-bold">Withdraw Money</Card.Title>
                <Card.Text>
                  Withdraw money from your bank account using check details
                </Card.Text>
                <Button variant="danger" onClick={() => navigate("/withdraw")}>
                  <FaArrowDown className="me-2" />
                  Go to Withdraw
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Overview */}
      <div className="text-center mb-5">
        <h4 className="fw-bold">Quick Overview</h4>
        <p className="text-muted">
          Your one-stop solution for managing bank transactions and account
          information
        </p>
      </div>
    </div>
  );
};

export default BankRootPage;
