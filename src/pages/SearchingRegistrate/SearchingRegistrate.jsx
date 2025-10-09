import { useState } from 'react';
import CustomDatePicker from '../../ui/datePicker/CustomDatePicker';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const countryCodes = [
  { code: '+880', name: 'Bangladesh 🇧🇩' },
  { code: '+91', name: 'India 🇮🇳' },
  { code: '+1', name: 'USA 🇺🇸' },
  { code: '+44', name: 'UK 🇬🇧' },
  { code: '+61', name: 'Australia 🇦🇺' },
  { code: '+81', name: 'Japan 🇯🇵' },
  { code: '+974', name: 'Qatar 🇶🇦' },
  { code: '+966', name: 'Saudi Arabia 🇸🇦' },
  { code: '+971', name: 'UAE 🇦🇪' },
  { code: '+86', name: 'China 🇨🇳' },
];

function SearchingRegistrate() {
  const [selectedCode, setSelectedCode] = useState('+880');
  const [dob, setDob] = useState(null);


  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', padding: '20px' }}
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5} className="border rounded-3 p-4 shadow bg-white">
          <h4 className="text-center mb-3">
            Searching for Registrate <br /> user
          </h4>
          <Form>
            <Form.Group controlId="nid" className="mb-3">
              <Form.Label>NID Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Your NID Number" />
            </Form.Group>

            <Form.Group controlId="dob" className="mb-3">
              <CustomDatePicker
                label="Date Of Birth"
                selectedDate={dob}
                onChange={(date) => setDob(date)}
                placeholder="Select your date of birth"
              />
            </Form.Group>


            <Form.Group controlId="mobile" className="mb-4">
              <Form.Label>Mobile Number</Form.Label>
              <div className="d-flex">
                <Form.Select
                  value={selectedCode}
                  onChange={(e) => setSelectedCode(e.target.value)}
                  style={{ maxWidth: '120px', marginRight: '10px' }}
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code} {country.name}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control type="text" placeholder="Enter Number" />
              </div>
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
