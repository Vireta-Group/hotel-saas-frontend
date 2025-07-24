import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCloudUploadAlt } from 'react-icons/fa';

const HotelLicenseInfo = () => {
  const [licenseData] = useState([
    {
      hotelName: "VELZON",
      ownerName: "Mohammad Alam",
      address: "Cox's Bazar, Bangladesh",
      phone: "+880123456789",
      email: "info@seapearl.com",
    }
  ]);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const [formInput, setFormInput] = useState({
    licenceType: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput(prev => ({ ...prev, [name]: value }));
  };

  const handleFiles = (files) => {
    const validFiles = Array.from(files).filter(file =>
      file.type === "application/pdf" || file.type.startsWith("image/")
    );
    if (validFiles.length !== files.length) alert("❌ Only image or PDF files allowed.");
    const updatedFiles = [...selectedFiles, ...validFiles];
    setSelectedFiles(updatedFiles);

    validFiles.forEach(file => {
      console.log("📦 File Info:", file.name, file.type, file.size + " bytes");
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      ...formInput,
      files: selectedFiles,
    };

    console.log("📨 Submitted Data:", formData);
    alert('Your form submited succesfully')
    //  if you want you can do sent this data in backend    
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4 text-primary fw-bold">Hotel License Information</h2>

      {licenseData.map((info, index) => (
        <div className="card shadow border-0 mb-4 rounded-4 p-4" key={index}>
          <div className="card-header bg-primary text-white rounded-top-4">
            <h5 className="mb-0">{info.hotelName}</h5>
          </div>
          <div className="card-body p-4">
            <div className="row mb-3">
              <div className="col-md-6"><strong>Owner:</strong> {info.ownerName}</div>
              <div className="col-md-6"><strong>Phone:</strong> {info.phone}</div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6"><strong>Email:</strong> {info.email}</div>
              <div className="col-md-6"><strong>Address:</strong> {info.address}</div>
            </div>

            <hr />

            {selectedFiles.length > 0 && (
              <div className="mb-4">
                <label className="form-label fw-bold">Selected File Preview:</label>
                <div className="d-flex flex-wrap gap-3">
                  {selectedFiles.map((file, idx) =>
                    file.type.startsWith("image/") ? (
                      <img
                        key={idx}
                        src={URL.createObjectURL(file)}
                        alt="preview"
                        className="rounded shadow-sm"
                        style={{ height: "60px", width: "60px", objectFit: "cover" }}
                      />
                    ) : (
                      <div key={idx} className="border p-2 rounded bg-light shadow-sm">
                        📄 {file.name}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column gap-3 mx-auto"
              style={{ width: "95%", maxWidth: "600px" }}
            >
              <div>
                <label htmlFor="LicencType" className="form-label fw-semibold">Licence Type*</label>
                <input
                  className="form-control"
                  type="text"
                  id="LicencType"
                  name="licenceType"
                  value={formInput.licenceType}
                  onChange={handleInputChange}
                  placeholder="Enter licence type"
                />
              </div>

              <div>
                <label htmlFor="description" className="form-label fw-semibold">Description (Optional)</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={formInput.description}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Write description..."
                ></textarea>
              </div>

              <div>
                <label className="form-label fw-semibold">Upload Files</label>
                <div
                  className={`border border-2 rounded-3 p-4 text-center ${isDragging ? 'bg-light' : ''}`}
                  style={{ borderStyle: "dashed", cursor: "pointer" }}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onClick={handleClick}
                >
                  <FaCloudUploadAlt size={40} color="#0d6efd" className="mb-2" />
                  <p className="fw-semibold mb-1">Drag and drop files here</p>
                  <small className="text-muted">or click to browse</small>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    accept=".pdf, image/*"
                    multiple
                    style={{ display: 'none' }}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-success fw-semibold w-100">Submit</button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelLicenseInfo;
