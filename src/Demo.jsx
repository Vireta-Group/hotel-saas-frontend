import { useState } from "react";
import Checkbox from "./ui/checkbox/Checkbox";

function Demo() {
  const [isChecked, setIsChecked] = useState(true);

  function handler(e) {
    setIsChecked(e.target.checked);
  }

  return (
    <>
      <Checkbox isChecked={isChecked} label="male" onChange={handler} />
    </>
  );
}

export default Demo;
