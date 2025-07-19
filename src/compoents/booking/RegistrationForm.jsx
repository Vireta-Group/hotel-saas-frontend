import React from "react";
// import { UserPlus, X } from "react-feather";

const RegistrationForm = () => {
  const rooms = [
    { id: 1, number: "101", type: "Single" },
    { id: 2, number: "102", type: "Double" },
    { id: 3, number: "103", type: "Deluxe" },
    { id: 4, number: "104", type: "Suite" },
  ];

  const districts = [
    "Dhaka",
    "Chattogram",
    "Sylhet",
    "Rajshahi",
    "Khulna",
    "Barishal",
    "Rangpur",
    "Mymensingh",
  ];

  return (
    <div className="card">
      <div className="card-header bg-white">
        <h5 className="card-title mb-0">Registration Details</h5>
      </div>
      <div className="card-body">
        <form>
          {/* Names in Bengali and English */}
          <div className="row mb-4">
            <div className="col-md-6">
              <h6 className="mb-3">বাংলায় নাম</h6>
              <div className="mb-3">
                <label htmlFor="nameBn" className="form-label">
                  অতিথির নাম *
                </label>
                <input
                  id="nameBn"
                  className="form-control"
                  placeholder="Name in Bengali"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fatherBn" className="form-label">
                  পিতার নাম *
                </label>
                <input
                  id="fatherBn"
                  className="form-control"
                  placeholder="Father's name in Bengali"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="motherBn" className="form-label">
                  মাতার নাম *
                </label>
                <input
                  id="motherBn"
                  className="form-control"
                  placeholder="Mother's name in Bengali"
                />
              </div>
            </div>

            <div className="col-md-6">
              <h6 className="mb-3">Name in English</h6>
              <div className="mb-3">
                <label htmlFor="nameEn" className="form-label">
                  Guest Name *
                </label>
                <input
                  id="nameEn"
                  className="form-control"
                  placeholder="Name in English"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fatherEn" className="form-label">
                  Father's Name *
                </label>
                <input
                  id="fatherEn"
                  className="form-control"
                  placeholder="Father's name in English"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="motherEn" className="form-label">
                  Mother's Name *
                </label>
                <input
                  id="motherEn"
                  className="form-control"
                  placeholder="Mother's name in English"
                />
              </div>
            </div>
          </div>

          {/* Detailed Address */}
          <div className="border-top pt-4 mb-4">
            <h6 className="mb-3">Detailed Address</h6>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="district" className="form-label">
                  District *
                </label>
                <select id="district" className="form-select">
                  <option value="">Select District</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="upazilla" className="form-label">
                  Upazila *
                </label>
                <input
                  id="upazilla"
                  className="form-control"
                  placeholder="Upazila"
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="union" className="form-label">
                  Union *
                </label>
                <input
                  id="union"
                  className="form-control"
                  placeholder="Union"
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="village" className="form-label">
                  Village/Area *
                </label>
                <input
                  id="village"
                  className="form-control"
                  placeholder="Village or Area name"
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="holdingNo" className="form-label">
                  Holding Number
                </label>
                <input
                  id="holdingNo"
                  className="form-control"
                  placeholder="Holding number"
                />
              </div>
            </div>
          </div>

          {/* Verification Information */}
          <div className="border-top pt-4 mb-4">
            <h6 className="mb-3">Verification Information</h6>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="nid" className="form-label">
                  National ID Number *
                </label>
                <input
                  id="nid"
                  className="form-control"
                  placeholder="17-digit NID"
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="dateOfBirth" className="form-label">
                  Date of Birth *
                </label>
                <input id="dateOfBirth" type="date" className="form-control" />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number *
                </label>
                <input
                  id="mobile"
                  className="form-control"
                  placeholder="01XXXXXXXXX"
                />
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div className="border-top pt-4 mb-4">
            <h6 className="mb-3">Booking Information</h6>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="checkInDate" className="form-label">
                  Check-in Date *
                </label>
                <input id="checkInDate" type="date" className="form-control" />
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="checkOutDate" className="form-label">
                  Check-out Date *
                </label>
                <input id="checkOutDate" type="date" className="form-control" />
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="roomId" className="form-label">
                  Room Number *
                </label>
                <select id="roomId" className="form-select">
                  <option value="">Select Room</option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.number} - {room.type} (Available)
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="price" className="form-label">
                  Price (BDT) *
                </label>
                <input
                  id="price"
                  type="number"
                  className="form-control"
                  placeholder="1000"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-flex justify-content-end gap-3 pt-4">
            <button type="button" className="btn btn-outline-secondary">
              {/* <X size={14} className="me-2" /> */}
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {/* <UserPlus size={14} className="me-2" /> */}
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
