import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BsFacebook, BsLinkedin, BsTwitterX } from "react-icons/bs";

export default function SettingsAndConfigureForm() {
  const[hotelLogoPreview, setHotelLogoPreview] = useState(null);

  const handleLogoChange = (e)=>{
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onloadend = ()=>{
        setHotelLogoPreview(reader.result);
      }
      reader.readAsDataURL(file)
    }
    

  }
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Hotel Information</h2>
      <Form>
        <div className="card mb-4">
          <h3 className="card-header fw-bold">Settings Form</h3>
          {/* Row 1: Name, Number */}
          <Row className="card-body">
            <Col md={6}>
              <Form.Group controlId="hotelName">
                <Form.Label>Hotel Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter hotel name"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="hotelNumber">
                <Form.Label>Hotel Number</Form.Label>
                <Form.Control
                  type="Number"
                  placeholder="Enter hotel number"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          {/* Row: 2 address and short description */}
          <Row className="card-body">
            <Col md={6}>
              <Form.Group controlId="hotelAddress">
                <Form.Label>Hotel Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter hotel address"
                  required
                />
              </Form.Group>
            </Col>
             <Col md={6}>
              <Form.Group controlId="hotelDescription">
                <Form.Label>Hotel Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="short description"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          {/* Row:3 contact */}
          <Row className="card-body">
            <Col md={6}>
              <Form.Group controlId="hotelEmail">
                <Form.Label>Hotel Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter hotel email"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="hotelPhoneNumber">
                <Form.Label>Hotel Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter hotel Phone Number"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          {/* Website */}
          <Row className="card-body">
            <Col md={6}>
              <Form.Group controlId="hotelWebsite">
                <Form.Label>Website</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter website url"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          {/* Social Media */}
          <h4 className="card-header">Social Media Links</h4>
          <Row className="card-body">
            <Col md={4}>
              <Form.Group controlId="facebook">
                <Form.Label><BsFacebook size={26}/>  Facebook</Form.Label>
                <Form.Control type="text" placeholder="Facebook url" required />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="linkedin">
                <Form.Label><BsLinkedin size={26}/> LinkedIn</Form.Label>
                <Form.Control type="text" placeholder="LinkedIn url" required />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="twiter">
                <Form.Label><BsTwitterX size={26}/> Twitter</Form.Label>
                <Form.Control type="text" placeholder="Twitter url" required />
              </Form.Group>
            </Col>
          </Row>
          {/* Image Upload */}
          <h4 className="card-header">Hotel Logo</h4>
            {hotelLogoPreview && (
                  <div className="mt-3 card-body">
                    <h5>Logo Preview:</h5>
                    <img
                      src={hotelLogoPreview}
                      alt="Logo Preview"
                      width={120} height={120}
                      className="rounded-0"
                    />
                  </div>
                )}
          <Row className="card-body">
            <Col md={6}>
              <Form.Group controlId="hotelImage">
                <Form.Label>Hotel Logo</Form.Label>
                <Form.Control type="file" required
                onChange={handleLogoChange}
                />
              </Form.Group>
            </Col>
          </Row>
          
        </div>
        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
