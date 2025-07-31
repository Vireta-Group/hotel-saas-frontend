import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const AddSubcategory = () => {
  // Sample categories data (would typically come from API/props)
  const initialCategories = [
    { id: 1, name: "Accommodation" },
    { id: 2, name: "Dining" },
    { id: 3, name: "Facilities" },
    { id: 4, name: "Services" },
  ];

  // State for form data
  const [formData, setFormData] = useState({
    categoryId: "",
    subName: "",
    subDescription: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add your submission logic here (API call, state update, etc.)
    alert("Form submitted successfully!");

    // Reset form after submission
    setFormData({
      categoryId: "",
      subName: "",
      subDescription: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">
            <FaPlusCircle className="me-2" />
            Add New Sub-Category
          </h3>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Category Dropdown */}
            <div className="mb-3">
              <label className="form-label">Category Name</label>
              <select
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select Category</option>
                {initialCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sub-Category Name */}
            <div className="mb-3">
              <label className="form-label">Sub-Category Name</label>
              <input
                type="text"
                name="subName"
                value={formData.subName}
                onChange={handleChange}
                className="form-control"
                placeholder="e.g., Swimming Pool, Room Service"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="form-label">Description</label>
              <textarea
                name="subDescription"
                value={formData.subDescription}
                onChange={handleChange}
                className="form-control"
                rows="4"
                placeholder="Describe the sub-category..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                Add Sub-Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSubcategory;
