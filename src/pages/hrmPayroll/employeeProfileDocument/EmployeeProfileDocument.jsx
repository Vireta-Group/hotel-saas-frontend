import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { employee } from "./employeeData"; // JSON file

const EmployeeProfileDocument = () => {
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Employee_Profile",
    });

    return (
        <div className="container my-4">
            {/* Printable Area */}
            <div
                ref={componentRef}
                style={{
                    width: "210mm",
                    minHeight: "297mm",
                    padding: "20mm",
                    background: "white",
                    fontFamily: "'Times New Roman', serif",
                    fontSize: "14pt",
                    color: "#000",
                    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
                }}
            >
                {/* Header */}
                <div className="d-flex justify-content-between align-items-start mb-4">
                    <h3 className="fw-bold text-decoration-underline">Employee Profile</h3>
                    {employee.photo && (
                        <img
                            src={employee.photo}
                            alt="Employee"
                            style={{
                                width: "35mm",
                                height: "45mm",
                                objectFit: "cover",
                            }}
                        />
                    )}
                </div>

                {/* Two-column Info Display */}
                <div className="row">
                    {Object.entries(employee).map(([key, value]) => {
                        if (key === "photo") return null;
                        const label = key
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (str) => str.toUpperCase());

                        return (
                            <div key={key} className="col-6 mb-2">
                                <strong>{label}: </strong>
                                <span>{value || "-"}</span>
                            </div>
                        );
                    })}
                </div>

                {/* Declaration */}
                <div className="mt-5" style={{ fontStyle: "italic" }}>
                    <p>
                        I solemnly affirm that all the information provided above is accurate and
                        complete to the best of my knowledge and belief. I understand that any false
                        statement or omission may result in disqualification or termination.
                    </p>
                </div>

                {/* Signature and Date */}
                <div className="d-flex justify-content-between mt-5 px-5">
                    <div>
                        <div style={{ borderBottom: "1px solid black", width: "250px" }} />
                        <span>Signature</span>
                    </div>
                    <div>
                        <div style={{ borderBottom: "1px solid black", width: "150px" }} />
                        <span>Date</span>
                    </div>
                </div>
            </div>

            {/* Print Button */}
            <div className="text-center mt-4">
                <button className="btn btn-primary" onClick={handlePrint}>
                    Print Profile
                </button>
            </div>
        </div>
    );
};

export default EmployeeProfileDocument;
