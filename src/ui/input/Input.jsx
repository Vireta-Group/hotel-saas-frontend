import "../../style/ui/input/input.css";
import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { children, placeholder, type, isRequired, style },
  ref
) {
  return (
    <div className="input-group" style={style}>
      <i className="input-icon">{children}</i>
      <input
        ref={ref}
        type={type}
        className="input-field"
        placeholder={placeholder}
        aria-label={placeholder}
        required={isRequired}
      />
    </div>
  );
});

export default Input;
