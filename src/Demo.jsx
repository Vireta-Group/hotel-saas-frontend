// Demo.jsx
import { useEffect, useRef, useState } from "react";
import Input from "./ui/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

function Demo() {
  const [email, setEmail] = useState("hello@gmail.com");

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

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <form className="form-table" style={style}>
        <Input
          isRequire={true}
          type="email"
          placeholder="example@gmail.com"
          style={{ width: "400px", margin: "60px" }}
          value={email}
          onChange={onChange}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </Input>

        <button className="bttn" type="submit" onClick={clickHandler}>
          click me
        </button>
      </form>

      <div style={{ margin: "100px", fontSize: "2rem" }}>{email}</div>
    </>
  );
}

export default Demo;

// form > className = form-table
// Input > isRequire, ref, style, type, placeholder, children(<FontAwesomeIcon icon={faEnvelope} />)
// button > className = bttn
