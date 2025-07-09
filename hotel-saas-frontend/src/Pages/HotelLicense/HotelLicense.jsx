import React, { useState } from 'react';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';

const HotelLicenseForm = () => {
    const [formData, setFormData] = useState({
        licenseName: '',
        licenseNumber: '',
        issuedDate: '',
        expiryDate: '',
        issuingAuthority: '',
        isRenewed: false,
        document: null,
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        const val = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
        setFormData({ ...formData, [name]: val });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        // Submit to backend here
    };

    return (
        <Container className="my-5">
            <Card>
                <Card.Header as="h4">Hotel License Information</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>License Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="licenseName"
                                        value={formData.licenseName}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>License Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="licenseNumber"
                                        value={formData.licenseNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Issued Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="issuedDate"
                                        value={formData.issuedDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Expiry Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="expiryDate"
                                        value={formData.expiryDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Issuing Authority</Form.Label>
                            <Form.Control
                                type="text"
                                name="issuingAuthority"
                                value={formData.issuingAuthority}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="Renewed"
                                name="isRenewed"
                                checked={formData.isRenewed}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Upload License Document</Form.Label>
                            <Form.Control
                                type="file"
                                name="document"
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Save License Info
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default HotelLicenseForm;
