import React from "react";

const FileInput = ({ label, name, onChange }) => (
  <div className="mb-3">
    <label className="form-label fw-semibold">{label}</label>
    <input type="file" name={name} className="form-control" onChange={onChange} />
  </div>
);

export default FileInput;
