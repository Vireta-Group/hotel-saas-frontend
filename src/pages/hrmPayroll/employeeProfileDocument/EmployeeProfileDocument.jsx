import React, { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";

const EmployeeProfileDocument = () => {
    const componentRef = useRef();
    const [photoFile, setPhotoFile] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setPhotoFile(file);
    };

    useEffect(() => {
        if (photoFile) {
            const objectUrl = URL.createObjectURL(photoFile);
            setPhotoPreview(objectUrl);
            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [photoFile]);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className="container py-4">
            <div ref={componentRef} className="bg-white p-4 shadow rounded">
                <h2 className="text-center mb-4">Employee Profile Form</h2>

                {/* Photo */}
                {photoPreview && (
                    <div className="text-center mb-3">
                        <img
                            src={photoPreview}
                            alt="Employee"
                            style={{ maxWidth: "150px", borderRadius: "8px" }}
                        />
                    </div>
                )}

                {/* Form */}
                <form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Employee ID</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Gender</label>
                        <select className="form-select">
                            <option value="">Select</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Date of Birth</label>
                        <input type="date" className="form-control" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Phone</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" />
                    </div>

                    <div className="col-md-12">
                        <label className="form-label">Photo</label>
                        <input
                            type="file"
                            className="form-control"
                            accept="image/*"
                            onChange={handlePhotoChange}
                        />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Designation</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Department</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Present Address</label>
                        <textarea className="form-control" rows="2"></textarea>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Permanent Address</label>
                        <textarea className="form-control" rows="2"></textarea>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Qualification</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Experience (Years)</label>
                        <input type="number" className="form-control" />
                    </div>
                </form>

                {/* Declaration & Signature */}
                <div className="mt-5">
                    <p>
                        I hereby declare that the details furnished above are true, complete, and correct to the best of my knowledge and belief. I undertake that any misrepresentation or omission may lead to appropriate consequences
                    </p>

                    <div className="d-flex justify-content-between mt-4">
                        <div>
                            <strong>Signature:</strong>
                            <div
                                style={{
                                    borderBottom: "1px solid #000",
                                    width: "250px",
                                    height: "40px",
                                }}
                            ></div>
                        </div>
                        <div>
                            <strong>Date:</strong>
                            <div
                                style={{
                                    borderBottom: "1px solid #000",
                                    width: "150px",
                                    height: "40px",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Print Button */}
            <div className="text-center mt-4">
                <button className="btn btn-primary px-5" onClick={handlePrint}>
                    Print
                </button>
            </div>
        </div>
    );
};

export default EmployeeProfileDocument;
