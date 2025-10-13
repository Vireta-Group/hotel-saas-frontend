import React from "react";

const TextInput = ({ label, name, type = "text", value, onChange, placeholder }) => (
  <div className="mb-3">
    <label className="form-label fw-semibold">{label}</label>
    <input
      type={type}
      name={name}
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default TextInput;
