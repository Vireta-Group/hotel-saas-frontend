import React, { useState } from "react";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (category.trim() === "" || description.trim() === "") return;

    const newEntry = {
      id: Date.now(),
      category,
      description,
    };

    setCategories([...categories, newEntry]);
    setCategory("");
    setDescription("");
  };

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getShortText = (text) => {
    return text.length <= 15 ? text : text.slice(0, 25) + "...";
  };

  return (
    <div className="container mt-5">
      <div className="mx-auto" style={{ maxWidth: "700px" }}>
        {/* Form */}
        <div className="card  shadow-sm p-4 mb-5 bg-white rounded">
          <h4 className="mb-4">Add Category</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter category name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        {/* Table */}
        {categories.length > 0 && (
          <div className="card  shadow-sm p-3 bg-white rounded">
            <h5 className="mb-3">Submitted Categories</h5>
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Category</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.category}</td>
                    <td>
                      {expandedId === item.id
                        ? item.description
                        : getShortText(item.description)}{" "}
                      {item.description.length > 15 && (
                        <button
                          className="btn btn-link btn-sm p-0"
                          onClick={() => toggleDescription(item.id)}
                        >
                          {expandedId === item.id ? "See less" : "See more"}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCategory;
