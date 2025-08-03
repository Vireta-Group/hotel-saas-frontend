import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './RoomFacilities.css'; // Custom responsive styles

const RoomFacilities = () => {
  const [selectedFloor, setSelectedFloor] = useState(1);

  const [floorData, setFloorData] = useState({
    1: generateInitialData(),
    2: generateInitialData(),
    3: generateInitialData(),
  });

  const [floorDisabled, setFloorDisabled] = useState({
    1: [false, false, false],
    2: [false, false, false],
    3: [false, false, false],
  });

  function generateInitialData() {
    return [
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
    ];
  }

  const handleCheckboxChange = (floor, roomIndex, facilityIndex) => {
    if (floorDisabled[floor][roomIndex]) return;

    const updatedData = [...floorData[floor]];
    updatedData[roomIndex][facilityIndex] = !updatedData[roomIndex][facilityIndex];

    setFloorData(prev => ({
      ...prev,
      [floor]: updatedData,
    }));
  };

  const handleSave = (floor, roomIndex) => {
    const updatedDisabled = [...floorDisabled[floor]];
    updatedDisabled[roomIndex] = true;

    setFloorDisabled(prev => ({
      ...prev,
      [floor]: updatedDisabled,
    }));
  };

  const handleEdit = (floor, roomIndex) => {
    const updatedDisabled = [...floorDisabled[floor]];
    updatedDisabled[roomIndex] = false;

    setFloorDisabled(prev => ({
      ...prev,
      [floor]: updatedDisabled,
    }));
  };

  const renderTable = (floor) => (
    <div className="responsive-box m-4 mt-4">
      <b>Floor Number {floor}</b>
      <div className="table-responsive">
        <table className="table table-bordered table-sm w-100">
          <thead>
            <tr>
              <th className="compact-cell">Room No.</th>
              <th className="compact-cell">WIFI</th>
              <th className="compact-cell">AC</th>
              <th className="compact-cell">TV</th>
              <th className="compact-cell">Washroom</th>
              <th className="compact-cell">Bath Tub</th>
              <th className="compact-cell">Balcony</th>
              <th className="compact-cell">Action</th>
            </tr>
          </thead>
          <tbody>
            {floorData[floor]?.map((roomFacilities, roomIndex) => (
              <tr key={roomIndex}>
                <td className="compact-cell">No. {roomIndex + 1}</td>
                {roomFacilities.map((checked, facilityIndex) => (
                  <td className="compact-cell" key={facilityIndex}>
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
                <td className="compact-cell">
                  {floorDisabled[floor][roomIndex] ? (
                    <Button
                      className="bg-warning text-dark py-1 px-2"
                      onClick={() => handleEdit(floor, roomIndex)}
                    >
                      Edit
                    </Button>
                  ) : (
                    <Button
                      className="bg-success text-light py-1 px-2"
                      onClick={() => handleSave(floor, roomIndex)}
                    >
                      Save
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 gap-4 py-4">
      <h3 className="text-center">Here you see our room facilities</h3>

      {/* Dropdown Box */}
      <div className="responsive-box">
        <select
          className="form-select shadow-sm p-3"
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
