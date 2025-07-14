import React, { useEffect, useState } from "react";
import {
    FaCheckCircle,
    FaUserLock,
    FaTools,
    FaEdit,
    FaTimesCircle,
    FaThList
} from "react-icons/fa";

const statusBadgeClass = {
    Available: "badge bg-success",
    Occupied: "badge bg-danger",
    Maintenance: "badge bg-warning text-dark",
    Unavailable: "badge bg-secondary"
};

function AllRooms() {
    const [rooms, setRooms] = useState([]);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("rooms")) || [];
        const sorted = stored.sort((a, b) => {
            const floorA = Number(a.floor || 0);
            const floorB = Number(b.floor || 0);
            if (floorA !== floorB) return floorA - floorB;
            return Number(a.roomNo) - Number(b.roomNo);
        });
        setRooms(sorted);
    }, []);

    const filteredRooms = rooms.filter(room => {
        if (filter === "All") return true;
        return room.status === filter;
    });

    const getCount = (status) => rooms.filter(r => r.status === status).length;

    return (
        <div className="container-fluid px-3 px-md-5 mt-4">
            <h3 className="text-center mb-4">All Rooms</h3>

            {/* Filter Buttons */}
            <div className="d-flex flex-wrap justify-content-left gap-2 mb-4">
                <button
                    className={`btn btn-outline-primary ${filter === "All" ? "active" : ""}`}
                    onClick={() => setFilter("All")}
                >
                    <FaThList className="me-1" />
                    All Rooms ({rooms.length})
                </button>

                <button
                    className={`btn btn-outline-success ${filter === "Available" ? "active" : ""}`}
                    onClick={() => setFilter("Available")}
                >
                    <FaCheckCircle className="me-1" />
                    Available ({getCount("Available")})
                </button>

                <button
                    className={`btn btn-outline-danger ${filter === "Occupied" ? "active" : ""}`}
                    onClick={() => setFilter("Occupied")}
                >
                    <FaUserLock className="me-1" />
                    Occupied ({getCount("Occupied")})
                </button>

                <button
                    className={`btn btn-outline-warning ${filter === "Maintenance" ? "active" : ""}`}
                    onClick={() => setFilter("Maintenance")}
                >
                    <FaTools className="me-1" />
                    Maintenance ({getCount("Maintenance")})
                </button>

                <button
                    className={`btn btn-outline-secondary ${filter === "Unavailable" ? "active" : ""}`}
                    onClick={() => setFilter("Unavailable")}
                >
                    <FaTimesCircle className="me-1" />
                    Unavailable ({getCount("Unavailable")})
                </button>
            </div>

            {/* Responsive Table */}
            <div className="table-responsive">
                {filteredRooms.length === 0 ? (
                    <p className="text-center text-muted">No rooms available.</p>
                ) : (
                    <table className="table table-bordered table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Floor</th>
                                <th>Room No</th>
                                <th>Room Type</th>
                                <th>Price</th>
                                <th>Capacity</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRooms.map((room) => (
                                <tr key={room.id}>
                                    <td>{room.floor || "-"}</td>
                                    <td>{room.roomNo}</td>
                                    <td>{room.roomType || "-"}</td>
                                    <td>${room.pricePerDay}</td>
                                    <td>{room.capacity || "-"} person(s)</td>
                                    <td>
                                        <span className={statusBadgeClass[room.status] || "badge bg-secondary"}>
                                            {room.status === "Available" && <FaCheckCircle className="me-1" />}
                                            {room.status === "Occupied" && <FaUserLock className="me-1" />}
                                            {room.status === "Maintenance" && <FaTools className="me-1" />}
                                            {room.status === "Unavailable" && <FaTimesCircle className="me-1" />}
                                            {room.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">
                                            <FaEdit className="me-1" /> Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default AllRooms;
