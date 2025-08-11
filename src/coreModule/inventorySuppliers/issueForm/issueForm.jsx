import React, { useState } from 'react';
import '../../../style/issueForm/issueForm.css';


const IssueForm = () => {
  const [category, setCategory] = useState('');
  const [requirePlace, setRequirePlace] = useState('');
  const [floorNumber, setFloorNumber] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [otherPlace, setOtherPlace] = useState('');
  const [quantity, setQuantity] = useState('');
  const [product, setProduct] = useState('');
  const [employeeName, setEmployeeName] = useState('');

  const loggedUser = "Nahid";


   const handleCancel = () => {
    // Clear all form fields
    setCategory('');
    setRequirePlace('');
    setFloorNumber('');
    setRoomNumber('');
    setOtherPlace('');
    setQuantity('');
    setProduct('');
    setEmployeeName('');
  };


  return (
    <div className="container py-4">
      <h3 className="mb-4 text-center">Issue Form</h3>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Product</label>
          <input
            type="text"
            className="form-control"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Product Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Furniture">Furniture</option>
            <option value="Electrical">Electrical</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Quantity</label>
          <input
            type="number"
            className="form-control"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Employee Name</label>
          <select
            className="form-select"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          >
            <option value="">Select Employee</option>
            <option value="Rakib">Rakib</option>
            <option value="Sakib">Sakib</option>
            <option value="Fatema">Fatema</option>
            <option value="Jannat">Jannat</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Logged User</label>
          <input type="text" className="form-control" value={loggedUser}  readOnly />
        </div>

        <div className="col-md-6">
          <label className="form-label">Required Place</label>
          <select
            className="form-select"
            value={requirePlace}
            onChange={(e) => {
              setRequirePlace(e.target.value);
              // reset extras
              setFloorNumber('');
              setRoomNumber('');
              setOtherPlace('');
            }}
            required
          >
            <option value="">Select Place</option>
            <option value="Hotel">Hotel</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Office">Office</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Hotel extra fields */}
        {requirePlace === 'Hotel' && (
          <>
            <div className="col-md-6">
              <label className="form-label">Floor Number</label>
              <input
                type="text"
                className="form-control"
                value={floorNumber}
                onChange={(e) => setFloorNumber(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Room Number</label>
              <input
                type="text"
                className="form-control"
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
              />
            </div>
          </>
        )}

        {/* Others input */}
        {requirePlace === 'Others' && (
          <div className="col-md-6">
            <label className="form-label">Specify Place</label>
            <input
              type="text"
              className="form-control"
              value={otherPlace}
              onChange={(e) => setOtherPlace(e.target.value)}
              placeholder="e.g. Store Room, Garden, etc."
              required
            />
          </div>
        )}

        {/* Action buttons */}
        <div className="col-12 d-flex justify-content-center gap-3 mt-3">
          <button type="button"className="btn btn-primary px-4">
            Print
          </button>
          <button type="button" onClick={handleCancel} className="btn btn-secondary px-4">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default IssueForm;
