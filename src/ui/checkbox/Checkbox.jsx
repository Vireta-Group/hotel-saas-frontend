import "../../style/ui/checkbox/checkbox.css";

function Checkbox({ onChange, value, isChecked, label }) {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        aria-label={label}
        onChange={onChange}
        value={value}
        checked={isChecked}
      />
      <span className="checkmark"></span>
    </label>
  );
}

export default Checkbox;
