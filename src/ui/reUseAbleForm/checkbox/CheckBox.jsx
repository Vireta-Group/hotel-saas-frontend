import React from "react";

const CheckBox = ({ label, name, checked, onChange }) => (
  <div className="form-check mb-3">
    <input
      type="radio"
      name={name}
      className="form-check-input"
      checked={checked}
      onChange={onChange}
    />
    <label className="form-check-label">{label}</label>
  </div>
);

export default CheckBox;
