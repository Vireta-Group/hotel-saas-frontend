import React from "react";

const SelectInput = ({ label, name, value, onChange, options = [] }) => (
  <div className="mb-3">
    <label className="form-label fw-semibold">{label}</label>
    <select name={name} className="form-select" value={value} onChange={onChange}>
      <option value="">Select...</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
