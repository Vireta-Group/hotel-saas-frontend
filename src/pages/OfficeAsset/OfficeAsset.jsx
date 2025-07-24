import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const OfficeAsset = () => {
  const [assets, setAssets] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
    condition: "Good",
    location: "",
  });

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission (Add Asset)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAsset = { ...formData, id: Date.now() };
    setAssets([...assets, newAsset]);
    setFormData({
      name: "",
      category: "",
      quantity: "",
      condition: "Good",
      location: "",
    });
  };

  // Delete asset
  const handleDelete = (id) => {
    setAssets(assets.filter((asset) => asset.id !== id));
  };

  // Edit asset
  const handleEdit = (asset) => {
    setFormData(asset);
    setAssets(assets.filter((a) => a.id !== asset.id));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Room Asset Management</h2>

      {/* Add Asset Form */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">
            {formData.id ? "Edit Asset" : "Add New Asset"}
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Item Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Category --</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Stationery">Stationery</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                className="form-control"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Condition</label>
              <select
                className="form-select"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                required
              >
                <option value="Good">Good</option>
                <option value="Needs Repair">Needs Repair</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {formData.id ? "Save Changes" : "Add Asset"}
            </button>
          </form>
        </div>
      </div>

      {/* Asset List Table */}
      <h4>Asset List</h4>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Condition</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id}>
              <td>{asset.name}</td>
              <td>{asset.category}</td>
              <td>{asset.quantity}</td>
              <td>{asset.condition}</td>
              <td>{asset.location}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(asset)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(asset.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OfficeAsset;
