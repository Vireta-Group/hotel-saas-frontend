import React from "react";

function RoomTypeCard({ room, onEdit }) {
    return (
        <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
                {room.imageUrl && (
                    <img
                        src={room.imageUrl}
                        className="card-img-top"
                        alt={room.name}
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                )}
                <div className="card-body">
                    <h5 className="card-title">{room.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{room.remarks}</h6>
                    <p className="card-text">{room.description}</p>
                    <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item">💰 Price: ${room.pricePerNight} / night</li>
                        <li className="list-group-item">🛏️ Beds: {room.beds}</li>
                        <li className="list-group-item">👥 Capacity: {room.capacity} person(s)</li>
                        <li className="list-group-item">
                            ❄️ AC: {room.hasAC ? "Available" : "Not Available"}
                        </li>
                        <li className="list-group-item">
                            📶 WiFi: {room.hasWifi ? "Available" : "Not Available"}
                        </li>
                    </ul>
                    <button className="btn btn-primary w-100" onClick={onEdit}>
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RoomTypeCard;
