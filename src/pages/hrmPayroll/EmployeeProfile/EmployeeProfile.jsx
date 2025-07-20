import { Container } from "react-bootstrap";
import { useState } from "react";
import {
  Card,
  Form,
  Row,
  Col,
  Button,
  Accordion,
  Image,
} from "react-bootstrap";

const initialFormData = {
  name: "",
  fatherName: "",
  fullName: "",
  fathersName: "",
  mothersName: "",
  dateOfBirth: "",
  nationality: "",
  religion: "",
  maritalStatus: "",
  contactNumber: "",
  email: "",
  presentAddress: "",
  permanentAddress: "",
  bankName: "",
  branchName: "",
  accountNumber: "",
  routingNumber: "",
  profilePicture: null,
  profilePicturePreview: "",
};

function EmployeeProfile() {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          profilePicture: file,
          profilePicturePreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create FormData to handle file upload
    const submitData = new FormData();

    // Append all form data to FormData object
    Object.keys(formData).forEach((key) => {
      if (key !== "profilePicturePreview") {
        submitData.append(key, formData[key]);
      }
    });

    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend API
    // Example: axios.post('/api/employee', submitData, { headers: { 'Content-Type': 'multipart/form-data' } })
    alert("Profile submitted successfully!");
    setFormData(initialFormData);
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4">
        <i className="bi bi-person-circle me-2"></i>Employee Personal Profile
      </h2>

      <Card className="shadow-sm">
        <Card.Header className="bg-light">
          <h4 className="mb-0">
            <i className="bi bi-person-badge me-2"></i>
            Employee Profile
          </h4>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Profile Picture Section */}
            <Card className="mb-4">
              <Card.Header>
                <i className="bi bi-camera me-2"></i>
                Profile Picture
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={3} className="d-flex flex-column align-items-center">
                    {formData.profilePicturePreview ? (
                      <Image
                        src={formData.profilePicturePreview}
                        roundedCircle
                        fluid
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                        }}
                        className="mb-3"
                      />
                    ) : (
                      <div
                        style={{
                          width: "150px",
                          height: "150px",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "1rem",
                        }}
                      >
                        <i
                          className="bi bi-person"
                          style={{ fontSize: "4rem", color: "#6c757d" }}
                        ></i>
                      </div>
                    )}
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Upload Profile Picture</Form.Label>
                      <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <Form.Text muted>
                        Recommended size: 200x200 pixels (max 2MB)
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Rest of your form sections... */}
            {/* Additional Personal Details Section */}
            <Card className="mb-4">
              <Card.Header>
                <i className="bi bi-person-lines-fill me-2"></i>
                Additional Personal Details
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>
                        Name <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="full name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="fatherName">
                      <Form.Label>
                        Father's Name <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="father name"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Personal Information Section */}
            <Card className="mb-4">
              <Card.Header>
                <i className="bi bi-person-vcard me-2"></i>
                Personal Information
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Father's Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="fathersName"
                        value={formData.fathersName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Mother's Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="mothersName"
                        value={formData.mothersName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nationality</Form.Label>
                      <Form.Control
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Religion</Form.Label>
                      <Form.Control
                        type="text"
                        name="religion"
                        value={formData.religion}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Marital Status</Form.Label>
                      <Form.Select
                        name="maritalStatus"
                        value={formData.maritalStatus}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Present Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="presentAddress"
                    value={formData.presentAddress}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Permanent Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="permanentAddress"
                    value={formData.permanentAddress}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Card.Body>
            </Card>

            {/* Bank Details Section */}
            <Card className="mb-4">
              <Card.Header>
                <i className="bi bi-bank2 me-2"></i>
                Bank Details
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="bankName">
                      <Form.Label>
                        Bank Name <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="bank name"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="branchName">
                      <Form.Label>
                        Branch Name <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Branch Name"
                        name="branchName"
                        value={formData.branchName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="accountNumber">
                      <Form.Label>
                        Account Number <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Account Number"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="routingNumber">
                      <Form.Label>
                        Routing Number <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Routing Number"
                        name="routingNumber"
                        value={formData.routingNumber}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <div className="d-flex justify-content-end mt-4">
              <Button variant="primary" type="submit" size="lg">
                <i className="bi bi-save me-2"></i>
                Submit Profile
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default EmployeeProfile;
