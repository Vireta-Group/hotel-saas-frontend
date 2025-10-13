import React from "react";

const TextArea = ({ label, name, value, onChange, placeholder }) => (
  <div className="mb-3">
    <label className="form-label fw-semibold">{label}</label>
    <textarea
      name={name}
      className="form-control"
      rows="3"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  </div>
);

export default TextArea;
