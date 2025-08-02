import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { FaUtensils, FaMoneyCheckAlt, FaStickyNote, FaTable, FaListUl } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';

const TableOrder = () => {
    const [isPaid, setIsPaid] = useState("");
    const [items, setItems] = useState([
        { name: "", variant: "", quantity: 1, discount: 0, price: 0 },
    ]);

    const handleItemChange = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setItems(newItems);
    };

    const addItem = () => {
        setItems([...items, { name: "", variant: "", quantity: 1, discount: 0, price: 0 }]);
    };

    const totalPrice = items.reduce(
        (acc, item) => acc + (item.quantity * (item.price - item.discount)),
        0
    );

    const handleCheckout = () => {
        toast.success("✅ Order Checked Out Successfully!", { autoClose: 2000 });
        setTimeout(() => {
            window.location.reload();
        }, 2200);
    };

    return (
        <>
            <ToastContainer />
            {/* Hero Section */}
            <div className="w-100 text-center py-5 mb-4 text-white" style={{ background: "linear-gradient(to right, #ff7e5f, #feb47b)" }}>
                <FaUtensils size={40} className="me-3" />
                <h1 className="fw-bold">Table Order Service</h1>
                <p className="mb-0">Place and manage dine-in customer orders easily</p>
            </div>

            <Container className="my-5">
                <Card className="p-4 shadow-sm">
                    <h4 className="mb-4"><FaTable className="me-1" /> Order Information</h4>

                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Table Number</Form.Label>
                                <Form.Select>
                                    <option>Select Table</option>
                                    <option>Table 1</option>
                                    <option>Table 2</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label> Order Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter Order Number" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <hr />

                    <h5 className="mb-3"><FaListUl className="me-1" />Order Items</h5>
                    {items.map((item, index) => (
                        <Card className="mb-3 p-3" key={index}>
                            <Row className="align-items-center">
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label>Item Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Item Name"
                                            value={item.name}
                                            onChange={(e) => handleItemChange(index, "name", e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label>Variant</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Variant"
                                            value={item.variant}
                                            onChange={(e) => handleItemChange(index, "variant", e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group>
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => handleItemChange(index, "quantity", parseInt(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group>
                                        <Form.Label>Discount</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={item.discount}
                                            onChange={(e) => handleItemChange(index, "discount", parseFloat(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group>
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={item.price}
                                            onChange={(e) => handleItemChange(index, "price", parseFloat(e.target.value))}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card>
                    ))}

                    <Button variant="outline-secondary" onClick={addItem} className="mb-4">
                        + Add Item
                    </Button>

                    {/* Comments Section - Full Width */}
                    <Row className="mb-4">
                        <Col>
                            <Form.Group>
                                <Form.Label><FaStickyNote className="me-1" /> Comments</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Write any special instruction..." />
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Payment section */}
                    <h4 className="mb-4"><FaMoneyCheckAlt className="me-1" /> Payment Information</h4>
                    <Row className="mb-4">
                        <Col>
                            <div className="d-flex justify-content-between align-items-end flex-wrap">
                                <Form.Group>
                                    <Form.Label>Is Paid?</Form.Label>
                                    <div>
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Yes"
                                            name="isPaid"
                                            checked={isPaid === "yes"}
                                            onChange={() => setIsPaid("yes")}
                                        />
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="No"
                                            name="isPaid"
                                            checked={isPaid === "no"}
                                            onChange={() => setIsPaid("no")}
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group className="text-start">
                                    <Form.Label>Total Amount:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={`৳ ${totalPrice.toFixed(2)}`}
                                        disabled
                                    />
                                </Form.Group>
                            </div>
                        </Col>
                    </Row>

                    <div className="text-end">
                        <Button variant="success" onClick={handleCheckout}>
                            Checkout
                        </Button>
                    </div>
                </Card>
            </Container>
        </>
    );
};

export default TableOrder;
