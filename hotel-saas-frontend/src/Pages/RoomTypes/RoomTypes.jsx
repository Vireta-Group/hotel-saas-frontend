import React, { useState } from "react";
import RoomTypeCard from "./RoomTypeCard";

const initialRoomTypes = [
    {
        id: 1,
        roomNo: 1,
        pricePerDay: 120,
        beds: 2,
        capacity: 4,
        remarks: "Sea view",
        description: "Spacious deluxe room with sea view.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvJRjydrlaVUX1j8iZEziEOEJzCwZoSemzg&s",
    },
    {
        id: 2,
        roomNo: 2,
        pricePerDay: 80,
        beds: 1,
        capacity: 2,
        remarks: "City view",
        description: "Comfortable standard room with city view.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvJRjydrlaVUX1j8iZEziEOEJzCwZoSemzg&s",
    }
];

function RoomTypes() {
    const [roomTypes, setRoomTypes] = useState(initialRoomTypes);
    const [newRoom, setNewRoom] = useState({
        roomNo: "",
        pricePerDay: "",
        beds: "",
        capacity: "",
        remarks: "",
        imageUrl: "",
        description: "",
    });

    const [editId, setEditId] = useState(null);
    const [editRoom, setEditRoom] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (editId !== null) {
            setEditRoom({ ...editRoom, [name]: value });
        } else {
            setNewRoom({ ...newRoom, [name]: value });
        }
    };

    const handleAdd = () => {
        if (!newRoom.roomNo || !newRoom.pricePerDay) {
            return alert("Room number and price are required");
        }

        const newEntry = {
            ...newRoom,
            id: Date.now(),
            roomNo: parseInt(newRoom.roomNo),
            pricePerDay: parseFloat(newRoom.pricePerDay),
            beds: parseInt(newRoom.beds),
            capacity: parseInt(newRoom.capacity),
        };

        setRoomTypes([...roomTypes, newEntry]);
        setNewRoom({
            roomNo: "",
            pricePerDay: "",
            beds: "",
            capacity: "",
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
        if (!editRoom.roomNo || !editRoom.pricePerDay) {
            return alert("Room number and price are required");
        }

        const updatedRoomTypes = roomTypes.map((room) =>
            room.id === editId
                ? {
                    ...editRoom,
                    roomNo: parseInt(editRoom.roomNo),
                    pricePerDay: parseFloat(editRoom.pricePerDay),
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
                    type="number"
                    className="form-control mb-2"
                    placeholder="Room Number"
                    name="roomNo"
                    value={newRoom.roomNo}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    className="form-control mb-2"
                    placeholder="Price Per Day"
                    name="pricePerDay"
                    value={newRoom.pricePerDay}
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
                    placeholder="Capacity"
                    name="capacity"
                    value={newRoom.capacity}
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
                    placeholder="Description"
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
                                    type="number"
                                    className="form-control mb-2"
                                    name="roomNo"
                                    value={editRoom.roomNo}
                                    onChange={handleChange}
                                    placeholder="Room Number"
                                />
                                <input
                                    type="number"
                                    className="form-control mb-2"
                                    name="pricePerDay"
                                    value={editRoom.pricePerDay}
                                    onChange={handleChange}
                                    placeholder="Price Per Day"
                                />
                                <input
                                    type="number"
                                    className="form-control mb-2"
                                    name="beds"
                                    value={editRoom.beds}
                                    onChange={handleChange}
                                    placeholder="Beds"
                                />
                                <input
                                    type="number"
                                    className="form-control mb-2"
                                    name="capacity"
                                    value={editRoom.capacity}
                                    onChange={handleChange}
                                    placeholder="Capacity"
                                />
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
                                    placeholder="Description"
                                ></textarea>

                                <button className="btn btn-success mb-2" onClick={saveEdit}>
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