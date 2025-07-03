import React, { useState } from "react";

function RoomDetails() {
  const [rows, setRows] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [index, setIndex] = useState(null);
  const [from, setFrom] = useState({
    Floor: "",
    RoomNo: "",
    RoomType: "",
    Status: "",
    Remark: "",
  });

  const resetForm = () =>
    setFrom({
      Floor: "",
      RoomNo: "",
      RoomType: "",
      Status: "",
      Remark: "",
    });

  const handleChange = (e) => {
    setFrom((d) => ({ ...d, [e.target.name]: e.target.value }));
  };

  const AddMode = () => {
    resetForm();
    setIndex(null);
    setShowForm(true);
  };

  const EditMode = (index) => {
    setFrom(rows[index]);
    setIndex(index); // fixed
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index !== null) {
      setRows((rs) => rs.map((r, i) => (i === index ? from : r)));
    } else {
      setRows((rs) => [...rs, from]); // fixed
    }
    setShowForm(false); // fixed
    resetForm();
  };

  const handleCancel = () => {
    setShowForm(false); // fixed
    resetForm();
    setIndex(null);
  };

  return (
    <div>
      <div>
        <h2>Room List</h2>
        <button onClick={AddMode}>Add new</button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            required
            name="Floor"
            value={from.Floor}
            onChange={handleChange}
            placeholder="Floor"
          />
          <input
            required
            name="RoomNo"
            value={from.RoomNo}
            onChange={handleChange}
            placeholder="Room no"
          />
          <input
            required
            name="RoomType"
            value={from.RoomType}
            onChange={handleChange}
            placeholder="Room Type"
          />
          <input
            name="Status"
            value={from.Status}
            onChange={handleChange}
            placeholder="Status"
          />
          <input
            name="Remark"
            value={from.Remark}
            onChange={handleChange}
            placeholder="Remarks"
          />
          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      )}

      <div>
        <table>
          <thead>
            <tr>
              {[
                "Serial No",
                "Floor",
                "Room No",
                "Room Type",
                "Status",
                "Remarks",
                "Action",
              ].map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan="7">No Data Available</td>
              </tr>
            ) : (
              rows.map((row, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{row.Floor}</td>
                  <td>{row.RoomNo}</td>
                  <td>{row.RoomType}</td>
                  <td>{row.Status}</td>
                  <td>{row.Remark}</td>
                  <td>
                    <button onClick={() => EditMode(idx)}>Edit</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RoomDetails;
