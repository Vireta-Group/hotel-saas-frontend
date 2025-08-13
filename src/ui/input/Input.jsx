import "../../style/ui/input/input.css";
function Input({
  children,
  placeholder,
  type,
  isRequired,
  style,
  value,
  onChange,
}) {
  return (
    <div className="input-group" style={style}>
      <i className="input-icon">{children}</i>
      <input
        type={type}
        className="input-field"
        placeholder={placeholder}
        aria-label={placeholder}
        required={isRequired}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
