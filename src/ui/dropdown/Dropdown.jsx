import "../../style/ui/dropdown/dropdown.css";
import { useState } from "react";

function Dropdown({ options, selected, onChange, style }) {
  const [isFocus, setIsFocus] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selected);

  function handleSelect(value) {
    setIsFocus(false);
    setSelectedOption(value);
    if (onChange) {
      onChange(value);
    }
  }

  return (
    <div className="dropdown-wrapper" style={style}>
      <div
        className={`color-dropdown-btn ${isFocus ? "active" : ""}`}
        onClick={() => setIsFocus(!isFocus)}
        onBlur={() => setIsFocus(false)}
        tabIndex="0"
      >
        <div className="color-dropdown-btn-text">
          <span>{selectedOption}</span>
        </div>
        <div className="color-dropdown-btn-icon"></div>
      </div>

      {isFocus && (
        <div className="color-dropdown-content active">
          {options.map((option) => (
            <div
              className={`color-item ${
                option === selectedOption ? "selected" : ""
              }`}
              key={option}
              onMouseDown={() => handleSelect(option)}
            >
              <div className="color-item-text">{option}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
