// src/components/SimplePopUp.jsx
import React, { useEffect, useState } from "react";

const typeClasses = {
    success: "alert alert-success",
    error: "alert alert-danger",
    warning: "alert alert-warning",
    info: "alert alert-info",
};

const PopUp = ({ type = "info", message, duration = 3000, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!visible) return null;

    return (
        <div
            className={`position-fixed top-0 end-0 m-3 shadow ${typeClasses[type]}`}
            style={{ zIndex: 1050, minWidth: "250px" }}
            role="alert"
        >
            <div className="d-flex justify-content-between align-items-center">
                <span>{message}</span>
                <button type="button" className="btn-close" onClick={() => {
                    setVisible(false);
                    onClose();
                }}></button>
            </div>
        </div>
    );
};

export default PopUp;
