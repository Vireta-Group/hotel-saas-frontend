import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Custom CSS to remove hover effects
const customStyles = `
  .dropdown-toggle.no-hover:hover {
    background-color: var(--bs-btn-bg) !important;
    border-color: var(--bs-btn-border-color) !important;
    color: var(--bs-btn-color) !important;
  }
`;

export default function RoomInventoryManagement() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const properties = [
    {
      id: 1,
      name: "Grand Hotel Main",
      rooms: [
        { id: 101, name: "101 - Deluxe King" },
        { id: 102, name: "102 - Deluxe Twin" },
      ],
    },
    {
      id: 2,
      name: "Beach Resort",
      rooms: [
        { id: 201, name: "201 - Ocean View" },
        { id: 202, name: "202 - Poolside" },
      ],
    },
  ];

  const inventoryData = [
    { id: 1, name: "Sofa", quantity: 2, condition: "Good" },
    { id: 2, name: "TV", quantity: 1, condition: "Excellent" },
    { id: 3, name: "Mini Fridge", quantity: 1, condition: "Good" },
  ];
   
  //This Find specific properties Room
    const propertySelect = properties.find((p) => p.id === selectedProperty);
    const availableRooms = propertySelect?.rooms || [];
    const roomFind = availableRooms.find((r) => r.id === selectedRoom)
    
  return (
    <div className="container mt-4">
      {/* Inject custom CSS to remove hover effects */}
      <style>{customStyles}</style>

      <h2 className="mb-4">Room Inventory Management</h2>

      <div className="row mb-4">
        <div className="col-md-6">
          <Form.Group>
            <Form.Label>Property</Form.Label>
            <Dropdown
              onSelect={(id) => {
                setSelectedProperty(Number(id));
                setSelectedRoom(null);
                // console.log(id);
                
              }}
            >
              <Dropdown.Toggle
                variant="outline-secondary"
                className="w-100 d-flex justify-content-between align-items-center no-hover"
              >
                <span className="text-truncate">
                  {selectedProperty
                    ?propertySelect ?.name
                    : "Select Property"}
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="w-100">
                {properties.map((property) => (
                  <Dropdown.Item
                    key={property.id}
                    eventKey={property.id}
                    active={selectedProperty === property.id}
                    className="no-hover-item"
                  >
                    {property.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </div>

        <div className="col-md-6">
          <Form.Group>
            <Form.Label>Room</Form.Label>
            <Dropdown
              onSelect={(id) => setSelectedRoom(Number(id))}
              disabled={!selectedProperty}
            >
              <Dropdown.Toggle
                variant="outline-secondary"
                className="w-100 d-flex justify-content-between align-items-center no-hover"
              >
                <span className="text-truncate">
                  {selectedRoom
                    ? roomFind ?.name
                    : "Select Room"}
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="w-100">
                {availableRooms.map((room) => (
                  <Dropdown.Item
                    key={room.id}
                    eventKey={room.id}
                    active={selectedRoom === room.id}
                    className="no-hover-item"
                  >
                    {room.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </div>
      </div>

      {selectedRoom && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Inventory Items</h4>
            <Button variant="primary" size="sm">
              <i className="bi bi-plus"></i> Add Item
            </Button>
          </div>

          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>Item</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Condition</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td className="text-center">{item.quantity}</td>
                  <td className="text-center">
                    <span
                      className={`badge rounded-pill ${
                        item.condition === "Excellent"
                          ? "bg-success"
                          : item.condition === "Good"
                          ? "bg-primary"
                          : "bg-warning"
                      }`}
                    >
                      {item.condition}
                    </span>
                  </td>
                  <td className="text-center">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                    >
                      <i className="bi bi-pencil"></i> Edit
                    </Button>
                    <Button variant="outline-danger" size="sm">
                      <i className="bi bi-trash"></i> Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Form.Group className="mb-3">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter any special notes about this room's inventory..."
            />
          </Form.Group>

          <div className="d-flex justify-content-end gap-2">
            <Button variant="outline-secondary">Cancel</Button>
            <Button variant="primary">Save Inventory</Button>
          </div>
        </>
      )}
    </div>
  );
}
