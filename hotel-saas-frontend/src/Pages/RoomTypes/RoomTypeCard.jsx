import React from "react";

function RoomTypeCard({ room, onEdit }) {
    return (
        <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">{room.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{room.remarks}</h6>
                    <p className="card-text">{room.description}</p>
                    <button className="btn btn-primary" onClick={onEdit}>
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RoomTypeCard;
