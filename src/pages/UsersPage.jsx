import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { users } from "../data/user";

const UsersPage = () => {
  const handleDelete = (userName) => {
    toast.success(`${userName} deleted successfully!`);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">User List</h2>

      <table className="table table-striped table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.password}</td>
              <td>
                <span className={`badge bg-${getRoleColor(u.role)}`}>
                  {u.role}
                </span>
              </td>
              <td>
                <button className="btn btn-sm btn-warning me-2">
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(u.name)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

// role অনুযায়ী badge color দেওয়া
const getRoleColor = (role) => {
  switch (role) {
    case "admin":
      return "danger";
    case "receptionist":
      return "primary";
    case "customer":
      return "success";
    case "staff":
      return "warning text-dark";
    default:
      return "secondary";
  }
};

export default UsersPage;
