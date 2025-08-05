import "../../style/ui/input/input.css";

function Input({ label, type, id, isFullScreen, isRequire }) {
  const style = {
    width: isFullScreen ? "95%" : "45%",
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input style={style} type={type} id={id} required={isRequire} />
    </div>
  );
}

export default Input;
