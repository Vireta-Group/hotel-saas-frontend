// src/components/CustomDatePicker.jsx
import './CustomDatePicker.css'
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";

const CustomDatePicker = ({
  label,
  selectedDate,
  onChange,
  minDate,
  maxDate,
  placeholder = "Select date",
  className = "",
}) => {
  return (
// ...existing code...
<Form.Group className={`mb-2 d-flex flex-column ${className}`}>
  {label && <Form.Label className="mb-1">{label}</Form.Label>}
  <DatePicker
    selected={selectedDate}
    onChange={onChange}
    minDate={minDate}
    maxDate={maxDate}
    placeholderText={placeholder}
    className="form-control custom-datepicker-bg"
    dateFormat="dd/MM/yyyy"
  />
</Form.Group>
// ...existing code...
  );
};

export default CustomDatePicker;
