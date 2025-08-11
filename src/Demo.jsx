// Demo.jsx
import { useRef } from "react";
import Input from "./ui/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Demo() {
  const inputRef = useRef();

  const style = {
    height: "500px",
    width: "500px",
    display: "flex",
    backgroundColor: "#e6e7ee",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="d-flex justify-content-center" style={style}>
      <Input iconClass="bi bi-alarm" ref={inputRef}>
        <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
      </Input>
    </div>
  );
}

export default Demo;
