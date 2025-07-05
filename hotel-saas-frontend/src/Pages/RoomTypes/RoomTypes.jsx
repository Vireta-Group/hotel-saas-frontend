import React, { useState } from "react";
import RoomTypeCard from "./RoomTypeCard";

const initialRoomTypes = [
    {
        id: 1,
        name: "Deluxe",
        pricePerNight: 120,
        beds: 2,
        capacity: 4,
        hasAC: true,
        hasWifi: true,
        remarks: "Sea view",
        description: "Spacious deluxe room with sea view.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvJRjydrlaVUX1j8iZEziEOEJzCwZoSemzg&s",
    },
    {
        id: 2,
        name: "Standard",
        pricePerNight: 80,
        beds: 1,
        capacity: 2,
        hasAC: false,
        hasWifi: true,
        remarks: "City view",
        description: "Comfortable standard room with city view.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvJRjydrlaVUX1j8iZEziEOEJzCwZoSemzg&s",
    }
];

function RoomTypes() {
    const [roomTypes, setRoomTypes] = useState(initialRoomTypes);
    const [newRoom, setNewRoom] = useState({
        name: "",
        pricePerNight: "",
        beds: "",
        capacity: "",
        hasAC: false,
        hasWifi: false,
        remarks: "",
        imageUrl: "",
        description: "",
    });

    const [editId, setEditId] = useState(null);
    const [editRoom, setEditRoom] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        if (editId !== null) {
            setEditRoom({ ...editRoom, [name]: val });
        } else {
            setNewRoom({ ...newRoom, [name]: val });
        }
    };

    const handleAdd = () => {
        if (!newRoom.name || !newRoom.pricePerNight) {
            return alert("Room name and price are required");
        }

        const newEntry = {
            ...newRoom,
            id: Date.now(),
            pricePerNight: parseFloat(newRoom.pricePerNight),
            beds: parseInt(newRoom.beds),
            capacity: parseInt(newRoom.capacity),
        };

        setRoomTypes([...roomTypes, newEntry]);
        setNewRoom({
            name: "",
            pricePerNight: "",
            beds: "",
            capacity: "",
            hasAC: false,
            hasWifi: false,
            remarks: "",
            imageUrl: "",
            description: "",
        });
    };

    const startEdit = (id) => {
        const roomToEdit = roomTypes.find((room) => room.id === id);
        setEditId(id);
        setEditRoom({ ...roomToEdit });
    };

    const cancelEdit = () => {
        setEditId(null);
        setEditRoom(null);
    };

    const saveEdit = () => {
        if (!editRoom.name || !editRoom.pricePerNight) {
            return alert("Room name and price are required");
        }

        const updatedRoomTypes = roomTypes.map((room) =>
            room.id === editId
                ? {
                    ...editRoom,
                    pricePerNight: parseFloat(editRoom.pricePerNight),
                    beds: parseInt(editRoom.beds),
                    capacity: parseInt(editRoom.capacity),
                }
                : room
        );
        setRoomTypes(updatedRoomTypes);
        setEditId(null);
        setEditRoom(null);
    };

    return (
        <div className="container mt-4" style={{ backgroundColor: "#f8f9fa", color: "#212529" }}>
            <h4 className="text-center">Add New Room</h4>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Room Name"
                    name="name"
                    value={newRoom.name}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    className="form-control mb-2"
                    placeholder="Price Per Night"
                    name="pricePerNight"
                    value={newRoom.pricePerNight}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    className="form-control mb-2"
                    placeholder="Number of Beds"
                    name="beds"
                    value={newRoom.beds}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    className="form-control mb-2"
                    placeholder="Capacity (number of people)"
                    name="capacity"
                    value={newRoom.capacity}
                    onChange={handleChange}
                />

                <div className="form-check mb-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="hasAC"
                        checked={newRoom.hasAC}
                        onChange={handleChange}
                        id="acCheck"
                    />
                    <label className="form-check-label" htmlFor="acCheck">
                        Air Conditioning (AC)
                    </label>
                </div>

                <div className="form-check mb-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="hasWifi"
                        checked={newRoom.hasWifi}
                        onChange={handleChange}
                        id="wifiCheck"
                    />
                    <label className="form-check-label" htmlFor="wifiCheck">
                        WiFi Available
                    </label>
                </div>

                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Remarks"
                    name="remarks"
                    value={newRoom.remarks}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Image URL"
                    name="imageUrl"
                    value={newRoom.imageUrl}
                    onChange={handleChange}
                />

                <textarea
                    className="form-control mb-2"
                    placeholder="Short Description"
                    name="description"
                    value={newRoom.description}
                    onChange={handleChange}
                    rows={3}
                ></textarea>

                <button className="btn btn-primary" onClick={handleAdd}>
                    Add Room
                </button>
            </div>

            <hr />

            <h4 className="text-center mb-4">Room Types</h4>

            <div className="row">
                {roomTypes.map((room) =>
                    editId === room.id ? (
                        <div key={room.id} className="col-md-6 mb-3">
                            <div className="card p-3 shadow-sm">
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    name="name"
                                    value={editRoom.name}
                                    onChange={handleChange}
                                    placeholder="Room Name"
                                />
                                <input
                                    type="number"
                                    className="form-control mb-2"
                                    name="pricePerNight"
                                    value={editRoom.pricePerNight}
                                    onChange={handleChange}
                                    placeholder="Price Per Night"
                                />
                                <input
                                    type="number"
                                    className="form-control mb-2"
                                    name="beds"
                                    value={editRoom.beds}
                                    onChange={handleChange}
                                    placeholder="Number of Beds"
                                />
                                <input
                                    type="number"
                                    className="form-control mb-2"
                                    name="capacity"
                                    value={editRoom.capacity}
                                    onChange={handleChange}
                                    placeholder="Capacity"
                                />

                                <div className="form-check mb-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="hasAC"
                                        checked={editRoom.hasAC}
                                        onChange={handleChange}
                                        id={`editAcCheck-${room.id}`}
                                    />
                                    <label className="form-check-label" htmlFor={`editAcCheck-${room.id}`}>
                                        Air Conditioning (AC)
                                    </label>
                                </div>

                                <div className="form-check mb-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="hasWifi"
                                        checked={editRoom.hasWifi}
                                        onChange={handleChange}
                                        id={`editWifiCheck-${room.id}`}
                                    />
                                    <label className="form-check-label" htmlFor={`editWifiCheck-${room.id}`}>
                                        WiFi Available
                                    </label>
                                </div>

                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    name="remarks"
                                    value={editRoom.remarks}
                                    onChange={handleChange}
                                    placeholder="Remarks"
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    name="imageUrl"
                                    value={editRoom.imageUrl}
                                    onChange={handleChange}
                                    placeholder="Image URL"
                                />

                                <textarea
                                    className="form-control mb-2"
                                    name="description"
                                    value={editRoom.description}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Short Description"
                                ></textarea>

                                <button className="btn btn-success me-2" onClick={saveEdit}>
                                    Save
                                </button>
                                <button className="btn btn-secondary" onClick={cancelEdit}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <RoomTypeCard key={room.id} room={room} onEdit={() => startEdit(room.id)} />
                    )
                )}
            </div>
        </div>
    );
}

export default RoomTypes;
