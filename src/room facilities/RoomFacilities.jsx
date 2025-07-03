import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const RoomFacilities = () => {
  const [selectedFloor, setSelectedFloor] = useState(1);

  // Checkbox data
  const [floorData, setFloorData] = useState({
    1: generateInitialData(),
    2: generateInitialData(),
    3: generateInitialData(),
  });

  // Disabled status for each row
  const [floorDisabled, setFloorDisabled] = useState({
    1: [false, false, false],
    2: [false, false, false],
    3: [false, false, false],
  });

  function generateInitialData() {
    return [
      [false, false, false, false, false, false], // Room 1          
      [false, false, false, false, false, false], // Room 2
      [false, false, false, false, false, false], // Room 3
    ];
  }

  const handleCheckboxChange = (floor, roomIndex, facilityIndex) => {
    if (floorDisabled[floor][roomIndex]) return; // যদি disable থাকে, কিছু না করো

    const updatedData = [...floorData[floor]];
    updatedData[roomIndex][facilityIndex] = !updatedData[roomIndex][facilityIndex];

    setFloorData(prev => ({
      ...prev,
      [floor]: updatedData,
    }));
  };

  // Save করলে সেই row disable হবে
  const handleSave = (floor, roomIndex) => {
    const updatedDisabled = [...floorDisabled[floor]];
    updatedDisabled[roomIndex] = true;

    setFloorDisabled(prev => ({
      ...prev,
      [floor]: updatedDisabled,
    }));
  };

  // Edit করলে সব row আবার enable হবে
  const handleEdit = (floor) => {
    setFloorDisabled(prev => ({
      ...prev,
      [floor]: [false, false, false],
    }));
  };

  const renderTable = (floor) => (
    <div className="w-50 mt-4">
      <b>Floor Number {floor}</b>
      <table className="table table-bordered w-100">
        <thead>
          <tr>
            <th>Room No.</th>
            <th>WIFI</th>
            <th>AC</th>
            <th>TV</th>
            <th>Washroom</th>
            <th>Bath Tub</th>
            <th>Balcony</th>
            <th><Button onClick={() => handleEdit(floor)}>Edit</Button></th>
          </tr>
        </thead>
        <tbody>
          {floorData[floor]?.map((roomFacilities, roomIndex) => (
            <tr key={roomIndex}>
              <td>No. {roomIndex + 1}</td>
              {roomFacilities.map((checked, facilityIndex) => (
                <td key={facilityIndex}>
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled={floorDisabled[floor][roomIndex]}
                    onChange={() =>
                      handleCheckboxChange(floor, roomIndex, facilityIndex)
                    }
                  />
                </td>
              ))}
              <td>
                <Button
                  className="bg-success"
                  disabled={floorDisabled[floor][roomIndex]}
                  onClick={() => handleSave(floor, roomIndex)}
                >
                  Save
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 gap-4">
      
      {/* Dropdown */}
      <div>
        <h3>Here you see our room facilities</h3>
        <select
          className="form-select w-100 shadow-sm p-4 cursor-pointer"
          value={selectedFloor}
          onChange={(e) => setSelectedFloor(Number(e.target.value))}
        >
          <option value={1}>Floor 1</option>
          <option value={2}>Floor 2</option>
          <option value={3}>Floor 3</option>
        </select>
      </div>

      {/* Table */}
      {renderTable(selectedFloor)}
    </div>
  );
};

export default RoomFacilities;
