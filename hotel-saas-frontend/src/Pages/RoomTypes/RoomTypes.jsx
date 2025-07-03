import React, { useState } from "react";
import RoomTypeCard from "./RoomTypeCard";

const initialRoomTypes = [
    {
        id: 1,
        name: "Deluxe",
        remarks: "Sea view",
        description: "A spacious room with sea view.",
    },
    {
        id: 2,
        name: "Standard",
        remarks: "City view",
        description: "Comfortable room with city view.",
    },
];

function RoomTypes() {
    const [roomTypes, setRoomTypes] = useState(initialRoomTypes);
    const [newRoom, setNewRoom] = useState({
        name: "",
        remarks: "",
        description: "",
    });

    const handleChange = (e) => {
        setNewRoom({ ...newRoom, [e.target.name]: e.target.value });
    };

    const handleAdd = () => {
        if (!newRoom.name) return alert("Room Type name is required");
        const newEntry = {
            ...newRoom,
            id: Date.now(),
        };
        setRoomTypes([...roomTypes, newEntry]);
        setNewRoom({ name: "", remarks: "", description: "" });
    };

    const handleEdit = (id) => {
        // For simplicity, alerting. You can implement a modal or inline edit.
        alert("Edit feature to be implemented for id: " + id);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Room Types</h2>

            <div className="row">
                {roomTypes.map((room) => (
                    <RoomTypeCard
                        key={room.id}
                        room={room}
                        onEdit={() => handleEdit(room.id)}
                    />
                ))}
            </div>

            <hr />

            <h4>Add New Room</h4>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Room Type"
                    name="name"
                    value={newRoom.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Remarks"
                    name="remarks"
                    value={newRoom.remarks}
                    onChange={handleChange}
                />
                <textarea
                    className="form-control mb-2"
                    placeholder="Description"
                    name="description"
                    value={newRoom.description}
                    onChange={handleChange}
                    rows={5}
                ></textarea>
                <button className="btn btn-primary" onClick={handleAdd}>
                    Add Room
                </button>
            </div>
        </div>
    );
}

export default RoomTypes;
