import "../../style/ui/input/input.css";
import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, type, id, isFullScreen, isRequire },
  ref
) {
  const style = {
    width: isFullScreen ? "95%" : "45%",
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input ref={ref} style={style} type={type} id={id} required={isRequire} />
    </div>
  );
});

export default Input;
