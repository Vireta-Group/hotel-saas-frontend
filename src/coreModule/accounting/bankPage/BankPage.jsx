import "../../../style/bankPage/bankPage.css";

import React, { useState } from "react";
import {
  FaUniversity,
  FaUser,
  FaHashtag,
  FaMapMarker,
  FaMoneyBillAlt,
  FaStickyNote,
  FaPlus,
  FaRegCreditCard,
  FaMapMarkerAlt,
  FaRegStickyNote,
  FaDollarSign,
} from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const BankPage = () => {
  const [bankInfo, setBankInfo] = useState({
    bankName: "",
    accountName: "",
    accountNumber: "",
    branchName: "",
    openingBalance: "",
    note: "",
  });

  const [bankList, setBankList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !bankInfo.bankName ||
      !bankInfo.accountName ||
      !bankInfo.accountNumber ||
      !bankInfo.branchName ||
      !bankInfo.openingBalance
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    const newBank = {
      id: Date.now(),
      ...bankInfo,
      openingBalance: parseFloat(bankInfo.openingBalance).toLocaleString(),
    };

    setBankList([...bankList, newBank]);

    toast.success("Bank information added successfully!");

    setBankInfo({
      bankName: "",
      accountName: "",
      accountNumber: "",
      branchName: "",
      openingBalance: "",
      note: "",
    });
  };

  return (
    <>
      {/* hero section */}

      {/* main section */}
      <Container>
        <div className="hero-section">
          <div className="hero-icon">
            <i className="bi bi-bank2"></i>
          </div>
          <h1>Bank Information Management</h1>
          <p>
            Efficiently manage and organize your hotel's banking details and
            account information
          </p>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Card className="mb-4 shadow-sm">
          <Card.Header className="bg-light text-dark text-center py-5 rounded-top-4">
            <h5 className="mb-1 fw-bold d-flex justify-content-center align-items-center gap-2">
              <FaPlus className="text-primary" />
              Add New Bank Information
            </h5>
            <p className="text-muted mb-0">
              Fill in the details below to add a new bank account
            </p>
          </Card.Header>

          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <FaUniversity className="me-2" /> Bank Name *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="bankName"
                      value={bankInfo.bankName}
                      onChange={handleChange}
                      required
                      placeholder="Enter bank name"
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <FaUser className="me-2" /> Account Name *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="accountName"
                      value={bankInfo.accountName}
                      onChange={handleChange}
                      required
                      placeholder="Account holder name"
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <FaHashtag className="me-2" /> Account Number *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="accountNumber"
                      value={bankInfo.accountNumber}
                      onChange={handleChange}
                      required
                      placeholder="Enter account number"
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <FaMapMarker className="me-2" /> Branch Name *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="branchName"
                      value={bankInfo.branchName}
                      onChange={handleChange}
                      required
                      placeholder="Branch location"
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <FaMoneyBillAlt className="me-2" /> Opening Balance (৳) *
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="openingBalance"
                      value={bankInfo.openingBalance}
                      onChange={handleChange}
                      required
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <FaStickyNote className="me-2" /> Note (optional)
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="note"
                      value={bankInfo.note}
                      onChange={handleChange}
                      placeholder="Additional information"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" className="px-4 ">
                  Submit Bank Info
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>

        <div className="mt-5">
          {/* Registered Bank Accounts */}
          <div className="d-flex justify-content-center align-items-center w-100">
            <div className="d-flex align-items-center justify-content-center">
              {/* Responsive Icon Size */}
              <FaRegCreditCard className="me-2 fs-4 fs-md-1" />

              {/* Responsive Title Size */}
              <Card.Title className="display-8 fw-bold fs-5 fs-md-1">
                Registered Bank Accounts
              </Card.Title>

              {/* Button */}
              <Button variant="primary" className="btn-sm ms-2">
                {bankList.length} Accounts
              </Button>
            </div>
          </div>

          {/* Center the description text below */}
          <Card.Text className="text-center mt-3">
            View all your registered bank accounts below
          </Card.Text>

          {bankList.length === 0 ? (
            <div className="text-center text-muted p-4 border mt-3">
              <FaUniversity size={40} className="mb-2" />
              <p>No Bank Accounts Registered</p>
            </div>
          ) : (
            <div className="row mt-3">
              {bankList.map((bank, idx) => (
                <div className="col-md-6 mb-4" key={idx}>
                  <div className="card bank-card shadow-sm">
                    <div className="card-header bg-light d-flex align-items-center">
                      <FaUniversity className="me-2 text-primary" />
                      <h6 className="mb-0 text-primary fw-bold">
                        {bank.bankName}
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-2">
                        <FaUser className="me-2 text-secondary" />
                        <span className="fw-medium">{bank.accountName}</span>
                      </div>
                      <div className="p-2 rounded mb-2 bg-light-blue d-flex align-items-center">
                        <FaRegCreditCard className="me-2 text-primary" />
                        <div>
                          <small className="text-muted">Account Number</small>
                          <br />
                          <strong>{bank.accountNumber}</strong>
                        </div>
                      </div>
                      <div className="p-2 rounded mb-2 bg-light-green d-flex align-items-center">
                        <FaMapMarkerAlt className="me-2 text-success" />
                        <div>
                          <small className="text-muted">Branch Location</small>
                          <br />
                          <strong>{bank.branchName}</strong>
                        </div>
                      </div>
                      <div className="p-2 rounded mb-2 bg-light-green d-flex align-items-center">
                        <FaDollarSign className="me-2 text-success" />
                        <div>
                          <small className="text-muted">Opening Balance</small>
                          <br />
                          <strong>৳{bank.openingBalance}</strong>
                        </div>
                      </div>
                      {bank.note && (
                        <div className="p-2 rounded bg-light-yellow d-flex align-items-center">
                          <FaRegStickyNote className="me-2 text-warning" />
                          <div>
                            <small className="text-muted">
                              Additional Notes
                            </small>
                            <br />
                            <strong>{bank.note}</strong>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default BankPage;
