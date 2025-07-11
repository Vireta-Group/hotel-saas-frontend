import React, { useState } from "react";

const amenitiesList = [
    "TV", "Air Conditioning", "Heating", "Wifi", "Phone", "Minibar",
    "Refrigerator", "Coffee Maker", "Safe", "Desk", "Bathtub", "Shower",
    "Hairdryer", "Toiletries", "Balcony", "Microwave", "Kitchenette", "Iron"
];

const defaultRoom = {
    property: "",
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
    amenities: []
};

function AddNewRoom() {
    const [roomTypes, setRoomTypes] = useState([]);
    const [newRoom, setNewRoom] = useState({ ...defaultRoom });
    const [editRoomId, setEditRoomId] = useState(null);
    const [editRoom, setEditRoom] = useState(null);

    const handleChange = (e, isEdit = false) => {
        const { name, value } = e.target;
        isEdit
            ? setEditRoom({ ...editRoom, [name]: value })
            : setNewRoom({ ...newRoom, [name]: value });
    };

    const handleAmenityChange = (amenity, isEdit = false) => {
        const target = isEdit ? editRoom : newRoom;
        const updated = target.amenities.includes(amenity)
            ? target.amenities.filter(a => a !== amenity)
            : [...target.amenities, amenity];
        isEdit
            ? setEditRoom({ ...editRoom, amenities: updated })
            : setNewRoom({ ...newRoom, amenities: updated });
    };

    const handleAddRoom = () => {
        if (!newRoom.roomNo || !newRoom.pricePerDay) return alert("Room No and Price required");
        setRoomTypes([...roomTypes, { ...newRoom, id: Date.now() }]);
        setNewRoom({ ...defaultRoom });
    };

    const handleEdit = (id) => {
        const found = roomTypes.find(r => r.id === id);
        setEditRoomId(id);
        setEditRoom({ ...found });
    };

    const handleSaveEdit = () => {
        setRoomTypes(roomTypes.map(r => r.id === editRoomId ? editRoom : r));
        setEditRoomId(null);
        setEditRoom(null);
    };

    const cancelEdit = () => {
        setEditRoomId(null);
        setEditRoom(null);
    };

    const renderForm = (room, isEdit = false) => (
        <div className="border p-3 mb-4 bg-light rounded">
            <div className="row">
                <div className="col-md-6 mb-2">
                    <label className="form-label">Property *</label>
                    <select className="form-select" name="property" value={room.property} onChange={(e) => handleChange(e, isEdit)}>
                        <option value="">Select Property</option>
                        <option value="Ocean View">Ocean View</option>
                        <option value="City Inn">City Inn</option>
                    </select>
                </div>

                <div className="col-md-6 mb-2">
                    <label className="form-label">Room No *</label>
                    <input className="form-control" type="number" name="roomNo" value={room.roomNo} onChange={(e) => handleChange(e, isEdit)} />
                </div>

                <div className="col-md-6 mb-2">
                    <label className="form-label">Floor</label>
                    <input className="form-control" type="number" name="floor" value={room.floor} onChange={(e) => handleChange(e, isEdit)} />
                </div>

                <div className="col-md-6 mb-2">
                    <label className="form-label">Price Per Day *</label>
                    <input className="form-control" type="number" name="pricePerDay" value={room.pricePerDay} onChange={(e) => handleChange(e, isEdit)} />
                </div>

                <div className="col-md-6 mb-2">
                    <label className="form-label">Beds</label>
                    <input className="form-control" type="number" name="beds" value={room.beds} onChange={(e) => handleChange(e, isEdit)} />
                </div>

                <div className="col-md-6 mb-2">
                    <label className="form-label">Capacity</label>
                    <input className="form-control" type="number" name="capacity" value={room.capacity} onChange={(e) => handleChange(e, isEdit)} />
                </div>

                <div className="col-md-6 mb-2">
                    <label className="form-label">Bed Type</label>
                    <select className="form-select" name="bedType" value={room.bedType} onChange={(e) => handleChange(e, isEdit)}>
                        <option value="">Select</option>
                        <option>Single</option>
                        <option>Double</option>
                        <option>Queen</option>
                        <option>King</option>
                    </select>
                </div>

                <div className="col-md-6 mb-2">
                    <label className="form-label">Room Type</label>
                    <select className="form-select" name="roomType" value={room.roomType} onChange={(e) => handleChange(e, isEdit)}>
                        <option value="">Select</option>
                        <option>Standard</option>
                        <option>Deluxe</option>
                        <option>Suite</option>
                    </select>
                </div>

                <div className="col-md-6 mb-2">
                    <label className="form-label">Room Size</label>
                    <div className="input-group">
                        <input className="form-control" type="number" name="roomSize" value={room.roomSize} onChange={(e) => handleChange(e, isEdit)} />
                        <select className="form-select" name="unit" value={room.unit} onChange={(e) => handleChange(e, isEdit)}>
                            <option value="sqm">sqm</option>
                            <option value="sqft">sqft</option>
                        </select>
                    </div>
                </div>

                <div className="col-md-6 mb-2">
                    <label className="form-label">Tax Rate (%)</label>
                    <input className="form-control" type="number" name="taxRate" value={room.taxRate} onChange={(e) => handleChange(e, isEdit)} />
                </div>

                <div className="col-md-6 mb-2">
                    <label className="form-label">Cleaning Fee</label>
                    <input className="form-control" type="number" name="cleaningFee" value={room.cleaningFee} onChange={(e) => handleChange(e, isEdit)} />
                </div>

                <div className="col-md-6 mb-2">
                    <label className="form-label">Status</label>
                    <select className="form-select" name="status" value={room.status} onChange={(e) => handleChange(e, isEdit)}>
                        <option>Available</option>
                        <option>Unavailable</option>
                    </select>
                </div>

                <div className="col-12 mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name="description" rows={2} value={room.description} onChange={(e) => handleChange(e, isEdit)} />
                </div>

                <div className="col-12">
                    <label className="form-label fw-bold">Amenities:</label>
                    <div className="row">
                        {amenitiesList.map((a, i) => (
                            <div className="col-md-4" key={i}>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={room.amenities.includes(a)}
                                        onChange={() => handleAmenityChange(a, isEdit)}
                                    />
                                    <label className="form-check-label">{a}</label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">Add New Room</h3>
            {renderForm(newRoom)}
            <button className="btn btn-primary mb-4" onClick={handleAddRoom}>
                Add Room
            </button>

            <hr />
            <h4 className="text-center mt-4 mb-3">All Rooms</h4>
            <div className="row">
                {roomTypes.length === 0 && <p className="text-center text-muted">No rooms added yet.</p>}

                {roomTypes.map((room) =>
                    editRoomId === room.id ? (
                        <div className="col-md-6 mb-4" key={room.id}>
                            {renderForm(editRoom, true)}
                            <div className="mb-4">
                                <button className="btn btn-success me-2" onClick={handleSaveEdit}>
                                    Save
                                </button>
                                <button className="btn btn-secondary" onClick={cancelEdit}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="col-md-6 mb-4" key={room.id}>
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Room {room.roomNo} - {room.roomType}
                                    </h5>
                                    <p className="card-text">
                                        <strong>Floor:</strong> {room.floor} <br />
                                        <strong>Price:</strong> ${room.pricePerDay} <br />
                                        <strong>Status:</strong> {room.status} <br />
                                        <strong>Amenities:</strong> {room.amenities.join(", ")}
                                    </p>
                                    <button className="btn btn-warning btn-sm" onClick={() => handleEdit(room.id)}>
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default AddNewRoom;
