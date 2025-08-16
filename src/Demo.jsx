// Demo.jsx
import { useEffect, useRef, useState } from "react";
import Input from "./ui/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

function Demo() {
  return (
    <>
      <form
        className="form-table"
        style={{ position: "relative", zIndex: "1000" }}
      >
        <Input
          type="email"
          placeholder="enter you email"
          style={{ width: "500px" }}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </Input>

        <button className="bttn">click</button>
      </form>
    </>
  );
}

export default Demo;
