import React, { useState } from 'react';
import { Form, Button, Card, Alert, Row, Col, FloatingLabel, Spinner } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FaUser, FaPhone, FaIdCard, FaEnvelope, FaLock, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation schema
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    phone: Yup.string()
      .matches(/^(?:\+88|88)?(01[3-9]\d{8})$/, 'Enter a valid Bangladeshi mobile number')
      .required('Mobile number is required'),
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    nid: Yup.string()
      .matches(/^(?:\d{10}|\d{13}|\d{17})$/, 'Enter valid NID (10, 13 or 17 digits)')
      .nullable(),
    dob: Yup.date()
      .max(new Date(), 'Future dates not allowed')
      .required('Date of birth is required')
  });

  const handleSubmit = (values, { resetForm }) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Registration successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      resetForm();
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="bg-light" style={{ minHeight: '100vh', padding: '2rem 0' }}>
      <ToastContainer />
      <div className="container">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow border-0">
              <Card.Header className="bg-primary text-white py-3">
                <h2 className="mb-0 text-center" style={{ fontWeight: 700, fontSize: '1.75rem' }}>
                  Hotel Registration
                </h2>
              </Card.Header>
              
              <Card.Body className="p-4">
                <Formik
                  initialValues={{
                    fullName: '',
                    phone: '',
                    email: '',
                    password: '',
                    nid: '',
                    dob: '',
                    address: ''
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <Form onSubmit={handleSubmit} noValidate>
                      <Row className="g-3 mb-3">
                        {/* Full Name */}
                        <Col md={6}>
                          <FloatingLabel 
                            controlId="fullName" 
                            label={
                              <>
                                <FaUser className="me-2" />
                                Full name *
                              </>
                            }
                          >
                            <Form.Control
                              type="text"
                              name="fullName"
                              placeholder=""
                              value={values.fullName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.fullName && !!errors.fullName}
                              className="border-0 border-bottom rounded-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.fullName}
                            </Form.Control.Feedback>
                          </FloatingLabel>
                        </Col>

                        {/* Mobile Number */}
                        <Col md={6}>
                          <FloatingLabel 
                            controlId="phone" 
                            label={
                              <>
                                <FaPhone className="me-2" />
                                Mobile number *
                              </>
                            }
                          >
                            <Form.Control
                              type="tel"
                              name="phone"
                              placeholder=""
                              value={values.phone}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.phone && !!errors.phone}
                              className="border-0 border-bottom rounded-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.phone}
                            </Form.Control.Feedback>
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <Row className="g-3 mb-3">
                        {/* Email */}
                        <Col md={6}>
                          <FloatingLabel 
                            controlId="email" 
                            label={
                              <>
                                <FaEnvelope className="me-2" />
                                Email *
                              </>
                            }
                          >
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder=""
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.email && !!errors.email}
                              className="border-0 border-bottom rounded-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.email}
                            </Form.Control.Feedback>
                          </FloatingLabel>
                        </Col>

                        {/* Date of Birth */}
                        <Col md={6}>
                          <FloatingLabel 
                            controlId="dob" 
                            label={
                              <>
                                <FaCalendarAlt className="me-2" />
                                Date of birth *
                              </>
                            }
                          >
                            <Form.Control
                              type="date"
                              name="dob"
                              value={values.dob}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.dob && !!errors.dob}
                              max={new Date().toISOString().split('T')[0]}
                              className="border-0 border-bottom rounded-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.dob}
                            </Form.Control.Feedback>
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <Row className="g-3 mb-3">
                        {/* Password */}
                        <Col md={6}>
                          <FloatingLabel 
                            controlId="password" 
                            label={
                              <>
                                <FaLock className="me-2" />
                                Password *
                              </>
                            }
                          >
                            <Form.Control
                              type="password"
                              name="password"
                              placeholder=""
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.password && !!errors.password}
                              className="border-0 border-bottom rounded-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.password}
                            </Form.Control.Feedback>
                          </FloatingLabel>
                        </Col>

                        {/* NID */}
                        <Col md={6}>
                          <FloatingLabel 
                            controlId="nid" 
                            label={
                              <>
                                <FaIdCard className="me-2" />
                                National ID (NID)
                              </>
                            }
                          >
                            <Form.Control
                              type="text"
                              name="nid"
                              placeholder=""
                              value={values.nid}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.nid && !!errors.nid}
                              className="border-0 border-bottom rounded-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.nid}
                            </Form.Control.Feedback>
                          </FloatingLabel>
                        </Col>
                      </Row>

                      {/* Address */}
                      <FloatingLabel 
                        controlId="address" 
                        label={
                          <>
                            <FaMapMarkerAlt className="me-2" />
                            Address
                          </>
                        }
                        className="mb-4"
                      >
                        <Form.Control
                          as="textarea"
                          name="address"
                          placeholder=""
                          style={{ height: '100px' }}
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="border-0 border-bottom rounded-0"
                        />
                      </FloatingLabel>

                      {/* Terms */}
                      <Form.Group className="mb-4">
                        <Form.Check
                          type="checkbox"
                          id="terms"
                          label={
                            <span>
                              I agree to the <a href="#terms" className="text-primary">Terms of Service</a> and <a href="#privacy" className="text-primary">Privacy Policy</a>
                            </span>
                          }
                          required
                        />
                      </Form.Group>

                      {/* Submit Button */}
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-100 py-2 fw-bold"
                        style={{ 
                          fontSize: '1rem',
                          transition: 'all 0.3s',
                          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                        onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                      >
                        {isSubmitting ? (
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                              className="me-2"
                            />
                            Processing...
                          </>
                        ) : (
                          'Register Now'
                        )}
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RegisterForm;