// Demo.jsx
import { useRef } from "react";
import Input from "./ui/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Demo() {
  const inputRef = useRef();

  const style = {
    height: "100%",
    width: "100%",
    position: "relative",
    zIndex: 23423,
    display: "flex",
    backgroundColor: "#e6e7ee",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <form className="form-table" style={style}>
      <Input
        placeholder="Enter you email"
        isRequire={false}
        type="email"
        ref={inputRef}
        style={{ width: "300px", marginBottom: "70px" }}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </Input>

      <button className="bttn">click me</button>

      <button className="icon-bttn">
        <FontAwesomeIcon icon={faEnvelope} />
      </button>
    </form>
  );
}

export default Demo;
