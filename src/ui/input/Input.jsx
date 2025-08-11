import "../../style/ui/input/input.css";
import { forwardRef } from "react";

const Input = forwardRef(function Input({ children }, ref) {
  return (
    <div className="input-group">
      <input
        ref={ref}
        type="email"
        className="input-field"
        placeholder="example@company.com"
        required
      />
      {children}
    </div>
  );
});

export default Input;
