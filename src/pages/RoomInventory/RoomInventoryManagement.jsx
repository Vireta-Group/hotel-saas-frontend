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
  const [inventoryItems, setInventoryItems] = useState([
    { id: 1, name: "", quantity: 1, condition: "Good" },
  ]);

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

  const propertySelect = properties.find((p) => p.id === selectedProperty);
  const availableRooms = propertySelect?.rooms || [];
  const roomFind = availableRooms.find((r) => r.id === selectedRoom);

  const conditionOptions = ["Excellent", "Good", "Fair", "Poor", "Broken"];

  // Function to add a new inventory item
  const handleAddInventory = () => {
    setInventoryItems([
      ...inventoryItems,
      {
        id: Date.now(),
        name: "",
        quantity: 1,
        condition: "Good",
      },
    ]);
  };

  // Function to remove an inventory item
  const handleRemoveItem = (id) => {
    setInventoryItems(inventoryItems.filter((item) => item.id !== id));
  };

  // Handle input changes for inventory items
  const handleInputChange = (id, field, value) => {
    setInventoryItems(
      inventoryItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

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
              }}
            >
              <Dropdown.Toggle
                variant="outline-secondary"
                className="w-100 d-flex justify-content-between align-items-center no-hover"
              >
                <span className="text-truncate">
                  {selectedProperty
                    ? propertySelect?.name
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
                  {selectedRoom ? roomFind?.name : "Select Room"}
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
            <Button onClick={handleAddInventory} variant="primary" size="sm">
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
              {inventoryItems.map((inventory) => {
                return (
                  <tr key={inventory.id}>
                    <td>
                      <Form.Control
                        type="text"
                        value={inventory.name}
                        placeholder="Enter Asset"
                        onChange={(e) =>
                          handleInputChange(inventory.id, "name", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        min={1}
                        value={inventory.quantity}
                        onChange={(e) =>
                          handleInputChange(inventory.id, "quantity", Number(e.target.value))
                        }
                      />
                    </td>
                    <td>
                      <Form.Select
                        value={inventory.condition}
                        onChange={(e) =>
                          handleInputChange(inventory.id, "condition", e.target.value)
                        }
                      >
                        {conditionOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Form.Select>
                    </td>
                    <td className="text-center">
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleRemoveItem(inventory.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <div className="d-flex justify-content-end gap-2">
            <Button variant="outline-secondary">Cancel</Button>
            <Button variant="primary">Save Inventory</Button>
          </div>
        </>
      )}
    </div>
  );
}
