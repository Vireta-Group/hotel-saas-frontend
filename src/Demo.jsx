// Demo.jsx
import { useRef } from "react";
import Input from "./ui/input/Input";
import SubmitButton from "./ui/submitButton/SubmitButton";

function Demo() {
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
  };

  const style = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="d-flex justify-content-center " style={style}>
      <form onSubmit={submitHandler} className="card">
        <Input
          label="Enter your name"
          id="name"
          isFullScreen={true}
          isRequire={true}
          type="text"
          ref={inputRef}
        />
        <Input
          label="Enter your email"
          id="email"
          isFullScreen={true}
          isRequire={true}
          type="email"
        />
        <SubmitButton innerText="Submit" width="300px" />
      </form>
    </div>
  );
}

export default Demo;
