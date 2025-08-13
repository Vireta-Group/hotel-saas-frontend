import { useState } from "react";

const initialAssets = [
  {
    id: 1,
    name: "Laptop Dell XPS",
    category: "Electronics",
    purchaseDate: "2023-01-15",
    location: "Room 101",
    status: "In Use",
  },
  {
    id: 2,
    name: "Office Chair",
    category: "Furniture",
    purchaseDate: "2022-11-20",
    location: "Room 102",
    status: "Needs Repair",
  },
];

const AssetManagement = () => {
  const [assets, setAssets] = useState(initialAssets);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editAsset, setEditAsset] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    purchaseDate: "",
    location: "",
    status: "In Use",
  });

  // ফিল্টার করা ডাটা
  const filteredAssets = assets.filter((a) =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Modal খুলে ফর্মে ডাটা সেট করা (Edit এর জন্য)
  const openEditModal = (asset) => {
    setEditAsset(asset);
    setFormData({
      name: asset.name,
      category: asset.category,
      purchaseDate: asset.purchaseDate,
      location: asset.location,
      status: asset.status,
    });
    setModalOpen(true);
  };

  // Modal নতুন অ্যাসেট যোগ করার জন্য খুলা
  const openAddModal = () => {
    setEditAsset(null);
    setFormData({
      name: "",
      category: "",
      purchaseDate: "",
      location: "",
      status: "In Use",
    });
    setModalOpen(true);
  };

  // ফর্ম ইনপুট হ্যান্ডেল করা
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ফর্ম সাবমিট করা (Add/Edit)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.category || !formData.purchaseDate) {
      alert("সব ফিল্ড পূরণ করুন");
      return;
    }

    if (editAsset) {
      // Update
      setAssets((prev) =>
        prev.map((a) =>
          a.id === editAsset.id ? { ...editAsset, ...formData } : a
        )
      );
    } else {
      // Add new
      const newAsset = {
        id: Date.now(),
        ...formData,
      };
      setAssets((prev) => [...prev, newAsset]);
    }

    setModalOpen(false);
  };

  // ডিলিট করা
  const handleDelete = (id) => {
    if (window.confirm("আপনি কি নিশ্চিত ডিলিট করতে চান?")) {
      setAssets((prev) => prev.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">office asset management</h2>

      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="অ্যাসেট নাম দিয়ে খুঁজুন..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary" onClick={openAddModal}>
          add new asset
        </button>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>name</th>
            <th>category</th>
            <th>Purchase Date</th>
            <th>Location</th>
            <th>status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {filteredAssets.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                No information was found
              </td>
            </tr>
          ) : (
            filteredAssets.map((asset) => (
              <tr key={asset.id}>
                <td>{asset.name}</td>
                <td>{asset.category}</td>
                <td>{asset.purchaseDate}</td>
                <td>{asset.location}</td>
                <td>{asset.status}</td>
                <td>
                  <button
                    className="btn btn-sm btn-info me-2"
                    onClick={() => openEditModal(asset)}
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
            ))
          )}
        </tbody>
      </table>

      {/* Modal */}
      {modalOpen && (
        <div
          className="modal show fade d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div
            className="modal-dialog"
            role="document"
            onClick={() => setModalOpen(false)}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h5 class="modal-title">
                  {editAsset ? "Edit Asset" : "Add New Asset"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setModalOpen(false)}
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label class="form-label">Category</label>
                    <select
                      name="category"
                      className="form-select"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="">-- Select --</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Furniture">Furniture</option>
                      <option value="Stationery">Stationery</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label class="form-label">Purchase Date</label>
                    <input
                      type="date"
                      name="purchaseDate"
                      className="form-control"
                      value={formData.purchaseDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      name="location"
                      className="form-control"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label class="form-label">Status</label>
                    <select
                      name="status"
                      className="form-select"
                      value={formData.status}
                      onChange={handleChange}
                    >
                      <option value="In Use">In Use</option>
                      <option value="Needs Repair">Needs Repair</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setModalOpen(false)}
                  >
                    canal
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {editAsset ? "Save" : "Add"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssetManagement;
