import React, { useState } from "react";
import { useNavigate } from "react-router";

const amenitiesList = [
  "TV",
  "Air Conditioning",
  "Heating",
  "Wifi",
  "Phone",
  "Minibar",
  "Refrigerator",
  "Coffee Maker",
  "Safe",
  "Desk",
  "Bathtub",
  "Shower",
  "Hairdryer",
  "Toiletries",
  "Balcony",
  "Microwave",
  "Kitchenette",
  "Iron",
];

const defaultRoom = {
  roomNo: "",
  floor: "",
  pricePerDay: "",
  beds: "",
  capacity: "",
  bedType: "",
  roomType: "",
  roomSize: "",
  unit: "sqm",
  taxRate: 10,
  cleaningFee: 0,
  status: "Available",
  description: "",
  amenities: [],
};

function AddNewRoom() {
  const [newRoom, setNewRoom] = useState(defaultRoom);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRoom({ ...newRoom, [name]: value });
  };

  const handleAmenityChange = (amenity) => {
    const updated = newRoom.amenities.includes(amenity)
      ? newRoom.amenities.filter((a) => a !== amenity)
      : [...newRoom.amenities, amenity];
    setNewRoom({ ...newRoom, amenities: updated });
  };

  const handleAddRoom = () => {
    if (
      !newRoom.floor ||
      !newRoom.roomNo ||
      !newRoom.roomType ||
      !newRoom.pricePerDay ||
      !newRoom.status
    ) {
      return alert(
        "Floor no, Room no, Room type, Price and Status are required"
      );
    }

    const prevRooms = JSON.parse(localStorage.getItem("rooms")) || [];
    const updatedRooms = [...prevRooms, { ...newRoom, id: Date.now() }];
    localStorage.setItem("rooms", JSON.stringify(updatedRooms));

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      navigate("/all-rooms");
    }, 2000);
  };

  return (
    <div className="container my-4 px-3 px-md-5 position-relative">
      {/* Success Alert */}
      {showSuccess && (
        <div
          className="alert alert-success position-fixed top-0 end-0 m-3"
          style={{ zIndex: 1050, minWidth: "250px" }}
          role="alert"
        >
          Room added successfully!
        </div>
      )}

      <h3 className="text-center mb-4">Add New Room</h3>

      <div className="border p-3 bg-light rounded">
        <div className="row">
          {/* Floor */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Floor *</label>
            <input
              className="form-control"
              type="number"
              name="floor"
              value={newRoom.floor}
              onChange={handleChange}
            />
          </div>

          {/* Room No */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Room No *</label>
            <input
              className="form-control"
              type="number"
              name="roomNo"
              value={newRoom.roomNo}
              onChange={handleChange}
            />
          </div>

          {/* Room Type */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Room Type *</label>
            <select
              className="form-select"
              name="roomType"
              value={newRoom.roomType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Standard</option>
              <option>Deluxe</option>
              <option>Suite</option>
            </select>
          </div>

          {/* Price */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Price Per Day *</label>
            <input
              className="form-control"
              type="number"
              name="pricePerDay"
              value={newRoom.pricePerDay}
              onChange={handleChange}
            />
          </div>

          {/* Room Size */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Room Size</label>
            <div className="input-group">
              <input
                className="form-control"
                type="number"
                name="roomSize"
                value={newRoom.roomSize}
                onChange={handleChange}
              />
              <select
                className="form-select"
                name="unit"
                value={newRoom.unit}
                onChange={handleChange}
              >
                <option value="sqm">sqm</option>
                <option value="sqft">sqft</option>
              </select>
            </div>
          </div>

          {/* Status */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Status *</label>
            <select
              className="form-select"
              name="status"
              value={newRoom.status}
              onChange={handleChange}
            >
              <option>Available</option>
              <option>Occupied</option>
              <option>Maintanance</option>
              <option>Unavailable</option>
            </select>
          </div>

          {/* Capacity */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Capacity</label>
            <input
              className="form-control"
              type="number"
              name="capacity"
              value={newRoom.capacity}
              onChange={handleChange}
            />
          </div>

          {/* Beds */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Beds</label>
            <input
              className="form-control"
              type="number"
              name="beds"
              value={newRoom.beds}
              onChange={handleChange}
            />
          </div>

          {/* Bed Type */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Bed Type</label>
            <select
              className="form-select"
              name="bedType"
              value={newRoom.bedType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Single</option>
              <option>Double</option>
              <option>Queen</option>
              <option>King</option>
            </select>
          </div>

          {/* Tax Rate */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Tax Rate (%)</label>
            <input
              className="form-control"
              type="number"
              name="taxRate"
              value={newRoom.taxRate}
              onChange={handleChange}
            />
          </div>

          {/* Cleaning Fee */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Cleaning Fee</label>
            <input
              className="form-control"
              type="number"
              name="cleaningFee"
              value={newRoom.cleaningFee}
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div className="col-12 mb-3">
            <label className="form-label fw-bold">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows={4}
              value={newRoom.description}
              onChange={handleChange}
            />
          </div>

          {/* Amenities */}
          <div className="col-12">
            <label className="form-label fw-bold">Amenities:</label>
            <div className="row">
              {amenitiesList.map((a, i) => (
                <div className="col-6 col-md-4 mb-2" key={i}>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={newRoom.amenities.includes(a)}
                      onChange={() => handleAmenityChange(a)}
                      id={`amenity-${i}`}
                    />
                    <label
                      htmlFor={`amenity-${i}`}
                      className="form-check-label"
                    >
                      {a}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="btn btn-primary mt-4 px-4" onClick={handleAddRoom}>
          Add Room
        </button>
      </div>
    </div>
  );
}

export default AddNewRoom;
