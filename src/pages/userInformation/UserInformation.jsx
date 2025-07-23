import React, { useState } from 'react';
import { Table, Form, Row, Col, Pagination } from 'react-bootstrap';

const bookings = [
  { id: "B001", guestName: "Mahbub Rahman", email: "mahbub@example.com", phone: "01700000000", roomNumber: "201", roomType: "Deluxe AC", status: "Confirmed" },
  { id: "B002", guestName: "Niloy Hasan", email: "niloy@example.com", phone: "01710000001", roomNumber: "202", roomType: "Standard Non-AC", status: "Pending" },
  { id: "B003", guestName: "Ayman Chowdhury", email: "ayman@example.com", phone: "01710000002", roomNumber: "203", roomType: "Deluxe AC", status: "Cancelled" },
  { id: "B004", guestName: "Tanvir Alam", email: "tanvir@example.com", phone: "01710000003", roomNumber: "204", roomType: "Suite", status: "Checked-in" },
  { id: "B005", guestName: "Anika Tabassum", email: "anika@example.com", phone: "01710000004", roomNumber: "205", roomType: "Standard Non-AC", status: "Checked-out" },
  { id: "B006", guestName: "Rafiq Islam", email: "rafiq@example.com", phone: "01710000005", roomNumber: "206", roomType: "Deluxe AC", status: "Confirmed" },
  { id: "B007", guestName: "Sabina Yasmin", email: "sabina@example.com", phone: "01710000006", roomNumber: "207", roomType: "Deluxe AC", status: "Pending" },
  { id: "B008", guestName: "Hasan Mahmud", email: "hasan@example.com", phone: "01710000007", roomNumber: "208", roomType: "Suite", status: "Checked-out" },
  { id: "B009", guestName: "Farzana Kabir", email: "farzana@example.com", phone: "01710000008", roomNumber: "209", roomType: "Standard Non-AC", status: "Confirmed" },
  { id: "B010", guestName: "Zahid Hossain", email: "zahid@example.com", phone: "01710000009", roomNumber: "210", roomType: "Deluxe AC", status: "Checked-in" },
  { id: "B011", guestName: "Nadia Islam", email: "nadia@example.com", phone: "01710000010", roomNumber: "211", roomType: "Suite", status: "Cancelled" },
  { id: "B012", guestName: "Tariq Aziz", email: "tariq@example.com", phone: "01710000011", roomNumber: "212", roomType: "Deluxe AC", status: "Confirmed" },
  { id: "B013", guestName: "Shabnam Sultana", email: "shabnam@example.com", phone: "01710000012", roomNumber: "213", roomType: "Standard Non-AC", status: "Pending" },
  { id: "B014", guestName: "Imran Khan", email: "imran@example.com", phone: "01710000013", roomNumber: "214", roomType: "Deluxe AC", status: "Checked-in" },
  { id: "B015", guestName: "Lamia Hossain", email: "lamia@example.com", phone: "01710000014", roomNumber: "215", roomType: "Suite", status: "Checked-out" },
  { id: "B016", guestName: "Nafis Alam", email: "nafis@example.com", phone: "01710000015", roomNumber: "216", roomType: "Standard Non-AC", status: "Confirmed" },
  { id: "B017", guestName: "Rezwana Ahmed", email: "rezwana@example.com", phone: "01710000016", roomNumber: "217", roomType: "Deluxe AC", status: "Pending" },
  { id: "B018", guestName: "Sakib Rahman", email: "sakib@example.com", phone: "01710000017", roomNumber: "218", roomType: "Suite", status: "Cancelled" },
  { id: "B019", guestName: "Nabila Karim", email: "nabila@example.com", phone: "01710000018", roomNumber: "219", roomType: "Standard Non-AC", status: "Checked-in" },
  { id: "B020", guestName: "Riyad Khan", email: "riyad@example.com", phone: "01710000019", roomNumber: "220", roomType: "Deluxe AC", status: "Confirmed" },


];

const UserInformation = () => {
  const [filters, setFilters] = useState({ guestName: '', room: '', status: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredBookings = bookings.filter(booking =>
    booking.guestName.toLowerCase().includes(filters.guestName.toLowerCase()) &&
    booking.roomNumber.includes(filters.room) &&
    booking.status.toLowerCase().includes(filters.status.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
  const paginatedBookings = filteredBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setCurrentPage(1); // ফিল্টার বদলালে প্রথম পেজে ফেরত যাবে
  };

  return (
    <div className="p-3">
      <h4 className="mb-4">User Information</h4>

      {/* Filters */}
      <Form className="mb-3">
        <Row>
          <Col md={4}>
            <Form.Control
              placeholder="Search by Guest Name"
              name="guestName"
              value={filters.guestName}
              onChange={handleFilterChange}
            />
          </Col>
          <Col md={4}>
            <Form.Control
              placeholder="Search by Room Number"
              name="room"
              value={filters.room}
              onChange={handleFilterChange}
            />
          </Col>
          <Col md={4}>
            <Form.Control
              as="select"
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
            >
              <option value="">Filter by Status</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </Form.Control>
          </Col>
        </Row>
      </Form>

      {/* Table */}
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr >
            <th>ID</th>
            <th>Guest Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Room</th>
            <th>Room Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedBookings.length > 0 ? (
            paginatedBookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.guestName}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>
                <td>{booking.roomNumber}</td>
                <td>{booking.roomType}</td>
                <td>{booking.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No bookings found.</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination className='d-flex justify-content-center'>
        {[...Array(totalPages).keys()].map((number) => (
          <Pagination.Item
            key={number + 1}
            active={number + 1 === currentPage}
            onClick={() => setCurrentPage(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default UserInformation;
