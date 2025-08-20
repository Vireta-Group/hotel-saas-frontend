import Dropdown from "./ui/dropdown/Dropdown";
import Option from "./ui/dropdown/Option";
import { useState } from "react";

function Demo() {
  const colors = ["Red", "Green", "Blue"];
  const [selectedColor, setSelectedColor] = useState("Red");

  return (
    <div>
      <Dropdown
        options={colors}
        selected={selectedColor}
        onChange={(value) => setSelectedColor(value)}
        style={{ width: "200px", margin: "20px" }}
      />
      <p>Selected color: {selectedColor}</p>
    </div>
  );
}

export default Demo;
