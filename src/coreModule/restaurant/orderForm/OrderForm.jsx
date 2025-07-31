import React from "react";
import { FaUtensils, FaBed, FaClipboardList } from "react-icons/fa";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const OrderForm = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Hero Section */}
            <div
                className="w-100 text-center py-5 text-white"
                style={{
                    background: "linear-gradient(to right, #f5b427, #fcd265)",
                }}
            >
                <div className="hero-icon mb-2">
                    <FaClipboardList size={40} />
                </div>
                <h1 className="fw-bold">Hotel Order Dashboard</h1>
                <p className="mb-0">
                    Effortlessly manage restaurant tables and guest room service orders from one place.
                </p>
            </div>

            {/* Buttons */}
            <Container className="mt-4">
                <Row className="mb-4">
                    <Col md={6}>
                        <Card className="text-center shadow-sm">
                            <Card.Body>
                                <FaUtensils size={32} className="mb-2 text-primary" />
                                <Card.Title>Table Service Order</Card.Title>
                                <Card.Text>
                                    Create and manage orders placed by dine-in guests.
                                </Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() => navigate("/table-order")}
                                >
                                    Table Order
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="text-center shadow-sm">
                            <Card.Body>
                                <FaBed size={32} className="mb-2 text-success" />
                                <Card.Title>Room Service Request</Card.Title>
                                <Card.Text>
                                    Manage in-room food and service requests for hotel guests.
                                </Card.Text>
                                <Button
                                    variant="success"
                                    onClick={() => navigate("/room-service")}
                                >
                                    Room Service Order
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default OrderForm;
